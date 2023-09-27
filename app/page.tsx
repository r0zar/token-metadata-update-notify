import dynamic from "next/dynamic";
import Image from "next/image";
import Header from '../components/home/header';
import Footer from '../components/home/footer';
import Services from '../components/home/Services';
import About from '../components/home/About';
import UpdateMetadataForm from '../components/home/update-metadata-form';


import '../assets/css/style.css';
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/remixicon/remixicon.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';


export default function Home() {
  
  return (
    <>
       <Header />
      <About />
      <Services />
      <UpdateMetadataForm />
      <Footer />
      
    </>
  );
}
