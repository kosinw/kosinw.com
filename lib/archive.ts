import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { format, parse } from "date-fns";

const archiveDir = join(process.cwd(), "pages/archive");

export function getPostSlugs() {
  return fs.readdirSync(archiveDir);
}

export interface PostMetadata {
  title?: string;
  slug?: string;
  date?: string | Date;
  [x: string]: any;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const newSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(archiveDir, `${newSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data }: { data: PostMetadata } = matter(fileContents);

  const dict: PostMetadata = {};

  fields.forEach((field) => {
    if (field === "slug") {
      dict[field] = newSlug;
    } else if (field === "date") {
      dict.date = parse(data.date! as string, "MM-dd-yyyy", new Date());
    } else if (data[field]) {
      dict[field] = data[field];
    }
  });

  return dict;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => (b.date! as any) - (a.date! as any))
    .map((post) => ({
      ...post,
      date: format(post.date! as Date, "MM-dd-yyyy"),
    }));

  return posts;
}
