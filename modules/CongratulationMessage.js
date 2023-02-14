import { typeSpeed } from "./typeSpeed.js";
import { message } from "./Message.js";

export const congratulationMessage = (f,t,restart, chars) => {
    const time = f(t);
    const speed = typeSpeed(chars,t);
    
    
      
  
    const UIcongratulationBox = document.createElement('div');
    UIcongratulationBox.classList = "congratulation-overlay";
    const UImessageBox = document.createElement('div');
    UImessageBox.classList = "message-box";
    const topBoxHeading = document.createElement('div');
    topBoxHeading.classList = "top-box";
   
    const messageHeading = document.createElement('h3');
    messageHeading.innerText = message(speed, time);
    const restartButton = document.createElement('button');
    restartButton.classList = 'restart-bnt';
    restartButton.innerText = "Try again";
    UImessageBox.appendChild(topBoxHeading);
    UImessageBox.appendChild(messageHeading);
    UImessageBox.appendChild(restartButton);
    
    UIcongratulationBox.appendChild(UImessageBox);
    
    document.getElementById('root').appendChild(UIcongratulationBox);

    restartButton.addEventListener('click', () =>{
        restart();
        UIcongratulationBox.remove();
        
    });

}