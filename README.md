# Digiup - Pandhu Arya

## 📖 Deskripsi

Digiup adalah sebuah aplikasi web yang dibangun menggunakan React dan Tailwind CSS. Aplikasi ini memiliki beberapa halaman seperti Home, Counter, Calculator, dan Greeting. Setiap halaman memiliki tata letak yang konsisten dengan menggunakan komponen Navbar.

## 🏗️ Struktur Proyek

```plaintext
├── .gitignore
├── package.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src/
│   ├── component/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Calculator.jsx
│   │   ├── Counter.jsx
│   │   ├── Greeting.jsx
│   ├── index.css
│   └── index.jsx
└── tailwind.config.js
```

## 📂 Struktur Direktori

- public/: Berisi file statis seperti index.html, manifest.json, dan robots.txt.
- src/: Berisi kode sumber utama.
  - component/: Berisi komponen seperti Layout.jsx dan Navbar.jsx untuk tampilan yang konsisten.
  - pages/: : Berisi halaman-halaman seperti Calculator.jsx, Counter.jsx, dan Greeting.jsx.
  - index.css: Berisi gaya global.
  - index.jsx: Kode utama untuk merender aplikasi

## 📄 Deskripsi Halaman

- Counter: Halaman yang berisi penghitung sederhana.
- Calculator: Halaman yang berisi kalkulator perkalian.
- Greeting: Halaman yang berisi aplikasi penyambutan.

## 📦 Dependensi

- react: ^18.3.1
- react-dom: ^18.3.1
- react-router-dom: ^6.28.0
- tailwindcss: ^3.4.14
