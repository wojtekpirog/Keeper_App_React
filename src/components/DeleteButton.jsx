import Zoom from "@mui/material/Zoom";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteButton({onNoteDelete}) {
  return (
    <Zoom in={true} timeout={500} easing="ease-in-out" style={{ transitionDelay: "200ms" }}>
      <button type="button" onClick={onNoteDelete}>
        <DeleteIcon htmlColor="#c62828" />
        Delete
      </button>
    </Zoom>   
  );
}

export default DeleteButton;
