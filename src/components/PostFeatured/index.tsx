import clsx from "clsx";
import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";

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
          src: "/images/bryen_6.png",
          width: 1200,
          height: 720,
          alt: "Alt da imagem",
          priority: true,
        }}
        linkProps={{
          href: postLink,
        }}
      ></PostCoverImage>
      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-slate-600 block text-sm" dateTime="2025-04-20">
          20/04/2025 10:00
        </time>
        <PostHeading url={postLink} as={"h1"}>
          Lorem ipsum, dolor sit amet consectetur
        </PostHeading>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          possimus voluptatibus in sed reprehenderit ut, sint architecto ducimus
        </p>
      </div>
    </section>
  );
}
