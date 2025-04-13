import React, { useEffect, useState } from "react";
import axios from "axios";

import "./../styles/Blog.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/medium-posts");
        console.log(res.data);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts data:", err);
      } finally {
      }
    };

    fetchMediumPosts();
  }, []);

  const stripHtml = (html) => html.replace(/<[^>]*>/g, ' ');

  return (
    <div className="blogContainer">
      {posts.map((post, index) => (
        <div key={index} className="postCard">
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
