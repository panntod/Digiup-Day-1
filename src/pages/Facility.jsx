import React from "react";
import Layout from "../components/Layout";
import { H1, H2 } from "../components/Typographi";
import { roomsData } from "../data/room.data";
import Card from "../components/Card";

const Facility = () => {
  return (
    <Layout>
      <H1>Fasilitas Rumah Sakit Sehat Sejahtera</H1>
      <H2 className={"text-green-600"}>Fasilitas</H2>
      <ul className="pl-5 list-disc list-inside">
        <li>
          Unit Gawat Darurat 24 jam dengan penanganan kasus darurat jantung dan
          stroke.
        </li>
        <li>Ruang operasi modern dengan standar internasional.</li>
        <li>Laboratorium diagnostik lengkap.</li>
        <li>Fasilitas rawat inap nyaman dengan berbagai kelas.</li>
        <li>Klinik rawat jalan dengan layanan konsultasi spesialis.</li>
      </ul>
      <H2 className={"text-green-600"}>Keunggulan</H2>
      <ul className="pl-5 list-disc list-inside">
        <li>
          Mengutamakan teknologi medis terkini seperti MRI, CT Scan, dan EKG
          untuk diagnosa cepat dan akurat.
        </li>
        <li>
          Tim dokter spesialis jantung dan saraf berpengalaman lebih dari 10
          tahun.
        </li>
        <li>
          Program edukasi kesehatan untuk masyarakat seputar pencegahan penyakit
          jantung dan stroke.
        </li>
      </ul>
      <H2 className={"text-green-600"}>Kamar</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {roomsData.map((room, index) => (
          <Card key={index} room={room} />
        ))}
      </div>
    </Layout>
  );
};

export default Facility;
