# 🌊 ĐƯA WEB LÊN INTERNET ("web thật, chạy thật")

Site này là **web tĩnh** (HTML/CSS/JS thuần) → host miễn phí vĩnh viễn, không cần
máy cậu phải mở, không cần Live Server/VS Code chạy. Chọn 1 trong 2 cách:

---

## ⚡ Cách A — Netlify Drop (nhanh nhất, ~1 phút)

1. Mở trình duyệt → **https://app.netlify.com/drop**
2. Kéo thả **thư mục `miku-portfolio`** (hoặc luôn file **zip**) vào giữa trang.
3. Đợi vài giây → nhận ngay link công khai dạng `https://abc123.netlify.app`.
   Gửi link này cho bất kỳ ai — họ xem được web cậu trên điện thoại/máy tính của họ. 🎉
4. **Nên làm thêm:** bấm *Sign up* (miễn phí, đăng ký bằng Gmail hoặc GitHub) để
   "nhận chủ" trang web → vào *Site settings → Change site name* đổi thành
   `https://minhtu-miku.netlify.app` cho đẹp và giữ vĩnh viễn.

**Cập nhật web sau này:** đăng nhập Netlify → *Deploys* → kéo thả thư mục mới vào
là bản mới lên sóng ngay.

---

## 🐙 Cách B — GitHub Pages (gắn với tài khoản GitHub của cậu: lxmtuu)

### B1. Tạo repository
- Vào **https://github.com/new**
- Repository name: `miku-portfolio` • chọn **Public** • *Create repository*

### B2. Đưa code lên (chọn 1 trong 2)

**🖱️ Cách chuột (không cần cài gì):**
- Trong trang repo vừa tạo, bấm chữ **"uploading an existing file"**
- Kéo **TOÀN BỘ nội dung bên trong** thư mục `miku-portfolio` vào
  (`index.html`, `README.md`, `HUONG-DAN-DEPLOY.md`, folder `css/`, `js/`, `assets/`)
- Bấm *Commit changes*

**⌨️ Cách terminal (nếu máy đã có git):**
```bash
cd miku-portfolio
git init
git add .
git commit -m "Miku portfolio 🎤"
git branch -M main
git remote add origin https://github.com/lxmtuu/miku-portfolio.git
git push -u origin main
```

### B3. Bật GitHub Pages
- Trong repo: **Settings → Pages**
- *Source:* **Deploy from a branch** → *Branch:* **main**, folder **/ (root)** → *Save*
- Đợi ~1 phút, bấm icon 🌐 đầu repo hoặc vào:

```
https://lxmtuu.github.io/miku-portfolio/
```

**Cập nhật web sau này:** push/commit mới → Pages tự động lên bản mới trong ~1 phút.
Bonus: repo GitHub cũng chính là nơi backup code của cậu. 💾

---

## 🧧 Tên miền riêng (tuỳ chọn, khi muốn "pro" hơn)

Mua tên miền (vd `minhtu.dev`, `minhtu.vn`…) rồi trỏ DNS theo hướng dẫn của
Netlify (*Domain settings → Add custom domain*) hoặc GitHub Pages
(*Settings → Pages → Custom domain*) — web sẽ chạy bằng tên miền của riêng cậu.

---

## ❓ Vài câu hỏi thường gặp

- **Web có chạy nhạc/piano/hiệu ứng trên host không?** Có — mọi thứ nằm sẵn trong
  file, host chỉ việc phục vụ file y như Live Server.
- **Người khác có sửa được web không?** Không — họ chỉ xem được; code nằm ở
  tài khoản của cậu.
- **Có tốn phí không?** Cả Netlify lẫn GitHub Pages đều miễn phí cho web cá nhân.

Chúc sân khấu của cậu sáng đèn trước toàn thế giới! 💙 ♪
