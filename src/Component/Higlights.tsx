import { Product, getProduct } from '@/lib/data';
import ProductListing from './ProductListing';

const Higlights = async() => {
    const products: Product[] = await getProduct();
     console.log("Fetched Products:", products);
    return (
        <div>
           <ProductListing products={products} />
        </div>
    );
};

export default Higlights;