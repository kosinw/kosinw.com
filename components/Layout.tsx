/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui";
import Header from "components/Header";
import Footer from "components/Footer";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Container sx={{ px: 40, maxWidth: 625, mx: "auto" }}>
        <Flex sx={{ flexDirection: "column" }}>
          <Header />
          <Box my={24} as="main">
            {children}
          </Box>
          <Footer />
        </Flex>
      </Container>
    </>
  );
};

export default Layout;
