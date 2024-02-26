import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";

function CreateNoteButton({ isFormExpanded }) {
  return (
    <Zoom in={isFormExpanded ? true : false} timeout={500} easing="ease-in-out">
      <button type="submit" title="Create">
        <AddIcon htmlColor="#fff" /> Create
      </button>
    </Zoom>
  );
}

export default CreateNoteButton;