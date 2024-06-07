import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {useNotificationStore} from "../../lib/notificationStore"

function Navbar() {
  const [open, setOpen] = useState(false);
  const {currentUser}=useContext(AuthContext)
  const fetch= useNotificationStore(state=>state.fetch);
  const number= useNotificationStore(state=>state.number);

  fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo_name.png" alt="" />
        </a>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <Link to="/profile" className="profile">
             {number>0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
            <img
              src={currentUser.avatar || "/noavatar.jpg"}
              alt=""
            />
            <span className="useName">{currentUser.username}</span>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register">Sign up</a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <div>
          {currentUser ? (
          <div className="">
            <a href="/profile">Profile</a>
          </div>
        ) : (
          <div className="side-menu">
            <a href="/login">Sign in</a>
            <a href="/register">Sign up</a>
          </div>
        )}
        </div>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
