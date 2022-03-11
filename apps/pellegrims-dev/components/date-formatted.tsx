import { FunctionComponent } from 'react';

interface DateFormattedProps {
  date: Date;
}

const DateFormatted: FunctionComponent<DateFormattedProps> = ({ date }) => (
  <time dateTime={new Date(date).toISOString()}>
    {new Date(date).toLocaleDateString('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })}
  </time>
);

export default DateFormatted;
