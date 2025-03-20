"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../../AppProvider";
import CBSGCharLoader from "../../Page/CBSGCharLoader";

const PracticeChild = () => {
  const { uri } = useContext(AppContext);
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${uri}practice-areas/${id}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setError("Failed to load post.");
        setLoading(false);
      });
  }, [id, uri]);

  if (loading) {
    return <CBSGCharLoader />;
  }

  if (error || !post) {
    return <div className="text-center py-10 text-red-500">{error || "Post not found."}</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center px-6 py-12 bg-white">
      <div className="w-full max-w-[150vmin] bg-white shadow-lg rounded-lg p-6">
        {post.image ? (
          <img
            src={post.image}
            alt={post.name}
            className="w-full h-96 object-cover rounded-lg mb-4 shadow-md"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}

        {post?.logo && (
          <div className="w-24 h-24 mb-4 mx-auto">
            <img src={post.logo} alt={`${post.name} logo`} className="w-full h-full object-contain" />
          </div>
        )}

        <h1 className="text-3xl font-bold text-center mb-4">{post.name}</h1>
        <div
          className="text-base font-normal text-gray-700 dynamic-content"
          dangerouslySetInnerHTML={{ __html: post.introduction }}
        />
      </div>
    </div>
  );
};

export default PracticeChild;
