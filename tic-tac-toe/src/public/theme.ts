import { createTheme } from '@mui/material/styles';

// X uses the primary palette, O uses the secondary palette
const theme = createTheme({
  palette: {
    primary: { main: '#2563eb' },
    secondary: { main: '#e11d48' },
    success: { main: '#16a34a' },
    background: { default: '#f3f5fa', paper: '#ffffff' }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: { textTransform: 'none', fontWeight: 600 }
  },
  components: {
    MuiPaper: { defaultProps: { elevation: 0 } }
  }
});

export default theme;
