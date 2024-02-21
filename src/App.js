import { Routes, Route, NavLink } from "react-router-dom";

import { Alert } from "components/Alert";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import "./App.css";
import { PageTitle } from "components/EventsBoard/PageTitle/PageTitle";
import { EventsList } from "components/EventsBoard/EventsList/EventsList";
import Counter from "components/Counter(classComponent)/Counter";
import Form from "components/Form(classComponent)/Form";
import { FormFormikYup } from "components/Form(functionComponent)/FormFormikYup";
import { FormHooks } from "components/Form(hooks)/FormHooks";
import { CounterHooks } from "components/Counter(funcComponent)/CounterHooks";
import News from "./pages/News.jsx";
import NewsDetails from "components/NewsDetails/NewsDetails";

import upcomingEvents from "upcoming-events.json";

function App() {
  return (
    <div>
      {/* <Alert variant="info" elevated>
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
      <PageTitle title="Events Board Title" /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="eventsboard"
            element={<EventsList events={upcomingEvents} />}
          />
          <Route path="counter" element={<Counter />} />
          <Route path="formhooks" element={<FormHooks />} />
          <Route path="counterhooks" element={<CounterHooks />} />
          <Route path="news" element={<News />} />
          <Route path="news/:newsId" element={<NewsDetails />} />
          {/* <Route path="*" element={<div>Error</div>} /> */}

          {/* <Form /> */}
          {/* <FormFormikYup /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
