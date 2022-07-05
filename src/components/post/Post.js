import React from "react";

import { Comment } from '../comment/Comment'

import './Post.css'


import giraffe from '../../../src/images/giraffe.jpeg'


export function Post(props) {
    
    const commentsListHTML = props.comments?.map(comment => <Comment key={comment.id} content={comment.content}/>)

    return <article className="PostWrapper">

                <div className="PostHeader">
                    <h3>{props.userName}</h3>
                    <h4>{props.updatedAt}</h4>
                </div>
                
                <div className="PostContent">
                    {props.content}
                </div>

                <br/>

                <img src={giraffe} alt="illustration de l'offre" width={250} height={250}/>
                {commentsListHTML}
                
            </article>
}