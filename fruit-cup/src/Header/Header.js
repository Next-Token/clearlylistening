import "./Header.css";

const handleClick = () => {
  console.log('hewwo wold');
}

function Header() {
  return (
    <heading>
        <div className="heading-banner" >
            <img id="Logo" src="https://thefruitbasket.s3.amazonaws.com/FruitLogo.png" />
            <div className="Nav-Banner-ele">
              
            <button onClick={handleClick}><h1 id="Nav1">Home</h1></button>
            <button><h1 id="Nav2">About</h1></button>
            <button><h1 id="Nav3">Seth</h1></button>
            <button><h1 id="Nav4">Projects</h1></button>

            </div>
        </div>
    </heading >
  )
}


export default Header