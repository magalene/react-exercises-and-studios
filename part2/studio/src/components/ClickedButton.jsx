import ".styling.css";
function ClickedButton() {
  function handleClick() {
    alert("You are saving this pin!");
    useSaveButton(!saveButton);
  }
  return (
    <button id="savedButton" onClick={handleClick}>
      Saved
    </button>
  );
}


export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
