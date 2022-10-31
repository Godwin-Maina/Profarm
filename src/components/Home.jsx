import { useContext,useState,useEffect } from 'react' 

import '..';
import './Footer'
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
//import '../Homestyle.css'
import { ThemeContext } from '../context/ThemeContext';
import Productdetail from './productdetail';
const  Home = () => {

//destrcture the ThemeContext as below
const {islightTheme,light,dark} =useContext(ThemeContext);
const theme=islightTheme? light : dark;


 const [products, setproducts]=useState(null);
  //fetching products from db to display in fronted home 
  useEffect(()=>{
    const fetchproducts =async()=>{
    const response =await fetch('/api/products') 
  const json=await response.json()  
  if(response.ok){
    setproducts(json)
  }
  }
    fetchproducts()
  },[])
  


  return (
    
    <section >
      <div className='styleme'>

<div style={{fontSize:'25px', textAlign:'center',fontFamily:'monospace',color:""}}>
     <p><b>EASYFARM WHERE QUALITY IS OUR PRODUCT</b></p>

      <p>TODAY ON EASYFARM BREAKFAST PLACE SLIDERS here, WE HAVE OUR FARM PRODUCTS TO TAKE SUCH AS SWEETPOTATOES AND TEA on breakfast ,TODAY WE SKIP AMEAL AT BREAKFAST
       <p> on lunch we have.(skip)</p>
       <p>Give a recommendation like tommorow eat so and so so that you have a balanced diet over the week it use ml(supervised learning) to learn what you have not taken recently</p>
        on supper we have.
        </p>

        <h2> <b> <u>Home page</u> </b> </h2>

        <p>We do delivery of our farm products to <b>Schools, Hotels,weddings and Companies and when Ordered</b>.</p>
        <p><b>Visit the Order Page above to place an order and delivery done within 48hrs.</b></p> 
        <p><b>Visit the Market Page above to add your products to sell.</b></p> 
        <p><b>Visit our Tour Page to have a look at our products and farmers.</b></p>
        </div>
        <h2><u>EasyFarm Benefits</u></h2> 
          <h2> <b>Mkulima Online Market</b> </h2>
        <p>The Farmer has Market on palm of his hand.</p>
        <p>A platform to showcase his/her skills. </p>
        <h2> <b>Maximum profit </b> </h2>
        <p>With ease of access to your customers you double your profit since all products will be sold no losses.</p>
        <h2> <b> price Tip</b> </h2>
        <p>use of AI and machine learning to predict our prices in various markets  </p>
        <p>The buyer has a tip of price which will help him to decide where to buy.</p>
        <p>You got predicted price for a span of a week or so which are subjected to changes.</p> 
        <div>
    <p><b>products you add will appear here below</b></p>
      {products && products.map((product)=>(
        <Productdetail key={product._id} product={product}/>
      ))}
     </div>
     <br></br>

        <p><b><u>SOME OF THE FARM PRODUCTS WE HAVE FROM OUR HARDWORKING FARMERS INCLUDE:</u></b></p>
  
        <br></br>
        <div className='products' style={{color:theme.syntax, background:theme.bg}}>
          <ul>
            <li style={{background:theme.ui}}>DAIRY MILK(FRESH)</li>
            <li style={{background:theme.ui}}>VEGETABLES(CABBAGES,KALES,SPINACH,BROCOLLI) </li>
            <li style={{background:theme.ui}}>CEREALS(MAIZE)</li>
            <li style={{background:theme.ui}}>TRADITIONAL FOODS</li>
            <li style={{background:theme.ui}}>POTATOES,SWEETPOTATOES,ARROWROOTS,YAMS </li>
            <li style={{background:theme.ui}}>EGGS, BROILERS(MEAT)</li>
          </ul>
        </div>
        
        </div>
        <footer >
        <Footer/>
        </footer>
    </section>

  
  )
}

export default Home