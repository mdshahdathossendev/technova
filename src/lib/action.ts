import { Product } from "./data";


export const addProduct = async (product: Product) => {
  const res = await fetch("http://localhost:5000/product", {
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
  const res = await fetch(`http://localhost:5000/product/${id}`, {
    method: "DELETE",
  });

  return res.json();
};