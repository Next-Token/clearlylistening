import "./Header.css";
import Test from "../Testing/Test";


var fruityloop="https://thefruitbasket.s3.amazonaws.com/FruitLogo.png"

const handleClick = () => {
  console.log('hewwo wold');
}

function Header() {
  
  
  
  
  return (
    <heading>
        <div className="heading-banner" >
            <img id="Logo" src={fruityloop} alt="fruitcup"/>
            <div className="Nav-Banner-ele">
              
              <Test/>


            </div>
        </div>
    </heading >
  )
}


export default Header