import Container from "@/components/Container";
import Header from "@/components/Header";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";

import { Suspense } from "react";
import clsx from "clsx";
import PostHeading from "@/components/PostHeading";
import PostCoverImage from "@/components/PostCoverImage";

export default async function HomePage() {
  return (
    <Container>
      <Header />
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
            href: "/post/algumacoisa",
          }}
        ></PostCoverImage>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 block text-sm" dateTime="2025-04-20">
            20/04/2025 10:00
          </time>
          <PostHeading url="#" as={"h1"}>
            Lorem ipsum, dolor sit amet consectetur
          </PostHeading>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            possimus voluptatibus in sed reprehenderit ut, sint architecto
            ducimus
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer className="mt-auto d-flex items-end">
        <p className="text-6xl font-bold text-center py-8 ">Footer</p>
      </footer>
    </Container>
  );
}
