/** @jsx jsx */
import NextLink from "next/link";
import { jsx, Flex, Link, Box } from "theme-ui";

const PrimaryLink: React.FC<{ href?: string; fontWeight?: string }> = ({
  children,
  href,
  fontWeight,
}) => {
  return (
    <Link
      href={href}
      sx={{
        lineHeight: 1.25,
        fontSize: 2,
        fontFamily: "monospace",
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
  );
};

const Header: React.FC<{}> = ({}) => {
  return (
    <Flex mt={140} as="header" sx={{ flexDirection: "column" }}>
      <Box>
        <NextLink href="/" passHref>
          <PrimaryLink>Kosi Nwabueze</PrimaryLink>
        </NextLink>
      </Box>
      <Box>
        <NextLink href="/" passHref>
          <PrimaryLink fontWeight="bold">Website</PrimaryLink>
        </NextLink>
      </Box>
      <Flex as="nav" mt={20} sx={{ flexDirection: "column" }}>
          <Box>
              <NextLink href="/" passHref>
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
      </Flex>
    </Flex>
  );
};

export default Header;
