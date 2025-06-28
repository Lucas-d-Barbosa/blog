import { findPostBySlugCached } from "@/lib/post/queries";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};
export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return (
    <h1 className="text-center text-7xl font-bold py-16">
      Rota Dinâmica: {post.title}
    </h1>
  );
}
