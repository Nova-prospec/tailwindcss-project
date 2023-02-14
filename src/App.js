import { Fragment } from "react";
import Footer from "./Components/Footer/Footer";
import AddNewProperty from "./Components/Homepage/AddNewProperty";
import PropertyList from "./Components/Homepage/PropertyList";
import Reviews from "./Components/Homepage/Reviews";
import Section1 from "./Components/Homepage/Section-1";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Fragment>
      <Header/>
      <Section1/>
      <PropertyList/>
      <AddNewProperty/>
      <Reviews/>
      <Footer/>
    </Fragment>
  );
}

export default App;
