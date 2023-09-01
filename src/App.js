import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer"
import Header from "./components/Header";
import Form from "./components/Form"

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
