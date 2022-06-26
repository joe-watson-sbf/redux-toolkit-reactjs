import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../store/features/product'
import { Product, Loading } from '../../components'

export const Shop = () => {

  const { isLoading, products=[] } = useSelector(state => state.product)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  


  return (
    <div style={{ textAlign: 'center'}}>

      <p className='display-3 m-5'> Shop </p>

      {isLoading && <Loading/>}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap:'wrap'
      }}>
        { products?.map((product, idx) => (<Product product={product} key={idx} />)) }
      </div>
    </div>
  )
}
