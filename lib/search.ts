import { useMemo } from "react";
import { PostMetadata } from "../types/PostMetadata";

export function useSearch(
  posts: PostMetadata[],
  fields: string[],
  filter: string
) {
  return useMemo(() => {
    if (filter.length > 0) {
      return posts.filter((post) => {
        let match = false;
        fields.forEach((field) => {
          if (field === "keywords") {
            const a = filter.toLowerCase();

            post.keywords?.forEach((keyword) => {
              const b = keyword.toLowerCase();

              match ||= b.includes(a);
            });
          } else {
            const a = filter.toLowerCase();
            const b = post[field].toLowerCase();

            match ||= b.includes(a);
          }
        });

        return match;
      });
    } else {
      return posts;
    }
  }, [posts, filter]);
}
