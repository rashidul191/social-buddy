import React from 'react';

const ShowComment = (props) => {
    // console.log(props);
    const {name, email, body, id}= props.comment;
    return (
        <div className="post-body">
            <h2>Name : <small> {name} </small></h2>
            <h4>Email : <small> {email} </small> </h4>
            <p>Body : <small>{body}</small></p>
            <p>ID: <small>{id}</small></p>
        </div>
    );
};

export default ShowComment;