# 🎤 Yami Miku Portfolio

Website giới thiệu bản thân theo chủ đề **Hatsune Miku** của **Lê Xuân Minh Tú** —
sinh viên Công nghệ thông tin, yêu piano 🎹, guitar 🎸, guitar điện ⚡ và anime 🌸.

## ✨ Tính năng

- **Intro khởi động kiểu Miku**: màn boot "MIKU OS v3.9" chạy chữ loading từng ký tự,
  thanh tiến trình phát sáng, lóe chữ **39** rồi hai cánh màn sân khấu kéo ra hé lộ trang web
  (bấm phím/click để bỏ qua).
- **5 trang**: Trang chủ • Giới thiệu • Sở thích • Dự án • Liên hệ — chuyển trang bằng hiệu ứng "sân khấu" mượt mà, **nhạc nền chạy liên tục giữa các trang**.
- **CV Fullstack Developer**: nhóm kỹ năng Frontend/Backend/Công cụ (thanh chạy animated),
  timeline hành trình, và **trang Dự án** trưng bày sản phẩm bằng link GitHub —
  thêm/sửa dự án chỉ cần sửa `js/config.js`.
- **Nhạc nền**: mặc định là giai điệu tổng hợp bằng Web Audio API (không cần file mp3, bấm nút ♪ góc phải dưới để bật). Có thể nạp file nhạc riêng.
- **Đàn piano mini chơi được** ở trang Sở thích.
- Hiệu ứng: hạt nốt nhạc bay, **hoa anh đào rơi 🌸**, **burst nốt nhạc khi click ✨**, con trỏ phát sáng,
  chữ gõ máy (typewriter), nền đổi theo từng trang, thẻ nghiêng 3D + **shine lướt khi hover**,
  **avatar hero nghiêng theo chuột**, **thanh tiến trình cuộn**, **visualizer nhảy theo nhạc**,
  lightbox phóng to ảnh, thanh kỹ năng chạy, menu mobile.
- Bảng màu Miku: teal `#39C5BB` + hồng `#FF7BAC` / magenta `#E12885`.

## 📁 Cấu trúc

```
miku-portfolio/
├── index.html            ← toàn bộ 5 "trang" (SPA, điều hướng bằng #hash)
├── css/style.css         ← giao diện + hiệu ứng
├── js/
│   ├── config.js         ← ★ SỬA THÔNG TIN CÁ NHÂN Ở ĐÂY ★
│   ├── music.js          ← engine nhạc nền + âm thanh piano
│   └── main.js           ← router, hiệu ứng, lightbox...
├── assets/
│   ├── img/              ← ảnh nền & ảnh đại diện (thay bằng ảnh của bạn nếu muốn)
│   └── audio/            ← đặt bgm.mp3 vào đây để dùng nhạc riêng
└── README.md
```

## 🚀 Mở bằng VS Code

1. Giải nén thư mục `miku-portfolio` vào nơi bạn muốn.
2. Mở VS Code → **File → Open Folder** → chọn thư mục `miku-portfolio`.
3. Chạy theo 1 trong 2 cách:
   - **Cách nhanh:** mở `index.html` trong Explorer rồi bấm chuột phải → *Open with Live Server* (cài extension **Live Server** của Ritwick Dey).
   - **Cách thường:** mở `index.html` trực tiếp bằng trình duyệt (chuột phải → Open with → Chrome/Edge).

## 🛠 Tùy chỉnh nhanh

| Muốn đổi… | Sửa ở đâu |
|---|---|
| **Dự án / sản phẩm trưng bày** | `js/config.js` → mảng `projects` (repo, demo, tech, mô tả) |
| **Kỹ năng & timeline CV** | `js/config.js` → `skillGroups` và `timeline` |
| Link Facebook / Instagram / Discord / TikTok / GitHub / Email | `js/config.js` → mảng `socials` |
| Dòng chữ gõ máy ở trang chủ | `js/config.js` → `typelines` |
| Danh sách anime | `js/config.js` → `anime` |
| Ảnh đại diện / ảnh nền | thay file cùng tên trong `assets/img/` |
| Nhạc nền riêng | đặt file tên `bgm.mp3` vào `assets/audio/`, hoặc bấm 📁 trên trình phát nhạc |
| Màu chủ đạo | biến `--teal`, `--pink`, `--magenta` trong `css/style.css` |
| Phần giới thiệu / kỹ năng | chỉnh trực tiếp trong `index.html` (khối `#page-about`) |

## 💡 Ghi chú

- Các hình ảnh trong `assets/img/` được tạo bằng AI theo phong cách Miku — bạn có thể thay bằng ảnh thật của mình, chỉ cần giữ nguyên tên file.
- Trang web là HTML/CSS/JS thuần, **không cần cài thư viện hay build gì cả** — bỏ vào VS Code là chạy.

Chúc cậu vui với sân khấu nhỏ của mình! 💙 ♪
