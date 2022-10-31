
//date-fns
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const Productdetail = ({product}) => {

    const handleclick =async()=>{

        const res= await fetch('/api/products/' + product._id,{             //CONCANATE PRODUCT _ID
            method:'DELETE'
        })


      if(res.ok){
        console.log("deleted")

      }
      else(
        console.log("error")
      )

       
 
    }
    return (  

        <div>
            <h><strong> <h>Product Name:</h> {product.product}</strong></h><br></br>
            <h><b><h>Product Description:</h>{product.productDescription}</b></h><br></br>
            <h><h><b>Product Category:</b></h>{product.productCategory}</h><br></br>
            <p><h><b>You added this product </b>:</h>{formatDistanceToNow(new Date(product.createdAt),{addSuffix:true})}</p>
            <span onClick={handleclick}><button className="material-symbols-outlined bg-danger">DELETE</button></span>
           
        </div>
    );
}
 
export default Productdetail;