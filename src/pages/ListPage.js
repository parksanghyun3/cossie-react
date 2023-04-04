import axios from "axios"
import { useState, useEffect } from "react"
import { Card } from "../components/Card";

export const ListPage = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    axios.get("http://localhost:3001/posts")
    .then((response) => {
      setPosts(response.data)
    })
  }
  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => {
        return (
          <Card key={post.id} title={post.title}>
            {/* { Children } */}
            <div className="d-flex justify-content-between">
              <div>{ post.title }</div>
              <div>button</div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}