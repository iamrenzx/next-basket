import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
import theme from "@/styles/theme";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/app/store";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
