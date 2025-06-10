import { PostModel } from "@/models/post/post-model";

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  //   create(postModel: PostModel): void;
  //   delete(postModel: PostModel): void;
  //   updated(postModel: PostModel): PostModel;
}
