/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui";
import Header from "components/Header";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Container sx={{ px: 40, maxWidth: 600, mx: "auto" }}>
        <Flex sx={{ flexDirection: "column" }}>
          <Header />
          <Box my={24} as="main">
            {children}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Layout;
