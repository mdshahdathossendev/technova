import HeroSection from '@/Component/Hero';
import ShopByCategory from '@/Component/ShopByCategory';
import Higlights from '@/Component/Higlights';
import Testimonials from '@/Component/TestimonialCard';
import TechInsights from '@/Component/BlogCard';
import Newsletter from '@/Component/Newsletter';
const Home = () => {
  return (
    <>
    <HeroSection></HeroSection>
    <ShopByCategory></ShopByCategory>
    <Higlights></Higlights>
    <Testimonials></Testimonials>
    <TechInsights></TechInsights>
    <Newsletter></Newsletter>
    </>
  );
};

export default Home;