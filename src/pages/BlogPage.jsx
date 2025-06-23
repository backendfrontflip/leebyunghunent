import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const blogPosts = [
  {
    platform: 'Facebook',
    image: 'https://yourdomain.com/path-to-facebook-image.jpg', // Upload to your assets or use direct image link
    caption: "Behind the scenes moment during the shoot – raw, real, and powerful.",
    url: 'https://www.facebook.com/share/r/1EuaMnK6MF/?mibextid=wwXIfr',
  },
  {
    platform: 'Instagram',
    image: 'https://yourdomain.com/path-to-instagram-image.jpg',
    caption: "This look speaks volumes 🔥 – From the latest photoshoot.",
    url: 'https://www.instagram.com/p/DISoE7HpphA/?igsh=MXJ1OWs3YjE2c3l1MQ==',
  },
];

const Blog = () => {
  useEffect(() => {
    ScrollReveal().reveal('.blog-post', {
      delay: 300,
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 200,
      reset: false,
      cleanup: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid gap-8 max-w-4xl mx-auto">
        {blogPosts.map((post, index) => (
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="blog-post bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <p className="text-lg font-medium">{post.caption}</p>
              <p className="text-sm text-gray-400 mt-2">View on {post.platform}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
