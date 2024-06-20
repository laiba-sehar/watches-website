import React, { useEffect } from 'react';
import Men from '../../assets/menWatch.png';
import Women from '../../assets/femaleWatch.png';
import Smart from '../../assets/smart Watch.png';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'bootstrap'; 

import first from '../../assets/1.webp';
import second from '../../assets/2.webp';
import third from '../../assets/3.webp';
import fourth from '../../assets/4.webp';

import lifestyle from '../../assets/LifestyleEdit.png';

import Mens from '../../assets/menWa.png';
import Womens from '../../assets/womenWa.png';
import Smarts from '../../assets/smartWa.png';

import review1 from '../../assets/review1.png';
import review2 from '../../assets/review2.png';
import review3 from '../../assets/review3.png';
import './Main.css'
import Slider from '../../components/slider/Slider';
import Catagory from '../../components/catagory/Catagory';
import LatestCollection from '../../components/latest/LatestCollection';
import Edit from '../../components/edit/Edit';
import Reviews from '../../components/reviews/Reviews';
import Detail from '../../components/detail/Detail';
import { Details } from '@mui/icons-material';

function Main() {

  const products=[
    {id:1,img:first,name:"AURA MODICCI",price:"$39.51",details:"View Details"},
    {id:1,img:second,name:"AURA RUBY SV-6237",price:"$35.90 ",details:"View Details"},
    {id:1,img:third,name:"AURA Nitro Smartwatch",price:"$43.00 ",details:"View Details"},
    {id:1,img:fourth,name:"AURA Prestige Smartwatch",price:"$46.50 ",details:"View Details"},
]

const catagory=[
  {id:1,img:Mens,name:"Men's Collection",details:"Make a Bold statement with Aura Men Timeplaces",button:"View Details"},
  {id:1,img:Womens,name:"Women’s Collection",details:"$Unleash your Feminine Corn with Women Timespaces",button:"View Details"},
  {id:1,img:Smarts,name:"Smart Collection",details:"Experience the Fusion of Durability and Style in our Smart Watch Chronograph Collection",button:"View Details"},
]

const reviews=[
  {id:1,stars:5,review:"Great value for money. Stylish and durable watch.",img:review1,name:"Michael",country:"New York, NY"},
  {id:2,stars:5,review:"Absolutely stunning timepiece! Exceeded my expectations.",img:review2,name:"Adam",country:"Los Angeles, California"},
  {id:3,stars:5,review:"Sleek design, comfortable to wear. Highly recommended!",img:review3,name:"Isaac",country:"Dubai, UAE"},
]

  
  return (
    <>
      {/* Slider */}
         <Slider/>

    {/* latest collection */}
       <LatestCollection/>  


    {/* Lifestyle edit */}
         <Edit/>

    {/* Catagories */}
       <Catagory/>

       {/* Reviews */}
       <Reviews/>

        {/* Detail */}
        <Detail/>

  </>
  )
}

export default Main;