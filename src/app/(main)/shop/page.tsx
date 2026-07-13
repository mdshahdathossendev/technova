import AllProdect from '@/Component/AllProdect';
import { getProduct, Products } from '@/lib/data';



const page = async () => {
    const products: Products[] = await getProduct();
    console.log("Fetched Products:", products);
    return (
        <div>
           <AllProdect products={products} />
        </div>
    );
};

export default page;