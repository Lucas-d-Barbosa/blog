import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";
const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
);

const SIMULATE_WAIT_IN_MS = 2000;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;
    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }
  private async readFronDisk() {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parsedJason = JSON.parse(jsonContent);
    const { posts } = parsedJason;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();

    console.log("\n", "findAllPublic", "\n");

    const posts = (await this.readFronDisk()) as PostModel[];
    return posts.filter((post) => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();

    const posts = (await this.readFronDisk()) as PostModel[];
    const post = posts.find((post) => post.id === id);
    if (!post) throw new Error("Post não encontrado para ID!");
    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    await this.simulateWait();

    const posts = (await this.readFronDisk()) as PostModel[];
    const post = posts.find((post) => post.slug === slug);
    if (!post) throw new Error("Post não encontrado para slug!");
    return post;
  }
}

export const postRepository: PostRepository = new JsonPostRepository();
