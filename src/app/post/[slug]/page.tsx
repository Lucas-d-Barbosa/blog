import { findPostBySlugCached } from "@/lib/post/queries";
import { Metadata } from "next";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);
  return {
    title: post.excerpt,
  };
}
export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  const post = await findPostBySlugCached(slug);

  return (
    <h1 className="text-center text-7xl font-bold py-16">
      Rota Dinâmica: {post.title}
    </h1>
  );
}
