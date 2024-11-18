import React from "react";
import Layout from "../components/Layout";
import { H1, H2, H4 } from "../components/Typographi";

const Home = () => {
  return (
    <Layout>
      <H1>Profil Rumah Sakit Sehat Sejahtera</H1>
      <H2 className={"text-green-600"}>Visi</H2>
      <p>
        Menjadi rumah sakit terkemuka dalam layanan kesehatan spesialis jantung
        dan saraf yang terpercaya dengan berbasis teknologi modern.
      </p>
      <H2 className={"text-green-600"}>Misi</H2>
      <ol className="list-decimal pl-5">
        <li>
          Memberikan pelayanan kesehatan berkualitas tinggi yang berpusat pada
          kebutuhan pasien.
        </li>
        <li>
          Mengembangkan teknologi medis terkini untuk mendukung diagnosa dan
          perawatan.
        </li>
        <li>
          Menyediakan tenaga medis dan paramedis profesional serta
          berpengalaman.
        </li>
        <li>
          Membangun lingkungan yang nyaman dan aman bagi pasien dan keluarga.
        </li>
      </ol>
      <H2 className={"text-green-600"}>Layanan Unggulan</H2>
      <ol className="list-decimal pl-5">
        <li>
          <H4>Spesialis Jantung:</H4>
          <ol className="list-decimal pl-5">
            <li>Layanan kateterisasi jantung (Cath Lab).</li>
            <li>Pemeriksaan dan perawatan penyakit jantung koroner.</li>
            <li>Rehabilitasi jantung pascaoperasi.</li>
          </ol>
        </li>
        <li>
          <H4>Spesialis Saraf:</H4>
          <ol className="list-decimal pl-5">
            <li>Diagnosa dan pengobatan stroke.</li>
            <li>
              Layanan neurologi komprehensif, termasuk rehabilitasi saraf.
            </li>
            <li>
              Penanganan penyakit neurodegeneratif seperti Parkinson dan
              Alzheimer.
            </li>
          </ol>
        </li>
      </ol>

      <div className="w-[520px] mx-auto text-center py-6">
        <H2 className={"text-green-600"}>“Kesehatan Anda, Prioritas Kami.”</H2>

        <i>
          Dengan dedikasi selama 10 tahun dalam memberikan layanan kesehatan,
          Rumah Sakit Sejahtera terus berkomitmen untuk menjadi pilihan utama
          dalam layanan spesialis jantung dan saraf.
        </i>
      </div>
    </Layout>
  );
};

export default Home;
