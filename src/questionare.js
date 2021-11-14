
import { Button } from '@mui/material';
import { Widget } from '@typeform/embed-react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme2 = createTheme({
    palette: {
      secondary: {
        main: '#004879'
      }
    }
  });

function MyComponent() {
    return (
    <div>
        <Widget id="xIytYAdP" className="typeform-style" />
        <div className="button-style">
        <ThemeProvider theme={theme2}>
            <Button variant="contained" color="secondary" size="large">Continue To Dashboard</Button>
        </ThemeProvider>
        </div>
    </div>
 
    );
}

export default MyComponent