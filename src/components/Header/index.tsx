"use client";
import { clsx } from "clsx";

export default function Header() {
  console.log("Header");
  return (
    <h1
      className={clsx(
        "p-2",
        "text-6xl",
        "font-bold",
        "transition-discrete",
        "duration-300",
        "text-blue-500",
        "cursor-pointer"
      )}
      onClick={() => alert("123")}
    >
      Texto no meu H1
    </h1>
  );
}
