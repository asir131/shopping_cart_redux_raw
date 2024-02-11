import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
  return (
    <div>
        {console.log(product.title)}
        <h3>{product.title}</h3>
        <div className="ingredient__image">
				<figure>
					<img src={product.image} alt={product.title} />
				</figure>
			</div>
            <div className="ingredient__content">
				<p className="price">
					<span>Price ${product.price}</span>
				</p>
			</div>
            <div className="ingredient__btn">
				<button
					className="btn-white"
					onClick={() =>
						dispatch(
							// { type: "cart/addToCart", payload: product }
							addToCart(product)
							)
					}
				>
					ADD TO CART
				</button>
			</div>
    </div>
  )
}

export default ProductCard
