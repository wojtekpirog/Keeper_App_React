import AccessTimeIcon from "@mui/icons-material/AccessTime";

function TimeBox({ time }) {
  return (
    <div className="timeBox">
      <AccessTimeIcon htmlColor="#fbbc04" />
      {time}
    </div>
  );
}

export default TimeBox;
