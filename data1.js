// Categories 1-4: Concept, Engine Setup, Core Mechanics, Snail Roster
const DATA_PART1 = [
  {
    id: "concept",
    icon: "📋",
    title: "Game Concept & Design",
    tasks: [
      {
        id: "core-loop",
        name: "Define the core gameplay loop",
        effort: "M",
        desc: "Your game: snails move by extending their head/neck out and pushing off surfaces (the whole snail rotates like a wheel). To dash, they retract fully into their shell and launch as a rolling ball. They can also toss their shell as a projectile (leaving themselves vulnerable). Damage comes only from dashes and shell tosses. All snails can parry. 5-hit HP, no ring-outs — screen borders wrap to the other side.",
        tips: "Write out the full input list on paper: roll/move (extend body, push off ground), dash (retract into shell, launch), shell toss (throw shell), parry (deflect). That's your whole moveset. Constraints breed creativity — this tight moveset is a strength.",
        beginner: "Draw a one-page flowchart of a single match. Keep it simple. If you can explain a round in 3 sentences, you've nailed it.",
        resources: [
          "GDD template — <a href='https://www.gamedesigning.org/learn/game-design-document/'>gamedesigning.org</a>",
          "GDC 'Juice it or Lose it' talk on YouTube — essential for physics brawler feel"
        ]
      },
      {
        id: "gdd",
        name: "Write your Game Design Document (GDD)",
        effort: "L",
        desc: "A living doc covering: movement (body-push rotation), combat (retract-dash + shell toss + parry), the 5-HP system, screen wrapping, 4-piece character model (undershell body, shell, neck, head), character roster with unique dashes/shell tosses, arenas, art style, and scope. Keep it to 5-10 pages.",
        tips: "Your GDD will change constantly — that's normal. It's a compass, not a contract. Google Doc or Notion both work great.",
        beginner: "Don't over-document. Write enough to remember your ideas and communicate them. You can always add detail later.",
        resources: [
          "One-page GDD template — <a href='https://www.gamedeveloper.com/business/how-to-write-a-game-design-document'>gamedeveloper.com</a>"
        ]
      },
      {
        id: "audience",
        name: "Define target audience & market positioning",
        effort: "S",
        desc: "Your audience: fans of Duck Game, Stick Fight, Gang Beasts, Nidhogg — people who love goofy physics party fighters. The snail concept + screen wrapping + shell toss mechanics make this unique and marketable.",
        tips: "Look at Steam tags on similar games. 'Local multiplayer', 'physics', 'fighting', 'party game', 'pixel art' — these are your tags too.",
        resources: [
          "SteamDB — <a href='https://steamdb.info'>steamdb.info</a> for market research",
          "Steam Spy — <a href='https://steamspy.com'>steamspy.com</a> for sales estimates"
        ]
      },
      {
        id: "competitors",
        name: "Research competing / similar games",
        effort: "M",
        desc: "Play and study: Duck Game, Stick Fight, Gang Beasts, Nidhogg, Lethal League Blaze, Samurai Gunn, Screencheat, SpeedRunners. Note what makes each fun, what's missing, and where your game fills a gap.",
        tips: "Make a spreadsheet: game name, what's good, what's missing, price, review count. Find the gap your snail brawler fills.",
        resources: [
          "Search Steam for 'physics brawler', 'local multiplayer fighter', 'party fighter'"
        ]
      },
      {
        id: "usp",
        name: "Define your unique selling points",
        effort: "S",
        desc: "Your USPs: (1) Unique movement — snails push off surfaces by extending their head, rotating like a wheel (2) Retract-dash — snail hides in shell and rockets forward as a ball (3) Shell toss — throw your shell as a projectile, leaving yourself exposed (4) Screen wrapping — no death pits, strategic warping (5) Universal parry for skill expression. That's a great pitch.",
        tips: "Elevator pitch: 'A goofy physics brawler where snails roll around by spinning their bodies, retract into their shells to dash-attack, and can throw their shells as projectiles — with screen wrapping so there's nowhere to hide.' That sells itself.",
        resources: []
      },
      {
        id: "monetization",
        name: "Plan monetization strategy",
        effort: "S",
        desc: "For a first game: $9.99-14.99 base price, 10% launch discount, no microtransactions. Shell skins as cosmetic unlocks through gameplay. Maybe a DLC character pack post-launch if the game does well.",
        tips: "Check competitor pricing. $9.99 is safe. $14.99 if you have 8+ characters and multiple modes. Don't underprice — it hurts perceived quality.",
        resources: [
          "Chris Zukowski on pricing — <a href='https://howtomarketagame.com'>howtomarketagame.com</a>"
        ]
      }
    ]
  },
  {
    id: "engine",
    icon: "⚙️",
    title: "Godot Engine Setup",
    tasks: [
      {
        id: "godot-setup",
        name: "Install Godot 4.x on your Intel Mac",
        effort: "S",
        desc: "Download Godot 4.3+ from the official site. The standard (non-.NET) build is perfect — use GDScript for your first game. It's free, lightweight, and runs great on Intel Macs. No license fees ever.",
        tips: "Use GDScript, not C#. It's simpler, has more tutorials, and is tightly integrated with the engine. You can always learn C# for your second game.",
        beginner: "Godot is the best choice for a first-time indie dev. Free forever, huge community, and the 2D tools are excellent for pixel art games.",
        resources: [
          "Download Godot — <a href='https://godotengine.org/download'>godotengine.org</a>",
          "Your First 2D Game — <a href='https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html'>docs.godotengine.org</a>",
          "Brackeys Godot beginner series on YouTube"
        ]
      },
      {
        id: "version-control",
        name: "Set up Git version control",
        effort: "S",
        desc: "Init a Git repo, add a Godot .gitignore (ignore .godot/ folder), push to GitHub. Commit after every working feature. Git will save you when you break something.",
        tips: "Learn: git add, git commit, git push, git checkout. That's 90% of what you need. Commit messages like 'add shell toss mechanic' are fine.",
        beginner: "GitHub Desktop is a great visual Git client if the command line is intimidating.",
        resources: [
          "Godot .gitignore — <a href='https://github.com/github/gitignore/blob/main/Godot.gitignore'>GitHub</a>",
          "GitHub Desktop — <a href='https://desktop.github.com'>desktop.github.com</a>"
        ]
      },
      {
        id: "project-structure",
        name: "Set up project folder structure",
        effort: "S",
        desc: "Organize your project: res://scenes/characters/, res://scenes/arenas/, res://scripts/, res://assets/sprites/, res://assets/audio/, res://ui/. Keep it tidy from day one.",
        tips: "Consistency matters more than the exact structure. Pick a convention and stick with it.",
        resources: [
          "Godot project organization — <a href='https://docs.godotengine.org/en/stable/tutorials/best_practices/project_organization.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "pixel-settings",
        name: "Configure Godot for pixel art",
        effort: "S",
        desc: "Set viewport size (e.g. 480x270 or 640x360), stretch mode to 'viewport', stretch aspect to 'keep', and texture filter to 'Nearest' for crisp pixels. This prevents blurry pixel art.",
        tips: "Go to Project Settings > Display > Window. Set your base resolution small (480x270 is great for pixel art), then Godot scales it up with clean pixels.",
        beginner: "This is one of the first things to do in any pixel art project. If your pixels look blurry, this setting is why.",
        resources: [
          "Godot pixel art setup — <a href='https://docs.godotengine.org/en/stable/tutorials/rendering/multiple_resolutions.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "build-pipeline",
        name: "Set up export pipeline for Windows/Mac/Linux",
        effort: "M",
        desc: "Configure export presets for all three platforms. Test an export in week 1 — even a blank screen. Finding export issues early saves massive pain later. Steam requires Windows at minimum.",
        tips: "Godot can cross-compile to all platforms from your Mac. Download export templates via the Editor menu (one-click).",
        resources: [
          "Godot export guide — <a href='https://docs.godotengine.org/en/stable/tutorials/export/index.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "architecture",
        name: "Plan scene architecture & game state flow",
        effort: "M",
        desc: "Use Godot's scene system: each character = a scene, each arena = a scene. Create a GameManager autoload to handle state flow: MainMenu → CharacterSelect → ArenaSelect → Fight → Results → repeat. Use state machines for character behavior.",
        tips: "The GameManager autoload is your brain. It tracks round count, scores, which characters are selected, and transitions between scenes.",
        beginner: "Don't overthink architecture. Start building, and refactor as you learn. 'Perfect architecture' is the enemy of making a game.",
        resources: [
          "Godot Autoloads — <a href='https://docs.godotengine.org/en/stable/tutorials/scripting/singletons_autoload.html'>docs.godotengine.org</a>",
          "GDQuest state machine tutorial on YouTube"
        ]
      }
    ]
  },
  {
    id: "mechanics",
    icon: "🎮",
    title: "Core Game Mechanics",
    tasks: [
      {
        id: "rolling",
        name: "Implement snail rolling / body-push movement",
        effort: "L",
        desc: "The snail is 4 parts (undershell body, shell, neck, head) that all rotate together as one unit. The head/neck extend out and push off the ground to move — the whole snail spins like a wheel. Think of it as: the undershell + shell are the hub, and the neck + head are a spoke that pushes off surfaces. This IS the movement — there's no separate walk/run.",
        tips: "In Godot, create a root Node2D that rotates (apply_torque or set rotation directly). Child nodes: UndershellBody (Sprite2D circle), Shell (Sprite2D on top), Neck (Line2D or stretched Sprite2D extending outward), Head (Sprite2D at neck tip). When head contacts ground, apply a push force. Rotation speed = movement speed.",
        beginner: "Start with colored shapes in programmer art: a big circle (undershell+shell), a thin rectangle (neck), a small circle (head). Get the rotation + push-off feeling fun before any pixel art. Does spinning feel satisfying? Does pushing off surfaces feel responsive? Nail this first.",
        resources: [
          "RigidBody2D — <a href='https://docs.godotengine.org/en/stable/classes/class_rigidbody2d.html'>docs.godotengine.org</a>",
          "CharacterBody2D — <a href='https://docs.godotengine.org/en/stable/classes/class_characterbody2d.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "screen-wrap",
        name: "Implement screen border wrapping",
        effort: "S",
        desc: "When a snail exits one side of the screen, they appear on the opposite side. Check position against viewport bounds each frame. This affects both snails AND projectiles (shell tosses should wrap too!).",
        tips: "Simple approach: if position.x > screen_width, set position.x = 0 (and vice versa). Same for Y axis. Don't forget to wrap shell toss projectiles too — warping a shell toss across the screen is a hilarious strategy.",
        beginner: "This is actually one of the easier mechanics to implement. Just a few lines in _physics_process().",
        resources: []
      },
      {
        id: "dash",
        name: "Implement dash (full retract into shell)",
        effort: "L",
        desc: "When dashing, the neck + head retract into the shell — only the undershell body + shell remain, forming a compact rolling ball that launches in the aimed direction. This is your attack: hitting someone while dashing deals 1 HP damage. Each character has a unique dash (different speed, trajectory, distance, etc.).",
        tips: "The dash is a state change: hide the Neck and Head sprites, apply a burst of velocity. The shell becomes a hitbox during dash. Add a brief wind-up (shell wobbles, neck starts retracting) for readability so opponents can react. Recovery = neck + head re-emerge from shell.",
        beginner: "Start simple: press dash → hide neck + head → launch the ball → after distance/time, re-show neck + head. Get the state transitions right first, then tune speed/distance.",
        resources: [
          "Godot Tween — <a href='https://docs.godotengine.org/en/stable/classes/class_tween.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "shell-toss",
        name: "Implement shell toss attack",
        effort: "L",
        desc: "The shell detaches and flies off as a projectile. The snail keeps its undershell body + neck + head but loses the shell — clearly vulnerable and a different visual silhouette. The tossed shell travels with screen wrapping. Each character has a unique shell toss trajectory/behavior. The shell should return after a time or be retrievable.",
        tips: "In Godot: reparent the Shell sprite to a new projectile Node2D, apply velocity. The remaining snail (undershell + neck + head) enters a 'shell-less' state — maybe slower, can't dash (no shell to retract into), can still parry. This risk/reward is a core strategic decision.",
        resources: []
      },
      {
        id: "parry",
        name: "Implement universal parry system",
        effort: "M",
        desc: "All snails can parry. Parry has a tight timing window (3-6 frames). Successful parry deflects dashes and shell tosses, and creates a punish window. Failed parry leaves you open. Parrying a shell toss could reflect the shell back.",
        tips: "The parry window determines your game's skill ceiling. 3 frames = very hard (competitive). 6 frames = forgiving (party). Start with 5 frames and tune from playtesting. Add a satisfying visual flash and sound on successful parry.",
        beginner: "Use a timer node. When parry button is pressed, start the timer. If hit during that window, trigger parry success. After timer expires, enter recovery.",
        resources: []
      },
      {
        id: "hp-system",
        name: "Create 5-hit health system",
        effort: "M",
        desc: "Each snail has 5 HP. Every hit from a dash or shell toss removes 1 HP. At 0 HP, the snail is KO'd. Display HP as 5 discrete icons (shell icons, hearts, pips). Consider knockback scaling — hits at low HP could knock you farther for drama.",
        tips: "5 HP means every hit matters. This is great for tension. Consider brief invincibility frames (i-frames) after taking a hit so players can't be combo-locked.",
        resources: []
      },
      {
        id: "knockback",
        name: "Add knockback physics on hits",
        effort: "M",
        desc: "When hit, snails get knocked back based on the attack direction and force. Shell toss might knock back more than a dash. Knockback into a wall = wrap to the other side with remaining momentum. This creates dynamic plays.",
        tips: "Use apply_impulse() for one-shot knockback. Direction = attacker_to_target normalized. Scale force by attack type. Screen wrapping mid-knockback is hilarious — lean into it.",
        resources: []
      },
      {
        id: "invincibility",
        name: "Add i-frames after taking damage",
        effort: "S",
        desc: "Brief invincibility (0.5-1 second) after each hit. Flash the sprite to indicate i-frames. This prevents stunlock chains where one player can't recover. Essential for a 5-HP system.",
        tips: "Use a Timer node + modulate the sprite alpha for the flashing effect. Disable the hurtbox during i-frames.",
        resources: []
      },
      {
        id: "hitboxes",
        name: "Set up hitboxes & collision layers",
        effort: "M",
        desc: "Collision layers: Layer 1 = arena/walls, Layer 2 = player bodies (shell + body together), Layer 3 = dashing shells (retracted shell hitbox during dash), Layer 4 = tossed shells (shell projectile), Layer 5 = parry zones. Document these in your GDD.",
        tips: "Godot has 32 layers. Use them! Clear layer organization prevents 'why is my shell hitting myself' bugs. Label them in Project Settings.",
        resources: [
          "Collision layers — <a href='https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "ai",
        name: "Create CPU opponent AI",
        effort: "L",
        desc: "AI snails that roll, dash, toss shells, and parry. Start dumb (roll toward player, dash randomly). Layer on smarts: maintain distance, dash when in range, parry when attacked, use shell toss at range.",
        tips: "AI difficulty = how often they make good decisions. Easy: 20% optimal choices. Hard: 80%. Don't make AI react to things a human couldn't see.",
        beginner: "Save AI for later. Test with two controllers or two keyboard halves first. AI is hard and not essential for early development.",
        resources: []
      }
    ]
  },
  {
    id: "roster",
    icon: "🐌",
    title: "Snail Roster & Characters",
    tasks: [
      {
        id: "roster-design",
        name: "Design initial roster of unique snails",
        effort: "L",
        desc: "Each snail shares the same base mechanics (roll, dash, shell toss, parry) but has UNIQUE dash and shell toss variations. Ideas: Rocket Snail (long-range straight dash), Spinner (spiral dash), Boulder (short heavy dash), Boomerang (shell returns in an arc), Splitter (shell breaks into 3), Sticky (shell sticks to surfaces).",
        tips: "Start with 4-6 characters. Differentiate through dash behavior (direction, speed, range, trajectory) and shell toss behavior (speed, arc, effect on hit). Keep the base rolling and parry identical across the roster.",
        beginner: "Build ONE fully working character first. Copy it and modify the dash/shell toss for character 2. Repeat. Don't build 8 at once.",
        resources: [
          "Fighting game archetype guide — search 'fighting game character archetypes' on YouTube"
        ]
      },
      {
        id: "char-concepts",
        name: "Create character concepts & personalities",
        effort: "M",
        desc: "Give each snail a name, look, and personality that matches their playstyle. A fast snail could be a caffeine-addicted racer. A heavy snail could be a grumpy boulder-shelled bruiser. Keep it goofy and fun — this game is funny.",
        tips: "With the 4-piece model, personality comes from: head design (angry eyes, goofy smile, cool shades), shell pattern/color, undershell color, and neck thickness. A snail with an angry face and cracked spiked shell tells you everything at a glance.",
        resources: []
      },
      {
        id: "dash-variants",
        name: "Design unique dash for each character",
        effort: "L",
        desc: "Each snail's dash (full retract + shell launch) should feel distinct. Ideas: straight rocket dash (fast, long range), heavy slam (short range, huge knockback), multi-bounce (ricochets off surfaces), spiral dash (curves in an arc), delayed bomb (pause then burst), phasing dash (passes through and hits from behind via screen wrap).",
        tips: "Vary three properties: speed, trajectory, and distance. A short explosive dash and a long arcing dash play completely differently. Since the body is hidden during dash, the shell itself can look different per character (trail effects, spin speed).",
        resources: []
      },
      {
        id: "shell-variants",
        name: "Design unique shell toss for each character",
        effort: "L",
        desc: "Each snail's shell toss should be unique. Ideas: fast straight shot, slow lobbing arc, boomerang return, ricochet off walls, explodes after 2 seconds, splits into fragments, rolls along the ground, orbits the snail briefly before launching.",
        tips: "Shell toss is your 'special move'. It should feel risky (you're vulnerable without your shell) but rewarding. Each variant should create different strategic situations.",
        resources: []
      },
      {
        id: "balance-stats",
        name: "Balance character stats",
        effort: "M",
        desc: "Tune: roll speed, roll acceleration, dash range, dash speed, dash damage/knockback, shell toss speed, shell toss range, recovery times. Use a spreadsheet. Point-buy system: 20 points across stats forces trade-offs.",
        tips: "Balance is iterative. Get it roughly right, playtest, adjust. No one gets balance right on the first try. Aim for every character being viable.",
        resources: []
      },
      {
        id: "select-screen",
        name: "Design character select screen",
        effort: "M",
        desc: "Grid of snails with preview animations. Show name, portrait, and a visual indicator of their dash/shell toss type when highlighted. Support 2+ player selection simultaneously with 'ready' state.",
        tips: "Show a tiny preview of each snail's dash and shell toss so players can see how they differ before picking.",
        resources: []
      },
      {
        id: "unlockables",
        name: "Plan unlockable shell skins",
        effort: "S",
        desc: "All characters unlocked from the start (important for competitive/party games). Unlockable cosmetic shell skins earned through gameplay milestones (10 wins, 50 wins, complete arcade mode, etc.).",
        tips: "Never lock characters behind gameplay gates in a fighting game. Players want to try everyone immediately. Lock cosmetics instead.",
        resources: []
      }
    ]
  }
];
