import { postRepository } from "@/repositories/post/json-post-repository";
import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";

export default async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
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
                href: `/post/${post.slug}`,
              }}
            ></PostCoverImage>
            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-slate-600 block text-sm"
                dateTime={post.createdAt}
              >
                {post.createdAt}
              </time>
              <PostHeading url="#" as={"h2"}>
                {post.title}
              </PostHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
