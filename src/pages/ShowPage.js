import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
export const ShowPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(id);

  const getPost = (id) => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
  }
  useEffect(() => {
    getPost(id);
  }, [id])

  const printDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  } 

  if (loading) {
    return (
      <LoadingSpinner />
    )
  }

  return (
    <div>
      <div className="mt-3 d-flex">
        <h1 className="flex-grow-1">{ post.title }</h1>
        <div>
          <Link
            to={`/blogs/${id}/edit`}
            className="btn btn-primary">
            Edit
          </Link>
        </div>
      </div>
      <small className="text-muted">
        Created At: {printDate(post.createAt)}
      </small>
      <hr />
      <p>{ post.body }</p>
    </div>
  );
}