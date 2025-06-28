import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";
import { findAllPublicPostsCached } from "@/lib/post/queries";

export default async function PostsList() {
  const posts = await findAllPublicPostsCached();
  return (
    <div className="grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postLink = `/post/${post.slug}`;
        return (
          <div key={post.id} className="flex flex-col gap-4 group">
            <PostCoverImage
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
              }}
              linkProps={{
                href: postLink,
              }}
            ></PostCoverImage>
            <PostSummary
              postLink={postLink}
              postHeading="h2"
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            ></PostSummary>
          </div>
        );
      })}
    </div>
  );
}
