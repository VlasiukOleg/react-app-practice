import css from "./EventCard.module.css";

import { formatDateEvent, formatDateDuration } from "utils/formatDateEvent";

import { MdLocationOn, MdEventNote, MdOutlineAccessTime } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";

export const EventCard = ({ event }) => {
  return (
    <li className={css.eventCard}>
      <p className={css.info}>
        <MdEventNote className={css.icon} size={16} color="grey" />
        {event.name}
      </p>
      <p className={css.info}>
        <MdLocationOn className={css.icon} size={16} color="grey" />
        {event.location}
      </p>
      <p className={css.info}>
        <FaUser className={css.icon} size={16} color="grey" />
        {event.speaker}
      </p>
      <p className={css.info}>
        <FaRegCalendarDays className={css.icon} size={16} color="grey" />
        {formatDateEvent(event.time.start)}
      </p>
      <p className={css.info}>
        <MdOutlineAccessTime className={css.icon} size={16} color="grey" />
        {formatDateDuration(event.time.start, event.time.end)}
      </p>
      <div className={`${css.type} ${css[event.type]}`}>{event.type}</div>
    </li>
  );
};
