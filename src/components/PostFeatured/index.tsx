import clsx from "clsx";
import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";
import { findAllPublicPosts } from "@/lib/post/queries";

export default async function PostFeatured() {
  const posts = await findAllPublicPosts();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;
  return (
    <section
      className={clsx(
        "grid",
        "grid-cols-1",
        "gap-8",
        "mb-16",
        "sm:grid-cols-2",
        "group"
      )}
    >
      <PostCoverImage
        imageProps={{
          src: post.coverImageUrl,
          width: 1200,
          height: 720,
          alt: post.title,
          priority: true,
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
    </section>
  );
}
