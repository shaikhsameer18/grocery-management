import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between text-gray-600">
          <span>Subtotal</span>
          <span className="font-medium">{currency} {subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex items-center justify-between text-gray-600">
          <span>Shipping Fee</span>
          <span className="font-medium">{currency} {delivery_fee.toFixed(2)}</span>
        </div>
        
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-gray-900">Total</span>
            <span className="text-xl font-semibold text-emerald-600">
              {currency} {total.toFixed(2)}
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-500">Including VAT</p>
        </div>
      </div>
    </div>
  )
}

export default CartTotal