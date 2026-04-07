// Combine all data parts
const CATEGORIES = [...DATA_PART1, ...DATA_PART2, ...DATA_PART3, ...DATA_PART4];

// State management
const STORAGE_KEY = 'snail-tracker-v1';

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch { return {}; }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState(); // { "task-id": true, ... }
let openCategories = {};
let expandedTasks = {};

// Count helpers
function countCompleted(cat) {
  return cat.tasks.filter(t => state[t.id]).length;
}

function totalTasks() {
  return CATEGORIES.reduce((sum, c) => sum + c.tasks.length, 0);
}

function totalCompleted() {
  return CATEGORIES.reduce((sum, c) => sum + countCompleted(c), 0);
}

function overallPercent() {
  const total = totalTasks();
  return total === 0 ? 0 : Math.round((totalCompleted() / total) * 100);
}

function catPercent(cat) {
  return cat.tasks.length === 0 ? 0 : Math.round((countCompleted(cat) / cat.tasks.length) * 100);
}

// Render the full app
function render() {
  const container = document.getElementById('categories');
  container.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const pct = catPercent(cat);
    const done = countCompleted(cat);
    const total = cat.tasks.length;
    const isOpen = openCategories[cat.id] || false;
    const isComplete = pct === 100;

    const circumference = 2 * Math.PI * 18;
    const dashOffset = circumference - (pct / 100) * circumference;

    const catEl = document.createElement('div');
    catEl.className = 'category' + (isOpen ? ' open' : '') + (isComplete ? ' complete' : '');
    catEl.dataset.catId = cat.id;

    catEl.innerHTML = `
      <div class="category-header" data-cat="${cat.id}">
        <span class="category-icon">${cat.icon}</span>
        <div class="category-info">
          <div class="category-title">${cat.title}</div>
          <div class="category-stats">${done} / ${total} tasks</div>
        </div>
        <div class="category-progress">
          <svg viewBox="0 0 40 40" width="48" height="48">
            <circle class="cat-progress-bg" cx="20" cy="20" r="18"/>
            <circle class="cat-progress-fill" cx="20" cy="20" r="18"
              stroke-dasharray="${circumference}"
              stroke-dashoffset="${dashOffset}"/>
          </svg>
          <div class="cat-progress-text">${pct}%</div>
        </div>
        <span class="category-arrow">&#9654;</span>
      </div>
      <div class="task-list">
        ${cat.tasks.map(task => renderTask(task)).join('')}
      </div>
    `;

    container.appendChild(catEl);
  });

  updateOverall();
}

function renderTask(task) {
  const isDone = state[task.id] || false;
  const isExpanded = expandedTasks[task.id] || false;
  const effortClass = task.effort === 'S' ? 'effort-s' : task.effort === 'M' ? 'effort-m' : 'effort-l';
  const effortLabel = task.effort === 'S' ? 'Small' : task.effort === 'M' ? 'Medium' : 'Large';

  let detailHtml = '';
  if (task.desc) {
    detailHtml += `<div class="detail-section"><h4>What to Do</h4><p>${task.desc}</p></div>`;
  }
  if (task.beginner) {
    detailHtml += `<div class="detail-section"><span class="beginner-label">First-Timer Tip</span><p>${task.beginner}</p></div>`;
  }
  if (task.tips) {
    detailHtml += `<div class="detail-section"><span class="tip-label">Pro Tip</span><p>${task.tips}</p></div>`;
  }
  if (task.resources && task.resources.length > 0) {
    detailHtml += `<div class="detail-section"><h4>Resources</h4><ul>${task.resources.map(r => `<li>${r}</li>`).join('')}</ul></div>`;
  }

  return `
    <div class="task ${isDone ? 'done' : ''} ${isExpanded ? 'expanded' : ''}" data-task="${task.id}">
      <div class="task-row">
        <div class="task-check ${isDone ? 'checked' : ''}" data-check="${task.id}"></div>
        <div class="task-name" data-expand="${task.id}">${task.name}</div>
        <span class="task-effort ${effortClass}">${effortLabel}</span>
        <span class="task-expand-arrow" data-expand="${task.id}">&#9654;</span>
      </div>
      <div class="task-detail">
        <div class="task-detail-inner">
          <div class="detail-card">
            ${detailHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

function updateOverall() {
  const pct = overallPercent();
  const done = totalCompleted();
  const total = totalTasks();
  document.getElementById('overall-pct').textContent = pct + '%';
  document.getElementById('overall-count').textContent = done + ' / ' + total + ' tasks complete';
  document.getElementById('overall-fill').style.width = pct + '%';
}

// Event delegation
document.addEventListener('click', (e) => {
  // Checkbox click
  const checkEl = e.target.closest('[data-check]');
  if (checkEl) {
    const taskId = checkEl.dataset.check;
    state[taskId] = !state[taskId];
    saveState(state);

    // Find parent category and check for completion celebration
    const taskEl = checkEl.closest('.task');
    const catEl = checkEl.closest('.category');
    const catId = catEl?.dataset.catId;

    if (catId) {
      const cat = CATEGORIES.find(c => c.id === catId);
      const wasDone = catPercent(cat) === 100;

      // Update just this task visually
      if (state[taskId]) {
        taskEl.classList.add('done');
        checkEl.classList.add('checked');
      } else {
        taskEl.classList.remove('done');
        checkEl.classList.remove('checked');
      }

      // Update category stats
      const done = countCompleted(cat);
      const total = cat.tasks.length;
      const pct = catPercent(cat);
      const circumference = 2 * Math.PI * 18;
      const dashOffset = circumference - (pct / 100) * circumference;

      catEl.querySelector('.category-stats').textContent = done + ' / ' + total + ' tasks';
      catEl.querySelector('.cat-progress-text').textContent = pct + '%';
      catEl.querySelector('.cat-progress-fill').setAttribute('stroke-dashoffset', dashOffset);

      if (pct === 100) {
        catEl.classList.add('complete');
        if (!wasDone) {
          catEl.classList.add('just-completed');
          setTimeout(() => catEl.classList.remove('just-completed'), 1500);
        }
      } else {
        catEl.classList.remove('complete');
      }

      updateOverall();
    }
    return;
  }

  // Task expand click
  const expandEl = e.target.closest('[data-expand]');
  if (expandEl) {
    const taskId = expandEl.dataset.expand;
    expandedTasks[taskId] = !expandedTasks[taskId];
    const taskEl = expandEl.closest('.task');
    if (expandedTasks[taskId]) {
      taskEl.classList.add('expanded');
    } else {
      taskEl.classList.remove('expanded');
    }
    return;
  }

  // Category header click
  const headerEl = e.target.closest('.category-header');
  if (headerEl && !e.target.closest('[data-check]') && !e.target.closest('[data-expand]')) {
    const catId = headerEl.dataset.cat;
    openCategories[catId] = !openCategories[catId];
    const catEl = headerEl.closest('.category');
    if (openCategories[catId]) {
      catEl.classList.add('open');
    } else {
      catEl.classList.remove('open');
    }
    return;
  }

  // Reset button
  if (e.target.closest('.reset-btn')) {
    document.getElementById('modal').classList.add('show');
    return;
  }

  // Modal cancel
  if (e.target.closest('.btn-cancel') || (e.target.classList.contains('modal-overlay') && e.target.closest('.modal-overlay'))) {
    document.getElementById('modal').classList.remove('show');
    return;
  }

  // Modal confirm reset
  if (e.target.closest('.btn-danger')) {
    state = {};
    saveState(state);
    openCategories = {};
    expandedTasks = {};
    document.getElementById('modal').classList.remove('show');
    render();
    return;
  }
});

// Initial render
render();
