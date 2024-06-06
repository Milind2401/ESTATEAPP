import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function ListPage() {
  const data=useLoaderData()

  return <div className="searchResult">
    <div className="listContainer">
      <div className="wrapper">
        <Filter/>
        <Suspense fallback={<img className="loading" src="./loading2.gif"></img>}>
        <Await
          resolve={data.postResponse}
          errorElement={
            <img className="loading" src="./error2.gif"></img>
          }
        >
          {(postResponse) => postResponse.data.map(post=>(
            <Card key={post.id} item={post}/>
          ))}
        </Await>
        </Suspense>
      </div>
    </div>
    <div className="mapContainer">
    <Suspense fallback={<img src="./loading.gif"></img>}>
        <Await
          resolve={data.postResponse}
          errorElement={
            <p>Error loading posts!</p>
          }
        >
          {(postResponse) => <Map items={postResponse.data}/>
          }
        </Await>
        </Suspense>
    </div>
  </div>
}

export default ListPage;
