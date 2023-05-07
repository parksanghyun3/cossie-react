import axios from "axios"
import { useState, useEffect } from "react"
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { BlogList } from "../components/BlogList";

export const AdminPage = () => {
  return (
    <div>
      <div className="mt-3 d-flex justify-content-between">
        <h1>
          Admin
        </h1>
        <div>
          <Link to="/blogs/create" className="btn btn-success">
            Create New
          </Link>
        </div>
      </div>
      <BlogList isAdmin={true} />
    </div>
  )
} 