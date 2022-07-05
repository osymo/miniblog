import React, { Fragment } from "react";

import { Post } from '../post/Post'

import './PostList.css'


export function PostList(props) {

   

    const postListHTML = props.list.map(post => <Post key={post.id}
                                                userName={post.userName} 
                                                content={post.content} 
                                                imageUrl={post.imageUrl}
                                                comments={post.comments}
                                                updatedAt={post.updatedAt}/>)

    return <Fragment>
            <section className="PostListWrapper">
                <h1>Liste des postes</h1>
                {postListHTML}
            </section>

        </Fragment>
}