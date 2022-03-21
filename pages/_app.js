import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />{" "}
      <footer>
        <p>Jade Page 2022</p>
      </footer>
    </div>
  );
}

export default MyApp;
