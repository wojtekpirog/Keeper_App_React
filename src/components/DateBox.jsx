import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function DateBox({ date }) {
  return (
    <div className="dateBox">
      <CalendarMonthIcon htmlColor="#fbbc04" />
      {date}
    </div>
  );
}

export default DateBox;
