# 🎤 Yami Miku Portfolio

Website giới thiệu bản thân theo chủ đề **Hatsune Miku** của **Lê Xuân Minh Tú (Yami)** —
sinh viên Công nghệ thông tin, Fullstack & Desktop Developer, yêu piano 🎹, guitar 🎸, guitar điện ⚡ và anime 🌸.

🌐 **Live Website:** [https://lxmtuu.id.vn](https://lxmtuu.id.vn)

## ✨ Tính năng nổi bật

- **Intro khởi động kiểu Miku**: màn boot `"MIKU OS v3.9"` chạy chữ loading từng ký tự,
  thanh tiến trình phát sáng, lóe chữ **39** rồi hai cánh màn sân khấu kéo ra hé lộ trang web
  (bấm phím/click để bỏ qua).
- **5 trang**: Trang chủ • Giới thiệu • Sở thích • Dự án • Liên hệ — chuyển trang bằng hiệu ứng "sân khấu" mượt mà, **nhạc nền chạy liên tục giữa các trang**.
- **CV Fullstack & Desktop Developer**: nhóm kỹ năng Frontend/Backend/Công cụ/Âm nhạc (thanh chạy animated),
  timeline hành trình, và **trang Dự án** trưng bày 6 sản phẩm thực tế kèm link GitHub & Live Demo —
  thêm/sửa dự án chỉ cần chỉnh `js/config.js`.
- **Trình phát nhạc nền kép (MP3 + Web Audio Synth)**:
  - Hỗ trợ phát nhạc từ `assets/audio/bgm.mp3`, chuyển đổi tức thì sang giai điệu **Miku Synth** tổng hợp bằng Web Audio API (nút **🎹**), hoặc chọn file nhạc bất kỳ từ máy của bạn (nút **📁**).
- **Đàn Piano Mini tương tác** ở trang Sở thích:
  - Hỗ trợ bấm chuột, chạm cảm ứng đa điểm, hoặc gõ bàn phím máy tính (**A S D F G H J K** & **W E T Y U**).
  - Tích hợp nút **🎵 Nghe giai điệu mẫu** tự động trình diễn giai điệu cùng hiệu ứng phím sáng và nốt nhạc bay.
- **Hiệu ứng thị giác**: hạt nốt nhạc bay, **hoa anh đào rơi 🌸**, **burst nốt nhạc khi click ✨**, con trỏ phát sáng,
  chữ gõ máy (typewriter), nền đổi theo từng trang, thẻ nghiêng 3D mượt mà + **shine lướt khi hover**,
  **avatar hero nghiêng theo chuột**, **thanh tiến trình cuộn**, **visualizer nhảy theo cả nhạc nền lẫn tiếng đàn piano**,
  **lightbox phóng to ảnh** (bấm vào avatar hoặc ảnh góc anime), menu mobile.
- **Bảng màu Miku**: teal `#39C5BB` + hồng `#FF7BAC` / magenta `#E12885`.

## 📁 Cấu trúc thư mục

```
miku-portfolio/
├── index.html            ← toàn bộ 5 "trang" (SPA, điều hướng bằng #hash + thẻ Open Graph SEO)
├── css/style.css         ← giao diện + hiệu ứng
├── js/
│   ├── config.js         ← ★ SỬA THÔNG TIN CÁ NHÂN Ở ĐÂY ★
│   ├── music.js          ← engine nhạc nền (MP3 + Web Audio Synth) & âm thanh piano
│   └── main.js           ← router, hiệu ứng, piano, lightbox...
├── assets/
│   ├── img/              ← ảnh nền & ảnh đại diện (thay bằng ảnh của bạn nếu muốn)
│   └── audio/            ← đặt bgm.mp3 vào đây để dùng nhạc riêng
├── CNAME                 ← tên miền tùy chỉnh (lxmtuu.id.vn)
└── README.md
```

## 🚀 Mở bằng VS Code

1. Mở VS Code → **File → Open Folder** → chọn thư mục `miku-portfolio`.
2. Chạy theo 1 trong 2 cách:
   - **Cách nhanh:** mở `index.html` trong Explorer rồi bấm chuột phải → *Open with Live Server* (cài extension **Live Server** của Ritwick Dey).
   - **Cách thường:** mở `index.html` trực tiếp bằng trình duyệt (chuột phải → Open with → Chrome/Edge).

## 🛠 Tùy chỉnh nhanh

| Muốn đổi… | Sửa ở đâu |
|---|---|
| **Dự án / sản phẩm trưng bày** | `js/config.js` → mảng `projects` (repo, demo, tech, mô tả) |
| **Kỹ năng & timeline CV** | `js/config.js` → `skillGroups` và `timeline` |
| Link Facebook / Instagram / Discord / TikTok / YouTube / X / GitHub / Email | `js/config.js` → mảng `socials` |
| Dòng chữ gõ máy ở trang chủ | `js/config.js` → `typelines` |
| Danh sách anime | `js/config.js` → `anime` |
| Ảnh đại diện / ảnh nền | thay file cùng tên trong `assets/img/` |
| Nhạc nền riêng | đặt file tên `bgm.mp3` vào `assets/audio/`, bấm **🎹** để đổi Synth/MP3 hoặc bấm **📁** trên trình phát nhạc |
| Màu chủ đạo | biến `--teal`, `--pink`, `--magenta` trong `css/style.css` |
| Phần giới thiệu | chỉnh trực tiếp trong `index.html` (khối `#page-about`) |

## 💡 Ghi chú

- Các hình ảnh trong `assets/img/` mang phong cách Hatsune Miku — bạn có thể thay bằng ảnh riêng, chỉ cần giữ nguyên tên file.
- Trang web là HTML/CSS/JS thuần, **không cần cài thư viện hay build gì cả** — mở là chạy ngay.

Chúc cậu vui với sân khấu nhỏ của mình! 💙 ♪
