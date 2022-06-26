import React, { useState } from 'react'
import './_product.css';
export const ProductDetails = ({ product, handleAddToCart, handleBuyNow }) => {
    
    const [quantity, setQuantity] = useState(1)

    const handleSubmit=(event)=>{
        event.preventDefault();
    }

    const addToCart=()=>{
        
        handleAddToCart({
            ...product,
            quantity: +quantity,
            amount: ((+quantity) * product.price)
        })
    }

    const buyNow=()=>{
        handleBuyNow({
            ...product,
            quantity: +quantity
        })
    }
    
    return (
        <div className='product-details'>
            <div className='basic'>
                <img src={product.image} alt={product.title} />
                <form onSubmit={handleSubmit} className='info'>
                    <div>
                        <p className='display-6 fw-bold'>{product.title}</p>
                        <p className='display-6'>${product.price} USD</p>
                        <p className='display-6'>Stock: {product.rating.count}</p>
                        <p>
                            <label htmlFor='qty'> Quantity </label>
                            <input
                                type='number'
                                min={1}
                                max={+product.rating.count}
                                defaultValue={quantity}
                                onChange={e=> setQuantity(e.target.value)}
                                id='qty'
                            />
                        </p>
                    </div>
                    <div>
                        <button 
                            onClick={buyNow}
                            type='sumbit'
                            className='btn btn-lg m-1 buy-now' >
                            BUY NOW
                        </button>
                        <button 
                            onClick={addToCart}
                            type='sumbit'
                            className='btn btn-lg m-1 btn-add-to-cart'>
                            ADD TO CART
                        </button>
                    </div>
                </form>
            </div>
            <hr />
            <div className='desc'>
                <p className='display-6 text-center'>DESCRIPTION</p>
                <p id='description'>{product.description}</p>
            </div>
        </div>
    )
}
