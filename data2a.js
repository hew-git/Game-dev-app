// Categories 5-6: Pixel Art & Visual Assets, Arenas
const DATA_PART2A = [
  {
    id: "art",
    icon: "🎨",
    title: "Pixel Art & Visuals",
    tasks: [
      {
        id: "art-style",
        name: "Choose sprite resolution & color palette",
        effort: "M",
        desc: "For your multi-part snail, think in terms of SHELL SIZE — the shell is the biggest single piece and your visual anchor. A 20-24px diameter shell means the head is 10-14px, the neck is 2-4px wide, and the full extended snail is ~40-50px tall. Pick a limited color palette (16-24 colors max) for consistency across all characters and arenas.",
        tips: "24px shell diameter is the recommended starting point. At that size you get enough pixels for shell detail (spiral patterns, cracks) while keeping art manageable. Each character is differentiated mainly through head design, shell color/pattern, and undershell color. Use Lospec to browse curated palettes — pick one and stick with it.",
        beginner: "Don't aim for perfection. Games like Samurai Gunn use simple sprites and look amazing because the animations are snappy. Readability > detail.",
        resources: [
          "Lospec palettes — <a href='https://lospec.com/palette-list'>lospec.com</a>",
          "Aseprite ($20, best tool) — <a href='https://www.aseprite.org'>aseprite.org</a>",
          "LibreSprite (free fork) — <a href='https://libresprite.github.io'>libresprite.github.io</a>",
          "Piskel (free, browser-based) — <a href='https://www.piskelapp.com'>piskelapp.com</a>"
        ]
      },
      {
        id: "resolution-guide",
        name: "Understand sprite size vs screen resolution",
        effort: "S",
        desc: "For a 2D brawler with a multi-part snail, think about size in terms of the SHELL — that's the core visual unit. At 480x270 game resolution, a 20-24px diameter shell gives you good screen coverage for 2-4 players. The full snail with head/neck extended will be roughly 40-50px tall, which is ~1/5 of screen height — readable and expressive. Sprite size and game resolution are locked together: pick one and the other follows.",
        tips: "Recommended setup: 480x270 game resolution, 20-24px shell diameter, 10-14px head, 2-4px wide neck. The full extended snail is about 2x the shell height. At this size you can fit 4 snails on screen comfortably with room to fight. If you want more detail, go 640x360 with 28-32px shells.",
        beginner: "Start with 480x270 and a 24px shell. This is proven for pixel art brawlers — readable characters, roomy arenas, and art that doesn't take forever. Set in Godot: Project Settings > Display > Window > Viewport Width = 480, Height = 270. Set Stretch Mode = 'viewport', Stretch Aspect = 'keep', Texture Filter = 'Nearest'.",
        resources: [
          "Common pixel art resolutions breakdown — search 'pixel art game resolution guide' on YouTube",
          "Godot viewport settings — <a href='https://docs.godotengine.org/en/stable/tutorials/rendering/multiple_resolutions.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "modular-sprites",
        name: "Build 4-piece modular snail character",
        effort: "L",
        desc: "Your snail is 4 separate sprites that combine into one character: (1) UNDERSHELL BODY — the round fleshy base that sits under the shell, always visible, this is the snail's 'foot'. (2) SHELL — sits on top of the undershell body, detaches during shell toss. (3) NECK — extends out from the undershell body, variable length, connects to the head. (4) HEAD — sits at the end of the neck, has the face/eyes/personality. During movement, the whole assembly rotates together. During dash, neck + head retract and only the shell + undershell remain. During shell toss, the shell flies off and undershell + neck + head remain.",
        tips: "In Godot, structure this as a node tree: SnailRoot (Node2D, this rotates) → UndershellBody (Sprite2D, circle), Shell (Sprite2D, sits on top), Neck (Sprite2D or Line2D, extends outward), Head (Sprite2D, at neck tip). Rotate SnailRoot to spin the whole snail. Toggle visibility of parts for state changes: dash = hide neck + head; shell toss = reparent shell to a projectile node.",
        beginner: "This 4-piece approach sounds complex but it's actually more manageable than drawing a full character sprite sheet. Each piece is small and simple. The head is where all the personality lives — give it expressive eyes and a mouth. Everything else is geometric shapes (circles, a line).",
        resources: [
          "Godot Sprite2D + child nodes — <a href='https://docs.godotengine.org/en/stable/classes/class_sprite2d.html'>docs.godotengine.org</a>",
          "Godot Node2D hierarchy — <a href='https://docs.godotengine.org/en/stable/tutorials/2d/2d_transforms.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "rolling-art",
        name: "Solve rotation for 4-piece snail in pixel art",
        effort: "L",
        desc: "The whole snail rotates during movement, so each piece needs to look good at any angle. The good news: the undershell body and shell are both circles — circles look identical at every rotation angle, so they need only 1 frame each. The challenge is the neck and head. Two approaches: (A) PRE-RENDERED: Draw head in 8 directions (up, up-right, right, etc.) and snap to nearest direction based on rotation. Neck can be a Line2D drawn in code or a short tileable segment. (B) RUNTIME ROTATION: Let Godot rotate the Node2D and accept minor aliasing. Since the head is small (10-14px) and the neck is thin (2-4px), aliasing is usually minimal.",
        tips: "Recommended approach: Use Godot's runtime rotation for the whole SnailRoot node. Draw the undershell body as a circle (looks fine at any angle). Draw the shell as a circle with some asymmetric detail like a spiral (if the spiral looks bad rotated, use the pre-rendered 8-direction trick just for the shell). Draw 8 directional frames for the head so the face always reads correctly. Use a Line2D or simple stretched sprite for the neck.",
        beginner: "Test this ASAP with programmer art! In Godot: create a Node2D, add 4 child Sprite2Ds (colored circles for undershell + shell, a small square for head, a thin rect for neck). Rotate the parent. Does it look okay? If yes, you might not need pre-rendered frames at all. If the head looks weird, draw 8 directional head frames in Aseprite and swap them based on angle.",
        resources: [
          "Pre-rendered rotation tutorial — search 'pixel art rotation frames Aseprite' on YouTube",
          "Saint11 pixel art tips — <a href='https://saint11.org/blog/pixel-art-tutorials/'>saint11.org</a>"
        ]
      },
      {
        id: "state-visuals",
        name: "Create visuals for each snail state",
        effort: "M",
        desc: "Each state shows/hides different pieces: (1) MOVING — all 4 parts visible, rotating together. Head/neck push off ground. (2) DASHING — shell + undershell only, neck + head retracted (hidden). Add speed lines or trail particles. (3) SHELL-LESS (after toss) — undershell + neck + head visible, no shell. Should look exposed and vulnerable — maybe the undershell wobbles. (4) PARRYING — all parts flash white briefly. (5) HIT — squash the undershell, flash red. (6) KO — shell cracks, head goes dizzy-eyed, parts scatter.",
        tips: "The dash state is just two circles stacked (shell on undershell), which is super simple to draw. The shell-less state is where character personality shines — the exposed slug with a worried face. Make sure each state reads instantly at a glance — players need to know if an opponent has their shell or not.",
        resources: [
          "Godot AnimationPlayer for state transitions — <a href='https://docs.godotengine.org/en/stable/classes/class_animationplayer.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "char-anims",
        name: "Create per-character animation sets",
        effort: "L",
        desc: "Per character art list: UNDERSHELL BODY — 1 circle sprite (same at all angles), maybe 2-3 for squash/stretch on hit. SHELL — 1 sprite if symmetrical, or 8 directional frames if it has asymmetric detail like a spiral. NECK — 1 thin segment (stretched in code or tiled). HEAD — 8 directional frames so the face reads correctly at any rotation + 1 hurt face + 1 KO dizzy face + 1 worried face (shell-less). EFFECTS — dash trail, parry flash, KO crack. Total per character: ~15-25 unique sprites, which is very manageable.",
        tips: "Build the full animation set for ONE character first. Learn the pipeline. Character 2 onward will go 3x faster because you know what you're doing.",
        beginner: "Use Aseprite's animation timeline. Tag each animation (idle, roll, dash, etc.). Export as a spritesheet and import into Godot's AnimatedSprite2D or AnimationPlayer.",
        resources: [
          "Aseprite animation basics on YouTube",
          "Godot AnimatedSprite2D — <a href='https://docs.godotengine.org/en/stable/classes/class_animatedsprite2d.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "shell-skins",
        name: "Design shell skin variations",
        effort: "M",
        desc: "Shell skins = your cosmetic unlock system. Palette swaps are easiest (just recolor). Unique shell shapes are cooler but more work (need new rotation frames). Start with 2-3 palette swaps per character.",
        tips: "Use a palette swap shader in Godot — draw the shell once, swap colors via a lookup texture. One shader, infinite recolors. No extra art needed.",
        resources: [
          "Godot palette swap shader — search 'Godot 4 palette swap shader' on YouTube"
        ]
      },
      {
        id: "particles",
        name: "Create particle effects (slime, sparks, impacts)",
        effort: "M",
        desc: "Slime trails behind rolling snails, hit sparks on dash impact, shell clank effects, parry flash burst, KO explosion, dust clouds. Use small pixel sprites (2x2 to 8x8) for particles.",
        tips: "Use Godot's GPUParticles2D. Particles are one of the easiest ways to make your game look 10x better. Add them after core mechanics work.",
        resources: [
          "Godot 2D particles — <a href='https://docs.godotengine.org/en/stable/tutorials/2d/particle_systems_2d.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "ui-elements",
        name: "Design pixel art UI (HP pips, menus, buttons)",
        effort: "M",
        desc: "5 shell-shaped HP icons per player. Timer. Round counter. Menu buttons in pixel style. Character portraits for select screen. Keep UI readable — pixel fonts can be hard to read if too small.",
        tips: "Use a pixel art font that's at least 8px tall for readability. Godot's theme system lets you skin all UI consistently.",
        resources: [
          "Free pixel fonts — <a href='https://www.dafont.com/theme.php?cat=303'>dafont.com pixel fonts</a>",
          "Godot UI theming — <a href='https://docs.godotengine.org/en/stable/tutorials/ui/gui_skinning.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "title-logo",
        name: "Design title screen & game logo",
        effort: "M",
        desc: "Bold pixel art logo. Animated snails on the title screen. Set the tone: fun, funky, goofy. Keep the logo readable at small sizes (Steam capsule images).",
        tips: "Chunky pixel lettering with a snail shell worked into a letter. Test at 231x87 (Steam's smallest capsule) — if you can still read it, it's good.",
        resources: []
      },
      {
        id: "promo-art",
        name: "Create promotional art & Steam screenshots",
        effort: "M",
        desc: "Steam needs capsule images (multiple sizes) and 5+ screenshots showing gameplay. Save this for when the game looks good. Show exciting moments — mid-dash, shell tosses, parries.",
        tips: "Screenshots sell your game. Show action, variety (different characters, arenas), and your best visual moments. Add a screen-wrapping shell toss in a screenshot — that's a hook.",
        resources: [
          "Steam capsule specs — <a href='https://partner.steamgames.com/doc/store/assets/standard'>partner.steamgames.com</a>"
        ]
      }
    ]
  },
  {
    id: "arenas",
    icon: "🏟️",
    title: "Arenas & Stages",
    tasks: [
      {
        id: "arena-designs",
        name: "Design 6-8 unique arena concepts",
        effort: "L",
        desc: "At 480x270, your arena is the entire viewport. Since borders wrap, arenas are about interior obstacles and floor surfaces — platforms, walls, hazards within the screen. Ideas: Garden Bed (flat, starter), Compost Heap (bouncy surfaces), Rain Gutter (slippery), Mushroom Forest (vertical platforms), Kitchen Counter (hazards), Trash Can (tight with interior walls), Greenhouse (vines block movement), Fish Tank (floaty gravity).",
        tips: "Each arena should change how rolling, dashing, and shell tossing work. Platforms create vertical play. Interior walls make shell tosses ricochet instead of wrapping. Slippery floors change rolling momentum. With 24px snails on a 480x270 screen, you have room for meaningful arena geometry without feeling cramped.",
        resources: []
      },
      {
        id: "arena-hazards",
        name: "Create arena hazards & interactive elements",
        effort: "M",
        desc: "Falling objects, moving platforms, damaging zones, bounce pads, breakable barriers. Hazards should create chaos without feeling unfair.",
        tips: "Make hazards hurt everyone equally. Add a 'hazards off' toggle for competitive players. Hazards + screen wrapping = hilarious emergent situations.",
        resources: []
      },
      {
        id: "arena-wrap-visuals",
        name: "Design visuals for screen wrap edges",
        effort: "S",
        desc: "Since borders wrap, you need to visually communicate this. Options: glowing edges, portal-like effects, seamless tiling backgrounds, or a visual 'tear' effect. Players need to know wrapping exists at a glance.",
        tips: "A subtle animated shimmer or color shift at the screen edges is elegant. Or go bold with portal-style swirl effects. Either way, make it obvious on the first match.",
        resources: []
      },
      {
        id: "parallax",
        name: "Add parallax scrolling backgrounds",
        effort: "M",
        desc: "Multiple background layers at different scroll speeds create depth. Godot's ParallaxBackground makes this straightforward. 3 layers: far sky, mid ground, near details.",
        tips: "Desaturate backgrounds compared to characters — the eye should track the snails, not the scenery.",
        resources: [
          "Godot ParallaxBackground — <a href='https://docs.godotengine.org/en/stable/classes/class_parallaxbackground.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "stage-select",
        name: "Implement stage selection screen",
        effort: "M",
        desc: "Grid of arena thumbnails with preview. Random select option. Maybe stage banning for competitive play. Keep it simple — players want to pick and fight.",
        tips: "A grid of small pixel art arena previews works great. Highlight on hover, confirm on select.",
        resources: []
      },
      {
        id: "destructible",
        name: "Add destructible environment elements",
        effort: "M",
        desc: "Breakable platforms, smashable pots, crumbling walls. Shell tosses breaking through obstacles is satisfying. Use RigidBody2D for debris.",
        tips: "A few breakable elements per arena is plenty. Make them react to both dashes and shell tosses for maximum fun.",
        resources: []
      }
    ]
  }
];
