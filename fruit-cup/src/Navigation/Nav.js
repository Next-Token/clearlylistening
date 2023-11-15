import "./Nav.css";
//import icons from '../icons/*';       <marquee scrollamount="3" behavior="scroll" direction="left" >  </marquee>
import Lane from "../Lane/Lane.js";

function Nav() {

  return (
    <nav>

      <div className="nav-container">

        <Lane />
       
      </div>

      <input type="text" className="search-input" placeholder="Enter fruit name here"  hidden/>
    </nav>
  );
}

export default Nav