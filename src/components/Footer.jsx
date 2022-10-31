
import React from "react"



const Footer =() =>{
    return(
<footer class="text-center text-lg-start bg-black text-muted ">
  
  <section class="d-flex justify-content-center justify-content-lg-between p-4 text-wrap border-bottom">

    <div class="me-5 d-none d-lg-block">
    
    </div>
    <span>Get connected with us on social networks:</span>

    <div class="fw-bold row mt-3">
      <a href="https://www.facebook.com" class="me-4 link-secondary p-1">
        <i class="fab fa-facebook-f">Facebook</i>
      </a>
      <a href="https://www.twitter.com/gathogodev" class="me-4 link-secondary p-1">
        <i class="fab fa-twitter">Twitter</i>
      </a>
      <a href="https://www.instagram.com" class="me-4 link-secondary p-1">
        <i class="fab fa-instagram">Instagram</i>
      </a>
      <a href="https://www.google.com" class="me-4 link-secondary mt-4  p-1">
        <i class="fab fa-google">Google</i>
      </a>
    
      <a href="https://www.linkedin.com" class="me-4 link-secondary p-1">
        <i class="fab fa-linkedin">LinkedIn</i>
      </a>
      <a href="https://www.github.com" class="me-4 link-secondary p-1">
        <i class="fab fa-github">Github</i>
      </a>
    </div>
  </section>
  <section class="">
    <div class="container text-center text-md-start mt-5">

      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>EASYFARM
          </h6>
          <p>
          EasyFarm is a new patform to assist farmers to market their products and their customers place an order we have shows, and prizes worn.
          welcome to EasyFarm.
          </p>
          <p>Subscribe to our Upcoming events and news.</p>
         <input type="search"
             placeholder="Enter email to subscribe"
             className="me-3 p-1"
             aria-label="Search"/>
             <button class="bg-success fw-bold">Submit</button>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">POTATOES</a>
          </p>
          <p>
            <a href="#!" class="text-reset">CABBAGES</a>
          </p>
          <p>
            <a href="#!" class="text-reset">FRESH MILK</a>
          </p>
          <p>
            <a href="#!" class="text-reset">EGGS</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    
          <h6 class="text-uppercase fw-bold mb-4">
            talk to us
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="/orders" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="Tour" class="text-reset">Tour</a>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i> WESTLANDS ,NAIROBI, KENYA</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            info@EasyFarm.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> +254700064400</p>
          <p><i class="fas fa-print me-3 text-secondary"></i> +254708103874</p>
        </div>
        
      </div>
      
    </div>
  </section>
  
  <div class="text-center p-4 background-color: rgba(0, 0, 0, 0.025);">
    © 2022 Copyright:
    <a class="text-reset fw-bold" href="/">EasyFarm.com</a>
  </div>
  
</footer>
    )
}
export default Footer