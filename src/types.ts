export type Product = {
  id: string
  name: string
  subtitle: string
  price: number
  occasion: string
  image: string
  description: string
}

export type CartItem = {
  cartId: string
  productId: string
  name: string
  image: string
  details?: string
  price: number
  quantity: number
}
