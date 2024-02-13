import { formatDateEvent, formatDateDuration } from "utils/formatDateEvent";

import { MdLocationOn, MdEventNote, MdOutlineAccessTime } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";

import { EventItem, EventInfo, Chip } from "./EventCard.styled";

export const EventCard = ({ event }) => {
  return (
    <EventItem>
      <EventInfo>
        <MdEventNote size={16} />
        {event.Name}
      </EventInfo>
      <EventInfo>
        <MdLocationOn size={16} />
        {event.location}
      </EventInfo>
      <EventInfo>
        <FaUser size={16} />
        {event.speaker}
      </EventInfo>
      <EventInfo>
        <FaRegCalendarDays size={16} />
        {formatDateEvent(event.time.start)}
      </EventInfo>
      <EventInfo>
        <MdOutlineAccessTime size={16} />
        {formatDateDuration(event.time.start, event.time.end)}
      </EventInfo>
      <Chip type={event.type}>{event.type}</Chip>
    </EventItem>
  );
};

// className={`${css.type} ${css[event.type]}`}
