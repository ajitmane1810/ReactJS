import { Layout } from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection';
import ProductCard from '../../components/productCard/ProductCard';
import Testimonial from '../../components/testimonial/Testimonial';
import Track from '../../components/track/Track';
import { Link } from 'react-router-dom';

function Home () {

  
  return (
   <Layout>
   
      <HeroSection/>
      {/* <Filter/> */}
      <ProductCard/>
      <div className='flex justify-center -mt-10 mb-5'>
        <Link to={'./allproducts'}>
            <button className='bg-gray-300 px-5 py-2 rounded-xl'>see more</button>
        </Link>
      </div>
      <Track/>
      <Testimonial/>
   </Layout>
  )
}

export default Home