

export const keyChecker = (input) =>{

    if (
        !(
          input === "Alt" ||
          input === "Enter" ||
          input === "Shift" ||
          input === "Control" ||
          input === "AltGraph" ||
          input === "ArrowUp" ||
          input === "ArrowDown" ||
          input === "ArrowLeft" ||
          input === "ArrowRight"
        )
      ){
        return true;
      }

}