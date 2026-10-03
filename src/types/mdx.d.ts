declare module "*.mdx" {
  import type { PostMeta } from "@/content";
  export const meta: PostMeta;
}
