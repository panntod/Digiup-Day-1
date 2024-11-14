import React from "react";
import Layout from "../component/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container pt-24 flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mx-auto">
            <img
              src="/pandhu.png"
              alt="Team"
              className="rounded-lg shadow-lg "
            />
          </div>
          <div className="text-white flex flex-col justify-center w-[40rem]">
            <h1 className="text-4xl font-bold mb-8">Tentang Saya</h1>
            <p className="text-lg">
              Seorang siswa sekolah menengah dengan minat di bidang IT.
              Pengembang web dengan dasar dalam bahasa pemrograman seperti HTML,
              CSS, dan JavaScript. Mahir dalam menggunakan React dan Node, saat
              ini sedang mempelajari Next dan Nest. Memiliki pemahaman yang kuat
              tentang Algoritma Pemrograman, memfasilitasi adaptasi ke berbagai
              bahasa pemrograman. Berkomitmen untuk mencapai keunggulan dalam
              pendidikan dan selalu siap untuk belajar.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
