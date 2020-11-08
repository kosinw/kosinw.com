/** @jsx jsx */
import { IconButton, jsx, useColorMode } from "theme-ui";
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
      {colorMode === "dark" ? (
        <HiOutlineMoon size={20} />
      ) : (
        colorMode === "light" && <HiOutlineSun size={20} />
      )}
    </IconButton>
  );
};

export default ColorThemeButton;
