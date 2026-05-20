import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PostDetails() {
    const { postId } = useParams();
    const [ post, setPost ] = useState(null);

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postId]);

    if(!postId){
        return <h4>Loading........</h4>;
    }
    return (
        <div>
            <h5>{postId}</h5>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}