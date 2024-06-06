import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import Services from "../../components/services/Services";
import Footer from "../../components/footer/Footer";
import "./homePage.scss";

function HomePage() {

  return (
    
    <div className="homePage">
      <div className="heroSection">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Dream Home with CosmoCasa</h1>
          <p className="subHeading">
          Discover a wide range of properties tailored to fit your lifestyle. Whether you're looking to buy, sell, or rent, we make the process seamless and enjoyable.
          </p>
          <div className="searchBar">
          <SearchBar />
          </div>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/image2.jpeg" alt="" />
      </div>
      </div>

      <div className="serviceSection">
        <Services/>
      </div>

      <div className="footerSection">
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
