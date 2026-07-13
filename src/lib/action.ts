import { Product } from "./data";


export const addProduct = async (product: Product) => {
  const res = await fetch("https://technova-server-eight.vercel.app/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("Failed to add product");
  }

  return res.json();
};
export const deleteProduct = async (id: string) => {
  const res = await fetch(`https://technova-server-eight.vercel.app/${id}`, {
    method: "DELETE",
  });

  return res.json();
};