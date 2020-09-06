import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowComment from '../ShowComment/ShowComment';


const Comment = (props) => {
    // const {postId} = useParams();
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${props.postId}/comments`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data));
    },[])
    return (
        <div >
            <h1>Comments : </h1>
            {
                comments.map(comment =><ShowComment comment = {comment}></ShowComment>)
            }
        </div>
    );
};

export default Comment;