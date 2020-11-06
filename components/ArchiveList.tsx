import { Box, Flex, Input } from "theme-ui";
import { useState } from "react";

const ArchiveList: React.FC<{}> = ({}) => {
  const [filter, setFilter] = useState<string>("");

  return (
    <Box sx={{ mt: 4 }}>
      <Flex sx={{ flexDirection: "column" }}>
        <Input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by title, keyword, or date..."
        />
      </Flex>
    </Box>
  );
};

export default ArchiveList;
