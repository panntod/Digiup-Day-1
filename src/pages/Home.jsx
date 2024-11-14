import Layout from "../component/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="text-center bg-white px-32 py-20 rounded-xl shadow-xl">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Selamat Datang di Situs Saya
          </h1>
          <p className="text-lg text-gray-900">
            Selamat datang di tempat yang penuh dengan kreativitas dan inovasi.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
