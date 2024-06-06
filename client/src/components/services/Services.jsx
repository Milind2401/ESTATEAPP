import "./services.scss"
function Services(){

    return(
    
        <div className="serviceSection">
          <h1>Our Services</h1>
          <div className="row">
            <div className="service">
              <i className="fas fa-handshake"></i>
              <h2>Buying a Home</h2>
              <p>
              We guide you through every step of the home-buying process
              </p>
            </div>
            <div className="service">
            <i className="fa-solid fa-money-bill-1-wave"></i>
              <h2>Selling a Home</h2>
              <p>
              Maximize your property's value with our expert advice and marketing strategies
              </p>
            </div>
            <div className="service">
            <i className="fas fa-house-chimney-window"></i>
              <h2>Renting</h2>
              <p>
              Find the perfect rental property with our extensive listings and personalized service
              </p>
            </div>
            <div className="service">
            <i className="fa-solid fa-list-check"></i>
              <h2>Property Management</h2>
              <p>
              Let us handle the management of your rental properties for hassle-free income
              </p>
            </div>
            
          </div>
        </div>
    )
};
export default Services;