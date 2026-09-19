# Abhinaya Group — Website Utama

Website multi-brand Abhinaya Group yang menaungi 4 unit bisnis:
**Store** (aksesori), **Parfume** (wewangian), **Rides** (wahana), **Lucky Cheese** (F&B).

---

## 📋 Daftar Isi

1. [Arsitektur & Teknologi](#-arsitektur--teknologi)
2. [Struktur Repo](#-struktur-repo)
3. [Cara Update Konten](#-cara-update-konten)
4. [Cara Deploy](#-cara-deploy)
5. [Akun & Akses](#-akun--akses)
6. [Biaya Operasional](#-biaya-operasional)
7. [Troubleshooting](#-troubleshooting)
8. [Kontak Developer](#-kontak-developer)

---

## 🏗️ Arsitektur & Teknologi

| Layer | Teknologi | Fungsi | Biaya |
|---|---|---|---|
| **Hosting** | Cloudflare Pages | Serve website statis | Gratis |
| **CMS** | Sanity.io | Panel admin konten | Gratis (free tier) |
| **Live Chat** | Tawk.to | Customer service | Gratis |
| **Version Control** | GitHub | Simpan kode | Gratis |
| **Frontend** | HTML + Tailwind CSS (CDN) + Vanilla JS | Tampilan & interaksi | Gratis |
| **Font** | Google Fonts | Tipografi | Gratis |
| **Icons** | Font Awesome | Ikon | Gratis |
| **Images** | Sanity CDN + Unsplash | Gambar produk | Gratis |
| **Domain** | [ISI INI] | Alamat web | ~Rp [ISI INI]/tahun |

**Total biaya operasional:** ~Rp [ISI INI]/tahun (cuma domain)

---

## 📁 Struktur Repo
abhinaya-web/
├── index.html → Landing page Abhinaya Group
├── 404.html → Halaman error
├── _headers → Security headers (Cloudflare)
├── robots.txt → SEO: aturan crawler
├── sitemap.xml → SEO: peta halaman
├── README.md → Dokumen ini
├── store/
│ └── index.html → Katalog Abhinaya Store
├── parfume/
│ └── index.html → Katalog Abhinaya Parfume
├── rides/
│ └── index.html → Halaman Abhinaya Rides
└── lucky-cheese/
└── index.html → Menu Lucky Cheese


**Repo terpisah:**
- `abhinaya-cms` — Sanity Studio (panel admin konten)

---

## ✏️ Cara Update Konten

### Update Produk (Store / Parfume / Lucky Cheese)

1. Buka **Sanity Studio**: https://abhinaya-cms.sanity.studio
2. Login dengan akun **`techabhinaya@gmail.com`**
3. Pilih jenis konten di sidebar:
   - **Produk - Abhinaya Store** → untuk aksesori
   - **Produk - Abhinaya Parfume** → untuk parfum
   - **Menu - Lucky Cheese** → untuk makanan/minuman
   - **Paket Harga - Abhinaya Rides** → untuk paket wahana
   - **Business Pillar** → untuk unit bisnis di landing page
4. Klik **Create new** atau klik item yang mau diedit
5. Isi field:
   - **Nama** — nama produk
   - **Kategori** — pilih dari opsi
   - **Harga** — angka aja, tanpa titik (contoh: `150000`)
   - **Foto** — upload gambar (rekomendasi: 800x800px, max 2MB)
   - **Deskripsi** — max 300 karakter
   - **Status** — aktifkan kalau produk tersedia
6. Klik **Publish** (bukan Save Draft)
7. Website otomatis update dalam **1-2 menit**

### Update Teks di Landing Page

Teks di `index.html`, `parfume/index.html`, dll. itu **hardcoded** (bukan dari Sanity). Buat ubah:
- **Cara 1 (recommended):** Minta developer
- **Cara 2 (advanced):** Edit di GitHub langsung (lihat [Cara Deploy](#-cara-deploy))

**Yang BISA diubah lewat Sanity:**
- ✅ Nama & deskripsi unit bisnis (di landing page)
- ✅ Nama, harga, foto, deskripsi produk
- ✅ Status stok/available
- ✅ Kategori

**Yang HARUS edit kode:**
- ❌ Hero headline & tagline
- ❌ Nomor WhatsApp
- ❌ Warna brand
- ❌ Struktur halaman

---

## 🚀 Cara Deploy

### Otomatis (Normal)

Setiap kali ada perubahan di GitHub, **Cloudflare otomatis deploy** dalam 1-2 menit. Nggak perlu ngapa-ngapain.

### Manual (Kalau Perlu)

1. Login ke **Cloudflare Dashboard**: https://dash.cloudflare.com
2. Pilih **Workers & Pages** → **abhinaya-web**
3. Klik tab **Deployments**
4. Klik **Retry deployment** kalau ada yang gagal

### Cara Edit File via GitHub (Untuk Non-Developer)

1. Buka repo: https://github.com/tech-abhinaya/abhinaya-web
2. Klik file yang mau diedit (contoh: `index.html`)
3. Klik icon **pensil** (edit)
4. Ubah teks yang diinginkan
5. Scroll ke bawah → isi **Commit changes** dengan deskripsi (contoh: "update nomor WA")
6. Klik **Commit changes**
7. Tunggu 1-2 menit → website update otomatis

**⚠️ HATI-HATI:** Jangan edit kode di dalam `<script>` atau `<style>` kecuali paham. Kalau salah, website bisa rusak.

---

## 🔐 Akun & Akses

**Simpan di password manager (Bitwarden/1Password/Google Password):**

| Layanan | URL Login | Email | Fungsi |
|---|---|---|---|
| **GitHub** | github.com/login | `techabhinaya@gmail.com` | Simpan kode |
| **Cloudflare** | dash.cloudflare.com | `techabhinaya@gmail.com` | Hosting & domain |
| **Sanity** | sanity.io/login | `techabhinaya@gmail.com` | CMS panel |
| **Tawk.to** | dashboard.tawk.to | `techabhinaya@gmail.com` | Live chat |
| **Domain Registrar** | `[ISI URL]` | `techabhinaya@gmail.com` | Perpanjang domain |

**⚠️ PENTING:**
- **Semua akun harus terdaftar dengan email Teh Nelly / Bang Hend**, bukan developer
- Developer cukup jadi **collaborator/admin**, bukan owner
- Ini memastikan bisnis tetap aman kalau developer ganti

### Cara Tambah Collaborator

**GitHub:**
1. Repo → Settings → Collaborators → Add people → masukkan username

**Cloudflare:**
1. Dashboard → Manage Account → Members → Invite

**Sanity:**
1. sanity.io/manage → pilih project → Members → Invite

---

## 💰 Biaya Operasional

| Item | Biaya | Frekuensi |
|---|---|---|
| Domain `.com` / `.id` | Rp [ISI] | Per tahun |
| Cloudflare Pages | Gratis | — |
| Sanity Free Tier | Gratis | — |
| Tawk.to | Gratis | — |
| GitHub | Gratis | — |
| **TOTAL** | **~Rp [ISI]/tahun** | — |

**Limit Free Tier (kalau lewat, perlu upgrade):**
- Sanity: 3 user, 10GB bandwidth, 100k API req/bulan
- Cloudflare Pages: 500 build/bulan, unlimited bandwidth
- Tawk.to: unlimited chat

**Estimasi lo butuh upgrade kalau:**
- Traffic > 100k page views/bulan
- Butuh > 3 admin Sanity
- Butuh fitur premium (custom domain email, analytics advanced, dll)

---

## 🔧 Troubleshooting

### Website nggak update setelah edit di Sanity
- Cek apakah udah klik **Publish** (bukan Save Draft)
- Clear cache browser: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
- Tunggu 2-3 menit

### Foto produk nggak muncul
- Cek ukuran file (max 5MB)
- Cek format (JPG, PNG, WebP)
- Re-upload di Sanity

### Halaman blank / error
- Buka **Console** browser (F12) → cek error
- Screenshot error → kirim ke developer
- Jangan panik, ada version control jadi bisa di-rollback

### Live chat Tawk.to nggak muncul
- Cek koneksi internet
- Disable ad blocker sementara
- Tunggu 5-10 detik (script loading)

---

## 📞 Kontak Developer

**Developer:** Yusuf Zulkarnaen 
**Email:** 58yusufzulkarnaenn@gmail.com
**WhatsApp:** 082311835807

**Untuk emergency (website down):**
- WhatsApp dulu, baru telpon
- Sertakan screenshot + URL halaman yang bermasalah

---

## 📚 Referensi & Dokumentasi

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Tawk.to Help](https://help.tawk.to/)

---

## 📝 Changelog

### v1.0.0 — 20 09 2026
- Launch website Abhinaya Group
- 4 unit bisnis: Store, Parfume, Rides, Lucky Cheese
- Multi-brand dengan design system konsisten
- CMS Sanity + auto-deploy Cloudflare Pages
- Live chat Tawk.to
- SEO dasar + sitemap
- Scroll reveal & skeleton loading
- Custom 404 page

---

**© 2026 Abhinaya Group. All rights reserved.**
**Built with ❤️ by Yusuf Zulkarnaen**
