/** @jsx jsx */
import { jsx, Container, Flex, Box } from "theme-ui";
import Header from "./Header";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <Container sx={{ px: 20, maxWidth: 550, mx: "auto" }}>
      <Flex sx={{ flexDirection: "column" }}>
        <Header />
        <Box my={60}>{children}</Box>
      </Flex>
    </Container>
  );
};

export default Layout;
