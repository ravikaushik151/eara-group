import Link from 'next/link';

const posts = [
    { id: 1, title: 'Introduction to Next.js' },
    { id: 2, title: 'Building with React Server Components' },
    { id: 3, title: 'SEO Tips for Next.js Apps' },
];

export default function Blog() {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
            <ul className="space-y-2">
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}