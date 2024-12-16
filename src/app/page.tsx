"use client"

import { useStore } from "@/store/store";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const { products, fetchProducts, handleLikeProduct, deleteProduct } = useStore()

  // useEffect(() => {
  //   fetchProducts()
  // }, [fetchProducts])

  return (
    <div className="border-2 p-4">
      
      home

    </div>
  );
}
