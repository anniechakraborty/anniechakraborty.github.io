import React, { useEffect, useState } from "react";
import LoadingSpinner from "./Spinner";

import "./../styles/BlogProjects.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      fetch("https://personalwebsitebackend-1772.onrender.com/api/medium-posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setPosts(data);
      setLoading(false);
    });
    };

    fetchMediumPosts();
  }, []);

  const stripHtml = (html) => html.replace(/<[^>]*>/g, ' ');

  if (loading) return <LoadingSpinner />;

  return (
    <div className="blogContainer">
      <h2 className="fly_up_text">Blog</h2>
      {posts.map((post, index) => (
        <div key={index} className="postCard fly_up_text">
          <h3>{post.title}</h3>
          <p className="publishedDate">
            {new Date(post.published).toLocaleDateString()}
          </p>
          {post.summary && (
            <p className="summary">
              {post.summary.length > 500
                ? stripHtml(post.summary.slice(0, 500)) + "..."
                : stripHtml(post.summary)}
            </p>
          )}
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}
