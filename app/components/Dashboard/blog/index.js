"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api.json') // This will correctly fetch from the public directory
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className='max-w-7xl mx-auto px-6 py-12'>
            <h1 className='text-4xl font-bold mb-8'>Study Blog</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {posts.map(post => (
                    <Link key={post.id} href={`/blog/${post.id}`} legacyBehavior>
                        <a className='border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
                            <h2 className='text-2xl font-semibold mb-4'>{post.title}</h2>
                            <p className='text-gray-700'>{post.excerpt}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;
