/** @jsx jsx */
import { Box, IconButton, jsx, useColorMode } from "theme-ui";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi/";

const ColorThemeButton: React.FC<{}> = ({}) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <IconButton
      onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
      sx={{
        p: 0,
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box as={colorMode === "dark" ? HiOutlineMoon : HiOutlineSun} size={20} />
    </IconButton>
  );
};

export default ColorThemeButton;
