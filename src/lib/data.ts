export const getProduct = async () => {
    const response = await fetch("http://localhost:5000/product");
    const data = await response.json();
    return data;
  };

export const getSingleProduct = async (id: string) => {
  const res = await fetch(`http://localhost:5000/product/${id}`, {
    cache: "no-store",
  });

  return res.json();
};
export interface Product {
  _id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  description: string;
  longDescription: string;
  images: string[];
}