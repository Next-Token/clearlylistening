import "./Nav.css";
//import icons from '../icons/*';       <marquee scrollamount="3" behavior="scroll" direction="left" >  </marquee>
import ICONS from '../index.js';



function Nav() {



  return (
    <nav>

      <div className="nav-container">
      
        <img src={ ICONS.apple } className="fruit" alt="apple" />

        
        <img src={ ICONS.banana } className="fruit" alt="banana" />        
        <img src={ ICONS.cherry } className="fruit" alt="cherry" />        
        <img src={ ICONS.grape } className="fruit" alt="grape" />        
        <img src={ ICONS.lamon } className="fruit" alt="lamon" />        
        <img src={ ICONS.orange } className="fruit" alt="orange" />
        <img src={ ICONS.pear } className="fruit" alt="pear" />        
        <img src={ ICONS.pepper } className="fruit" alt="pepper" />        
        <img src={ ICONS.strawberry } className="fruit" alt="strawberry" />
       
      </div>
      
      
      <input type="text" className="search-input" placeholder="Enter fruit name here"  hidden/>
      
        

      

    </nav>
  );
}

export default Nav