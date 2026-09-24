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
export const addOrder = async (order: any) => {
  const res = await fetch("http://localhost:5000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  if (!res.ok) {
    throw new Error("Failed to create order");
  }

  return res.json();
};

export const deleteProduct = async (id: string) => {
  const res = await fetch(`https://technova-server-eight.vercel.app/product/${id}`, {
    method: "DELETE",
  });

  return res.json();
};