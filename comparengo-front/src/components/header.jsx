import { Box, Stack } from "@chakra-ui/react";
import Logo from "./logo";

const Header = () => (
  <Box as="header">
    <Stack
      direction={{
        base: "column",
        sm: "column",
        md: "row",
      }}
      justifyContent="space-between"
      alignItems="center"
      bgColor="#f4ac18"
      minHeight="8vh"
      px="2rem"
    >
      <Logo src="LOGOHd.png" />
      <Logo src="Logo-UNINORTE.png" />
    </Stack>
  </Box>
);
export default Header;
