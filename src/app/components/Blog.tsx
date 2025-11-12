'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { posts } from './../data/posts';
//import "./../blog.css";

interface Post {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
    image: string;
}

const typedPosts: Post[] = posts as Post[];


export default function Blog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 6;

    // 🔍 Filter by title
    const filteredPosts = typedPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 📅 Sort by date
    const sortedPosts = [...filteredPosts].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        
        const timeA = dateA.getTime();
        const timeB = dateB.getTime();
        
        return sortBy === 'newest' ? timeB - timeA : timeA - timeB;
    });

    // 📄 Paginate
    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const paginatedPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

    return (
        <>
            {/* Banner Section */}
            <div id="carouselExampleDark" className="header-section">
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="image-container">
                            <Image 
                                src="/images/blog-header.avif" 
                                height={2880} 
                                width={1920} 
                                className='img-fluid masterpiece ' 
                                alt="masterpiece" 
                                style={{ objectPosition: '10% 100%' }} 
                            />
                            <div className="overlay2 ">
                                <div className="text-white d-block">
                                    <h1 className="text-center d-block fs-1 mb-0 text-uppercase"> Blog</h1>
                                    {/* Removed commented-out Link */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <section className="section-padding theme-bg-light blog-main-page" style={{ marginTop: '0px' }}>
                <div className="container">
                    <div className="row justify-content-end mb-4">
                        <div className='col-md-12'>
                            <h4 className="text-center">
                              Explore real estate insights, trends, and lifestyle stories that shape smarter living.
                            </h4>
                        </div>
                        {/* Search and Sort controls are currently hidden with d-none */}
                        <div className="col-md-2 d-none">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="col-md-2 d-none">
                            <select className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="newest">Sort by Newest</option>
                                <option value="oldest">Sort by Oldest</option>
                            </select>
                        </div>
                    </div>
                    {/* 🛑 FIX: Use d-flex and align-items-stretch on the row to make columns equal height */}
                    <div className="row d-flex align-items-stretch"> 
                        {paginatedPosts.length > 0 ? paginatedPosts.map((post) => (
                            // Use h-100 on the column to fill the row's stretched height
                            <div className="col-md-4 mb-3" key={post.slug}>
                                {/* 🛑 FIX: Use d-flex and flex-column to enable vertical stretching inside the card */}
                                <div className="services-item shine-animate-item bg-white shadow-sm py-3 px-3 theme-bg-dark d-flex flex-column h-100">
                                    <div className="services-thumb">
                                        <Link href={`/blog/${post.slug}`}>
                                            <Image
                                                src={post.image}
                                                className="img-fluid"
                                                alt={post.title}
                                                width={500}
                                                height={500}
                                                style={{ minHeight: "250px", objectFit: "cover" }}
                                            />
                                        </Link>
                                    </div>
                                    {/* 🛑 FIX: Use flex-grow-1 to make this content block take up all remaining vertical space */}
                                    <div className="services-content flex-grow-1 d-flex flex-column"> 
                                        <h6 className="title my-3 text-center fw-bold">
                                            <Link className='text-dark fw-bold text-decoration-none theme-color-light fs-4' href={`/blog/${post.slug}`} style={{ fontWeight: "600" }}>
                                                {post.title}
                                            </Link>
                                        </h6>
                                        {/* The excerpt needs flex-grow to push the button down, or margin auto */}
                                        <p className=' mb-0 theme-color-light' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                                        
                                        {/* Use mt-auto on the button container to push it to the bottom */}
                                        <div className="text-center py-3 my-3 small mt-auto">
                                            <Link href={`/blog/${post.slug}`} className="btn theme-bg-light">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="col-12 text-center">
                                <p>No blog posts found.</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination Controls */}
                    <div className="row mt-4">
                        <div className="col text-center">
                            <nav>
                                <ul className="pagination justify-content-center">
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li
                                            key={i}
                                            className={`page-item mx-1 bg-black ${currentPage === i + 1 ? 'active' : ''}`}
                                            onClick={() => setCurrentPage(i + 1)}
                                        >
                                            <button className="page-link btn text-light rounded-0 theme-bg-dark">{i + 1}</button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}