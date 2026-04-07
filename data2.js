// Categories 5-8: Pixel Art, Arenas, Audio, Menus & UI
const DATA_PART2 = [
  {
    id: "art",
    icon: "🎨",
    title: "Pixel Art & Visual Assets",
    tasks: [
      {
        id: "art-style",
        name: "Choose art style and sprite resolution",
        effort: "M",
        desc: "Pick a pixel resolution: 32x32 or 48x48 is ideal for a fighting game with readable animations. Larger = more detail but more work per frame. Define a color palette (12-24 colors max) for consistency.",
        tips: "32x32 is the sweet spot for your first pixel art game — detailed enough for character expression, small enough to animate quickly. Use Lospec for palette inspiration.",
        beginner: "Don't aim for AAA pixel art. Games like Rivals of Aether started with simple sprites. Readable silhouettes matter more than detail.",
        resources: [
          "Lospec palettes — <a href='https://lospec.com/palette-list'>lospec.com</a>",
          "Pixel art sizing guide — search 'choosing pixel art resolution for games' on YouTube",
          "Aseprite (best pixel art tool, $20) — <a href='https://www.aseprite.org'>aseprite.org</a>",
          "LibreSprite (free Aseprite fork) — <a href='https://libresprite.github.io'>libresprite.github.io</a>"
        ]
      },
      {
        id: "char-sprites",
        name: "Create snail character sprites & animations",
        effort: "L",
        desc: "Each snail needs: idle (2-4 frames), move (4-6 frames), attack wind-up (2-3 frames), attack active (2-3 frames), attack recovery (2-3 frames), hurt (2 frames), launched/flying (2 frames), KO/death (4-6 frames). That's ~20-30 frames per character minimum.",
        tips: "Animate the idle first — it's what players see most. Use squash and stretch on the snail body. Exaggerate movements. In pixel art, subtlety is invisible.",
        beginner: "Start with ONE character fully animated. Learn the pipeline. Then the next characters go 3x faster because you know what you're doing.",
        resources: [
          "Pixel art animation tutorial — search 'Pixel art animation basics Aseprite' on YouTube",
          "Saint11 pixel art tutorials — <a href='https://saint11.org/blog/pixel-art-tutorials/'>saint11.org</a>",
          "Sprite sheet import in Godot — <a href='https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "shell-skins",
        name: "Design shell variations & customizations",
        effort: "M",
        desc: "Shell skins are your cosmetic unlock system. Palette swaps are easiest (recolor the shell). Unique shell shapes are cooler but more work. Plan 3-5 skins per character.",
        tips: "Use Godot's shader system for palette swaps — one shader, swap the color lookup texture. This way you draw the shell once and get infinite recolors.",
        beginner: "Start with 2 palette swaps per character (default + alt color). Add fancy skins post-launch as updates.",
        resources: [
          "Godot palette swap shader — search 'Godot 4 palette swap shader' on YouTube"
        ]
      },
      {
        id: "backgrounds",
        name: "Create arena/stage backgrounds",
        effort: "L",
        desc: "Each arena needs a background. Use parallax layers for depth (far bg, mid bg, near bg, foreground). Keep backgrounds lower contrast than characters so fighters are always readable.",
        tips: "Desaturate and blur backgrounds slightly compared to characters. The eye should always track the snails, not the scenery.",
        resources: [
          "Parallax backgrounds in Godot — <a href='https://docs.godotengine.org/en/stable/tutorials/2d/2d_parallax.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "ui-elements",
        name: "Design UI elements (health bars, menus, buttons)",
        effort: "M",
        desc: "Create a consistent UI kit: health/damage bars, round counter, timer, character portraits, menu buttons, selection cursors. Use your color palette. Make text readable at all sizes.",
        tips: "Use a pixel art font that matches your game's style. Godot's theme system lets you skin all UI controls consistently.",
        resources: [
          "Free pixel fonts — <a href='https://www.dafont.com/theme.php?cat=303'>dafont.com pixel fonts</a>",
          "Godot UI theming — <a href='https://docs.godotengine.org/en/stable/tutorials/ui/gui_skinning.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "particles",
        name: "Create particle effects (slime, sparks, specials)",
        effort: "M",
        desc: "Slime trails behind moving snails, hit sparks on impact, dust clouds on landing, shell gleam on specials, KO explosion. Particles add massive juice for minimal effort.",
        tips: "Use Godot's GPUParticles2D node. For pixel art, use small sprite-based particles (2x2 to 8x8 pixel sprites) rather than smooth gradients.",
        beginner: "Particles are one of the easiest ways to make your game look 10x better. Add them after core mechanics work.",
        resources: [
          "Godot particles tutorial — <a href='https://docs.godotengine.org/en/stable/tutorials/2d/particle_systems_2d.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "title-logo",
        name: "Design title screen & game logo",
        effort: "M",
        desc: "Your logo is your brand. Make it bold, readable, and memorable. The title screen should set the tone — fun, funky, and a little absurd. Animated snails on the title screen add charm.",
        tips: "Look at how indie fighters do their title screens. A logo with a simple animated background and 'Press Start' is all you need initially.",
        resources: []
      },
      {
        id: "promo-art",
        name: "Create promotional art & Steam screenshots",
        effort: "M",
        desc: "Steam needs: capsule images (multiple sizes), screenshots (at least 5), and ideally a trailer thumbnail. These are what sell your game. Make them eye-catching and show gameplay.",
        tips: "Save this for when the game is looking good. Screenshots should show exciting moments — mid-combat, special moves, multiple characters on screen.",
        resources: [
          "Steam capsule image specs — <a href='https://partner.steamgames.com/doc/store/assets/standard'>partner.steamgames.com</a>"
        ]
      },
      {
        id: "powerup-sprites",
        name: "Design item & power-up sprites",
        effort: "S",
        desc: "If your game has pickups: speed boost, damage boost, health item, shield, etc. Each needs a clear, readable sprite that communicates what it does at a glance.",
        tips: "Use universal visual language: hearts = health, lightning = speed, skull = damage. Don't make players guess.",
        resources: []
      },
      {
        id: "env-animation",
        name: "Animate environmental elements",
        effort: "M",
        desc: "Swaying grass, flowing water, flickering torches, floating particles. These make arenas feel alive. Use simple 2-4 frame loops.",
        tips: "Animated environments are polish — do them last. Static arenas work fine during development.",
        resources: []
      },
      {
        id: "victory-defeat",
        name: "Create victory & defeat animations",
        effort: "M",
        desc: "Winners need a celebration animation (victory pose, dance). Losers need a defeat animation (shell crack, dizzy). These are personality moments.",
        tips: "Each character's victory animation should reflect their personality. The speed demon does a burnout. The wizard conjures fireworks.",
        resources: []
      }
    ]
  },
  {
    id: "arenas",
    icon: "🏟️",
    title: "Arenas / Stages",
    tasks: [
      {
        id: "arena-designs",
        name: "Design 6-8 unique arena concepts",
        effort: "L",
        desc: "Ideas: Garden Bed (starter), Compost Heap (bouncy), Rain Gutter (slippery), Mushroom Forest (platforms), Kitchen Counter (hazards), Fish Tank (underwater physics), Greenhouse (vines), Trash Can (tight space).",
        tips: "Each arena should change how the game plays. Flat stage for pure fighting, platforms for vertical play, hazards for chaos. Mix it up.",
        resources: []
      },
      {
        id: "arena-hazards",
        name: "Create arena hazards & interactive elements",
        effort: "M",
        desc: "Falling objects, moving platforms, environmental damage zones, breakable barriers, bounce pads. Hazards add variety and chaos to matches.",
        tips: "Make hazards hurt everyone equally. They should create funny moments, not feel unfair. Add a 'hazards off' toggle for competitive players.",
        resources: []
      },
      {
        id: "stage-select",
        name: "Implement stage selection screen",
        effort: "M",
        desc: "Grid of arena thumbnails with preview. Support random selection. Show arena name and maybe a short description. Consider stage banning for competitive play.",
        tips: "A simple grid with hover preview works great. Don't overcomplicate this — players just want to pick a stage and fight.",
        resources: []
      },
      {
        id: "parallax",
        name: "Add parallax scrolling backgrounds",
        effort: "M",
        desc: "Multiple background layers that scroll at different speeds create depth. Godot's ParallaxBackground and ParallaxLayer nodes make this straightforward.",
        tips: "Three layers is the sweet spot: far sky (slowest), middle ground (medium), near details (fastest). Use Godot's built-in parallax nodes.",
        resources: [
          "Godot ParallaxBackground — <a href='https://docs.godotengine.org/en/stable/classes/class_parallaxbackground.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "arena-mechanics",
        name: "Design arena-specific mechanics",
        effort: "M",
        desc: "Each arena can have a unique twist: the gutter fills with water over time, the kitchen has a knife that slams down periodically, the mushroom forest has bouncy caps, the compost heap shifts and reshapes.",
        tips: "Playtest each mechanic thoroughly. If it causes more frustration than fun, tone it down or make it optional.",
        resources: []
      },
      {
        id: "arena-unlock",
        name: "Create arena unlock progression",
        effort: "S",
        desc: "Start with 3-4 arenas unlocked. Unlock more through arcade mode completion or total matches played. Or just unlock them all — your choice.",
        tips: "For a small indie game, unlocking all arenas from the start is usually better. Players want to see your content, not grind for it.",
        resources: []
      },
      {
        id: "destructible",
        name: "Add destructible environment elements",
        effort: "M",
        desc: "Breakable platforms, crumbling walls, smashable objects. These make the arena feel reactive and alive. Use RigidBody2D for debris pieces.",
        tips: "Don't go overboard — a few breakable elements per arena is plenty. Too much and it becomes confusing. Make breaking things feel satisfying with particles and screen shake.",
        resources: []
      }
    ]
  },
  {
    id: "audio",
    icon: "🎵",
    title: "Music & Audio",
    tasks: [
      {
        id: "menu-theme",
        name: "Compose main menu theme",
        effort: "M",
        desc: "Set the tone for your whole game. Fun, funky, slightly goofy — matching the vibe of snails brawling. Chiptune or lo-fi beats work great with pixel art. Loop seamlessly.",
        tips: "Your menu theme is the first thing players hear. Make it catchy but not annoying — players sit on the menu a lot. 30-60 second loop is fine.",
        beginner: "If you can't compose music, that's okay! Use free tools to experiment, or commission a musician. Budget $50-200 per track on Fiverr or Twitter.",
        resources: [
          "BeepBox (free browser music tool) — <a href='https://www.beepbox.co'>beepbox.co</a>",
          "Bosca Ceoil (free simple music maker) — <a href='https://terrycavanagh.itch.io/bosca-ceoil'>itch.io</a>",
          "LMMS (free FL Studio alternative) — <a href='https://lmms.io'>lmms.io</a>"
        ]
      },
      {
        id: "arena-tracks",
        name: "Create unique music tracks per arena (6-8)",
        effort: "L",
        desc: "Each arena needs a track that matches its vibe. Garden = upbeat, Kitchen = frantic, Mushroom Forest = mysterious, Rain Gutter = energetic. 60-90 second loops.",
        tips: "Start with 3-4 tracks. Share tracks between similar arenas at first. Add unique tracks per arena as you polish.",
        resources: [
          "FL Studio ($99 for producer edition) — <a href='https://www.image-line.com'>image-line.com</a>",
          "Free game music packs on itch.io — <a href='https://itch.io/game-assets/tag-music'>itch.io music assets</a>"
        ]
      },
      {
        id: "select-music",
        name: "Compose character select screen music",
        effort: "S",
        desc: "Hype-building music for character selection. Should build anticipation. Think upbeat, rhythmic, making players excited to fight.",
        tips: "Can be a variation of your main theme. Shorter loop is fine since players don't spend long here.",
        resources: []
      },
      {
        id: "jingles",
        name: "Create victory & defeat jingles",
        effort: "S",
        desc: "Short musical stingers (3-5 seconds) for win/lose. Victory should feel triumphant. Defeat should feel humorous rather than harsh — keep the fun tone.",
        tips: "These tiny audio moments have outsized impact on game feel. Spend time getting them right.",
        resources: []
      },
      {
        id: "sfx-combat",
        name: "Design sound effects for attacks, hits, & blocks",
        effort: "M",
        desc: "Every attack needs a whoosh, every hit needs a thwack, every block needs a clank. Shell impacts should sound weighty and satisfying. Layer sounds for big moves.",
        tips: "Use jsfxr to generate retro SFX quickly. Layer multiple sounds for big impacts (bass thud + high crack + shell ring).",
        beginner: "Sound effects are surprisingly important. A hit without sound feels wrong. Even placeholder sounds improve the game massively.",
        resources: [
          "jsfxr (free browser SFX generator) — <a href='https://sfxr.me'>sfxr.me</a>",
          "Freesound.org — <a href='https://freesound.org'>freesound.org</a> (check licenses)",
          "Audacity (free audio editor) — <a href='https://www.audacityteam.org'>audacityteam.org</a>"
        ]
      },
      {
        id: "sfx-ui",
        name: "Create UI sound effects",
        effort: "S",
        desc: "Menu navigate, menu select, menu back, countdown beeps, round start announcer, timer warning. Small sounds that make the UI feel responsive.",
        tips: "Keep UI sounds short and soft. They should confirm actions without being distracting. Generate them all in one jsfxr session.",
        resources: []
      },
      {
        id: "ambience",
        name: "Add ambient sounds per arena",
        effort: "M",
        desc: "Garden: birds and insects. Kitchen: appliance hum. Rain Gutter: rain and dripping. Mushroom Forest: eerie nature sounds. Ambience makes arenas immersive.",
        tips: "Loop ambient tracks separately from music. Layer them in Godot using separate AudioStreamPlayer nodes.",
        resources: []
      },
      {
        id: "announcer",
        name: "Create announcer voice lines (optional)",
        effort: "M",
        desc: "'Round 1... FIGHT!', 'KO!', 'Player 1 Wins!', character name call-outs. An announcer adds hype. Can be silly/over-the-top to match the tone.",
        tips: "This is optional but adds a LOT of polish. You can record yourself, use AI voice tools, or hire someone on Fiverr for $30-50.",
        resources: []
      },
      {
        id: "dynamic-music",
        name: "Implement dynamic music system",
        effort: "M",
        desc: "Music intensifies as damage increases or time runs low. Layer additional instruments on top of the base track. Godot's AudioStreamPlayer can crossfade between layers.",
        tips: "Simplest approach: two versions of each track (calm and intense). Crossfade based on game state. More complex: use Godot's audio buses for layered stems.",
        resources: [
          "Godot audio buses — <a href='https://docs.godotengine.org/en/stable/tutorials/audio/audio_buses.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "mastering",
        name: "Master and mix all audio",
        effort: "M",
        desc: "Balance volumes across all sounds and music. SFX shouldn't drown out music and vice versa. Test on phone speakers, headphones, and laptop speakers.",
        tips: "Use Godot's audio bus system: separate buses for Music, SFX, UI, Ambience. Let players adjust each volume independently in settings.",
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
        desc: "Title logo, Play, Settings, Quit. Maybe an animated snail in the background. Keep it clean and clear. Support both mouse/keyboard and controller navigation.",
        tips: "Build menus using Godot's Control nodes (VBoxContainer, Button, etc.). Use the theme system for consistent styling across all menus.",
        beginner: "Godot's built-in UI system is powerful. Use VBoxContainer and HBoxContainer to arrange buttons. The engine handles layout for you.",
        resources: [
          "Godot UI tutorial — <a href='https://docs.godotengine.org/en/stable/tutorials/ui/index.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "char-select-ui",
        name: "Create character select screen UI",
        effort: "L",
        desc: "Character grid, player cursors (P1/P2), stat display, skin selection, ready indicators. Must support two players selecting simultaneously. Show character preview animations.",
        tips: "This is one of the most complex UI screens. Build it as its own scene. Use a GridContainer for the character roster.",
        resources: []
      },
      {
        id: "settings",
        name: "Build settings/options menu",
        effort: "M",
        desc: "Audio: master/music/SFX volume sliders. Video: resolution, fullscreen/windowed, vsync. Controls: show current bindings. Accessibility: screen shake toggle, colorblind options.",
        tips: "Save settings to a config file using Godot's ConfigFile class. Load them on startup. This is essential for Steam — players expect settings.",
        resources: [
          "Godot ConfigFile — <a href='https://docs.godotengine.org/en/stable/classes/class_configfile.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "pause-menu",
        name: "Implement pause menu",
        effort: "S",
        desc: "Resume, Restart, Settings, Quit to Menu. Use get_tree().paused = true. Make sure it works with multiple players (either player can pause).",
        tips: "Set the pause menu's process_mode to PROCESS_MODE_WHEN_PAUSED so it still responds to input while the game is paused.",
        resources: []
      },
      {
        id: "results",
        name: "Create results/score screen",
        effort: "M",
        desc: "Show winner with victory animation, match stats (damage dealt, KOs, combos), rematch/character select/menu options. Make winning feel rewarding.",
        tips: "Show stats one at a time with small delays for dramatic effect. Add sound effects as each stat appears.",
        resources: []
      },
      {
        id: "hud",
        name: "Design in-game HUD",
        effort: "M",
        desc: "Health/damage indicators, round counter, timer, player indicators (P1/P2), special meter, character portraits. Must be readable at a glance during fast action.",
        tips: "Keep HUD elements at the screen edges. The center should be clear for gameplay. Use CanvasLayer to keep HUD above game elements.",
        resources: []
      },
      {
        id: "controller-nav",
        name: "Add controller navigation for all menus",
        effort: "M",
        desc: "Every menu must be navigable with a gamepad. Focus states on buttons, d-pad navigation, A to confirm, B to go back. Godot's focus system handles most of this.",
        tips: "Set focus_neighbor properties on your UI controls. Test with a controller early — keyboard-only menu navigation is a Steam review complaint.",
        beginner: "Godot has built-in focus navigation for UI. Set focus_next and focus_previous on your buttons and it mostly works automatically.",
        resources: [
          "Godot GUI focus — <a href='https://docs.godotengine.org/en/stable/tutorials/ui/gui_navigation.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "tutorial",
        name: "Create tutorial / how-to-play screens",
        effort: "M",
        desc: "Show controls, explain mechanics, maybe a short interactive tutorial level. Players should be able to learn the game without reading a manual.",
        tips: "A simple 3-4 screen slideshow with control diagrams is minimum viable tutorial. An interactive training tutorial is better but more work.",
        resources: []
      },
      {
        id: "remapping",
        name: "Implement button remapping",
        effort: "M",
        desc: "Let players change their controls. Essential for accessibility and player comfort. Use Godot's InputMap to remap actions at runtime.",
        tips: "This is expected on Steam. Use Godot's InputEventAction system and allow rebinding in settings. Save remapped controls to the config file.",
        resources: [
          "Godot input remapping — search 'Godot 4 input rebinding tutorial' on YouTube"
        ]
      },
      {
        id: "resolution",
        name: "Add screen resolution options",
        effort: "S",
        desc: "Support common resolutions (1280x720, 1920x1080, 2560x1440) and fullscreen toggle. For pixel art, use integer scaling to avoid blurry pixels.",
        tips: "Set your game's base resolution in Project Settings (e.g., 640x360) and use the 'viewport' stretch mode with 'integer' stretch aspect for crisp pixels.",
        resources: [
          "Godot multiple resolutions — <a href='https://docs.godotengine.org/en/stable/tutorials/rendering/multiple_resolutions.html'>docs.godotengine.org</a>"
        ]
      }
    ]
  }
];
