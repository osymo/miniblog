import React from "react";

import './PostCreate.css'

export function PostCreate(props) {

    const [newPostContent, setNewPostContent] = React.useState('')

    const handleContentChange = (event) => setNewPostContent(event.target.value)

    const handleCreatePost = (event) => {
        event.preventDefault()

        const newPost = {
            userName: 'Wassim Zerouta',
            content: newPostContent,
            imageUrl: '../../../public/giraffe.jpeg',
            updatedAt: '20 Juin 2022'
        }
        
        props.addNewPost(newPost)
    }

    return <form>
                <label className="NewPostLabel">Nouveau post</label>
                <br/>
                <div className="NewPostWrapper">
                    <textarea value={newPostContent} onChange={handleContentChange} rows={5} placeholder="Ecrivez ici le contenu de votre votre post" className="NewPost"></textarea>
                </div>
                <button className="NewPostButton" onClick={handleCreatePost}>
                    Publier mon post
                </button>
            </form>
}