import AllProdect from '@/Component/AllProdect';
import { getProduct, Product } from '@/lib/data';



const page = async () => {
    const products: Product[] = await getProduct();
    console.log("Fetched Products:", products);
    return (
        <div>
           <AllProdect products={products} />
        </div>
    );
};

export default page;