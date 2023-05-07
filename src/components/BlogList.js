import axios from "axios"
import { useState, useEffect } from "react"
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { bool } from "prop-types";
import { Pagination } from "./Pagination";

export const BlogList = ({ isAdmin }) => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPosts = (page = 1) => {
    let params = {
        _page: page,
        _limit: 5,
        _sort: "id",
        _order: "desc",
    }
    if (!isAdmin) {
      params = { ...params, publish: true };
    }
    axios.get(`http://localhost:3001/posts`, {
      params: params,
    }).then((res) => {
      setPosts(res.data);
      setLoading(false);
    })
  }
  useEffect(() => {
    getPosts();
  }, [])
  const deleteBlog = (e, id) => {
    e.stopPropagation();

    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setPosts(prevPosts => {
        return prevPosts.filter(post => {
          return post.id !== id;
        })
      })
    });
  }
  if (loading) {
    return (
      <LoadingSpinner></LoadingSpinner>
    )
  }
  if (posts.length === 0) {
    return (
      <div>"no blog posts found"</div>
    )
  }

  const renderBlogList = () => {
    return posts.map(post => {
      return (
        <Card
          key={post.id}
          title={post.title}
          onClick={() => history.push(`/blogs/${post.id}`)}
        >
          {isAdmin ? (<div>
            <button
              className="btn btn-danger btn-sm"
              onClick={(e) => deleteBlog(e, post.id)}
            >Delete</button>
          </div>) : null}
        </Card>
      );
    })
  }

  return (
    <div>
      {renderBlogList()}
      <Pagination />
    </div>
  )
}

BlogList.propTypes = {
  isAdmin: bool,
}

BlogList.defalutProps = {
  isAdmin: false,
}