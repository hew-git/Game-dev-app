// Categories 13-15: Marketing, Legal, Post-Launch
const DATA_PART4 = [
  {
    id: "marketing",
    icon: "📣",
    title: "Marketing & Community",
    tasks: [
      {
        id: "logo-branding",
        name: "Create game logo & branding",
        effort: "M",
        desc: "Your logo appears everywhere: store page, social media, trailers, merch. It needs to be readable at small sizes, look good on dark and light backgrounds, and convey the fun/funky tone of a snail brawler.",
        tips: "Bold, chunky lettering works best for game logos. Add a snail shell motif to a letter. Test it at 32x32 pixels — if it's still readable, it's a good logo.",
        resources: [
          "Logo design inspiration — browse indie game logos on Steam",
          "Free design tool — <a href='https://www.canva.com'>canva.com</a>"
        ]
      },
      {
        id: "website",
        name: "Build a landing page / website",
        effort: "M",
        desc: "A simple one-page site: logo, trailer embed, feature bullet points, screenshots, Steam wishlist button, social links. Use a free host like GitHub Pages or itch.io.",
        tips: "The Steam wishlist button is the most important element on your site. Make it prominent. Everything else drives toward that button.",
        resources: [
          "GitHub Pages (free hosting) — <a href='https://pages.github.com'>pages.github.com</a>",
          "itch.io game page (free) — <a href='https://itch.io'>itch.io</a>"
        ]
      },
      {
        id: "social-media",
        name: "Set up social media accounts",
        effort: "S",
        desc: "Create accounts on Twitter/X, TikTok, and optionally Instagram. Use the same handle and branding everywhere. Post regularly (2-3 times per week minimum).",
        tips: "Twitter/X is still the biggest platform for indie game marketing. TikTok has huge viral potential for funny/quirky games like yours. Short clips of snails fighting = engagement gold.",
        beginner: "Don't try to be on every platform. Pick 1-2 and be consistent. Twitter + TikTok is the best combo for indie games right now.",
        resources: [
          "How to Market a Game blog — <a href='https://howtomarketagame.com'>howtomarketagame.com</a>"
        ]
      },
      {
        id: "devlogs",
        name: "Create and post development logs",
        effort: "M",
        desc: "Share your progress regularly: new characters, new arenas, gameplay clips, pixel art process. People love following game development journeys, especially first-time devs.",
        tips: "Devlogs work best as short videos or GIF threads. Show before/after, time-lapses of art creation, funny bugs. Your game's silly concept is inherently shareable.",
        resources: [
          "Post devlogs on Twitter, TikTok, Reddit (r/gamedev, r/indiegaming), and YouTube"
        ]
      },
      {
        id: "trailer",
        name: "Make a game trailer",
        effort: "L",
        desc: "60-90 seconds showing your best gameplay. Open with a hook (5 seconds to grab attention), show variety (characters, arenas, modes), end with logo and Steam wishlist CTA.",
        tips: "Watch trailers for games like Rivals of Aether, Duck Game, Brawlhalla for structure. Cut to the beat of the music. Show action, not menus.",
        resources: [
          "Derek Lieu's trailer advice — <a href='https://www.derek-lieu.com/start-here'>derek-lieu.com</a>",
          "DaVinci Resolve (free video editor) — <a href='https://www.blackmagicdesign.com/products/davinciresolve'>blackmagicdesign.com</a>"
        ]
      },
      {
        id: "social-clips",
        name: "Create GIFs and clips for social media",
        effort: "S",
        desc: "Short, looping clips of cool moments: combos, KOs, funny physics, new character reveals. These are your marketing bread and butter. Easy to make, easy to share.",
        tips: "Record gameplay with OBS, trim to 5-15 seconds, export as GIF or MP4. Post with a short caption. The snail physics will sell themselves.",
        resources: [
          "OBS Studio (free recording) — <a href='https://obsproject.com'>obsproject.com</a>",
          "GIF maker — <a href='https://ezgif.com'>ezgif.com</a>"
        ]
      },
      {
        id: "press",
        name: "Submit to gaming press & YouTubers",
        effort: "M",
        desc: "Build a list of indie game journalists, YouTubers, and streamers who cover similar games. Send personalized emails with a press kit, Steam key, and short pitch.",
        tips: "Quality over quantity. 20 personalized emails beat 200 copy-pasted ones. Reference their past coverage of similar games. Include a gameplay GIF in the email.",
        resources: [
          "Games Press (submit your game) — <a href='https://www.gamespress.com'>gamespress.com</a>"
        ]
      },
      {
        id: "events",
        name: "Participate in game jams and festivals",
        effort: "M",
        desc: "Enter online festivals (Steam Next Fest, itch.io festivals), apply to indie showcases (PAX Rising, The MIX, Day of the Devs). Even small showcases bring visibility.",
        tips: "Steam Next Fest is FREE and massively valuable. Apply early. You get a demo on the front page for a week. It's the best marketing opportunity for indie devs.",
        resources: [
          "Steam Next Fest — <a href='https://partner.steamgames.com/doc/marketing/upcoming_events/nextfest'>partner.steamgames.com</a>"
        ]
      },
      {
        id: "discord",
        name: "Set up a Discord server for community",
        effort: "S",
        desc: "Create a Discord with channels: announcements, general chat, feedback, bug reports, fan art. Your most engaged fans will live here. This becomes your feedback pipeline and support channel.",
        tips: "Start the Discord when your store page goes live. Even 50 active community members is incredibly valuable for feedback and word-of-mouth.",
        resources: [
          "Discord server setup — <a href='https://discord.com'>discord.com</a>"
        ]
      },
      {
        id: "press-kit",
        name: "Create a press kit",
        effort: "M",
        desc: "A downloadable package with: game description, key features, screenshots (high-res), logo files, developer bio, contact info, trailer link. Host it on your website.",
        tips: "Use presskit() or just a Google Drive folder. Journalists need assets fast. Make it easy for them to write about your game.",
        resources: [
          "presskit() generator — <a href='https://dopresskit.com'>dopresskit.com</a>"
        ]
      },
      {
        id: "ea-vs-full",
        name: "Plan Early Access vs full launch",
        effort: "S",
        desc: "Early Access: launch with partial content, add more over time. Full launch: ship the complete game. For a fighting game, full launch is usually better — players expect a roster and modes.",
        tips: "If you have 4+ characters, 4+ arenas, and arcade + local multiplayer: consider full launch. If less, Early Access with a clear roadmap works too.",
        resources: [
          "Steam Early Access guide — <a href='https://partner.steamgames.com/doc/store/earlyaccess'>partner.steamgames.com</a>"
        ]
      },
      {
        id: "next-fest",
        name: "Apply for Steam Next Fest",
        effort: "M",
        desc: "Submit a playable demo for Steam Next Fest (happens 3x per year: February, June, October). Your demo gets featured on Steam's front page. Massive wishlist boost potential.",
        tips: "Apply 3+ months before the event. Your demo should be polished — it's many players' first impression. Include 2-3 characters and 1-2 arenas.",
        resources: []
      },
      {
        id: "streamers",
        name: "Reach out to streamers for launch coverage",
        effort: "M",
        desc: "Contact Twitch and YouTube streamers who play indie fighters or party games. Offer free keys. Funny physics games are natural streamer bait — snails fighting is inherently entertaining to watch.",
        tips: "Target mid-size streamers (1K-50K followers). They're more likely to play your game than big streamers and their audiences are more engaged.",
        resources: []
      }
    ]
  },
  {
    id: "legal",
    icon: "⚖️",
    title: "Legal & Business",
    tasks: [
      {
        id: "business-entity",
        name: "Register a business entity (if applicable)",
        effort: "M",
        desc: "An LLC or sole proprietorship separates your personal and business finances. Not strictly required for your first game, but recommended once revenue starts coming in.",
        tips: "For a first game, you can publish as an individual. If you start making real money, set up an LLC. Consult a local accountant — it's worth the $100-200.",
        resources: []
      },
      {
        id: "taxes",
        name: "Understand tax obligations",
        effort: "M",
        desc: "Steam pays you revenue and sends tax forms. You need to report this income. Steam withholds taxes for US-based sales. Understand your local tax obligations for self-employment income.",
        tips: "Fill out your tax information in Steamworks immediately. If you're in the US, you'll get a 1099. Set aside 25-30% of revenue for taxes. Talk to an accountant.",
        resources: [
          "Steamworks finance FAQ — <a href='https://partner.steamgames.com/doc/finance/taxfaq'>partner.steamgames.com</a>"
        ]
      },
      {
        id: "eula",
        name: "Create EULA and privacy policy",
        effort: "S",
        desc: "Steam provides a default EULA (Steam Subscriber Agreement). If your game doesn't collect personal data or have online features, that's sufficient. Add a privacy policy if you collect any data.",
        tips: "The default Steam EULA covers most cases for a simple indie game. If you add online play with accounts, you'll need a privacy policy. Use a generator to start.",
        resources: []
      },
      {
        id: "trademarks",
        name: "Register copyrights/trademarks for game name",
        effort: "M",
        desc: "Search the USPTO to make sure your game name isn't taken. A trademark registration costs ~$250-350 per class. Copyright your game automatically exists once created, but registration strengthens it.",
        tips: "At minimum: do a trademark search to make sure nobody else has your game name. You don't want to rename your game after launch. Search on USPTO.gov and do a Steam search.",
        resources: [
          "USPTO trademark search — <a href='https://www.uspto.gov/trademarks/search'>uspto.gov</a>"
        ]
      },
      {
        id: "banking",
        name: "Set up payment/banking for Steam payouts",
        effort: "S",
        desc: "Configure your bank account in Steamworks for revenue payments. Steam pays monthly, 30 days after the end of each month. Minimum payout is $100.",
        tips: "Set this up when you create your Steamworks account. Steam takes a 30% cut (drops to 25% after $10M, 20% after $50M). You keep 70%.",
        resources: []
      },
      {
        id: "licenses",
        name: "Review middleware and asset licenses",
        effort: "S",
        desc: "Check licenses for any third-party assets: fonts, sound effects, music, code libraries, GodotSteam addon. Make sure everything allows commercial use.",
        tips: "Keep a spreadsheet of every third-party asset: name, source, license type, commercial use allowed (yes/no). Do this from day one.",
        beginner: "Creative Commons licenses vary. CC0 = do anything. CC-BY = credit required. CC-NC = no commercial use (don't use these). Always check.",
        resources: []
      },
      {
        id: "ratings",
        name: "Plan for ESRB/PEGI rating (IARC self-rating)",
        effort: "S",
        desc: "Steam uses IARC (International Age Rating Coalition) for ratings. You fill out a questionnaire about your game's content and get a rating automatically. It's free and takes 10 minutes.",
        tips: "A cartoon snail fighting game will likely get an E10+ or Teen rating. The IARC questionnaire is part of the Steam release process. Be honest about content.",
        resources: [
          "IARC info — <a href='https://www.globalratings.com'>globalratings.com</a>"
        ]
      }
    ]
  },
  {
    id: "postlaunch",
    icon: "🚀",
    title: "Post-Launch Support",
    tasks: [
      {
        id: "day1-patch",
        name: "Plan Day 1 patch process",
        effort: "S",
        desc: "Have a build ready to push on launch day with any last-minute fixes. Set up your SteamCMD workflow so you can push updates quickly. Test the update process before launch.",
        tips: "Launch day will be stressful. Have your build pipeline tested and ready. Keep a list of known issues that need immediate fixing.",
        resources: []
      },
      {
        id: "crash-reporting",
        name: "Set up crash reporting & analytics",
        effort: "M",
        desc: "Know when your game crashes and why. Godot can catch errors and log them. Consider a simple analytics system for play patterns (which characters are popular, which arenas, average session length).",
        tips: "At minimum: write errors to a log file. Ideally: use a service like Sentry or GameAnalytics. Steam also shows crash reports for your game.",
        resources: [
          "GameAnalytics (free tier) — <a href='https://gameanalytics.com'>gameanalytics.com</a>"
        ]
      },
      {
        id: "bug-reports",
        name: "Create bug report system for players",
        effort: "S",
        desc: "Set up a way for players to report bugs: Discord channel, Google Form, Steam discussions board, or in-game reporting. Make it easy or players won't bother.",
        tips: "A 'bug-reports' channel in your Discord is the simplest approach. Pin a template: 'What happened? What were you doing? What character/arena?'",
        resources: []
      },
      {
        id: "update-roadmap",
        name: "Plan content update roadmap",
        effort: "M",
        desc: "Communicate your post-launch plans: new characters, new arenas, balance patches, new modes. A public roadmap builds trust and excitement. Aim for monthly updates in the first 3-6 months.",
        tips: "The first 2 weeks after launch are critical for Steam's algorithm. Updates and activity keep your game visible. Have your first content update planned for 2-4 weeks post-launch.",
        resources: []
      },
      {
        id: "support",
        name: "Prepare customer support workflow",
        effort: "S",
        desc: "Plan how you'll handle player issues: refund requests (Steam handles these), technical problems, bug reports. Have FAQ answers ready for common issues.",
        tips: "Create a FAQ in Steam Discussions covering: controller not working, game not launching, performance issues. This reduces support load massively.",
        resources: []
      },
      {
        id: "reviews",
        name: "Monitor and respond to Steam reviews",
        effort: "M",
        desc: "Read every review. Respond to negative reviews constructively — 'Thanks for the feedback, we're working on X.' Never argue. Positive engagement turns some negative reviews positive.",
        tips: "Responding to reviews shows you care. Keep it short and professional. If multiple reviews mention the same issue, prioritize fixing it.",
        resources: []
      },
      {
        id: "dlc",
        name: "Plan DLC or expansion content",
        effort: "M",
        desc: "New characters, new arenas, cosmetic packs, story expansions. DLC extends your game's life and revenue. Free updates build goodwill; paid DLC funds continued development.",
        tips: "Mix free updates (balance patches, quality of life) with paid DLC (new characters, arena packs). The community will appreciate the free content and accept paid additions.",
        resources: []
      },
      {
        id: "community-mgmt",
        name: "Set up community management schedule",
        effort: "S",
        desc: "Dedicate time each day/week to community: check Discord, respond to reviews, post updates, engage on social media. Even 30 minutes daily makes a difference.",
        tips: "Batch your community time. Check everything once in the morning, once in the evening. Don't let it consume your entire day — you still need to make updates.",
        resources: []
      }
    ]
  }
];
