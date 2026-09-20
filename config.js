// /config.js
// ============================================================
// SINGLE SOURCE OF TRUTH — SEMUA DATA PENTING DI SINI
// ============================================================
// Kalau mau ganti nomor WA, email, IG, dll — EDIT DI SINI AJA.
// Semua halaman yang pakai <script src="/config.js"> bakal
// otomatis update.
//
// Cara pakai di HTML:
//   WhatsApp link:   <a data-wa>...</a>
//   WhatsApp text:   <span data-wa-display></span>
//   Email link:      <a data-email>...</a>
//   Email text:      <span data-email-display></span>
//   Alamat:          <span data-address></span>
//   Instagram:       <a data-ig>...</a>
//   TikTok:          <a data-tiktok>...</a>
//   Facebook:        <a data-facebook>...</a>
//   Tahun copyright: <span data-year></span>
//   Nama situs:      <span data-site-name></span>
// ============================================================

window.ABHINAYA = {
  // === KONTAK UTAMA ===
  waNumber: '6282311835807',        // format internasional tanpa '+', tanpa spasi
  waDisplay: '+62 823-1183-5807',   // yang muncul sebagai teks
  email: 'info@abhinayagroup.com',
  address: 'Kalimantan, Indonesia',

  // === SOSMED GLOBAL (default) ===
  instagram: 'https://www.instagram.com/abhinayagroup',
  tiktok: '#',
  facebook: '#',

  // === OVERRIDE PER-BRAND ===
  // Kalau brand punya sosmed sendiri, isi di sini.
  // Kalau dikosongin / gak ada, otomatis pakai sosmed global di atas.
  // Cara aktivasi: tambah <body data-brand="luckyCheese"> di file HTML
  brandInstagram: {
    luckyCheese: 'https://www.instagram.com/luckycheese.id',
    // store:   'https://www.instagram.com/abhinayastore',
    // parfume: 'https://www.instagram.com/abhinayaparfume',
    // rides:   'https://www.instagram.com/abhinayarides',
  },

  // === INFO SITUS ===
  siteName: 'Abhinaya Group',
  siteUrl: 'https://abhinaya-web.pages.dev',
  year: 2026,
};
