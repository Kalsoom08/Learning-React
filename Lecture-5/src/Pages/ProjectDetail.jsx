// params and navigation
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProjectDetail = () => {
    const {projectID} = useParams();
    const products = [
      {id: 1, name: 'Product 1', price: 10, category: 'Category 1', stock: 100},
      {id: 2, name: 'Product 2', price: 20, category: 'Category 2', stock: 50},
      {id: 3, name: 'Product 3', price: 30, category: 'Category 3', stock: 30}
    ]

    const product = products.find((item)=> item.id == projectID);

    const navigate = useNavigate();
    const handleNav = ()=>{ 
        navigate('/')
    }
  return (
    <div>ProjectDetail
            <h1>{product.name}</h1>
            <button onClick={handleNav}>Go Back</button>


    </div>

  )
}

export default ProjectDetail
  