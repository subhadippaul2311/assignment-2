// "4": [
  //   "getposts form https://jsonplaceholder.typicode.com/posts",
  //   "show on table",
  //   "add remove button",
  //   "delete post when click on remove button"
  // ]

import React, {useState, useEffect} from "react";
import "./GetPostDeletePost.css";

export  function GetPostDeletePost() {

  const [post , setPost] = useState([]);
  // const [newData,setNewData]=useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => resp.json())
    .then((res)=>setPost(res))
  },[])

console.log(post)

const handelDelete=(Id)=>{

  const newData = post.filter((ele)=>ele.id !== Id);
  setPost(newData)

}

  return (
    <div>
      <h1>Hello This is Heading!</h1>
     

      <table>
      <thead>
        <tr>
    <td>ID</td>
    <td>UserId</td>
    <td>Title</td>
    <td>Body</td>
    <td>Action</td>
        </tr>
      </thead>

<tbody>
{
post.map((post)=>{

  return(
    <tr>
    <td>{post.id}</td>
    <td>{post.userId}</td>
    <td>{post.title}</td>
    <td>{post.body}</td>
      <td onClick={()=>handelDelete(post.id)}>❌</td>
    </tr>
  )
})

}
</tbody>
      </table>
    </div>
  );
}