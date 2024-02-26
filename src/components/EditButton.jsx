import Zoom from "@mui/material/Zoom";
import EditIcon from "@mui/icons-material/Edit";

function EditButton() {
  return (
    <Zoom in={true} timeout={500} easing="ease-in-out" style={{ transitionDelay: "200ms" }}>
      <button type="button">
        <EditIcon htmlColor="#fbbc04" />
        Edit
      </button>
    </Zoom>
  );
}

export default EditButton;