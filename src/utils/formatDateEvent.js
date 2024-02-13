import { format, formatDistanceStrict } from "date-fns";

export const formatDateEvent = (date) => {
  return format(new Date(date), "dd MMMM yyyy, kk-mm");
};

export const formatDateDuration = (start, end) => {
    return formatDistanceStrict(new Date(start), new Date(end))
};
