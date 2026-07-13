import SingalPordect from '@/Component/SingalPordect';
import CustomerReviews from '@/Component/CustomerReviews';
import { getSingleProduct, Product } from '@/lib/data';
 interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async({ params }: PageProps) => {
     const { id } = await params;
     
     const products: any = await getSingleProduct(id);
    
    return (
        <div>
          <SingalPordect products ={products}></SingalPordect>
          <CustomerReviews></CustomerReviews>
        </div>
    );
};

export default page;