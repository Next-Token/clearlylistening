import Navigation from "./Navigation/Nav";
import Content from "./Content/Content";
import Activity from "./Activity/Activity";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Test from "./Testing/Test";
import  { Selc } from "./Lane/Lane";
import {Lane} from "./Lane/Lane";
import { fruitMap } from "./db/data";

//<Test/> <Content />
function App() {

  const selected = fruitMap.get(Selc());

  console.log('here');
  console.log(selected);
  console.log('APP.JS');
  return <>
 
  <Header />
  <Navigation />

  <Activity />

  
  <Footer />
  </>

}

export default App;
