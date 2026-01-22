import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import blogPosts from './data/blogPosts';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/echo" replace />;
  }


  return (
    <div className="blog-post-page">
      <article className="blog-post">
        <header className="blog-post-header">
          <div className="blog-post-container">
            <Link to="/echo" className="back-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Echo
            </Link>

            <h1 className="blog-post-title">{post.title}</h1>
            
            <div className="blog-post-intro-section">
              <div className="blog-post-featured-image">
                <img 
                  src={post.image} 
                  alt={post.title}
                />
              </div>
              <div className="blog-post-description-wrapper">
                <p className="blog-post-description">{post.description}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="blog-post-content">
          <div className="blog-post-container">
            <div className="blog-content-wrapper">
              <div className="blog-content-text">
                {typeof post.content === 'string' ? (
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                ) : (
                  <>
                    {post.content.qa && post.content.qa.map((item, index) => (
                      <div key={index} className="qa-section">
                        <div className="question">
                          {item.question}
                        </div>
                        <div className="answer">
                          {item.answer.split('\n').map((line, lineIndex) => (
                            <span key={lineIndex}>
                              {line}
                              {lineIndex < item.answer.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      <footer className="blog-post-footer">
        <div className="blog-post-container">
          <div className="blog-navigation">
            <Link to="/echo" className="back-to-blog">
              <span>← Back to All Stories</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;