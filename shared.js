// /shared.js
// ============================================================
// "MAGIC" YANG NGISI DATA DARI config.js KE SEMUA HTML
// ============================================================
// GAK PERLU DIEDIT — kecuali lu mau nambah jenis data baru.
// Kalau lu nambah key baru di config.js (misal `waAdmin`),
// tinggal tambahin blok querySelector di bawah.
// ============================================================

(function () {
  const C = window.ABHINAYA || {};

  // Deteksi brand dari <body data-brand="...">
  const brand = document.body?.dataset.brand || '';
  const brandIg = (C.brandInstagram && C.brandInstagram[brand]) || C.instagram;

  // ---- Helper ----
  const setText = (el, val) => {
    if (val && el.textContent.trim() !== String(val)) {
      el.textContent = val;
    }
  };

  const setHref = (el, val) => {
    if (!val) return;
    el.href = val;
    if (val.startsWith('http')) {
      el.target = '_blank';
      el.rel = 'noopener';
    }
  };

  // ---- Auto-inject ----

  // WhatsApp
  document.querySelectorAll('[data-wa]').forEach((el) => {
    setHref(el, 'https://wa.me/' + C.waNumber);
  });
  document.querySelectorAll('[data-wa-display]').forEach((el) => {
    setText(el, C.waDisplay);
  });

  // Email
  document.querySelectorAll('[data-email]').forEach((el) => {
    setHref(el, 'mailto:' + C.email);
  });
  document.querySelectorAll('[data-email-display]').forEach((el) => {
    setText(el, C.email);
  });

  // Address
  document.querySelectorAll('[data-address]').forEach((el) => {
    setText(el, C.address);
  });

  // Sosmed
  document.querySelectorAll('[data-ig]').forEach((el) => setHref(el, brandIg));
  document.querySelectorAll('[data-tiktok]').forEach((el) => setHref(el, C.tiktok));
  document.querySelectorAll('[data-facebook]').forEach((el) => setHref(el, C.facebook));

  // Info situs
  document.querySelectorAll('[data-year]').forEach((el) => setText(el, C.year));
  document.querySelectorAll('[data-site-name]').forEach((el) => setText(el, C.siteName));

  // ---- Expose ke window buat script inline ----
  // Biar di dalam <script> halaman bisa pakai: SITE.waNumber
  window.SITE = C;
})();
