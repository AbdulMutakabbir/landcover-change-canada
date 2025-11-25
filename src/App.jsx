import './styles/App.css';
import { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './theme/LightTheme';
import { darkTheme } from './theme/DarkTheme';
import Header from './components/Header/Header';
import SankeyChart from './components/SankeyChart/SankeyChart';
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <SankeyChart />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
