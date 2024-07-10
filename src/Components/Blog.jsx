import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Schulte Table Exercises",
      excerpt: "A Fun Way to Train Your Brain",
    },
    // {
    //   id: 2,
    //   title: "Blog Post 2",
    //   excerpt: "This is a brief excerpt of Blog Post 2.",
    // },
    // Add more blog posts here...
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 text-orange-400">
      <h1 className="text-3xl font-bold text-center mb-8">Blogs</h1>
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="mb-8 p-6 bg-orange-300 rounded-lg shadow-md text-orange-100"
        >
          <h2 className="text-2xl font-semibold mb-2 text-orange-100">
            {post.title}
          </h2>
          <p className="mb-4 text-orange-100">{post.excerpt}</p>
          <Link
            to={`/blog/${post.id}`}
            className="text-orange-500 hover:text-orange-700 font-semibold"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
