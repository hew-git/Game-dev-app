// Categories 7-8: Music & Audio, Menus & UI
const DATA_PART2B = [
  {
    id: "audio",
    icon: "🎵",
    title: "Music & Audio",
    tasks: [
      {
        id: "menu-theme",
        name: "Compose main menu theme",
        effort: "M",
        desc: "Fun, funky, slightly goofy — matching snails brawling. Chiptune or lo-fi beats fit pixel art perfectly. 30-60 second seamless loop. This sets the tone for the whole game.",
        tips: "Your menu theme is the first thing players hear. Catchy but not annoying — players idle here a lot.",
        beginner: "If you can't compose, use free tools to experiment, or commission a musician on Fiverr ($50-200 per track).",
        resources: [
          "BeepBox (free browser tool) — <a href='https://www.beepbox.co'>beepbox.co</a>",
          "Bosca Ceoil (free) — <a href='https://terrycavanagh.itch.io/bosca-ceoil'>itch.io</a>",
          "LMMS (free DAW) — <a href='https://lmms.io'>lmms.io</a>"
        ]
      },
      {
        id: "arena-tracks",
        name: "Create music tracks per arena (6-8)",
        effort: "L",
        desc: "Each arena gets a track matching its vibe. Garden = upbeat, Kitchen = frantic, Mushroom Forest = funky, Rain Gutter = energetic. 60-90 second loops.",
        tips: "Start with 3-4 tracks and share between similar arenas. Add unique tracks as you polish.",
        resources: [
          "Free game music on itch.io — <a href='https://itch.io/game-assets/tag-music'>itch.io</a>",
          "FL Studio ($99) — <a href='https://www.image-line.com'>image-line.com</a>"
        ]
      },
      {
        id: "sfx-combat",
        name: "Design combat sound effects",
        effort: "M",
        desc: "Dash whoosh, body impact thwack, shell toss launch sound, shell clank on hit, parry DING (satisfying!), KO impact, rolling rumble. Layer sounds for powerful moves.",
        tips: "The parry sound is the most important SFX in the game. It should feel CRISP and rewarding. Use jsfxr to generate retro sounds quickly.",
        beginner: "Sound effects matter more than you think. A hit without sound feels wrong. Even placeholder sounds improve the game massively.",
        resources: [
          "jsfxr (free SFX generator) — <a href='https://sfxr.me'>sfxr.me</a>",
          "Freesound.org — <a href='https://freesound.org'>freesound.org</a>",
          "Audacity (free editor) — <a href='https://www.audacityteam.org'>audacityteam.org</a>"
        ]
      },
      {
        id: "sfx-ui",
        name: "Create UI & system sound effects",
        effort: "S",
        desc: "Menu navigate blip, menu select confirm, back/cancel, countdown beeps, round start, timer warning. Short, soft sounds that confirm actions.",
        tips: "Generate all UI sounds in one jsfxr session. Keep them consistent in tone.",
        resources: []
      },
      {
        id: "jingles",
        name: "Create victory & defeat jingles",
        effort: "S",
        desc: "Short musical stingers (3-5 seconds). Victory = triumphant. Defeat = humorous/goofy, not harsh. Keep the fun tone.",
        tips: "These tiny audio moments have outsized impact on game feel.",
        resources: []
      },
      {
        id: "ambience",
        name: "Add ambient sounds per arena",
        effort: "M",
        desc: "Garden: birds/insects. Kitchen: appliance hum. Rain Gutter: rain/dripping. Ambience makes arenas immersive. Loop on a separate AudioStreamPlayer.",
        tips: "Layer ambient tracks separately from music using Godot's audio bus system.",
        resources: [
          "Godot audio buses — <a href='https://docs.godotengine.org/en/stable/tutorials/audio/audio_buses.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "announcer",
        name: "Add announcer voice lines (optional)",
        effort: "M",
        desc: "'Round 1... FIGHT!', 'KO!', 'Player 1 Wins!'. An announcer adds hype. Can be silly/over-the-top. Record yourself, use AI voice tools, or hire on Fiverr ($30-50).",
        tips: "Optional but adds huge polish. Even a few key lines (fight, KO, wins) make a big difference.",
        resources: []
      },
      {
        id: "mastering",
        name: "Mix and master all audio",
        effort: "M",
        desc: "Balance volumes across all sounds and music. Use Godot's audio bus system: separate buses for Music, SFX, UI, Ambience. Let players adjust each independently.",
        tips: "Test on phone speakers, headphones, and laptop speakers. What sounds good on headphones may be inaudible on laptop speakers.",
        resources: []
      }
    ]
  },
  {
    id: "menus",
    icon: "📱",
    title: "Menus & UI",
    tasks: [
      {
        id: "main-menu",
        name: "Design and implement main menu",
        effort: "M",
        desc: "Pixel art title logo, Play, Settings, Quit. Animated snails rolling in the background. Keep it clean. Support both keyboard/mouse and controller.",
        tips: "Use Godot's Control nodes (VBoxContainer, Button). The theme system handles consistent styling across all menus.",
        beginner: "Godot's UI system is powerful. VBoxContainer + Button nodes handle layout automatically.",
        resources: [
          "Godot UI tutorial — <a href='https://docs.godotengine.org/en/stable/tutorials/ui/index.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "char-select-ui",
        name: "Create character select screen",
        effort: "L",
        desc: "Character grid, P1/P2 cursors, dash/shell toss preview, skin selection, ready indicators. Must support two players selecting simultaneously.",
        tips: "Show a tiny animation preview of each snail's unique dash and shell toss when highlighted. This is how players learn what makes each character different.",
        resources: []
      },
      {
        id: "settings",
        name: "Build settings/options menu",
        effort: "M",
        desc: "Audio: master/music/SFX volume sliders. Video: resolution, fullscreen, vsync. Controls: show bindings. Accessibility: screen shake toggle, colorblind mode.",
        tips: "Save settings using Godot's ConfigFile class. Load on startup. Players expect settings — this is required for Steam.",
        resources: [
          "Godot ConfigFile — <a href='https://docs.godotengine.org/en/stable/classes/class_configfile.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "hud",
        name: "Design in-game HUD",
        effort: "M",
        desc: "5 HP pips per player (shell icons that crack/break), round counter, timer, player labels (P1/P2). Keep it at screen edges — center is for fighting.",
        tips: "Use CanvasLayer for HUD so it stays above game elements. HP as 5 visual shell icons is more readable than a health bar for your system.",
        resources: []
      },
      {
        id: "pause-menu",
        name: "Implement pause menu",
        effort: "S",
        desc: "Resume, Restart, Settings, Quit to Menu. Use get_tree().paused = true. Either player can pause.",
        tips: "Set pause menu's process_mode to PROCESS_MODE_WHEN_PAUSED so it responds to input while the game is paused.",
        resources: []
      },
      {
        id: "results",
        name: "Create results screen",
        effort: "M",
        desc: "Show winner with victory animation, match stats (hits landed, parries, shell tosses), rematch/character select/menu options.",
        tips: "Reveal stats one at a time with small delays for dramatic effect. Add sounds as each stat appears.",
        resources: []
      },
      {
        id: "controller-nav",
        name: "Add controller navigation for all menus",
        effort: "M",
        desc: "Every menu must work with gamepad. D-pad navigation, A to confirm, B to back. Godot's focus system handles most of this.",
        tips: "Test with a controller early. Keyboard-only menus are a common Steam review complaint.",
        beginner: "Set focus_neighbor properties on UI controls and it mostly works automatically.",
        resources: [
          "Godot GUI focus — <a href='https://docs.godotengine.org/en/stable/tutorials/ui/gui_navigation.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "tutorial",
        name: "Create tutorial / how-to-play",
        effort: "M",
        desc: "Show controls: roll, dash, shell toss, parry. Explain screen wrapping. Maybe an interactive training level where you practice each move.",
        tips: "A 3-4 screen slideshow with control diagrams is minimum viable. Interactive tutorial is better but more work. Show the parry timing window visually.",
        resources: []
      },
      {
        id: "remapping",
        name: "Implement button remapping",
        effort: "M",
        desc: "Let players rebind controls. Essential for accessibility. Use Godot's InputMap for runtime remapping. Save to config file.",
        tips: "Required for Steam. Godot's InputEventAction system supports rebinding natively.",
        resources: []
      }
    ]
  }
];
