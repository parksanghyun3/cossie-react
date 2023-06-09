import axios from "axios"
import { useState, useEffect } from "react"
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { BlogList } from "../components/BlogList";

export const ListPage = () => {

  return (
    <div>
      <div className="mt-3 d-flex justify-content-between">
        <h1>
          blogs
        </h1>
      </div>
      <BlogList />
    </div>
  )
} 