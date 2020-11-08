/** @jsx jsx */
import { Box, Flex, Input, Link, jsx } from "theme-ui";
import { useState } from "react";
import { PostMetadata } from "types/PostMetadata";
import { useSearch } from "lib/search";
import NextLink from "next/link";

const ArchiveLink: React.FC<{ slug: string }> = ({ slug, children }) => {
  return (
    <NextLink href={`/archive/${slug}`} passHref>
      <Link>{children}</Link>
    </NextLink>
  );
};

const ArchiveItem: React.FC<PostMetadata> = ({ title, slug, date }) => {
  return (
    <Flex
      as="li"
      sx={{
        listStyleType: "none",
        width: "100%",
        fontSize: "14px",
        justifyContent: "space-between",
      }}
      my={1}
    >
      <Box as="span">
        <ArchiveLink slug={slug!}>{title}</ArchiveLink>
      </Box>
      <Box
      as="time"
      >
        {!!date && date}
      </Box>
    </Flex>
  );
};

const ArchiveItems: React.FC<{ posts: PostMetadata[]; filter: string }> = ({
  posts,
  filter,
}) => {
  const filtered = useSearch(posts, ["title", "date", "keywords"], filter);

  return (
    <Flex as="ol" p={0} sx={{ flexDirection: "column" }}>
      {filtered.map((post) => (
        <ArchiveItem key={post.slug} {...post} />
      ))}
    </Flex>
  );
};

const ArchiveList: React.FC<{ posts: PostMetadata[] }> = ({ posts }) => {
  const [filter, setFilter] = useState<string>("");

  return (
    <Box mt={4}>
      <Flex sx={{ flexDirection: "column" }}>
        <Input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by title, keyword, or date..."
        />
      </Flex>
      <Box mt={4}>
        <ArchiveItems filter={filter} posts={posts} />
      </Box>
    </Box>
  );
};

export default ArchiveList;
