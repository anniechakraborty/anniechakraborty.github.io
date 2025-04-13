import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Blog(){
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        const fetchMediumPosts = async () => {
            try {
              const res = await axios.get('http://localhost:5000/api/medium-posts');
              console.log(res);
              setPosts(res.data);
            } catch (err) {
              console.error('Error fetching posts data:', err);
            } finally {
            }
          };
      
          fetchMediumPosts();
    }, [])
}