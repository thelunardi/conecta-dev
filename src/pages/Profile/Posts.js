import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import http from '../../utils/axios'
import PostCard from "../../components/PostCard"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const params = useParams()

    useEffect(() => {
        async function fetchPosts() {
            const response = await http.get(`api/posts/user/${ params.username }`)
            setPosts(response.data.posts)
        }

        fetchPosts()
    })

    return (
        <div>
            {
                posts.map(post => (
                    <PostCard key={ post.id } post={ post } />
                ))
            }
        </div>
    )
}

export default Posts