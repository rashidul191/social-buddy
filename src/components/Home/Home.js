import React, { useState, useEffect } from 'react';
import './Home.css';
import Posts from '../Posts/Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data));
    },[])
    return (
        <div>
            <div className="text-style">
                <h1>Welcome to Social-Buddy</h1>
            </div>
            <div> 
                {
                    posts.map( post => <Posts post={post} key={post.id}></Posts>)
                } 
            </div>
        </div>
    );
};

export default Home;