import { Alert } from "components/Alert";
import "./App.css";
import { PageTitle } from "components/EventsBoard/PageTitle/PageTitle";
import { EventsList } from "components/EventsBoard/EventsList/EventsList";
import Counter from "components/Counter(classComponent)/Counter";
import Form from "components/Form(classComponent)/Form";
import { FormFormikYup } from "components/Form(functionComponent)/FormFormikYup";

import upcomingEvents from "upcoming-events.json";

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
      <PageTitle title="Events Board Title" />

      <EventsList events={upcomingEvents} />
      <Counter />
      {/* <Form /> */}
      <FormFormikYup />
    </div>
  );
}

export default App;
