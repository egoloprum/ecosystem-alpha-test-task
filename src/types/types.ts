export type Product = {
  id:           string
  title:        string
  difficulty:   string
  portion:      string
  time:         string
  description:  string
  ingredients:  string
  method:       string[]
  image:        string
  liked:        boolean
}

type StoreState = {
  products: Product []
}

type StoreActions = {
  addProduct:         (product: Product) => void 
  deleteProduct:      (id: string) => void
  editProduct:        (product: Product) => void
  handleLikeProduct:  (id: string) => void
  fetchProducts:      () => Promise<void>
}

export type Store = StoreState & StoreActions


