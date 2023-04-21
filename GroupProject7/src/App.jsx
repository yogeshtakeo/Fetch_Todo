import NavBar from "./navbar.jsx";
import Modal from "./modal.jsx";
import Form from "./form.jsx";
import Card from "./card.jsx";
import Button from "./button.jsx";
import Footer from "./footer.jsx";
import Text from "./text.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Full Stack Web Developer Bootcamp</h1>
      <img
        className="image"
        src="https://media.tenor.com/UttC4AITYR4AAAAd/full-stack-developer.gif"
      ></img>
      <Form />
      <br></br>
      <Modal />
      <Text />
      <Card />
      <br></br>
      <br></br>
      <Button />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
