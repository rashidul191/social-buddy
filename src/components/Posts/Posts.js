import React from 'react';
import './Posts.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    console.log(props);
    const {title, body, id} = props.post;
    return (
        <div className="post-body">
            <h2>{title}</h2>
            <p>{body}</p>
            
            <Link to={`/post/${id}`}>
                <Button variant="contained" color="secondary">
                Show More {id}
                </Button>
            </Link>
        </div>
    );
};

export default Posts;