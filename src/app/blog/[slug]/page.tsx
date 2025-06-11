import { notFound } from 'next/navigation';

type Params = Promise<{ slug: string }>;

export default async function BlogPost({ params }: { params: Params }) {
    const { slug } = await params;

    const posts: Record<string, string> = {
        '1': 'Introduction to Next.js',
        '2': 'Building with React Server Components',
        '3': 'SEO Tips for Next.js Apps',
    };

    if (!posts[slug]) {
        notFound();
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Post: {posts[slug]}</h2>
            <p>This is the content of the blog post "{posts[slug]}"</p>
        </div>
    );
}