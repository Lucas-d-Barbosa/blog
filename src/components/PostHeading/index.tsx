import clsx from "clsx";
import Link from "next/link";
type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};
export default function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: ["text-2xl/tight", "sm:text-4xl"],
    h2: ["text-1xl/tight", "sm:text-2xl"],
  };

  const commonClasses = "font-bold";
  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link href={url}> {children} </Link>
    </Tag>
  );
}
