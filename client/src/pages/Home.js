import React, {useEffect, useState} from 'react'
import ProductCard from '../component/cards/ProductCard'
import {getProducstByCart, getProducts} from '../functions/product'
import Jumbotron from '../component/cards/Jumbotron'
import NewArrivals from '../component/home/NewArrivals'
import BestSellers from '../component/home/BestSellers'
import CategoryList from '../component/category/CategoryList'
import SubList from '../component/sub/SubList'


const Home = () => {
  return (
    <div>
    <div className="jumbotron text-danger h1 font-weight-bold text-center" style={{"backgroundColor":"#EDEDED"}}>
      <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
    </div>
    <h4 className="text-center p-3 mt-5 mb-5 display-3 jumbotron mr-0" style={{"backgroundColor":"#EDEDED"}}>
      New Arrivals
    </h4>
    <NewArrivals/>
    <h4 className="text-center p-3 mt-5 mb-5 display-3 jumbotron mr-0" style={{"backgroundColor":"#EDEDED"}}>
      Best Sellers
    </h4>
     <BestSellers/>
     <div>
     <CategoryList/>
     </div>
     <div>
     <SubList/>
     </div>
    </div>
  )
}

export default Home