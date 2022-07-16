import { Button } from '@mui/material';
import { Settings, Add } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="large"
      >
        SETTINGS
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="large"
      >
        ADD NEW POST
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'skyblue',
          color: '#888',
          margin: 5,
          '&:hover': {
            backgroundColor: 'lightblue',
          },
        }}
      >
        My unique button
      </Button>
    </div>
  );
}

export default App;
