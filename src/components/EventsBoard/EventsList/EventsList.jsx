import css from "./EventsList.module.css";

import { EventCard } from "../EventCard/EventCard";

export const EventsList = ({ events }) => {
  
  return (
    <ul className={css.eventsList}>
      {events.map((event) => {
        return <EventCard key={event.name} event={event} />;
      })}
    </ul>
  );
};
