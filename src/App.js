import { Alert } from "./components/Alert";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Alert variant="info" elevated>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" outlined>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </div>
  );
}

export default App;
