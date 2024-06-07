import "./footer.scss"
function Footer(){
    return(
        <footer className="footer">
    <ul className="social-icon">
      
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/milind-dadore/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/milind_0024?igsh=MWtydzlodzFzdmUwNw==">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="#">About</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
      <li className="menu__item"><a className="menu__link" href="/contact">Contact</a></li>

    </ul>
    <p>&copy;2021 CosmoCasa | All Rights Reserved</p>
  </footer>
    )
}
export default Footer;