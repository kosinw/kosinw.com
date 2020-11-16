/** @jsx jsx */
import NextLink from "next/link";
import { jsx, Link, Text, Box } from "theme-ui";
import { GoMarkGithub } from "react-icons/go";

const Footer: React.FC<{}> = ({}) => {
  return (
    <Box mt={60} mb={40} as="footer">
      <Text
        sx={{
          fontSize: "13px",
          float: "right",
          letterSpacing: "-0.7px  ",
        }}
      >
        <NextLink href="https://github.com/kosinw" passHref>
          <Link
            sx={{
              borderBottom: "0px",
              "&:hover": { borderBottom: "0px", color: "faded" },
            }}
          >
            <GoMarkGithub />
          </Link>
        </NextLink>{" "}
        /{" "}
        <NextLink href="mailto:hi@kosinw.com" passHref>
          <Link>hi@kosinw.com</Link>
        </NextLink>{" "}
        / <Box as="span">2020</Box>
      </Text>
    </Box>
  );
};

export default Footer;
