// Categories 9-12: Game Modes, Balancing, Polish, Steam
const DATA_PART3 = [
  {
    id: "modes",
    icon: "🕹️",
    title: "Game Modes",
    tasks: [
      {
        id: "arcade",
        name: "Story / Arcade mode",
        effort: "L",
        desc: "Fight through the roster in sequence with increasing difficulty. End with a final boss or rival battle. Show a short ending cutscene/screen per character. This is the main single-player content.",
        tips: "Keep it simple: 6-8 fights, difficulty ramps up, unique final boss. A few dialogue lines between fights add personality without much effort.",
        beginner: "Arcade mode is the easiest single-player mode to build. It's just a series of matches with an ending screen. Start here.",
        resources: []
      },
      {
        id: "local-mp",
        name: "Local multiplayer (2-4 players)",
        effort: "M",
        desc: "Same-screen multiplayer is the bread and butter of party brawlers. Support 2 players minimum, 4 if possible. Handle multiple controllers and keyboard splits.",
        tips: "Use Godot's Input actions with device IDs to separate player inputs. Create actions like 'p1_attack', 'p2_attack' etc., or use the multiplayer input system.",
        beginner: "Local multiplayer is simpler than you'd think in Godot. Each player just needs their own set of input actions mapped to different controllers.",
        resources: [
          "Godot local multiplayer — search 'Godot 4 local multiplayer input' on YouTube"
        ]
      },
      {
        id: "online-mp",
        name: "Online multiplayer with rollback netcode",
        effort: "L",
        desc: "Online play is a HUGE undertaking. Rollback netcode is the gold standard for fighting games. Consider using existing solutions rather than building from scratch.",
        tips: "This is the single hardest feature on this list. Consider launching without online and adding it post-launch. Many successful indie fighters launched local-only.",
        beginner: "Save online multiplayer for post-launch or version 2.0. Focus on making the local game amazing first. Seriously.",
        resources: [
          "Godot Rollback Netcode addon — search 'Godot rollback netcode' on GitHub",
          "GGPO explanation — <a href='https://www.ggpo.net'>ggpo.net</a>",
          "Steam Networking Sockets — free relay servers from Valve"
        ]
      },
      {
        id: "training",
        name: "Training / Practice mode",
        effort: "M",
        desc: "Let players practice moves against a dummy. Options: CPU behavior (stand, jump, block, random), display hitboxes, show frame data, reset position. Essential for competitive players.",
        tips: "Start simple: static dummy that takes hits. Add options over time. Even a basic training mode is better than none.",
        resources: []
      },
      {
        id: "survival",
        name: "Survival / Endless mode",
        effort: "M",
        desc: "Fight wave after wave of opponents with limited health recovery. Tracks high score. Simple to implement and adds replay value.",
        tips: "Reuse your arcade mode flow but make it endless with increasing difficulty. Add a leaderboard for high scores.",
        resources: []
      },
      {
        id: "tournament",
        name: "Tournament mode",
        effort: "M",
        desc: "Bracket-style tournament for 4-8 local players. Auto-generates brackets. Tracks wins and shows bracket progression between matches.",
        tips: "A tournament bracket is just a tree data structure. 8 players = 3 rounds. Display the bracket between matches for hype.",
        resources: []
      },
      {
        id: "matchmaking",
        name: "Implement online matchmaking (if online)",
        effort: "L",
        desc: "If you add online: skill-based matchmaking, lobby system, friend invites. Steam provides matchmaking APIs through Steamworks.",
        tips: "Only tackle this if you commit to online play. Steam's lobby system handles most of the heavy lifting. Use GodotSteam for integration.",
        resources: [
          "GodotSteam — <a href='https://godotsteam.com'>godotsteam.com</a>"
        ]
      }
    ]
  },
  {
    id: "balance",
    icon: "⚖️",
    title: "Balancing & Playtesting",
    tasks: [
      {
        id: "frame-data",
        name: "Create frame data spreadsheet",
        effort: "M",
        desc: "Document every move for every character: startup frames, active frames, recovery frames, damage, knockback, hitstun. This is your balance bible.",
        tips: "Use Google Sheets. Columns: Character, Move Name, Startup, Active, Recovery, Damage, Knockback Angle, Knockback Force. Fill it in as you build moves.",
        resources: [
          "Frame data explained — search 'fighting game frame data explained' on YouTube"
        ]
      },
      {
        id: "damage-balance",
        name: "Balance damage values across roster",
        effort: "M",
        desc: "No character should consistently dominate all others. Aim for 40-60% win rates across all matchups. Adjust damage, speed, and knockback values.",
        tips: "Balance in waves: rough pass first (does it feel right?), then data-driven pass (track win rates), then community feedback pass.",
        resources: []
      },
      {
        id: "matchups",
        name: "Test all character matchups",
        effort: "L",
        desc: "With 8 characters, that's 28 unique matchups. Each needs to feel fair. Some slight advantage is okay (6-4 matchups) but no unwinnable fights (9-1).",
        tips: "Create a matchup chart. Play each matchup at least 5 times (both sides). Note problem matchups and adjust.",
        resources: []
      },
      {
        id: "internal-playtest",
        name: "Run internal playtesting sessions",
        effort: "M",
        desc: "Play your own game extensively. Invite friends over for local play sessions. Watch how new players interact with the game — where do they get confused?",
        tips: "Watch players silently. Don't explain anything. If they're confused, your game needs better communication, not a longer tutorial.",
        beginner: "Playtesting is the most important thing you can do. Your game will have blind spots only fresh eyes can find.",
        resources: []
      },
      {
        id: "beta-test",
        name: "Organize external beta testing",
        effort: "M",
        desc: "Get your game in front of strangers. Use Steam's playtest feature, share builds on Discord, or apply to gaming events. Fresh eyes find bugs and balance issues you never would.",
        tips: "Steam has a free Playtest feature — players can opt-in to test your game before launch. Use it.",
        resources: [
          "Steam Playtest feature — <a href='https://partner.steamgames.com/doc/features/playtest'>partner.steamgames.com</a>"
        ]
      },
      {
        id: "feedback",
        name: "Collect and analyze player feedback",
        effort: "M",
        desc: "Create a feedback form (Google Forms works). Ask: favorite character, least favorite, which moves feel unfair, which arenas are fun/not fun, overall fun rating 1-10.",
        tips: "Ask specific questions, not just 'what do you think?' People give better feedback with structure.",
        resources: []
      },
      {
        id: "iterate-balance",
        name: "Iterate on balance patches",
        effort: "M",
        desc: "Balance is never done. Make small adjustments, test again. Don't overhaul everything at once. Change one variable, test the impact.",
        tips: "Keep a changelog. Small nerfs/buffs (5-10%) are better than wild swings. Players hate when their character gets gutted.",
        resources: []
      },
      {
        id: "hardware-test",
        name: "Test on different hardware configurations",
        effort: "M",
        desc: "Test on low-end PCs, high-end PCs, and different operating systems. Check frame rate, input latency, resolution scaling. Godot exports to Windows, Mac, and Linux.",
        tips: "Ask friends with different PCs to test. If you only have a Mac, use a Windows VM or ask someone to test the Windows build.",
        resources: []
      },
      {
        id: "accessibility",
        name: "Accessibility testing",
        effort: "M",
        desc: "Colorblind modes, remappable controls, screen shake toggle, text size options, audio cues for visual events. Accessibility expands your audience and is the right thing to do.",
        tips: "At minimum: remappable controls, colorblind-friendly UI (don't rely on red/green only), and a screen shake intensity slider.",
        beginner: "The Game Accessibility Guidelines site has a great checklist sorted by difficulty of implementation.",
        resources: [
          "Game Accessibility Guidelines — <a href='https://gameaccessibilityguidelines.com'>gameaccessibilityguidelines.com</a>"
        ]
      }
    ]
  },
  {
    id: "polish",
    icon: "✨",
    title: "Polish & Juice",
    tasks: [
      {
        id: "screenshake",
        name: "Add screen shake on big hits",
        effort: "S",
        desc: "Camera shakes on powerful attacks and KOs. Instantly makes combat feel 10x more impactful. Vary intensity based on hit strength.",
        tips: "Use a simple random offset on the camera. Big hit = big shake (8-12 pixels, 0.3s). Small hit = small shake (2-4 pixels, 0.1s). Always offer a toggle in settings.",
        beginner: "Screen shake is the single easiest way to add 'game feel'. It's like 10 lines of code for massive impact.",
        resources: [
          "Godot screen shake tutorial — search 'Godot 4 screen shake camera' on YouTube"
        ]
      },
      {
        id: "hitstop",
        name: "Implement hit freeze / hitstop frames",
        effort: "S",
        desc: "Freeze the game for 2-5 frames on impact. This tiny pause makes hits feel HEAVY. Every good fighting game does this. Scale freeze duration with hit strength.",
        tips: "Use Engine.time_scale = 0.0 for a few frames, then restore. Or pause just the attacker and target using process_mode. Hitstop is the secret sauce of fighting games.",
        resources: []
      },
      {
        id: "impact-particles",
        name: "Add particle effects on impacts",
        effort: "S",
        desc: "Hit sparks, dust clouds, slime splatter on every hit. Different effects for different attack types. Special moves get bigger, flashier particles.",
        tips: "Create 3-4 generic impact effects (small, medium, large, special) and reuse them across moves. No need for unique particles per move.",
        resources: []
      },
      {
        id: "camera",
        name: "Create smooth camera system",
        effort: "M",
        desc: "Camera that follows the action: zooms in when fighters are close, zooms out when they're far apart. Smooth lerp movement. Frame the action dynamically.",
        tips: "Use Camera2D with smoothing. Calculate the midpoint between all players, then set zoom based on their distance. Clamp zoom to min/max values.",
        resources: []
      },
      {
        id: "rumble",
        name: "Add controller rumble/vibration",
        effort: "S",
        desc: "Vibrate controllers on hits, KOs, and special moves. Different intensity for different impacts. Godot supports controller haptics.",
        tips: "Input.start_joy_vibration(device, weak, strong, duration). Use weak motor for small hits, strong motor for big hits. Players love this.",
        resources: [
          "Godot haptics — <a href='https://docs.godotengine.org/en/stable/classes/class_input.html#class-input-method-start-joy-vibration'>docs.godotengine.org</a>"
        ]
      },
      {
        id: "slowmo",
        name: "Implement slow-motion for finishing moves",
        effort: "S",
        desc: "Slow time to 50% for the final KO hit of a round. Dramatic and exciting. Also great for special move activation.",
        tips: "Engine.time_scale = 0.3 for 0.5 seconds, then lerp back to 1.0. Simple and incredibly effective for dramatic moments.",
        resources: []
      },
      {
        id: "flash-effects",
        name: "Add visual flash on counters/parries",
        effort: "S",
        desc: "White flash on perfect blocks, yellow flash on counters. Brief full-screen flash on ultimate activation. These visual cues communicate gameplay and look cool.",
        tips: "Use a white ColorRect over the screen with an AnimationPlayer to flash it. Or use a shader on the character sprite for per-character flashes.",
        resources: []
      },
      {
        id: "transitions",
        name: "Screen transitions and wipes",
        effort: "S",
        desc: "Smooth transitions between menus, character select, and gameplay. Fade to black, wipe, or custom pixel-art transitions. Avoid jarring instant scene switches.",
        tips: "Create a Transition autoload scene with an AnimationPlayer. Call Transition.fade_to(scene_path) instead of get_tree().change_scene(). Reuse everywhere.",
        resources: []
      },
      {
        id: "loading-tips",
        name: "Loading screen tips and art",
        effort: "S",
        desc: "Show character art, gameplay tips, or lore during loading. Even if loading is fast, a brief splash adds polish and lets you communicate with the player.",
        tips: "Your game will probably load instantly (pixel art is tiny). But a 1-second 'VS' screen before matches builds anticipation.",
        resources: []
      }
    ]
  },
  {
    id: "steam",
    icon: "🚂",
    title: "Steam Integration & Publishing",
    tasks: [
      {
        id: "steamworks-account",
        name: "Create Steamworks developer account ($100)",
        effort: "S",
        desc: "Pay the $100 app fee to Valve. This gets you access to Steamworks, where you manage your game's store page, builds, achievements, and more. Fee is recoupable — you get it back after $1,000 in sales.",
        tips: "Do this early — even before your game is done. Setting up your store page and building wishlists takes time. The $100 is per-game, not per-account.",
        beginner: "Steamworks can be overwhelming at first. Take it step by step. The documentation is actually quite good.",
        resources: [
          "Steamworks signup — <a href='https://partner.steamgames.com'>partner.steamgames.com</a>",
          "Steamworks documentation — <a href='https://partner.steamgames.com/doc/home'>partner.steamgames.com/doc</a>"
        ]
      },
      {
        id: "steam-depot",
        name: "Set up Steam app & depot configuration",
        effort: "M",
        desc: "Configure your app ID, depots (one per platform: Windows, Mac, Linux), and build scripts. Use SteamCMD or the Steamworks web interface to upload builds.",
        tips: "Set up depots for all three platforms even if you only launch on Windows first. It's easier to add Mac/Linux later if the depot exists.",
        resources: [
          "Steamworks depot guide — <a href='https://partner.steamgames.com/doc/store/application'>partner.steamgames.com</a>"
        ]
      },
      {
        id: "achievements",
        name: "Implement Steam achievements",
        effort: "M",
        desc: "Plan 15-30 achievements: complete arcade mode, win with each character, pull off specific moves, play X matches. Achievements drive engagement and completionism.",
        tips: "Mix easy achievements (win your first match) with hard ones (win 100 online matches). Use GodotSteam addon for Steamworks integration.",
        resources: [
          "GodotSteam — <a href='https://godotsteam.com'>godotsteam.com</a>",
          "GodotSteam achievement guide — <a href='https://godotsteam.com/tutorials/achievements/'>godotsteam.com</a>"
        ]
      },
      {
        id: "cloud-save",
        name: "Add Steam Cloud save support",
        effort: "S",
        desc: "Let players keep their progress across computers. Configure which save files to sync in Steamworks. GodotSteam handles the API calls.",
        tips: "Store save data in a single JSON or ConfigFile. Tell Steam Cloud to sync that file. Simple and players expect it.",
        resources: []
      },
      {
        id: "trading-cards",
        name: "Create Steam trading cards (optional)",
        effort: "M",
        desc: "Steam trading cards with character art. Requires creating card art, badges, emoticons, and profile backgrounds. Valve approves these after your game has enough players.",
        tips: "Trading cards are only available after your game reaches a certain player count. Prepare the art but don't stress about it pre-launch.",
        resources: []
      },
      {
        id: "leaderboards",
        name: "Implement Steam leaderboards",
        effort: "S",
        desc: "For survival/endless mode scores, fastest arcade completion, etc. Steam handles the server-side. You just submit scores via the API.",
        tips: "Leaderboards are easy to implement with GodotSteam and add competitive replay value for free.",
        resources: []
      },
      {
        id: "rich-presence",
        name: "Add Steam Rich Presence",
        effort: "S",
        desc: "Show what players are doing in their Steam friends list: 'Fighting in Garden Arena', 'Character Select', 'Arcade Mode - Round 5'. Nice social touch.",
        tips: "A few lines of code with GodotSteam. Update the presence string when game state changes.",
        resources: []
      },
      {
        id: "steam-input",
        name: "Set up Steam Input API for controllers",
        effort: "M",
        desc: "Steam Input lets players customize controls for ANY controller (Xbox, PS, Switch Pro, Steam Deck). Configure default bindings and action sets.",
        tips: "This is how your game works on Steam Deck. Define your actions (attack, jump, block, special) and let Steam Input handle the rest.",
        resources: [
          "Steam Input docs — <a href='https://partner.steamgames.com/doc/features/steam_controller'>partner.steamgames.com</a>"
        ]
      },
      {
        id: "store-page",
        name: "Prepare Steam store page",
        effort: "L",
        desc: "Write description, choose tags, upload screenshots (5+ required), upload capsule images, set system requirements, add content descriptors. This is your storefront — it sells your game.",
        tips: "Set up your store page 6+ months before launch to build wishlists. The description should hook players in the first two sentences. Use GIFs in the description.",
        resources: [
          "Chris Zukowski store page guide — <a href='https://howtomarketagame.com/2021/01/18/how-to-make-a-good-steam-page/'>howtomarketagame.com</a>"
        ]
      },
      {
        id: "capsule-images",
        name: "Create all required capsule images",
        effort: "M",
        desc: "Steam requires multiple image sizes: Header (460x215), Small Capsule (231x87), Main Capsule (616x353), Hero (3840x1240), Logo (1280x720), Library Header, Library Hero. Each has specific requirements.",
        tips: "Design the large images first, then crop/adapt for smaller sizes. Keep key art and logo readable at ALL sizes, especially the tiny capsule.",
        resources: [
          "Full list of required assets — <a href='https://partner.steamgames.com/doc/store/assets'>partner.steamgames.com</a>"
        ]
      },
      {
        id: "store-description",
        name: "Write compelling store description",
        effort: "S",
        desc: "Lead with your hook: 'Physics-based snail brawling!' Then features, then details. Use short paragraphs, bullet points, and GIFs. Include feature list: local multiplayer, X characters, X arenas.",
        tips: "Study store pages of successful indie fighters. Note how they structure the description. First 3 lines are the most important — they show above the fold.",
        resources: []
      },
      {
        id: "pricing",
        name: "Set up pricing & regional pricing",
        effort: "S",
        desc: "Choose your base USD price. Steam auto-generates regional pricing but you can adjust. Consider your content amount, quality, and competitor pricing.",
        tips: "Use Steam's recommended regional pricing. For base price, $9.99-14.99 is right for an indie brawler with 8+ characters and multiple modes.",
        resources: []
      },
      {
        id: "launch-discount",
        name: "Plan launch discount strategy",
        effort: "S",
        desc: "A 10-15% launch discount is standard and drives initial sales. Steam allows a launch discount that runs for the first week. Don't go higher than 20% — it devalues your game.",
        tips: "10% launch discount is the sweet spot. It triggers wishlist notifications and gives people that extra nudge to buy on day one.",
        resources: []
      },
      {
        id: "steam-review",
        name: "Submit build for Steam review",
        effort: "S",
        desc: "Steam reviews your game before it can go live. Submit at least 2 weeks before your planned launch. They check for broken functionality, not quality.",
        tips: "Submit early. If they find issues, you need time to fix and resubmit. Most first submissions have small issues to address.",
        resources: []
      },
      {
        id: "release-plan",
        name: "Plan release date & marketing timeline",
        effort: "M",
        desc: "Pick a release date and work backward: store page live 6 months before, trailer 3 months before, press outreach 1 month before, launch week marketing blitz.",
        tips: "Avoid launching same week as major AAA releases. Tuesday and Thursday are traditional game launch days. Check upcoming releases on Steam.",
        resources: []
      }
    ]
  }
];
