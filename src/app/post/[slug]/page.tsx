type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};
export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  return (
    <h1 className="text-center text-7xl font-bold py-16">
      Rota Dinâmica: {slug}
    </h1>
  );
}
