/** @jsx jsx */
import { Box, Flex, Input, Link, jsx } from "theme-ui";
import { useMemo, useState } from "react";
import { PostMetadata } from "lib/archive";
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
      <Box as="time" sx={{ whiteSpace: "nowrap" }}>
        {!!date && date}
      </Box>
    </Flex>
  );
};

const Archives: React.FC<{ posts: PostMetadata[]; filter: string }> = ({
  posts,
  filter,
}) => {
  const [filtered, setFiltered] = useState<PostMetadata[]>([]);

  useMemo(() => {
    if (filter.length > 0) {
      setFiltered(
        posts.filter((post) => post.title!.toLowerCase().includes(filter))
      );
    } else {
      setFiltered(posts);
    }
  }, [filter]);

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
        <Archives filter={filter} posts={posts} />
      </Box>
    </Box>
  );
};

export default ArchiveList;
