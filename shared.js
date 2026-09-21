// /shared.js
// ============================================================
// "MAGIC" YANG NGISI DATA DARI config.js KE SEMUA HTML
// ============================================================
// GAK PERLU DIEDIT — kecuali lu mau nambah jenis data baru.
// ============================================================
//
// CARA PAKAI:
//   WhatsApp link:       <a data-wa>...</a>
//   WhatsApp + text:     <a data-wa data-wa-text="Halo, saya mau tanya...">...</a>
//   WhatsApp text only:  <span data-wa-display></span>
//   Email link:          <a data-email>...</a>
//   Email text:          <span data-email-display></span>
//   Alamat:              <span data-address></span>
//   Instagram:           <a data-ig>...</a>
//   TikTok:              <a data-tiktok>...</a>
//   Facebook:            <a data-facebook>...</a>
//   Tahun copyright:     <span data-year></span>
//   Nama situs:          <span data-site-name></span>
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

  // WhatsApp (support custom text via data-wa-text)
  document.querySelectorAll('[data-wa]').forEach((el) => {
    const customText = el.dataset.waText;
    const url = customText
      ? 'https://wa.me/' + C.waNumber + '?text=' + encodeURIComponent(customText)
      : 'https://wa.me/' + C.waNumber;
    setHref(el, url);
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
  window.SITE = C;

  // ---- Live chat Tawk.to (auto-load di semua halaman) ----
  // Guard: kalau sudah ada, skip biar gak double-load.
  if (!window.__tawkLoaded) {
    window.__tawkLoaded = true;
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    var tawkScript = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    tawkScript.async = true;
    tawkScript.src = 'https://embed.tawk.to/6aae64fa8909643446a8cbe9/1k2sjktd6';
    tawkScript.charset = 'UTF-8';
    tawkScript.setAttribute('crossorigin', '*');
    firstScript.parentNode.insertBefore(tawkScript, firstScript);
  }
})();
