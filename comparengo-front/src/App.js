import './App.css';
import { Box, Stack } from '@chakra-ui/react';
import Header from './components/header';
import Routing from './routes/routes';

function App() {
  return (
      <Box>
      <Header />
      <Stack
        direction={{
          sm: "column",
          md: "row",
        }}
        justifyContent="space-between"
        my={5}
        mx={10}
      >
      </Stack>
    </Box>
  );
}

export default App;
