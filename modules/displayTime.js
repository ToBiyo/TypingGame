

export const displayTime = (input)=>{
    
    let seconds = input % 60;
    let minutes = Math.floor(input / 60);

    let formattedSeconds = seconds < 10 ? "0" + seconds.toString() : seconds;
    let formattedMinutes = minutes < 10 ? "0" + minutes.toString() : minutes;
    
    return formattedMinutes + ":" + formattedSeconds;

}