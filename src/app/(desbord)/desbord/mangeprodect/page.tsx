import MangeProdect from '@/Component/MangeProdect';
import { getProduct} from '@/lib/data';

const page = async() => {
// interface Producte {
//   _id: string;
//   name: string;
//   brand: string;
//   category: string;
//   price: number;
//   stock: number;
//   rating: number;
//   description: string;
//   longDescription: string;
//   images: string[];
// }
    const products :any = await getProduct();
       
    return (
       <>
      <MangeProdect products={products}></MangeProdect>
       </>
    );
};

export default page;