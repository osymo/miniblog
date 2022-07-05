import React, { Fragment } from "react";
import { PostCreate, PostList } from "../../components";



import "./Home.css"

const data = [
    {
        id: 1,
        userName: 'Wassim Zerouta',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        imageUrl: '../../../public/giraffe.jpeg',
        comments: [
                    {
                        id: 1,
                        content:'je suis le comment 1'
                    }, 
                    {
                        id: 2,
                        content:'je suis le comment 2'
                    }, 
                    {
                        id: 3,
                        content:'je suis le comment 3'
                    } 
                ],
        updatedAt: '20 Juin 2022'
    },
    {
        id: 2,
        userName: 'Wassim Zerouta',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        imageUrl: '../../../public/giraffe.jpeg',
        comments: [
            {
                id: 1,
                content:'je suis le comment 1'
            }, 
            {
                id: 2,
                content:'je suis le comment 2'
            }, 
            {
                id: 3,
                content:'je suis le comment 3'
            } 
        ],
        updatedAt: '20 Juin 2022'
    },
    {
        id: 3,
        userName: 'Wassim Zerouta',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        imageUrl: '../../../public/giraffe.jpeg',
        comments: [
            {
                id: 1,
                content:'je suis le comment 1'
            }, 
            {
                id: 2,
                content:'je suis le comment 2'
            }, 
            {
                id: 3,
                content:'je suis le comment 3'
            } 
        ],
        updatedAt: '20 Juin 2022'
    }
]

export function Home() {

    const [postList, setPostList] = React.useState(data)

    const addNewPost = (post) => {
        const id = postList.length + 1
        post.id = id
        const list = [...postList]
        list.unshift(post) 

        setPostList(list)
    }

    return <Fragment>
            <PostCreate addNewPost={addNewPost} />
            <br/>
            <br/>
            <PostList list={postList}/>
        </Fragment>
}