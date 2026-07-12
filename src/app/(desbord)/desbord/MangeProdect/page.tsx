import MangeProdect from '@/Component/MangeProdect';
import { getProduct, Product } from '@/lib/data';

const page = async() => {
    const products: Product[] = await getProduct();
        console.log("Fetched Products:", products);
    return (
       <>
      <MangeProdect products={products}></MangeProdect>
       </>
    );
};

export default page;