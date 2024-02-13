import { EvenList } from "./EventList.styled";

import { EventCard } from "../EventCard/EventCard";

export const EventsList = ({ events }) => {
  return (
    <EvenList>
      {events.map((event) => {
        return <EventCard key={event.Name} event={event} />;
      })}
    </EvenList>
  );
};
