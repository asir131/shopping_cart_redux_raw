import React from 'react'
import CartItem from '../components/CartItem';
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from '../store/actions/cart';
const Cart = () => {
    const cart =useSelector((storeState) => storeState.cart);
    const dispatch =useDispatch();
    let totalAmount=0;
    cart.forEach((item) =>totalAmount+=item.quantity*item.price);
        
    
  return (
    <div>
      <div className="account-setting__content">
				<div className="account-setting__content__title">
					<h4>Product list in your Cart</h4>
				</div>
				<div className="product-table-container">
					<table>
						<thead>
							<tr>
								<th>Image</th>
								<th>Product Title</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>SubTotal</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((cartItem) => (
								<CartItem cartItem={cartItem} />
							))}
						</tbody>
					</table>
				</div>
				<h2 className="total-price">
					Your Total Price will be $ {totalAmount}
				</h2>
				<div className="mt-50">
					<button
						onClick={() => dispatch(clearCart())}
						className="btn-big"
					>
						Clear Cart
					</button>
				</div>
			</div>
    </div>
  )
}

export default Cart
