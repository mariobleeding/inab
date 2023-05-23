import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarGrid() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="py-8 px-10 md:col-span-1">
      <h1 className="my-3 text-lg font-bold">Schedule</h1>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
