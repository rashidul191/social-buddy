import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css';
// import ShowComment from '../ShowComment/ShowComment';
import Comment from '../Comment/Comment';



const PostDetails = () => {
    const {postId} = useParams();
    const [posts, setPosts] = useState({});
    
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data));
    },[])
    const {title, body, userId, id} = posts;
    return (
     <div className="post-details-body"> 
        <div className="text-style">
            <h1>Post Details</h1>
        </div>
            {/* product details part */}
        <div className="post-details">
            <h2>Title :<small>{title}</small> </h2>
            <p>Body : {body}</p>
            <p>User Id : {userId}</p>
            <p>ID : <small>{id}</small></p>   
                  
        </div>
             {/* comment part */}
        <div className="comments-style">
            <Comment postId = {postId}></Comment>
            <a href="/home">Back to Home</a>
        </div>
     </div>
    );
};

export default PostDetails;