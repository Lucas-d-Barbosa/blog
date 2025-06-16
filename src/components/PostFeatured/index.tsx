import clsx from "clsx";
import PostCoverImage from "../PostCoverImage";
import PostSummary from "../PostSummary";

export default function PostFeatured() {
  const slug = "qualquer";
  const postLink = `/post/${slug}`;
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
          src: "/images/bryen_0.png",
          width: 1200,
          height: 720,
          alt: "Alt da imagem",
          priority: true,
        }}
        linkProps={{
          href: postLink,
        }}
      ></PostCoverImage>
      <PostSummary
        postLink={postLink}
        postHeading="h2"
        createdAt={"2025-02-22T04:32:54"}
        excerpt={
          "Next.js é um framework de desenvolvimento criado para facilitar a construção de aplicações web modernas usando React."
        }
        title={"Como manter o foco no mundo digital"}
      ></PostSummary>
    </section>
  );
}
