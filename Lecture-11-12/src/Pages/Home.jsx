import { Button } from '@/Components/ui/button'
import FeatureProducts from '@/CustomComponents/FeatureProducts'
import LatestProducts from '@/CustomComponents/LatestProducts/LatestProducts'
import ShopexOffer from '@/CustomComponents/ShopexOffer'
import React from 'react'

const Home = () => {
 
  return (
    <div>
      <FeatureProducts/>
    
      <LatestProducts/>
      <ShopexOffer/>
    </div>
  )
}

export default Home