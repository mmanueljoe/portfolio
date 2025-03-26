import React from 'react'
import './Blog.css'
import blogPosts from '../../data/blog'

const Blog = () => {
  return (
    <>
        <section id="blog">
            <div className="blog-header">
                <h1>My Blog & Articles</h1>
                <p>Sharing insights, lessons, and experiences in Web3, software development, UI/UX, and tech education.</p>
            </div>

            <div className="blog-container">
                {blogPosts.slice(0,3).map((post) => (
                    <div key={post.id} className="blog-card">
                        <img src={post.image} alt={post.title} className="blog-image" />
                        <h3 className="blog-title">{post.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Blog