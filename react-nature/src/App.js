import React from 'react'
import HeroBlog from "./HeroSection/HeroBlog"
import SocialFeature from "./SocialFeatures/SocialFeature"
import PopularCategory from "./PopularCat/PopularCategory"
import TrendingProduct from "./trendingProducts/TrendingProduct"

const App = () => {
  return (
    <>
      <HeroBlog />
      <SocialFeature />
      <PopularCategory />
      <TrendingProduct />
    </>
  )
}

export default App
