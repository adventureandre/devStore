'use client'
import { useCart } from '@/contexts/cart-context'

export interface AddtoCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddtoCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
    console.log('Item added to cart:', productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold"
    >
      Adicionar ao carrinho
    </button>
  )
}
