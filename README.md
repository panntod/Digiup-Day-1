# Digiup - Pandhu Arya

## 📖 Deskripsi

Digiup adalah aplikasi web interaktif yang dirancang untuk memperkenalkan proyek dan profil pengembang dalam satu platform elegan. Dibuat menggunakan React dan Tailwind CSS, Digiup menawarkan beberapa halaman seperti Home, About, Contact, dan Project, dengan desain konsisten yang disusun melalui komponen Layout dan Navbar.

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
│   │   ├── Layout.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Counter.jsx
│   │   ├── Home.jsx
│   │   └── Project.jsx
│   ├── index.css
│   └── index.jsx
└── tailwind.config.js
```

## 📂 Struktur Direktori

- public/: Berisi file statis seperti index.html, manifest.json, dan robots.txt.
- src/: Berisi kode sumber utama.
  - component/: Berisi komponen seperti Layout.jsx dan Navbar.jsx untuk tampilan yang konsisten.
  - pages/: Berisi halaman seperti About.jsx, Contact.jsx, Counter.jsx, Home.jsx, dan Project.jsx.
  - index.css: Berisi gaya global.
  - index.jsx: Kode utama untuk merender aplikasi

## 📄 Deskripsi Halaman

- Home: Halaman utama yang menyambut pengguna dengan informasi singkat.
- About: Menampilkan informasi tentang pengembang aplikasi.
- Contact: Menyediakan formulir kontak untuk pengunjung.
- Counter: Halaman dengan penghitung sederhana untuk interaksi pengguna.
- Project: Menampilkan daftar proyek yang telah dikembangkan.

## 📦 Dependensi

- react: ^18.3.1
- react-dom: ^18.3.1
- react-router-dom: ^6.28.0
- tailwindcss: ^3.4.14
