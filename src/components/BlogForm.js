import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { bool } from "prop-types";

export const BlogForm = ({ editing }) => {
  const history = useHistory();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [originalTitle, setOriginalTitle] = useState("");
  const [originalBody, setOriginalBody] = useState("");
  const [originalPublish, setOriginalPublish] = useState("");
  const [publish, setPublish] = useState("");

  useEffect(() => {
    if(editing) {
      axios.get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        console.log(res);
        setTitle(res.data.title);
        setOriginalTitle(res.data.title);
        setOriginalBody(res.data.body);
        setOriginalPublish(res.data.publish);
        setPublish(res.data.publish);
        setBody(res.data.body);
      })
    }
  }, [id, editing])

  const isEdited = () => {
    return title !== originalTitle || body !== originalBody || publish !== originalPublish;
  }

  const goBack = () => {
    if(editing) {
      history.push(`/blogs/${id}`);
    } else {
      history.push("/blogs");
    }
  }

  const onSubmit = () => {
    if (editing) {
      axios.patch(`http://localhost:3001/posts/${id}`, {
        title,
        body,
        publish
      })
        .then(res => {
          console.log(res);
          history.push(`/blogs/${id}`)
        })
    } else {
      axios.post("http://localhost:3001/posts", {
        title,
        body,
        publish,
        createAt: Date.now(),
      })
        .then(() => {
          history.push("/admin");
        })
    }
  };

  const onChangePublish = (e) => {
    console.log(e.target.checked);
    setPublish(e.target.checked);
  }
  return (
    <>
      <h1>{editing ? "Edit" : "Create"} a blog post</h1>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control" value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }} />
      </div>
      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control" value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
          rows="10" />
      </div>
      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" checked={publish} onChange={onChangePublish} />
        <label className="form-check-label">
          Publish
        </label>
      </div>
      <button
        className="btn btn-primary"
        onClick={onSubmit}
        disabled={editing && !isEdited()}
      >
        {editing ? "Edit" : "Post"}
      </button>
      <button
        className="btn btn-danger ms-2"
        onClick={goBack}
      >
        Cancle
      </button>
    </>
  )
}

BlogForm.propTypes = {
  editing: bool,
}

BlogForm.defaultProps = {
  editing: false,
}