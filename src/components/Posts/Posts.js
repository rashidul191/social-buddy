import React from 'react';
import './Posts.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    // console.log(props);
    const {title, id} = props.post;
    return (
        <div className="post-body">
            <h2>Title : <small>{title}</small></h2>            
            <Link className="btn-style" to={`/post/${id}`}>
                <Button variant="contained" color="secondary">
                Show More
                </Button>
            </Link>
        </div>
    );
};

export default Posts;