/** @jsx jsx */
import NextLink from "next/link";
import { jsx, Flex, Link, Box } from "theme-ui";
import ColorThemeButton from "components/ColorThemeButton";

const PrimaryLink: React.FC<{ fontWeight?: string }> = ({
  children,
  fontWeight,
}) => {
  return (
    <NextLink href="/" passHref>
      <Link
        sx={{
          lineHeight: 1.25,
          fontSize: 2,
          textTransform: "uppercase",
          borderBottom: "none",
          "&:hover": {
            borderBottom: "none",
            color: "faded",
          },
          fontWeight,
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Header: React.FC<{}> = ({}) => {
  return (
    <Flex mt={140} as="header" sx={{ flexDirection: "column" }}>
      <Flex sx={{ justifyContent: "space-between" }}>
        <Flex sx={{ flexDirection: "column" }}>
          <Box>
            <PrimaryLink>Kosi Nwabueze</PrimaryLink>
          </Box>
          <Box>
            <PrimaryLink fontWeight="bold">Website</PrimaryLink>
          </Box>
        </Flex>
        <Box>
          <ColorThemeButton />
        </Box>
      </Flex>
      <Flex as="nav" mt={20} sx={{ flexDirection: "column", fontSize: "15px" }}>
        <Box>
          <NextLink href="/archive" passHref>
            <Link>archive</Link>
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/about" passHref>
            <Link>about</Link>
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/projects" passHref>
            <Link>projects</Link>
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/static/cv/kosi-cv-summer-2020.pdf" passHref>
            <Link>cv</Link>
          </NextLink>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
