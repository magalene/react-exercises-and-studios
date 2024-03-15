import "./styling.css";

function SaveButton({saveButton, useSaveButton}) {
  function handleClick() {
    alert("You are saving this pin!");
    useSaveButton(!saveButton);
  }
  return (
    <button id="saveButton" onClick={handleClick}>
      Save
    </button>
  );
}

export default SaveButton;
