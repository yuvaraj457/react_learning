import { useEffect, useState } from "react";
import PostCard from "./component/postCard";
import {posts} from './core/apiCalls'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    posts()
    .then((res) => setData(res.data))
    .catch(error => console.log(error))
  },[])

  return (
    <>
    {data.map((item, index) => <PostCard title={item.title} body={item.body} />)}
    </>
  );
}

export default App;