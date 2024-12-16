import { Product, Store } from "@/types/types";
import { create } from "zustand";

export const useStore = create<Store>((set) => ({
  products: [],
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),

  deleteProduct: (id) => set((state) => ({
    products: state.products.filter(product => product.id !== id)
  })),

  editProduct: (updatedProduct) => set((state) => ({
    products: state.products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    )
  })),

  handleLikeProduct: (id) => set((state) => ({
    products: state.products.map(product => 
      product.id === id ? { ...product, liked: !product.liked } : product
    )
  })),

  fetchProducts: async () => {
    const url = 'https://www.eatthismuch.com/api/v1/food/1925429/?HTTP_BACKEND_VERSION=16';

    const allFetchedProducts: Product[] = []
        
    for (let i = 1; i <= 132; i++) {
      try {
        const response = await fetch(`${url}${i}`)
        const data = await response.json() as Product

        console.log(data)

        const fetchedProduct: Product = {
          id:           data.id,
          title:        data.title,
          difficulty:   data.difficulty,
          portion:      data.portion,
          time:         data.time,
          description:  data.description,
          ingredients:  data.ingredients,
          method:       data.method.map((step: Object) => Object.values(step)[0]),
          image:        data.image,
          liked:        false
        } 

        allFetchedProducts.push(fetchedProduct)
      } catch (error) { console.error(error) }
    }

    set({ products: allFetchedProducts })

  }

}))

