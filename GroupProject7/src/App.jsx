import "./App.css";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Buttons from "./Buttons.jsx";
import Form from "./Form.jsx";
import Modal from "./Modal.jsx";

function App() {
  return (
    <div className="underline font-bold">
      <Navbar />
      <Card />
      <Buttons />
      <Form />
      <Modal />
    </div>
  );
}

export default App;
