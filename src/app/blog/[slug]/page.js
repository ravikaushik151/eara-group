// app/blog/[slug]/page.js
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts } from '../../data/posts';
import Script from "next/script";

// 🔹 Static paths
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ FIX

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  const siteUrl = 'https://earagroup.com';
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    metadataBase: new URL(siteUrl), // ✅ FIX WARNING
    title: post.meta_title || post.title,
    description: post.description,
    keywords: post.keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: post.meta_title || post.title,
      description: post.description,
      url: canonicalUrl,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
    },

    twitter: {
      card: 'summary_large_image',
      title: post.meta_title || post.title,
      description: post.description,
      images: [post.image],
    },
  };
}


// 🔹 Page Component
export default async function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
     {/* ✅ SCHEMA (ONLY IF EXISTS) */}
          {post.schema && (
  <Script
    id="post-schema"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(post.schema),
    }}
  />
)}
      {/* Header */}
      <div className="header-section">
        <div className="image-container">
          <Image
            src="/images/blog-header.avif"
            height={2880}
            width={1920}
            className="img-fluid masterpiece"
            alt="Blog Header"
            priority
          />
          <div className="overlay2">
            <p className="text-center fs-1 text-white text-uppercase">Blog</p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="section-padding theme-bg-light blogs">
        <div className="container">
          <Image
            src={post.image}
            className="w-100 img-fluid"
            alt={post.title}
            width={1296}
            height={607}
          />

          <h1 className="fs-2 fw-bold mt-4 theme-color-dark">
            {post.h1 || post.title}
          </h1>

          <div
            className="theme-color-dark py-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
    </>
  );
}
