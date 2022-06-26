import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({ product }) => {

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div className="text-center p-3">
        <img src={product?.image}
          className="rounded"
          alt={product.name}
          style={{ width: '150px', height: '150px', objectFit:'contain' }}
      />
      </div>

      <div className="card-body">
        <h5 className="card-title" style={{ textTransform:'uppercase', fontSize:'1.1rem', fontWeight:600 }}> 
          {product.title.slice(0, 20)}...
        </h5>
        <p className="card-text">
          {product.description.slice(0, 80)}...
        </p>

      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center">
          {product.category.toUpperCase()}
        </li>
        <li className="list-group-item text-center">
          $ {product.price} USD
        </li>
      </ul>

      <div className="card-body text-center">
        <Link to={`/product/${product.id}`} className="btn btn-link text-uppercase">
          Buy Now
        </Link>
      </div>

    </div>
  )
}