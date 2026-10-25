/* ============================================================
   CẤU HÌNH CÁ NHÂN, HỒ SƠ CHUYÊN MÔN (CV) & ĐA NGÔN NGỮ (VI / EN)
   Đồng bộ từ GitHub Profile: https://github.com/lxmtuu (Yami)
   ============================================================ */
window.SITE = {
  // Dòng chữ gõ máy (typewriter) ở trang chủ theo từng ngôn ngữ
  typelines: {
    vi: [
      'Fullstack Developer • Software Engineer 💻',
      'Next.js • Express • PostgreSQL • Prisma ⚙️',
      'C# • .NET 10 • WPF • Direct3D 11 🖥️',
      'Piano • Guitar • Anime & Gaming 🎹',
      'Hatsune Miku Digital Stage ♪'
    ],
    en: [
      'Fullstack Developer • Software Engineer 💻',
      'Next.js • Express • PostgreSQL • Prisma ⚙️',
      'C# • .NET 10 • WPF • Direct3D 11 🖥️',
      'Piano • Guitar • Anime & Gaming 🎹',
      'Hatsune Miku Digital Stage ♪'
    ]
  },

  // ★ DỰ ÁN TIÊU BIỂU (Featured Engineering Projects)
  // category: 'desktop' | 'fullstack' | 'audio'
  projects: [
    {
      icon: '🎹',
      year: '2026',
      category: 'desktop',
      badge: 'Desktop • GPU Engine',
      badge_en: 'Desktop • GPU Engine',
      title: 'KeyFlow',
      title_en: 'KeyFlow',
      desc: 'Ứng dụng desktop trực quan hóa Piano thời gian thực, hiệu ứng thị giác tùy chỉnh & sản xuất video MIDI với engine GPU Direct3D 11.',
      desc_en: 'Real-time MIDI piano visualization, customizable visual effects & concert video production desktop suite powered by a custom Direct3D 11 GPU engine.',
      highlights: [
        'Engine GPU Direct3D 11 đa luồng: HDR 16-bit, bloom nhiều tầng, đạt tới 240 FPS không gây trễ đầu vào MIDI.',
        'Bàn phím 88 phím 3D đổ bóng PBR theo mô hình Unreal (GGX + softbox + ACES tonemapping) & hạt tia lửa bức xạ nhiệt.',
        'Tùy chỉnh hiệu ứng hạt (Wisps / Flames), ánh sáng sân khấu và hỗ trợ song ngữ Anh – Việt đổi tức thì.'
      ],
      highlights_en: [
        'Multi-threaded Direct3D 11 GPU engine: 16-bit HDR pipeline, multi-pass bloom, up to 240 FPS with zero MIDI input latency.',
        '88-key 3D keyboard with Unreal-inspired PBR shading (GGX + softbox + ACES tonemapping) & blackbody thermal sparks.',
        'Customizable particle systems (Wisps / Flames), stage lighting, and instant English–Vietnamese hot-swappable UI.'
      ],
      tech: ['C#', '.NET 10', 'WPF', 'Direct3D 11', 'HLSL Shaders', 'Python', 'PowerShell', 'Inno Setup'],
      repo: 'https://github.com/lxmtuu/KeyFlow',
      repoLabel: '📦 GitHub Release',
      repoLabel_en: '📦 GitHub Release',
      demo: 'https://ymkeyflow.online/'
    },
    {
      icon: '🛒',
      year: '2025',
      category: 'fullstack',
      badge: 'Fullstack E-commerce',
      badge_en: 'Fullstack E-commerce',
      title: 'ShopVN — Sàn TMĐT Fullstack',
      title_en: 'ShopVN — Fullstack E-commerce',
      desc: 'Hệ thống thương mại điện tử toàn diện với Next.js 15 App Router (29 routes) và Express REST API (48 endpoints).',
      desc_en: 'End-to-end e-commerce platform built with Next.js 15 App Router (29 routes) and Express REST API (48 endpoints).',
      highlights: [
        'Xác thực JWT (Refresh-Token Rotation), Google OAuth, ma trận phân quyền RBAC và bảo mật chuẩn OWASP.',
        'Tích hợp thanh toán VietQR tự sinh chuẩn EMVCo kèm webhook HMAC đối soát tự động với transaction Serializable.',
        '36/36 unit test backend pass, tsc --noEmit 0 lỗi, kèm bộ 7 tài liệu đặc tả SRS, ADR, ERD & Design System.'
      ],
      highlights_en: [
        'JWT authentication with Refresh-Token Rotation, Google OAuth, fine-grained RBAC matrix, and OWASP security hardening.',
        'Dynamic EMVCo VietQR payment generation with HMAC-verified webhook auto-reconciliation using Serializable transactions.',
        '36/36 backend unit tests passing, 0 TypeScript errors (tsc --noEmit), plus 7 comprehensive SRS, ADR, ERD & Design System docs.'
      ],
      tech: ['Next.js 15', 'TypeScript', 'Express.js', 'PostgreSQL 16', 'Prisma ORM', 'Docker', 'VietQR EMVCo'],
      repo: 'https://github.com/lxmtuu/shopvn-ecommerce-fullstack',
      demo: ''
    },
    {
      icon: '🏔️',
      year: '2026',
      category: 'fullstack',
      badge: 'Backend-First System',
      badge_en: 'Backend-First System',
      title: 'LakStay — Đặt Phòng Khách Sạn',
      title_en: 'LakStay — Hotel Booking System',
      desc: 'Hệ thống đặt phòng khách sạn tại Đà Lạt thiết kế theo tư duy Backend-First, đảm bảo toàn vẹn dữ liệu và thời gian thực.',
      desc_en: 'Backend-first hotel reservation system designed for strict data integrity, concurrency control, and real-time updates.',
      highlights: [
        'Cơ chế chống double-booking 4 lớp, ACID transaction kết hợp optimistic locking và state machine quản lý đơn phòng.',
        'Thanh toán VietQR chuẩn EMVCo, tự động xuất voucher PDF (pdfkit), gửi email và thông báo thời gian thực qua SSE.',
        'Tích hợp hạng thành viên, đa ngôn ngữ vi/en, bảo mật Helmet/Zod/httpOnly Cookie và trang quản trị biểu đồ doanh thu.'
      ],
      highlights_en: [
        '4-layer anti-double-booking protection, ACID transactions with optimistic locking, and a strict booking state machine.',
        'EMVCo VietQR payment integration, automated PDF voucher generation (PDFKit), email dispatch, and real-time SSE notifications.',
        'Membership tiers, bilingual vi/en support, Helmet/Zod/httpOnly cookie security, and an analytics admin dashboard.'
      ],
      tech: ['Node.js 20+', 'Express', 'SQLite (WAL)', 'SSE Realtime', 'PDFKit', 'Zod', 'Docker'],
      repo: 'https://github.com/lxmtuu/lakstay',
      demo: ''
    },
    {
      icon: '🎼',
      year: '2025',
      category: 'audio',
      badge: 'Web MIDI • Audio Tech',
      badge_en: 'Web MIDI • Audio Tech',
      title: 'Melody House — Web MIDI Piano',
      title_en: 'Melody House — Web MIDI Piano',
      desc: 'Nền tảng Web Piano thế hệ mới kết nối trực tiếp với đàn Piano thật qua cáp USB MIDI ngay trên trình duyệt.',
      desc_en: 'Next-generation Web Piano platform connecting directly to physical digital pianos via USB MIDI right in the browser.',
      highlights: [
        'Tích hợp Web MIDI API nhận diện chính xác lực gõ phím (Velocity) và cả 3 Pedal (Sustain, Soft, Sostenuto).',
        'Visualizer rơi nốt nhạc phong cách Synthesia với hiệu ứng Glow & hạt vật lý 3D tùy chỉnh linh hoạt.',
        'Tone.js Audio Engine tái tạo âm thanh từ bộ sample thu âm thật của đại dương cầm Salamander Grand Piano.'
      ],
      highlights_en: [
        'Direct Web MIDI API hardware integration capturing key velocity and all 3 pedals (Sustain, Soft, Sostenuto).',
        'Synthesia-style falling-note visualizer with customizable 3D particle physics and neon glow effects.',
        'Tone.js audio engine powered by authentic acoustic multi-samples from a Salamander Grand Piano.'
      ],
      tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Tone.js', 'Web MIDI API', 'Express', 'Prisma'],
      repo: 'https://github.com/lxmtuu/melody-house-protect',
      demo: ''
    },
    {
      icon: '🌸',
      year: '2025',
      category: 'fullstack',
      badge: 'Fullstack Web App',
      badge_en: 'Fullstack Web App',
      title: 'Sakura Music Shop',
      title_en: 'Sakura Music Shop',
      desc: 'Website thương mại điện tử chuyên doanh nhạc cụ với ngôn ngữ thiết kế Anime Sakura & hiệu ứng kính mờ.',
      desc_en: 'Musical instrument e-commerce web application featuring an Anime Sakura glassmorphism aesthetic.',
      highlights: [
        'Luồng mua sắm trọn vẹn: đăng ký/đăng nhập, bộ lọc nhạc cụ, giỏ hàng và thanh toán QR VietQR / Chuyển khoản / COD.',
        'Hệ thống Admin Dashboard quản lý vòng đời đơn hàng, tồn kho sản phẩm, hồ sơ khách hàng và thống kê doanh thu.',
        'Giao diện tối ưu trải nghiệm người dùng với hiệu ứng hoa anh đào rơi và phản hồi mượt mà trên mọi thiết bị.'
      ],
      highlights_en: [
        'Complete shopping flow: user authentication, instrument catalog filtering, cart management, and VietQR / Bank Transfer / COD checkout.',
        'Full Admin Dashboard managing order lifecycles, product inventory, customer profiles, and revenue statistics.',
        'Responsive glassmorphism interface with falling cherry blossom effects and smooth interactions across devices.'
      ],
      tech: ['Node.js', 'Express.js', 'REST API', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'VietQR'],
      repo: 'https://github.com/lxmtuu/sakura-music',
      demo: ''
    },
    {
      icon: '🎤',
      year: '2026',
      category: 'audio',
      badge: 'Creative Web • Synth',
      badge_en: 'Creative Web • Synth',
      title: 'Yami Miku Portfolio',
      title_en: 'Yami Miku Portfolio',
      desc: 'Website CV cá nhân chủ đề Hatsune Miku tích hợp bộ tổng hợp nhạc Web Audio API và đàn Piano tương tác.',
      desc_en: 'Hatsune Miku-themed interactive developer portfolio featuring a custom Web Audio API synthesizer and playable mini piano.',
      highlights: [
        'Bộ tổng hợp âm thanh (Synthesizer) viết bằng Web Audio API tự chơi vòng hòa thanh, arpeggio, trống & giai điệu.',
        'Đàn Piano Mini 13 phím hỗ trợ cảm ứng, bàn phím máy tính (A–K / W–U), tự chơi giai điệu mẫu và sóng nhạc thời gian thực.',
        'Kiến trúc SPA thuần chuẩn SEO Open Graph, 0 thư viện ngoài, tốc độ tải tức thì và chuyển cảnh mượt mà.'
      ],
      highlights_en: [
        'Custom Web Audio API synthesizer generating real-time chord progressions, arpeggios, drums, and melodies.',
        '13-key interactive Mini Piano supporting touch, computer keyboard (A–K / W–U), demo songs, and real-time audio spectrum.',
        'Zero-dependency vanilla SPA with Open Graph SEO, instant bilingual VI/EN switching, and multi-layered stage transitions.'
      ],
      tech: ['HTML5', 'CSS3', 'Vanilla JS', 'Web Audio API', 'HTML5 Canvas', 'GitHub Pages'],
      repo: 'https://github.com/lxmtuu/miku-portfolio',
      demo: 'https://lxmtuu.id.vn'
    }
  ],

  // ★ NHÓM KỸ NĂNG CHUYÊN MÔN (hiển thị ở trang Giới thiệu / CV)
  skillGroups: [
    {
      title: '🎨 Frontend & Creative Web',
      title_en: '🎨 Frontend & Creative Web',
      items: [
        { name: 'React • Next.js 15 (App Router)', level: 84 },
        { name: 'TypeScript • JavaScript (ES6+)', level: 88 },
        { name: 'HTML5 • CSS3 • Tailwind CSS', level: 92 },
        { name: 'Web MIDI • Web Audio • Tone.js', level: 85 }
      ]
    },
    {
      title: '⚙️ Backend & Kiến trúc Hệ thống',
      title_en: '⚙️ Backend & System Architecture',
      items: [
        { name: 'Node.js • Express • RESTful API', level: 86 },
        { name: 'JWT Rotation • OAuth • RBAC • OWASP', level: 82 },
        { name: 'VietQR EMVCo • Webhook HMAC • SSE', level: 85 }
      ]
    },
    {
      title: '🖥️ Desktop, GPU & Cơ sở dữ liệu',
      title_en: '🖥️ Desktop, GPU & Databases',
      items: [
        { name: 'C# • .NET 10 • WPF Desktop', level: 82 },
        { name: 'Direct3D 11 • HLSL GPU Shaders', level: 76 },
        { name: 'PostgreSQL • Prisma ORM • SQLite WAL', level: 84 }
      ]
    },
    {
      title: '🧰 DevOps, Scripting & Công cụ',
      title_en: '🧰 DevOps, Scripting & Tooling',
      items: [
        { name: 'Git • GitHub Actions CI • Docker', level: 85 },
        { name: 'Python • PowerShell • Inno Setup', level: 78 },
        { name: 'SRS / ADR / ERD • Figma • VS Code', level: 85 }
      ]
    }
  ],

  // ★ TIMELINE KINH NGHIỆM & HỌC VẤN (trang Giới thiệu / CV)
  timeline: [
    {
      year: '2026 — Hiện tại',
      year_en: '2026 — Present',
      tag: '🚀',
      title: 'Fullstack & Desktop Software Engineer',
      title_en: 'Fullstack & Desktop Software Engineer',
      desc: 'Tự thiết kế và phát triển KeyFlow (.NET 10, WPF, Direct3D 11 240 FPS) cùng hệ thống đặt phòng LakStay (chống double-booking 4 lớp, VietQR EMVCo, SSE). Thành viên GitHub Developer Program.',
      desc_en: 'Architected and built KeyFlow (.NET 10, WPF, Direct3D 11 at 240 FPS) and LakStay Hotel Booking System (4-layer anti-double-booking, EMVCo VietQR, real-time SSE). GitHub Developer Program Member.'
    },
    {
      year: '2025',
      year_en: '2025',
      tag: '💻',
      title: 'Phát triển các Dự án Web Fullstack & Âm nhạc',
      title_en: 'Fullstack Web & Music Tech Projects',
      desc: 'Xây dựng sàn TMĐT ShopVN (Next.js 15, Express, PostgreSQL, Prisma), nền tảng chơi đàn Melody House (Web MIDI API, Tone.js Salamander Piano) và Sakura Music Shop.',
      desc_en: 'Developed ShopVN E-commerce (Next.js 15, Express, PostgreSQL, Prisma), Melody House Web MIDI Piano (Web MIDI API, Tone.js Salamander Grand Piano), and Sakura Music Shop.'
    },
    {
      year: '2024 — Hiện tại',
      year_en: '2024 — Present',
      tag: '🎓',
      title: 'Sinh viên Công nghệ Thông tin (Software Engineering)',
      title_en: 'Information Technology Student (Software Engineering)',
      desc: 'Theo đuổi chuyên ngành Kỹ thuật Phần mềm — rèn luyện nền tảng cấu trúc dữ liệu, giải thuật, cơ sở dữ liệu quan hệ, kiến trúc hệ thống và bảo mật ứng dụng.',
      desc_en: 'Majoring in Software Engineering — focusing on data structures & algorithms, relational databases, system architecture, and application security.'
    }
  ],

  // ★ SỞ THÍCH 1: CHƠI ĐÀN (trang Sở thích)
  instruments: [
    {
      icon: '🎹',
      name: 'Piano & MIDI Keyboard',
      name_en: 'Piano & MIDI Keyboard',
      tag: '♥ Cây đàn gắn bó nhất',
      tag_en: '♥ Closest to my heart',
      desc: 'Sau những giờ nhìn màn hình code, ngồi trước phím đàn là cách nhanh nhất để mình lấy lại cân bằng. Mình thích tự tìm sheet, tập nhạc phim anime và cắm đàn vào máy tính để vừa chơi vừa ngắm hiệu ứng nốt rơi do chính mình lập trình.',
      desc_en: 'After hours in front of code, sitting at the piano keys is my favorite way to unwind. I love learning anime soundtracks by sheet or ear, and plugging my keyboard into my PC to play with the falling-note visualizers I built myself.',
      details: [
        'Hay tập những bản OST anime nhẹ nhàng, piano ballad và nhạc Vocaloid chuyển soạn.',
        'Thích cảm giác trau chuốt lực ngón tay (velocity) và giữ pedal ngân vang trong không gian yên tĩnh.',
        'Chính thói quen chơi đàn mỗi tối đã thôi thúc mình bắt tay vào làm KeyFlow và Melody House.'
      ],
      details_en: [
        'Frequently practice emotional anime OSTs, piano ballads, and Vocaloid piano arrangements.',
        'Love shaping dynamics through touch velocity and expressive sustain pedaling in a quiet room.',
        'My nightly piano sessions directly inspired me to create both KeyFlow and Melody House.'
      ],
      chips: ['Anime OST', 'Piano Ballad', 'USB MIDI', 'Cảm âm & Chuyển soạn'],
      chips_en: ['Anime OST', 'Piano Ballad', 'USB MIDI', 'By Ear & Arrangement']
    },
    {
      icon: '🎸',
      name: 'Acoustic Guitar',
      name_en: 'Acoustic Guitar',
      tag: '🍂 Góc chill mộc mạc',
      tag_en: '🍂 Warm & acoustic',
      desc: 'Nếu piano mang lại sự tĩnh lặng thì cây guitar gỗ lại đem đến cảm giác tự do, gần gũi. Những buổi chiều mưa se lạnh, chỉ cần ôm đàn dạo vài hợp âm quen thuộc là thấy lòng nhẹ tênh.',
      desc_en: 'While the piano brings stillness, my acoustic guitar feels warm, casual, and free. On rainy afternoons, strumming a few familiar chords is all it takes to clear my head.',
      details: [
        'Thích gảy fingerstyle mộc mạc và đệm hát những bản acoustic pop, indie nhẹ nhàng.',
        'Mê âm sắc ấm áp của những thế bấm hợp âm mở (Maj7, Add9) giàu cảm xúc.',
        'Là người bạn đồng hành quen thuộc trong những buổi ngồi cà phê hay tụ tập cùng bạn bè.'
      ],
      details_en: [
        'Enjoy fingerstyle arrangements and strumming mellow acoustic pop and indie songs.',
        'Love the warm resonance of open voicings like Maj7 and Add9 chords.',
        'Always my go-to companion for cozy coffee hangouts and jam sessions with friends.'
      ],
      chips: ['Fingerstyle', 'Acoustic Chill', 'Hợp âm Maj7', 'Đệm hát'],
      chips_en: ['Fingerstyle', 'Acoustic Chill', 'Maj7 Voicings', 'Accompaniment']
    },
    {
      icon: '⚡',
      name: 'Guitar Điện (Electric Guitar)',
      name_en: 'Electric Guitar',
      tag: '🔥 Năng lượng bùng nổ',
      tag_en: '🔥 High-voltage energy',
      desc: 'Một góc cá tính hoàn toàn trái ngược với vẻ êm dịu của piano. Khi muốn giải phóng năng lượng hay cháy hết mình cùng một bản J-Rock, không gì sảng khoái bằng tiếng guitar điện qua hiệu ứng overdrive.',
      desc_en: 'A completely different side from the gentle piano. Whenever I want an energy boost or feel like jamming along to a fast J-Rock track, nothing beats an electric guitar through crisp overdrive.',
      details: [
        'Thích tập các câu riff mở đầu anime (Anime OP) và những đoạn solo tốc độ.',
        'Hay mày mò phối ghép tiếng đàn qua các phần mềm giả lập amp, delay và distortion trên máy tính.',
        'Truyền cảm hứng rất lớn từ những ban nhạc học đường trong K-On! và Bocchi the Rock!.'
      ],
      details_en: [
        'Love practicing punchy anime opening riffs and melodic lead guitar solos.',
        'Enjoy tweaking amp sims, overdrive, and delay pedal chains on my computer.',
        'Heavily inspired by theバンド (band) spirit of K-On! and Bocchi the Rock!.'
      ],
      chips: ['J-Rock', 'Overdrive / Distortion', 'Guitar Solo', 'Anime OP'],
      chips_en: ['J-Rock', 'Overdrive / Distortion', 'Guitar Solo', 'Anime OP']
    }
  ],

  // ★ SỞ THÍCH 2: NGHE NHẠC (trang Sở thích)
  musicTaste: [
    {
      icon: '🎤',
      genre: 'Vocaloid & Hatsune Miku',
      genre_en: 'Vocaloid & Hatsune Miku',
      artists: 'Hatsune Miku • DECO*27 • ryo (supercell) • wowaka • PinocchioP',
      desc: 'Mình biết đến và yêu quý Miku từ những giai điệu điện tử vừa trong trẻo vừa giàu năng lượng. Toàn bộ sắc xanh teal và không khí sân khấu của trang web này đều bắt nguồn từ niềm yêu thích đó.',
      desc_en: 'I fell in love with Miku’s music for its blend of bright electronic energy and heartfelt melodies. The signature teal palette and stage atmosphere of this entire portfolio come straight from that love.',
      vibe: '39! Cảm hứng chủ đạo',
      vibe_en: '39! Core Inspiration'
    },
    {
      icon: '🎼',
      genre: 'Nhạc phim Anime & Độc tấu Piano',
      genre_en: 'Anime Soundtracks & Solo Piano',
      artists: 'RADWIMPS • Evan Call • Kevin Penkin • Hiroyuki Sawano • Animenz',
      desc: 'Những bản hòa tấu và độc tấu dương cầm giàu cảm xúc luôn là người bạn đồng hành tuyệt vời nhất mỗi khi mình cần sự tĩnh lặng để suy nghĩ thuật toán hay gỡ một bug khó.',
      desc_en: 'Expressive orchestral scores and solo piano arrangements are my favorite companions whenever I need deep focus to design algorithms or track down a tricky bug.',
      vibe: 'Tập trung sâu',
      vibe_en: 'Deep Focus'
    },
    {
      icon: '⚡',
      genre: 'J-Rock & J-Pop Sôi động',
      genre_en: 'Upbeat J-Rock & J-Pop',
      artists: 'Kessoku Band • YOASOBI • Yorushika • ZUTOMAYO • Aimer',
      desc: 'Khi cần đẩy nhanh tiến độ dựng giao diện hay viết tính năng mới, nhịp trống dồn dập và tiếng guitar sắc nét của J-Rock giúp mình tỉnh táo và hứng khởi hơn cả cà phê.',
      desc_en: 'When I’m building out UI components or shipping new features at full speed, driving drums and crisp J-Rock guitar lines keep me more energized than coffee.',
      vibe: 'Giữ nhịp lúc code',
      vibe_en: 'Coding Momentum'
    },
    {
      icon: '🌧️',
      genre: 'Lo-fi, Acoustic & Tiếng mưa',
      genre_en: 'Lo-fi, Acoustic & Rain Ambience',
      artists: 'Piano Lo-fi • Fingerstyle Guitar • Chill Beats',
      desc: 'Về đêm, mình thường chuyển sang những playlist lo-fi êm dịu pha chút tiếng mưa rơi để đọc tài liệu công nghệ, viết thiết kế hệ thống hoặc thư giãn.',
      desc_en: 'Late at night, I switch to mellow piano lo-fi and gentle rain ambience while reading technical docs, sketching system designs, or winding down.',
      vibe: 'Đêm muộn yên bình',
      vibe_en: 'Late-Night Calm'
    }
  ],

  // ★ SỞ THÍCH 3: BỘ SƯU TẬP ANIME YÊU THÍCH
  anime: [
    {
      id: 'your-name',
      title: 'Your Name (Kimi no Na wa)',
      genre: '🎬 Tình cảm • Kỳ ảo',
      genre_en: '🎬 Romance • Supernatural',
      desc: 'Bộ phim của Makoto Shinkai với bầu trời sao tuyệt đẹp và phần âm nhạc không thể quên từ RADWIMPS — tác phẩm đã truyền cảm hứng cho mình tập rất nhiều bản piano.',
      desc_en: 'Makoto Shinkai’s masterpiece with breathtaking starlit skies and an unforgettable RADWIMPS soundtrack that inspired me to learn countless piano pieces.',
      img: 'assets/img/anime/your-name.jpg'
    },
    {
      id: 'violet-evergarden',
      title: 'Violet Evergarden',
      genre: '💌 Đời thường • Cảm động',
      genre_en: '💌 Drama • Slice of Life',
      desc: 'Mỗi tập phim là một bức thư chạm đến đáy lòng. Nét vẽ trau chuốt của Kyoto Animation cùng nhạc nền đầy chất thơ khiến mình xem lại bao nhiêu lần vẫn bồi hồi.',
      desc_en: 'Every episode reads like a heartfelt letter. Kyoto Animation’s exquisite art and Evan Call’s poetic score still move me every time I rewatch it.',
      img: 'assets/img/anime/violet-evergarden.jpg'
    },
    {
      id: 'bocchi-the-rock',
      title: 'Bocchi the Rock!',
      genre: '🎸 Âm nhạc • Hài hước',
      genre_en: '🎸 Music • Comedy',
      desc: 'Câu chuyện vừa đáng yêu vừa truyền lửa mạnh mẽ về cây đàn guitar điện, ban nhạc Kessoku Band và hành trình bước ra khỏi vùng an toàn để tỏa sáng.',
      desc_en: 'Both hilarious and deeply inspiring — a story about electric guitars, Kessoku Band, and finding the courage to step out of your comfort zone through music.',
      img: 'assets/img/anime/bocchi-the-rock.jpg'
    },
    {
      id: 'your-lie-in-april',
      title: 'Your Lie in April (Shigatsu wa Kimi no Uso)',
      genre: '🎹 Dương cầm • Tuổi trẻ',
      genre_en: '🎹 Classical Music • Youth',
      desc: 'Bản tình ca mùa xuân giữa piano và violin — bộ anime nhắc mình rằng mỗi nốt nhạc vang lên đều mang theo câu chuyện và tâm hồn của người chơi đàn.',
      desc_en: 'A spring duet of piano and violin that reminds me every note we play carries our own story and heart.',
      img: 'assets/img/anime/your-lie-in-april.jpg'
    },
    {
      id: 'project-sekai',
      title: 'Project SEKAI: Colorful Stage!',
      genre: '🎤 Vocaloid • Âm nhạc',
      genre_en: '🎤 Vocaloid • Rhythm & Music',
      desc: 'Nơi Hatsune Miku cùng những người bạn trẻ kết nối cảm xúc qua từng thế giới SEKAI và những bản phối Vocaloid rực rỡ sắc màu.',
      desc_en: 'Where Hatsune Miku and young musicians connect their feelings across vibrant SEKAI worlds and colorful Vocaloid arrangements.',
      img: 'assets/img/anime/project-sekai.jpg'
    },
    {
      id: 'steins-gate',
      title: 'Steins;Gate',
      genre: '⏳ Khoa học viễn tưởng • Du hành thời gian',
      genre_en: '⏳ Sci-Fi • Time Travel',
      desc: 'Kiệt tác sci-fi với cốt truyện cuốn hút đến từng chi tiết, không khí phòng lab ấm cúng ở Akihabara và câu khẩu hiệu quen thuộc "El Psy Kongroo".',
      desc_en: 'A sci-fi classic with tightly woven time-leap storytelling, the cozy Akihabara gadget lab vibe, and the iconic phrase "El Psy Kongroo".',
      img: 'assets/img/anime/steins-gate.jpg'
    },
    {
      id: 'k-on',
      title: 'K-On! (Keion!)',
      genre: '🍰 Âm nhạc • Học đường',
      genre_en: '🍰 Music • School Life',
      desc: 'Câu lạc bộ nhạc nhẹ ấm áp với những buổi trà chiều, tình bạn trong trẻo và niềm vui giản dị khi cùng nhau tập luyện từng hợp âm.',
      desc_en: 'The heartwarming Light Music Club filled with after-school tea, genuine friendship, and the simple joy of practicing chords together.',
      img: 'assets/img/anime/k-on.jpg'
    },
    {
      id: 'spy-x-family',
      title: 'Spy × Family',
      genre: '🕵️ Hành động • Gia đình vui nhộn',
      genre_en: '🕵️ Action • Wholesome Comedy',
      desc: 'Gia đình điệp viên Forger luôn mang lại cho mình những tràng cười sảng khoái và cảm giác ấm áp, thư thái sau những giờ học tập và làm việc.',
      desc_en: 'The Forger family never fails to bring big laughs and a warm, relaxing mood after a long day of studying and coding.',
      img: 'assets/img/anime/spy-x-family.jpg'
    }
  ],

  // ★ SỞ THÍCH 4: GÓC CHƠI GAME
  games: [
    {
      id: 'valorant',
      title: 'Valorant',
      genre: '🎯 FPS Chiến thuật • 5v5',
      genre_en: '🎯 Tactical FPS • 5v5',
      desc: 'Những màn đọ súng đòi hỏi phản xạ nhanh, giữ tâm chuẩn và phối hợp call-team ăn ý cùng đồng đội sau giờ học.',
      desc_en: 'Fast-paced tactical rounds that demand sharp aim, quick reflexes, and tight team comms with friends after class.',
      img: 'assets/img/games/valorant.jpg'
    },
    {
      id: 'lol',
      title: 'League of Legends',
      genre: '⚔️ MOBA • Đồng đội',
      genre_en: '⚔️ MOBA • Team Strategy',
      desc: 'Tựa game gắn liền với nhiều kỷ niệm nhất mỗi khi lập tổ đội cùng hội bạn thân — từ những trận đấu xếp hạng tới vài ván ARAM giải trí cuối tuần.',
      desc_en: 'The game behind countless memories with my close friends — from intense ranked matches to chill weekend ARAM nights.',
      img: 'assets/img/games/lol.png'
    },
    {
      id: 'genshin-impact',
      title: 'Genshin Impact',
      genre: '🌍 Thế giới mở • Nhập vai Anime',
      genre_en: '🌍 Open-World • Anime RPG',
      desc: 'Mình cực kỳ yêu thích việc khám phá đại lục Teyvat rộng lớn, cốt truyện giàu cảm xúc và đặc biệt là phần nhạc nền giao hưởng tuyệt đẹp của HOYO-MiX.',
      desc_en: 'I love exploring the vast lands of Teyvat, experiencing its emotional story arcs, and listening to HOYO-MiX’s breathtaking orchestral soundtracks.',
      img: 'assets/img/games/genshin-impact.jpg'
    },
    {
      id: 'wuthering-waves',
      title: 'Wuthering Waves',
      genre: '⚡ Hành động ARPG • Combat tốc độ',
      genre_en: '⚡ Action RPG • Fast-Paced Combat',
      desc: 'Cơ chế chiến đấu nhịp độ cao, chuỗi combo chuyển đổi nhân vật, phản đòn (parry) và né đòn cực kỳ đã tay cùng đồ họa anime sắc nét.',
      desc_en: 'High-octane action combat with satisfying parries, intro/outro character swaps, fluid dodges, and crisp anime visuals.',
      img: 'assets/img/games/wuthering-waves.jpg'
    },
    {
      id: 'steam-games',
      title: 'Steam Games',
      genre: '🕹️ Đa thể loại • Indie & Co-op',
      genre_en: '🕹️ Variety • Indie & Co-op',
      desc: 'Thư viện nơi mình khám phá những tựa game cốt truyện sâu sắc, game indie sáng tạo và những trò co-op vui nhộn chơi cùng bạn bè mỗi dịp rảnh rỗi.',
      desc_en: 'My go-to library for story-driven adventures, creative indie gems, and fun co-op games to play with friends whenever we have free time.',
      img: 'assets/img/games/steam-games.jpg'
    }
  ],

  // ★ MẠNG XÃ HỘI & HỒ SƠ LẬP TRÌNH
  socials: [
    { net: 'github',    label: 'GitHub',      handle: 'github.com/lxmtuu',        handle_en: 'github.com/lxmtuu',        url: 'https://github.com/lxmtuu' },
    { net: 'wakatime',  label: 'WakaTime',    handle: 'Thống kê giờ code',        handle_en: 'Coding Activity & Stats',  url: 'https://wakatime.com/@5908a739-21fe-4d77-9bbc-e36215edc052' },
    { net: 'email',     label: 'Email',       handle: 'lexuanminhtufw@gmail.com', handle_en: 'lexuanminhtufw@gmail.com', url: 'mailto:lexuanminhtufw@gmail.com' },
    { net: 'facebook',  label: 'Facebook',    handle: 'Tú Lê (@lxmtuu)',          handle_en: 'Tú Lê (@lxmtuu)',          url: 'https://www.facebook.com/lxmtuu' },
    { net: 'instagram', label: 'Instagram',   handle: '@lx_mtuu',                 handle_en: '@lx_mtuu',                 url: 'https://www.instagram.com/lx_mtuu/' },
    { net: 'youtube',   label: 'YouTube',     handle: '@eirlys_neyu',             handle_en: '@eirlys_neyu',             url: 'https://www.youtube.com/@eirlys_neyu' },
    { net: 'x',         label: 'X / Twitter', handle: '@neyu_2004',               handle_en: '@neyu_2004',               url: 'https://x.com/neyu_2004' },
    { net: 'discord',   label: 'Discord',     handle: 'Pianist Developer',        handle_en: 'Pianist Developer',        url: 'https://discord.gg/TMN7xjMV2' },
    { net: 'tiktok',    label: 'TikTok',      handle: '@lx_mtuu (Yami)',          handle_en: '@lx_mtuu (Yami)',          url: 'https://www.tiktok.com/@lx_mtuu' }
  ]
};

/* ============================================================
   TỪ ĐIỂN SONG NGỮ VIỆT – ANH (VI / EN) CHO TOÀN BỘ GIAO DIỆN
   ============================================================ */
window.I18N = {
  vi: {
    // Thanh điều hướng
    'nav.home': 'Trang chủ',
    'nav.about': 'Hồ sơ & CV',
    'nav.gallery': 'Dự án',
    'nav.hobbies': 'Sở thích',
    'nav.contact': 'Liên hệ',
    'nav.langTitle': 'Switch to English',

    // Loader
    'loader.skip': '♪ bấm chuột hoặc phím bất kỳ để bỏ qua ▸',

    // Trang chủ
    'home.hello': '✦ Xin chào, mình là ✦',
    'home.sub': '<b>Fullstack Developer &amp; Software Engineer</b> — đam mê xây dựng sản phẩm từ giao diện đến hệ thống, yêu những dòng code sạch, tiếng đàn piano và thế giới anime. Chào mừng cậu đến với sân khấu kỹ thuật số của mình! 💙',
    'home.ctaAbout': 'Xem Hồ sơ & CV ✨',
    'home.ctaProjects': 'Dự án ♪',
    'home.scroll': 'khám phá tiếp <span>▾</span>',

    // Trang Hồ sơ & CV
    'about.title': 'Hồ sơ <span>&amp; Giới thiệu</span>',
    'about.sub': 'Đôi nét về con người, công việc và những công nghệ mình đang gắn bó mỗi ngày.',
    'about.greeting': '👋 Chào cậu, mình là Minh Tú!',
    'about.p1': 'Mình thường dùng tên <b>Yami (@lxmtuu)</b> trên GitHub — hiện là một <b>Fullstack Developer &amp; Software Engineer</b>.',
    'about.p2': 'Mình thích tự tay xây dựng một sản phẩm trọn vẹn từ đầu đến cuối: từ lúc phác thảo <b>thiết kế hệ thống &amp; cơ sở dữ liệu</b>, viết <b>Backend API</b> an toàn, chăm chút từng chuyển động trên <b>giao diện Web</b>, cho đến lập trình các <b>ứng dụng Desktop đồ họa GPU &amp; âm thanh MIDI thời gian thực</b>.',
    'about.p3': 'Với mình, viết code cũng giống như chơi một bản nhạc — <b>cần sự chỉn chu trong từng nhịp, rõ ràng trong cấu trúc và luôn đặt cảm xúc của người dùng lên hàng đầu.</b> ♪',
    'about.metaNameLabel': 'Họ tên & Handle:',
    'about.metaNameVal': 'Lê Xuân Minh Tú (Yami · @lxmtuu)',
    'about.metaRoleLabel': 'Định hướng:',
    'about.metaRoleVal': 'Fullstack Developer • Software Engineer',
    'about.metaLangLabel': 'Ngôn ngữ:',
    'about.metaLangVal': 'Tiếng Việt (Bản ngữ) • Tiếng Anh (Đọc hiểu & viết tài liệu kỹ thuật)',
    'about.metaGhLabel': 'Dấu ấn GitHub:',
    'about.metaGhVal': 'GitHub Developer Program Member • Pull Shark ×2 • Pair Extraordinaire • Quickdraw • YOLO',
    'about.btnGithub': '🐙 Ghé thăm GitHub',
    'about.btnWakatime': '📊 Thống kê WakaTime',
    'about.skillsTitle': '🛠️ Tech Stack & Kỹ năng',
    'about.highlightsTitle': '⚡ Điểm nhấn Kỹ thuật Thực chiến',
    'about.hl1Title': 'Kiến trúc Backend & Thanh toán',
    'about.hl1Desc': 'Thiết kế 48+ REST APIs, chống double-booking 4 lớp, transaction <code>Serializable</code>, xác thực JWT Rotation &amp; đối soát tự động <b>VietQR chuẩn EMVCo</b> qua HMAC Webhook.',
    'about.hl2Title': 'Đồ họa GPU & Audio / MIDI',
    'about.hl2Desc': 'Phát triển engine <b>Direct3D 11</b> đa luồng (HDR 16-bit, PBR GGX + ACES shader, 240 FPS) và nền tảng <b>Web MIDI</b> nhận diện lực gõ + 3 pedal cùng Tone.js Salamander Piano.',
    'about.hl3Title': 'Quy trình & Chất lượng Code',
    'about.hl3Desc': 'Viết tài liệu kỹ thuật bài bản (SRS, ADR, ERD, Design System), kiểm thử Unit/E2E (<code>tsc --noEmit</code> 0 lỗi) và CI tự động kết xuất ảnh giao diện song ngữ Anh – Việt.',
    'about.timelineTitle': '🚀 Kinh nghiệm & Hành trình Phát triển',

    // Trang Dự án
    'gallery.title': 'Dự án <span>Tiêu biểu</span>',
    'gallery.sub': 'Các hệ thống Fullstack, ứng dụng Desktop GPU và nền tảng âm nhạc mình đã thiết kế & phát triển. Kéo trượt ngang hoặc chuyển chế độ xem tùy thích!',
    'gallery.filterAll': '✦ Tất cả (6)',
    'gallery.filterFullstack': '🌐 Fullstack Web',
    'gallery.filterDesktop': '🖥️ Desktop & GPU',
    'gallery.filterAudio': '🎹 Audio & MIDI',
    'gallery.viewGrid': 'Xem dạng lưới',
    'gallery.viewCarousel': 'Chế độ trượt kéo',
    'gallery.dragHint': '<span>⇄</span> Giữ chuột kéo ngang, lăn con lăn hoặc bấm mũi tên để lướt qua sân khấu dự án',
    'gallery.repoDefault': '⭐ Mã nguồn GitHub',
    'gallery.releaseBtn': '📦 Bản dựng (.exe)',
    'gallery.demoBtn': '🚀 Live Demo',

    // Trang Sở thích
    'hobbies.title': 'Sở thích <span>của mình</span>',
    'hobbies.sub': 'Ngoài những giờ làm việc với code, đây là bốn góc nhỏ giúp mình nạp lại năng lượng, thư giãn và giữ lửa sáng tạo mỗi ngày: <b>Chơi đàn</b> • <b>Nghe nhạc</b> • <b>Xem Anime</b> • <b>Chơi Game</b>.',
    'hobbies.sec1Badge': '01 • CHƠI ĐÀN',
    'hobbies.sec1Title': '🎸 Những cây đàn gắn bó với mình',
    'hobbies.sec1Desc': 'Âm nhạc là nơi mình tìm về mỗi khi muốn cân bằng lại nhịp sống sau những giờ ngồi trước màn hình máy tính.',
    'hobbies.pianoBadge': 'GÓC TƯƠNG TÁC',
    'hobbies.pianoTitle': '🎹 Dạo thử vài nốt trên Đàn Piano Mini nhé!',
    'hobbies.pianoHint': 'Cậu có thể bấm chuột, chạm màn hình hoặc gõ phím <b>A S D F G H J K</b> (phím đen: <b>W E T Y U</b>) để chơi đàn ngay tại đây~ ♪',
    'hobbies.pianoReady': '♪ Sẵn sàng • C4 – C5',
    'hobbies.pianoPlaying': '♪ Đang chơi: ',
    'hobbies.toneLabel': 'Âm sắc:',
    'hobbies.demoPlay': '▶ Tự chơi mẫu',
    'hobbies.demoStop': '⏹ Dừng phát',
    'hobbies.sec2Badge': '02 • NGHE NHẠC',
    'hobbies.sec2Title': '🎧 Gu âm nhạc & Những giai điệu hay nghe',
    'hobbies.sec2Desc': 'Mỗi thời điểm trong ngày mình lại chọn một màu sắc âm nhạc khác nhau để giữ cảm hứng làm việc.',
    'hobbies.vinylTitle': '💿 Mâm đĩa nhạc nền',
    'hobbies.vinylDesc': 'Một chiếc tai nghe tốt và danh sách nhạc quen thuộc luôn là thứ đầu tiên mình bật lên trước khi mở VS Code.',
    'hobbies.vinylPlay': '♪ Bật / Tắt Nhạc Nền',
    'hobbies.vinylPlaying': '⏸ Đang phát nhạc nền • Bấm để tạm dừng',
    'hobbies.sec3Badge': '03 • XEM ANIME',
    'hobbies.sec3Title': '🌸 Những bộ Anime mình yêu thích nhất',
    'hobbies.sec3Desc': 'Những câu chuyện về âm nhạc, tuổi trẻ và thế giới kỳ ảo đã truyền cho mình rất nhiều cảm hứng sáng tạo (bấm vào ảnh để xem rõ hơn nhé):',
    'hobbies.sec4Badge': '04 • CHƠI GAME',
    'hobbies.sec4Title': '🎮 Góc Gaming — Những tựa game mình hay chơi',
    'hobbies.sec4Desc': 'Sau những giờ học tập và code căng thẳng, đây là những thế giới ảo nơi mình giải trí, rèn phản xạ và sát cánh cùng hội bạn thân:',
    'hobbies.zoomBadge': '🔍 Phóng to',

    // Trang Liên hệ
    'contact.title': 'Kết nối <span>&amp; Hợp tác</span>',
    'contact.sub': 'Cùng mình trò chuyện về công nghệ, âm nhạc, anime — hoặc kết nối cho các cơ hội hợp tác phát triển phần mềm nhé! 💌',
    'contact.mailLabel': 'Liên hệ trực tiếp qua Email:',
    'contact.copyBtn': '📋 Sao chép Email',
    'contact.copiedBtn': '✓ Đã sao chép Email!',

    // Music panel
    'music.hint': 'Nhạc nền phát xuyên suốt giữa các trang • Bấm <b>🎹</b> để đổi MP3 / Synth hoặc <b>📁</b> để mở nhạc từ máy của cậu'
  },

  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'Profile & CV',
    'nav.gallery': 'Projects',
    'nav.hobbies': 'Hobbies',
    'nav.contact': 'Contact',
    'nav.langTitle': 'Chuyển sang Tiếng Việt',

    // Loader
    'loader.skip': '♪ click anywhere or press any key to skip ▸',

    // Home
    'home.hello': '✦ Hello, I am ✦',
    'home.sub': '<b>Fullstack Developer &amp; Software Engineer</b> — passionate about crafting end-to-end products from sleek interfaces to resilient backend systems, clean code, piano melodies, and anime. Welcome to my digital stage! 💙',
    'home.ctaAbout': 'View Profile & CV ✨',
    'home.ctaProjects': 'Projects ♪',
    'home.scroll': 'explore more <span>▾</span>',

    // About / CV
    'about.title': 'Profile <span>&amp; About Me</span>',
    'about.sub': 'A closer look at who I am, how I build software, and the technologies I work with every day.',
    'about.greeting': '👋 Hi there, I’m Minh Tú!',
    'about.p1': 'I go by <b>Yami (@lxmtuu)</b> on GitHub — a <b>Fullstack Developer &amp; Software Engineer</b>.',
    'about.p2': 'I love building complete software products from the ground up: from designing <b>system architecture &amp; relational databases</b> and writing secure <b>Backend APIs</b>, to polishing interactive <b>Web interfaces</b> and engineering <b>real-time GPU graphics &amp; MIDI audio Desktop applications</b>.',
    'about.p3': 'To me, writing code is a lot like playing music — <b>it takes precision in every beat, clarity in structure, and genuine care for the person experiencing it.</b> ♪',
    'about.metaNameLabel': 'Name & Handle:',
    'about.metaNameVal': 'Lê Xuân Minh Tú (Yami · @lxmtuu)',
    'about.metaRoleLabel': 'Focus:',
    'about.metaRoleVal': 'Fullstack Developer • Software Engineer',
    'about.metaLangLabel': 'Languages:',
    'about.metaLangVal': 'Vietnamese (Native) • English (Technical Reading & Documentation)',
    'about.metaGhLabel': 'GitHub Highlights:',
    'about.metaGhVal': 'GitHub Developer Program Member • Pull Shark ×2 • Pair Extraordinaire • Quickdraw • YOLO',
    'about.btnGithub': '🐙 Visit GitHub',
    'about.btnWakatime': '📊 WakaTime Stats',
    'about.skillsTitle': '🛠️ Tech Stack & Core Skills',
    'about.highlightsTitle': '⚡ Engineering Highlights',
    'about.hl1Title': 'Backend Architecture & Payments',
    'about.hl1Desc': 'Designed 48+ REST APIs, 4-layer anti-double-booking protection, <code>Serializable</code> transactions, JWT Rotation auth &amp; automated <b>EMVCo VietQR</b> reconciliation via HMAC Webhooks.',
    'about.hl2Title': 'GPU Graphics & Audio / MIDI',
    'about.hl2Desc': 'Engineered a multi-threaded <b>Direct3D 11</b> renderer (16-bit HDR, PBR GGX + ACES shaders, 240 FPS) and a <b>Web MIDI</b> platform capturing key velocity + 3 pedals with Tone.js Salamander Piano.',
    'about.hl3Title': 'Engineering Process & Code Quality',
    'about.hl3Desc': 'Authored thorough specs (SRS, ADR, ERD, Design System), automated Unit/E2E testing (<code>tsc --noEmit</code> 0 errors), and CI pipelines rendering bilingual UI previews.',
    'about.timelineTitle': '🚀 Experience & Journey',

    // Projects
    'gallery.title': 'Featured <span>Projects</span>',
    'gallery.sub': 'Fullstack web platforms, GPU-accelerated desktop apps, and music technology projects I designed and built. Drag horizontally or switch between Carousel & Grid views!',
    'gallery.filterAll': '✦ All (6)',
    'gallery.filterFullstack': '🌐 Fullstack Web',
    'gallery.filterDesktop': '🖥️ Desktop & GPU',
    'gallery.filterAudio': '🎹 Audio & MIDI',
    'gallery.viewGrid': 'Grid View',
    'gallery.viewCarousel': 'Carousel View',
    'gallery.dragHint': '<span>⇄</span> Click & drag horizontally, scroll with your mouse wheel, or use the arrows to browse projects',
    'gallery.repoDefault': '⭐ GitHub Source',
    'gallery.releaseBtn': '📦 Release (.exe)',
    'gallery.demoBtn': '🚀 Live Demo',

    // Hobbies
    'hobbies.title': 'My <span>Hobbies</span>',
    'hobbies.sub': 'Beyond the code editor, these are the four corners that recharge my battery, keep me inspired, and bring balance to every day: <b>Playing Instruments</b> • <b>Listening to Music</b> • <b>Anime</b> • <b>Gaming</b>.',
    'hobbies.sec1Badge': '01 • INSTRUMENTS',
    'hobbies.sec1Title': '🎸 The Instruments Close to My Heart',
    'hobbies.sec1Desc': 'Music is where I return whenever I want to reset my rhythm after hours in front of a computer screen.',
    'hobbies.pianoBadge': 'INTERACTIVE CORNER',
    'hobbies.pianoTitle': '🎹 Play a Few Notes on the Mini Piano!',
    'hobbies.pianoHint': 'Click the keys, tap on touchscreens, or press <b>A S D F G H J K</b> (black keys: <b>W E T Y U</b>) on your keyboard to play right here~ ♪',
    'hobbies.pianoReady': '♪ Ready • C4 – C5',
    'hobbies.pianoPlaying': '♪ Playing: ',
    'hobbies.toneLabel': 'Timbre:',
    'hobbies.demoPlay': '▶ Play Demo',
    'hobbies.demoStop': '⏹ Stop Demo',
    'hobbies.sec2Badge': '02 • MUSIC TASTE',
    'hobbies.sec2Title': '🎧 What I Listen To Every Day',
    'hobbies.sec2Desc': 'Different hours of the day call for different musical moods to keep my creative flow going.',
    'hobbies.vinylTitle': '💿 Stage Vinyl Turntable',
    'hobbies.vinylDesc': 'A good pair of headphones and a familiar playlist are always the first things I turn on before opening VS Code.',
    'hobbies.vinylPlay': '♪ Play / Pause BGM',
    'hobbies.vinylPlaying': '⏸ Playing BGM • Click to Pause',
    'hobbies.sec3Badge': '03 • ANIME',
    'hobbies.sec3Title': '🌸 My Favorite Anime Series & Films',
    'hobbies.sec3Desc': 'Stories about music, youth, and wonder that have sparked so much of my creative inspiration (click any card to view full size):',
    'hobbies.sec4Badge': '04 • GAMING',
    'hobbies.sec4Title': '🎮 Gaming Corner — Titles I Love Playing',
    'hobbies.sec4Desc': 'After intense study and coding sessions, these are the virtual worlds where I unwind, sharpen my reflexes, and squad up with close friends:',
    'hobbies.zoomBadge': '🔍 Zoom In',

    // Contact
    'contact.title': 'Connect <span>&amp; Collaborate</span>',
    'contact.sub': 'Let’s chat about software engineering, music, anime — or team up on exciting development opportunities! 💌',
    'contact.mailLabel': 'Reach me directly via Email:',
    'contact.copyBtn': '📋 Copy Email',
    'contact.copiedBtn': '✓ Email Copied!',

    // Music panel
    'music.hint': 'Background music plays seamlessly across pages • Click <b>🎹</b> to switch MP3 / Synth or <b>📁</b> to load your own audio file'
  }
};
