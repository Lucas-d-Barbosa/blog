import clsx from "clsx";

export default function HomePage() {
  return (
    <h1
      className={clsx(
        "p-2",
        "text-6xl",
        "font-bold",
        "transition-discrete",
        "duration-300",
        "text-blue-500",
        "hover:text-blog",
        "cursor-pointer",
        "hover:bg-blue-500"
      )}
    >
      Texto no meu H1
    </h1>
  );
}
