/* ============================================================
   CẤU HÌNH CÁ NHÂN — chỉnh sửa file này để đổi thông tin của bạn!
   (kỹ năng, dự án, timeline, mạng xã hội, chữ chạy…)
   ============================================================ */
window.SITE = {
  // Dòng chữ gõ máy (typewriter) ở trang chủ
  typelines: [
    'Fullstack Developer 💻',
    'React • Node.js • SQL ⚙️',
    'Piano • Guitar • Anime 🎸',
    'Hatsune Miku ♪'
  ],

  // ★ DỰ ÁN / SẢN PHẨM — thêm, sửa, xoá tuỳ thích!
  // repo: link GitHub bắt buộc • demo: link xem thử (để '' nếu chưa có)
  projects: [
    {
      icon: '🎤', year: '2026', title: 'LakStay Dalat Booking',
      desc: 'Hệ thống đặt phòng khách sạn (Hotel Booking System)',
      tech: ['Express', 'SQLite', 'Node.js', 'WAL'],
      repo: 'https://github.com/lxmtuu/lakstay', demo: ''
    },
    {
      icon: '🛒', year: '2025', title: 'ShopVN',
      desc: 'Ứng dụng bán hàng trực tuyến (E-commerce Fullstack)',
      tech: ['Next.js', 'PostgreSQL', 'Express', 'Prisma'],
      repo: 'https://github.com/lxmtuu/shopvn-ecommerce-fullstack', demo: ''
    },
    {
      icon: '🌸', year: '2025', title: 'Sakura Music Shop',
      desc: 'Website Bán Nhạc Cụ Phong Cách Anime',
      tech: ['JavaScript', 'REST API', 'Node.js'],
      repo: 'https://github.com/lxmtuu/sakura-music', demo: ''
    },
    {
      icon: '🎹', year: '2024', title: 'Melody House',
      desc: 'Fullstack Web MIDI Piano Platform',
      tech: ['React', 'Express.js', 'Node.js', 'Prisma ORM  '],
      repo: 'https://github.com/lxmtuu', demo: ''
    }
  ],

  // ★ NHÓM KỸ NĂNG (hiển thị ở trang Giới thiệu)
  skillGroups: [
    {
      title: '🎨 Frontend',
      items: [
        { name: 'HTML & CSS', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 72 }
      ]
    },
    {
      title: '🛠️ Backend & Database',
      items: [
        { name: 'Node.js / Express', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'SQL / Docker', level: 70 }
      ]
    },
    {
      title: '🧰 Công cụ',
      items: [
        { name: 'Git / GitHub', level: 85 },
        { name: 'REST API', level: 75 },
        { name: 'Docker (đang nạp…)', level: 50 }
      ]
    },
    {
      title: '🎵 Ngoài giờ',
      items: [
        { name: 'Piano / Guitar', level: 90 }
      ]
    }
  ],

  // ★ TIMELINE hành trình (trang Giới thiệu)
  timeline: [
    { year: '2024 — nay', tag: '🎓', title: 'Sinh viên Công nghệ thông tin', desc: 'Chuyên ngành CNTT — tập trung phát triển web fullstack, cơ sở dữ liệu và lập trình hướng đối tượng.' },
    { year: '2025', tag: '🎹', title: 'Pianist Developer', desc: 'Kết hợp âm nhạc với code: web chủ đề Miku, tool piano, cover nhạc anime.' },
    { year: '2026', tag: '🚀', title: 'Fullstack Developer — đang nạp…', desc: 'Hoàn thiện React, Node.js, Docker và tìm kiếm cơ hội thực chiến đầu tiên!' }
  ],

  // Mạng xã hội của Minh Tú ♪
  socials: [
    { net: 'facebook',  label: 'Facebook',  handle: 'Tú Lê',             url: 'https://www.facebook.com/lxmtuu' },
    { net: 'instagram', label: 'Instagram', handle: 'Tu Le',             url: 'https://www.instagram.com/lx_mtuu/' },
    { net: 'discord',   label: 'Discord',   handle: 'Pianist Developer', url: 'https://discord.gg/TMN7xjMV2' },
    { net: 'tiktok',    label: 'TikTok',    handle: 'Yami',              url: 'https://www.tiktok.com/@lx_mtuu' },
    { net: 'github',    label: 'GitHub',    handle: 'lxmtuu',            url: 'https://github.com/lxmtuu' },
    { net: 'email',     label: 'Email',     handle: 'lexuanminhtufw.com', url: 'mailto:lexuanminhtufw@gmail.com' }
  ],

  // Danh sách anime yêu thích (hiển thị ở trang Sở thích)
  anime: [
    'Your Name',
    'Violet Evergarden',
    'Spy × Family',
    'K-On!',
    'Project SEKAI: Colorful Stage!',
    'Steins;Gate'
  ]
};
