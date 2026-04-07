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
        desc: "For a 2D fighting game with readable animations, 32x32 or 48x48 base character size works well. Pick a limited color palette (16-24 colors) for consistency. Larger sprites = more detail but exponentially more work per frame.",
        tips: "32x32 is the sweet spot for your first pixel art game. Readable silhouettes matter more than detail. Use Lospec to browse curated palettes — pick one and stick with it.",
        beginner: "Don't aim for perfection. Games like Samurai Gunn use simple sprites and look amazing because the animations are snappy. Readability > detail.",
        resources: [
          "Lospec palettes — <a href='https://lospec.com/palette-list'>lospec.com</a>",
          "Aseprite ($20, best tool) — <a href='https://www.aseprite.org'>aseprite.org</a>",
          "LibreSprite (free fork) — <a href='https://libresprite.github.io'>libresprite.github.io</a>",
          "Piskel (free, browser-based) — <a href='https://www.piskelapp.com'>piskelapp.com</a>"
        ]
      },
      {
        id: "modular-sprites",
        name: "Build modular snail sprites (body + shell separate)",
        effort: "L",
        desc: "Your snail is two pieces: a circle (shell) and a line (body/neck). These MUST be separate sprites because: (1) during normal movement, the body rotates around the shell as a unit — like a clock hand spinning, (2) during dash, the body hides inside the shell and only the shell is visible, (3) during shell toss, the shell flies away and only the body remains. In Godot, make the body a child of the shell node and rotate the whole thing together.",
        tips: "The body sprite is essentially a 'stick' that extends from the shell's edge. It rotates WITH the shell during movement (the whole node rotates). For dash: just hide the body sprite and launch the shell. For shell toss: detach the shell as a projectile, leaving the body exposed. Three visual states from two sprites.",
        beginner: "This is actually simpler than a traditional character sprite. You're drawing a circle and a stick. The complexity is in the rotation and state changes, not the art.",
        resources: [
          "Godot Sprite2D + child nodes — <a href='https://docs.godotengine.org/en/stable/classes/class_sprite2d.html'>docs.godotengine.org</a>",
          "Search 'modular character sprites pixel art' on YouTube"
        ]
      },
      {
        id: "rolling-art",
        name: "Solve rotation for pixel art (shell + body)",
        effort: "L",
        desc: "Since the whole snail (shell + body) rotates continuously, you need smooth pixel art rotation. Your best options: (1) Pre-render 12-16 rotation frames of the ENTIRE snail (shell + body together) at fixed angles — swap frames based on rotation angle, no runtime rotation. (2) Keep the shell symmetrical/circular so it looks fine at any angle, and only pre-render 8 frames for the body 'stick' at different angles. (3) Rotate the whole node in Godot and rely on the circular shell looking clean — the body/stick is thin enough that rotation aliasing is minimal.",
        tips: "Option 2 is your best bet: a round symmetrical shell has no aliasing issues when rotated. The body is a thin line/stick, which also rotates cleanly because there's not much pixel detail to distort. Draw the shell once (it's a circle — it always looks the same). Draw the body in 8 directions (up, up-right, right, down-right, down, down-left, left, up-left) and snap to the nearest frame based on rotation angle.",
        beginner: "Test this early! Draw a simple circle and a stick in Aseprite. Import into Godot, rotate the node, and see how it looks. If it's clean enough, you might not need pre-rendered frames at all — Godot's rotation on simple circular shapes often looks fine. If it's ugly, go with the 8-direction frame approach.",
        resources: [
          "Pre-rendered rotation tutorial — search 'pixel art rotation frames Aseprite' on YouTube",
          "Saint11 pixel art tips — <a href='https://saint11.org/blog/pixel-art-tutorials/'>saint11.org</a>"
        ]
      },
      {
        id: "state-visuals",
        name: "Create visuals for each snail state",
        effort: "M",
        desc: "Your snail has distinct visual states: (1) MOVING — shell circle with body-stick extending out, whole thing rotating. (2) DASHING — just the shell circle, body hidden inside, maybe motion lines or a trail effect. (3) SHELL-LESS — just the body/slug, no shell, looks vulnerable and squishy. (4) PARRYING — brief flash pose. (5) HIT — squash/flash. (6) KO — shell crack + splat.",
        tips: "The dash state (shell only) is the simplest to draw — it's literally just your shell sprite rolling fast. Add a speed trail or blur lines behind it for readability. The shell-less state (after shell toss) should look clearly vulnerable — the naked slug body wobbling around.",
        resources: [
          "Godot AnimationPlayer for state transitions — <a href='https://docs.godotengine.org/en/stable/classes/class_animationplayer.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "char-anims",
        name: "Create per-character animation sets",
        effort: "L",
        desc: "Each snail needs: body sprite (8 directional frames for rotation, or a single sprite if Godot rotation looks clean), shell sprite (1 frame if symmetrical), dash trail effect, shell-less slug body (2-3 frames wobbling), shell toss launch (2 frames), parry flash (1-2 frames), hit reaction (2 frames), KO animation (3-4 frames). Since the shell is just a circle and the body is a stick, total unique art per character is actually quite low — ~15-20 frames.",
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
        desc: "Since borders wrap, arenas are about interior obstacles and floor surfaces. Ideas: Garden Bed (flat, starter), Compost Heap (bouncy surfaces), Rain Gutter (slippery), Mushroom Forest (vertical platforms), Kitchen Counter (hazards + obstacles), Trash Can (tight with walls), Greenhouse (vines block movement), Fish Tank (floaty gravity).",
        tips: "Each arena should change how rolling, dashing, and shell tossing work. Platforms create vertical play. Obstacles make shell tosses ricochet. Slippery floors change rolling momentum. Screen wrapping means every arena is technically infinite — use that.",
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
