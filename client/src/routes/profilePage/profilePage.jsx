import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {

  const data=useLoaderData();


  const {updateUser,currentUser}=useContext(AuthContext);
  const navigate=useNavigate();

  const handleLogout=async()=>{
    try{
      await apiRequest.post("/auth/logout");
      updateUser(null)
      navigate("/");
    }catch(err){
      console.log(err);
    }
  }
  return (
  <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="profileInfo">
          <div className="title">
            <h1 className="heading">User Information</h1>
            <Link to="/profile/update"><button>Update Profile</button></Link>
          </div>
          <div className="info">
            <span>
              <img
                src={currentUser.avatar || "noavatar.jpg"}
                alt=""
              />
            </span>
            <div className="userInfo"><span>
              <b>Username:</b> {currentUser.username}
            </span>
            <span>
             <b>E-mail:</b> {currentUser.email}
            </span></div>
          </div>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
            
            <button>Create New Post</button>
            </Link>
          </div>
          <Suspense fallback={<img className="loading" src="./loading2.gif"/>}>
        <Await
          resolve={data.postResponse}
          errorElement={
            <p>Error loading posts!</p>
          }
        >
          {(postResponse) => 
          <List posts={postResponse.data.userPosts} />
          }
        </Await>
        </Suspense>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Suspense fallback={<img className="loading" src="./loading2.gif"/>}>
        <Await
          resolve={data.postResponse}
          errorElement={
            <p>Error loading posts!</p>
          }
        >
          {(postResponse) => 
          <List posts={postResponse.data.savedPosts} />
          }
        </Await>
        </Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
        <Suspense fallback={<img className="loading" src="./loading2.gif"/>}>
        <Await
          resolve={data.chatResponse}
          errorElement={
            <p>Error loading chats!</p>
          }
        >
          {(chatResponse) => 
          <Chat chats={chatResponse.data}/>
          }
          
        </Await>
        </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
