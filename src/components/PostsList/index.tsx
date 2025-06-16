import { postRepository } from "@/repositories/post/json-post-repository";
import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";
import { formatDateTime, formatDistanceToNow } from "@/utils/format-datetime";

export default async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
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
            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                className="text-slate-600 block text-sm"
                dateTime={post.createdAt}
                title={formatDistanceToNow(post.createdAt)}
              >
                {formatDateTime(post.createdAt)}
              </time>
              <PostHeading url={postLink} as={"h2"}>
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
