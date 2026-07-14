export const getProduct = async () => {
  const response = await fetch(
    "https://technova-server-eight.vercel.app/product",
    {
      cache: "no-store",
    }
  );

  return response.json();
};

export const getSingleProduct = async (id: string) => {
  const res = await fetch(`https://technova-server-eight.vercel.app/product/${id}`);
  return res.json();
};
export interface Product {
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
export interface Products {
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