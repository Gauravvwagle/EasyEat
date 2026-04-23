import React from 'react'
import './Home.css'
import Header from '../../component/Header/header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'



const Home = () => {

  const[category,setCategory]=useState("All");

  
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory/>
    </div>
    
    
  )
}

export default Home
