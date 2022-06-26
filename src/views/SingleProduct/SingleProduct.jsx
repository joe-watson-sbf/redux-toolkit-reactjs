import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById, addProductToCart } from '../../store/features/product'
import { Loading, ProductDetails } from '../../components'

export const SingleProduct = () => {

  const { id } = useParams()

  const { isLoading, product } = useSelector(state => state.product)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch, id])

  const handleBuyNow =(product)=>{

  }
  const handleAddToCart =(product)=>{
    dispatch(addProductToCart(product))
  }


  return (
    <section style={{ textAlign: 'center' }} className='mb-5'>

      {isLoading && <Loading />}

      {product &&
        <ProductDetails 
          product={product}
          handleAddToCart={handleAddToCart}
          handleBuyNow={handleBuyNow}
        />
      }

    </section>
  )
}
