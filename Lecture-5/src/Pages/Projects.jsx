//Router DOM
import { Link } from 'react-router-dom';
const Projects = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 29.99,
      stock: 120,
      description: "A comfortable and responsive wireless mouse with ergonomic design."
    },
    {
      id: 2,
      name: "Bluetooth Headphones",
      category: "Audio",
      price: 79.99,
      stock: 50,
      description: "Noise-canceling over-ear headphones with Bluetooth connectivity."
    },
    {
      id: 3,
      name: "Yoga Mat",
      category: "Fitness",
      price: 24.99,
      stock: 200,
      description: "Non-slip yoga mat with extra cushioning for added comfort."
    }
  ];

  return(
    <>
    {
        
        products.map(({name,category,description,id})=>{
            return(
                <div>
               <h1>{name}</h1>
               <h3>{category}</h3>
               <p>{description}</p>
               <Link to={`/projectDetail/${id}`}>Enter</Link>
               </div>
            )

        })
    
    }
    </>
  )}

  export default Projects;