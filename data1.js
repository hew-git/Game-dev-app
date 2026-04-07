// Categories 1-4: Concept, Engine Setup, Core Mechanics, Snail Roster
const DATA_PART1 = [
  {
    id: "concept",
    icon: "📋",
    title: "Game Concept & Design Document",
    tasks: [
      {
        id: "core-loop",
        name: "Define the core gameplay loop",
        effort: "M",
        desc: "Map out exactly how a match plays: round start, movement, attacks, physics interactions, knockouts, scoring, round end. For a physics brawler, nail down what makes collisions feel fun — shell bashing, slime physics, bouncing off walls.",
        tips: "Draw a simple flowchart of one full match. Keep it on one page. If you can't explain a round in 3 sentences, simplify it.",
        beginner: "Start with the simplest possible version — two snails, one arena, one attack. Get that feeling good before adding complexity.",
        resources: [
          "Game Design Document template — <a href='https://www.gamedesigning.org/learn/game-design-document/'>gamedesigning.org</a>",
          "GDC talk: 'Juice it or Lose it' on YouTube — great for physics brawler feel"
        ]
      },
      {
        id: "gdd",
        name: "Write your Game Design Document (GDD)",
        effort: "L",
        desc: "A living document covering mechanics, characters, arenas, art style, audio, UI, story, and scope. Doesn't need to be fancy — a Google Doc or Notion page works. Update it as you go.",
        tips: "Don't over-document. A 5-10 page GDD is plenty for a solo/small project. Focus on what makes YOUR game unique.",
        beginner: "Your GDD will change a lot. That's normal. It's a compass, not a contract.",
        resources: [
          "One-page GDD template — <a href='https://www.gamedeveloper.com/business/how-to-write-a-game-design-document'>gamedeveloper.com</a>",
          "Notion game dev templates — search 'game design document' on Notion"
        ]
      },
      {
        id: "audience",
        name: "Define target audience & market positioning",
        effort: "S",
        desc: "Who's going to play this? Fans of Rivals of Aether, Duck Game, Stick Fight? Casual party gamers or competitive fighters? This shapes every decision from difficulty to pricing.",
        tips: "Look at Steam tags on similar games. Check what audiences overlap. 'Physics brawler' + 'pixel art' + 'animals' has a proven audience.",
        resources: [
          "SteamDB — <a href='https://steamdb.info'>steamdb.info</a> for market research",
          "Steam Spy — <a href='https://steamspy.com'>steamspy.com</a> for sales estimates"
        ]
      },
      {
        id: "competitors",
        name: "Research competing / similar games",
        effort: "M",
        desc: "Play and study games like Duck Game, Stick Fight, Rivals of Aether, Gang Beasts, Brawlhalla, Nidhogg, Lethal League. Note what works and what doesn't. Find the gap your game fills.",
        tips: "Make a spreadsheet: game name, what's good, what's missing, price, review count. This shows you where opportunities are.",
        resources: [
          "Search Steam for 'physics brawler', 'local multiplayer fighter', 'party fighter'",
          "Watch gameplay videos of top sellers in the genre on YouTube"
        ]
      },
      {
        id: "usp",
        name: "Define your unique selling points (USPs)",
        effort: "S",
        desc: "What makes snail brawling different? Shell mechanics? Slime trails that affect physics? Slow-mo dramatic moments? The absurdity of snails fighting? Nail down 2-3 things that make your game stand out.",
        tips: "Your USP is your marketing hook. 'It's Gang Beasts but with snails and shell physics' is a great elevator pitch.",
        resources: []
      },
      {
        id: "monetization",
        name: "Plan monetization strategy",
        effort: "S",
        desc: "Decide on base price, whether you'll have DLC, cosmetic shells, or keep it simple. For a first game, a $10-15 base price with no microtransactions is the safest bet. Plan for a launch discount (10-15%).",
        tips: "Check what similar indie games charge on Steam. Underpricing hurts perceived quality. $9.99-14.99 is the sweet spot for indie brawlers.",
        resources: [
          "Chris Zukowski's blog on pricing — <a href='https://howtomarketagame.com'>howtomarketagame.com</a>"
        ]
      }
    ]
  },
  {
    id: "engine",
    icon: "⚙️",
    title: "Game Engine & Technical Setup",
    tasks: [
      {
        id: "godot-setup",
        name: "Set up Godot 4.x on your Intel Mac",
        effort: "S",
        desc: "Download Godot 4.3+ from the official site. The standard build works great on Intel Macs. Get both the regular editor and the .NET version if you want C# support (though GDScript is recommended for your first game).",
        tips: "Use GDScript for your first project — it's simpler, has better tutorials, and is tightly integrated with Godot. C# adds complexity you don't need yet.",
        beginner: "Godot is free, open source, and lightweight. It'll run great on your Intel Mac. No license fees ever, even when you sell on Steam.",
        resources: [
          "Download Godot — <a href='https://godotengine.org/download'>godotengine.org</a>",
          "Official 'Your First 2D Game' tutorial — <a href='https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html'>docs.godotengine.org</a>",
          "Brackeys Godot beginner series on YouTube"
        ]
      },
      {
        id: "version-control",
        name: "Set up version control with Git",
        effort: "S",
        desc: "Initialize a Git repo for your Godot project. Use a .gitignore for Godot (ignore .godot/ folder). Commit often. Use GitHub or GitLab for backup.",
        tips: "Commit after every working feature, no matter how small. You WILL break things and need to go back. Git saves you.",
        beginner: "If Git is new to you: learn 'git add', 'git commit', 'git push', and 'git checkout' — that's 90% of what you need.",
        resources: [
          "Godot .gitignore template — <a href='https://github.com/github/gitignore/blob/main/Godot.gitignore'>GitHub</a>",
          "GitHub Desktop app for visual Git — <a href='https://desktop.github.com'>desktop.github.com</a>"
        ]
      },
      {
        id: "project-structure",
        name: "Set up project structure & folder organization",
        effort: "S",
        desc: "Organize your Godot project: scenes/, scripts/, sprites/, audio/, ui/, arenas/, characters/. Keep it tidy from day one or it becomes a nightmare.",
        tips: "Example structure: res://scenes/characters/, res://scenes/arenas/, res://scripts/core/, res://assets/sprites/, res://assets/audio/",
        resources: [
          "Godot project organization best practices — <a href='https://docs.godotengine.org/en/stable/tutorials/best_practices/project_organization.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "build-pipeline",
        name: "Set up export/build pipeline for PC platforms",
        effort: "M",
        desc: "Configure Godot export presets for Windows, macOS, and Linux. Test exports early — don't wait until the end. Steam requires a Windows build at minimum.",
        tips: "Export a test build in week 1, even if it's just a blank screen. Finding export issues early saves massive headaches later.",
        beginner: "Godot can export to all three PC platforms from your Mac. You'll need to download export templates (one-click in Godot).",
        resources: [
          "Godot export guide — <a href='https://docs.godotengine.org/en/stable/tutorials/export/index.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "architecture",
        name: "Plan technical architecture",
        effort: "M",
        desc: "Decide on state machines for game flow (menu → character select → fight → results). Plan how scenes are structured: each character as a scene, each arena as a scene, a main game scene that manages rounds.",
        tips: "Use Godot's scene system as your architecture. Each character = a scene with a script. Each arena = a scene. A GameManager autoload handles state.",
        beginner: "Don't overthink this. Start building and refactor later. 'Perfect architecture' is the enemy of actually making a game.",
        resources: [
          "Godot state machine tutorial — search 'GDQuest state machine Godot 4' on YouTube",
          "Godot Autoloads (singletons) — <a href='https://docs.godotengine.org/en/stable/tutorials/scripting/singletons_autoload.html'>docs.godotengine.org</a>"
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
        id: "movement",
        name: "Implement snail movement system",
        effort: "M",
        desc: "Create the base CharacterBody2D for snails. Movement should feel weighty and satisfying — these are snails after all. Consider a slide/dash mechanic using shell momentum. Physics-based movement is key for a brawler.",
        tips: "Use CharacterBody2D with move_and_slide(). Add acceleration and friction for that weighty, slippery snail feel. Tweak values until it feels fun to just move around.",
        beginner: "Start with a colored rectangle. Don't worry about sprites yet. Get movement feeling good with programmer art first.",
        resources: [
          "CharacterBody2D docs — <a href='https://docs.godotengine.org/en/stable/classes/class_characterbody2d.html'>docs.godotengine.org</a>",
          "Godot 2D movement tutorial — search 'Godot 4 2D movement' on YouTube"
        ]
      },
      {
        id: "combat",
        name: "Implement basic attack & combat system",
        effort: "L",
        desc: "Create the core attack loop: wind-up, active frames (hitbox), recovery. For a physics brawler, attacks should apply forces — knockback, launching, slamming. Shell bash should be the signature move.",
        tips: "Use Area2D nodes for hitboxes and hurtboxes. Separate them so you can have attacks that hit without the snail being vulnerable during the attack.",
        beginner: "Start with ONE attack. Make it feel amazing. Then add more. Don't try to build 10 moves at once.",
        resources: [
          "Godot hitbox/hurtbox tutorial — search 'Godot 4 hitbox hurtbox' on YouTube",
          "2D physics in Godot — <a href='https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "abilities",
        name: "Design and implement ability/skill system",
        effort: "L",
        desc: "Each snail should have unique abilities tied to their character. Think: slime trail (area denial), shell spin (reflect projectiles), mucus spray (slow enemies), shell toss (ranged). Plan 2-4 abilities per character.",
        tips: "Build abilities as modular scenes that can be attached to any character. This makes balancing and swapping abilities way easier.",
        resources: []
      },
      {
        id: "health",
        name: "Create health & damage system",
        effort: "M",
        desc: "Decide: traditional HP bars, percentage-based knockback (like Smash Bros), or lives-based. For a physics brawler, percentage knockback works great — higher damage = fly farther when hit.",
        tips: "Percentage knockback is simpler to implement than HP and works perfectly for physics brawlers. It's also more exciting for viewers/streamers.",
        beginner: "Start with simple HP. You can always switch to percentage knockback later once you understand the physics better.",
        resources: []
      },
      {
        id: "hitboxes",
        name: "Implement hitboxes & collision detection",
        effort: "M",
        desc: "Set up collision layers and masks properly. Snails on one layer, attacks on another, arena on another. Use Area2D for hit detection and CollisionShape2D for physical collisions.",
        tips: "Godot has 32 collision layers. Use them! Layer 1: arena, Layer 2: players, Layer 3: player hitboxes, Layer 4: projectiles. Document your layers in your GDD.",
        resources: [
          "Collision layers explained — <a href='https://docs.godotengine.org/en/stable/tutorials/physics/physics_introduction.html#collision-layers-and-masks'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "knockback",
        name: "Add knockback & physics interactions",
        effort: "M",
        desc: "The heart of a physics brawler. When snails collide or get hit, they should bounce, slide, and fly in satisfying ways. Shell-to-shell impacts should feel impactful. Use apply_force() and apply_impulse().",
        tips: "Knockback direction should be based on the angle of impact, not just 'push left/right'. This makes the physics feel real and emergent.",
        resources: []
      },
      {
        id: "specials",
        name: "Create special move & ultimate ability system",
        effort: "M",
        desc: "Build a meter that fills from dealing/taking damage. When full, unleash a powerful special — mega shell slam, slime tsunami, etc. Make it dramatic with screen effects.",
        tips: "The special meter should fill fast enough that players get it 1-2 times per round. Too rare = forgotten. Too common = not special.",
        resources: []
      },
      {
        id: "blocking",
        name: "Implement blocking & dodging mechanics",
        effort: "M",
        desc: "Snails can retract into their shell to block (reduced damage, no knockback). Add a dodge roll / shell dash for invincibility frames. These are essential for competitive depth.",
        tips: "Shell retract = hold button to block. Shell dash = tap direction + button for quick dodge with i-frames. Keep block strong but punishable (grab beats block).",
        resources: []
      },
      {
        id: "stamina",
        name: "Add stamina or energy resource system",
        effort: "S",
        desc: "Prevent spam by giving abilities a cost. Stamina regenerates over time. Blocking and dodging cost stamina. Running out leaves you vulnerable.",
        tips: "This is optional for a party-style brawler. If you want competitive depth, add it. If you want pure chaos, skip it.",
        resources: []
      },
      {
        id: "combos",
        name: "Design combo system",
        effort: "L",
        desc: "Allow chaining attacks together: light → light → heavy → special. Use input buffering so button presses during one attack queue the next. Keep combos short (2-4 hits) for a party brawler.",
        tips: "Use an AnimationTree or state machine for combo flow. Input buffering is critical — without it, combos feel unresponsive.",
        beginner: "Start without combos. Add them later once individual attacks work perfectly. Combos are polish, not core.",
        resources: [
          "Godot AnimationTree — <a href='https://docs.godotengine.org/en/stable/tutorials/animation/animation_tree.html'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "ai",
        name: "Create AI for single-player opponents",
        effort: "L",
        desc: "Build CPU opponents with varying difficulty. Simple AI: move toward player, attack when close, occasionally block. Advanced AI: read player patterns, use abilities strategically, combo.",
        tips: "Start with the dumbest possible AI (walk toward player, mash attack). Then layer on behavior: sometimes block, sometimes dodge, sometimes use specials. Difficulty = how often they make good decisions.",
        beginner: "AI is hard. Save it for later in development. Use player 2 controller or just test with two keyboards first.",
        resources: [
          "Godot AI basics — search 'Godot 4 simple fighting game AI' on YouTube"
        ]
      }
    ]
  },
  {
    id: "roster",
    icon: "🐌",
    title: "Characters / Snail Roster",
    tasks: [
      {
        id: "roster-design",
        name: "Design initial roster of 8-12 snail fighters",
        effort: "L",
        desc: "Create a diverse cast. Ideas: Garden Snail (balanced), Slug Bruiser (slow powerhouse), Sea Slug (fast/slippery), Turbo Shell (speed demon), Hermit Crab (armor tank), Poison Dart Snail (ranged), Snail Wizard (magic), Shell DJ (sound attacks).",
        tips: "Follow fighting game archetypes: rushdown, zoner, grappler, all-rounder, glass cannon. Then slap snail flavor on each one.",
        beginner: "Start with 4 characters max. You can always add more later. 4 well-polished snails > 12 half-finished ones.",
        resources: [
          "Fighting game archetype guide — search 'fighting game character archetypes explained' on YouTube"
        ]
      },
      {
        id: "backstories",
        name: "Create backstories & personalities",
        effort: "M",
        desc: "Each snail needs personality that comes through in their design, animations, and maybe a short bio. Keep it fun and funky — this is a silly game about fighting snails.",
        tips: "One paragraph per character is enough. Show personality through animation and gameplay, not walls of text.",
        resources: []
      },
      {
        id: "movesets",
        name: "Define unique movesets per character",
        effort: "L",
        desc: "Each snail needs: light attack, heavy attack, special ability, ultimate, block, dodge. Make each character feel different to play. A spreadsheet helps organize this.",
        tips: "Create a shared base character scene/script with all the common logic. Then extend it per character with unique abilities. This is Godot's inheritance system at work.",
        resources: []
      },
      {
        id: "balance-stats",
        name: "Balance character stats",
        effort: "M",
        desc: "Create a stat system: Speed, Power, Defense, Weight, Special. Make sure no character is strictly better than another. Every strength should come with a weakness.",
        tips: "Use a point-buy system: each character gets 20 total stat points distributed across 5 stats. This forces trade-offs automatically.",
        resources: []
      },
      {
        id: "select-screen",
        name: "Design character select screen",
        effort: "M",
        desc: "Show all characters in a grid. Display name, portrait/sprite, and stats when highlighted. Support 2+ player selection simultaneously. Show 'ready' state.",
        tips: "Look at how Smash Bros, Brawlhalla, or Rivals of Aether handle character select. The grid + preview panel layout is proven.",
        resources: []
      },
      {
        id: "unlockables",
        name: "Plan unlockable characters",
        effort: "S",
        desc: "Decide if characters are all available from the start or if some are unlocked through gameplay. For competitive games, most players prefer all characters unlocked. Cosmetic unlocks (shell skins) are a good compromise.",
        tips: "For a first game launching on Steam: unlock all characters from the start. Lock cosmetic skins behind achievements or gameplay milestones instead.",
        resources: []
      },
      {
        id: "progression",
        name: "Create character progression system",
        effort: "M",
        desc: "Optional: XP per character, unlockable skins/taunts, stat tracking (wins, KOs, time played). This gives players a reason to keep coming back.",
        tips: "Keep it simple. Track wins per character and unlock a new skin color at milestones (10 wins, 50 wins, 100 wins). Don't gate gameplay behind grinding.",
        resources: []
      }
    ]
  }
];
