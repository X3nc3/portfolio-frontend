import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import contacts from "../reducers/contacts";

const store = configureStore({
  reducer: { contacts },
});

function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>PORTFOLIO</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
