import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};
export default function PostCoverImage({
  imageProps,
  linkProps,
}: PostCoverImageProps) {
  return (
    <Link
      className={clsx(
        "w-full",
        "h-full",
        "overflow-hidden",
        "rounded-md",
        linkProps.className
      )}
      {...linkProps}
    >
      <Image
        {...imageProps}
        className={clsx(
          "group-hover:scale-105",
          "transition",
          "w-full",
          "h-full",
          "object-cover",
          "object-center",
          imageProps.className
        )}
        alt={imageProps.alt}
      />
    </Link>
  );
}
