'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { posts } from './../data/posts';

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 6;

    // 🔍 Filter by title
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 📅 Sort by date
    const sortedPosts = [...filteredPosts].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
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
                            <Image src="/images/Blog_Eara_Here Image.jpg" height={2880} width={1920} className='img-fluid masterpiece rounded-4' alt="masterpiece" style={{objectPosition:'15% 100%'}} />
                            <div className="overlay2 ">
                                <div className="text-white d-block">
                                    <p className="text-center d-block fs-1 mb-3 text-uppercase"> Blog</p>
                                    <p className="text-center d-block fs-6 ">
                                        <Link className="text-white text-decoration-none" href={'./'}> Home</Link> / Blog
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <section className="section-padding theme-bg-light" style={{ marginTop: '0px' }}>
                <div className="container">
                    <div className="row justify-content-end mb-4">
                        <div className='col-md-4 '>
                            <h2 className="text-center">
                                Blogs
                            </h2>
                        </div>
                        <div className="col-md-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="col-md-2">
                            <select className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="newest">Sort by Newest</option>
                                <option value="oldest">Sort by Oldest</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        {paginatedPosts.length > 0 ? paginatedPosts.map((post) => (
                            <div className="col-md-4 py-3 px-3 " key={post.slug}>
                                <div className="services-item shine-animate-item bg-white shadow-sm py-3 px-3  theme-bg-dark">
                                    <div className="services-thumb">
                                        <Link href={`/blog/${post.slug}`}>
                                            <Image
                                                src={post.image}
                                                className="img-fluid"
                                                alt={post.title}
                                                width={500}
                                                height={500}
                                            />
                                        </Link>
                                    </div>
                                    <div className="services-content">
                                        <h6 className="title my-3  fw-bold">
                                            <Link className='text-dark  fw-bold text-decoration-none theme-color-light' href={`/blog/${post.slug}`} style={{ fontSize: "21px", fontWeight: "600" }}>
                                                {post.title}
                                            </Link>
                                        </h6>
                                        <p className='mb-0 theme-color-light'>{post.excerpt}</p>
                                        <div className="text-center py-3 my-3 small  ">
                                            <Link href={`/blog/${post.slug}`} className="btn btn-dark theme-bg-light theme-color-dark ">Read More</Link>
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
                                            <button className="page-link bg-black border-dark text-white rounded-0 theme-bg-dark">{i + 1}</button>
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
