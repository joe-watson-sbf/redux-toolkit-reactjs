import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../store/features/product'
import { Loading } from '../../components'

export const SingleProduct = () => {

  const { id } = useParams()

  const { isLoading, product={} } = useSelector(state => state.product)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductById(id))
  }, [dispatch, id])


  return (
    <div className='mb-5'>

      {isLoading && <Loading/>}
      <p className='display-3 m-5'> {product?.title.toUpperCase()} </p>
      <pre>
        {JSON.stringify(product, null, 3)}
      </pre>
    </div>
  )
}
