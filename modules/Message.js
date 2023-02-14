

export const message = (speed,time) =>{
    

    if(speed < 39){
        return `It takes ${time} to correctly type this quote. Your type speed is ${speed} W/M that is below average.`;
    }       
    else if(speed > 38 && speed < 43){
        return `Good, it takes ${time} to correctly type this quote. Your type speed is ${speed} W/M that is average`;
    }
    else {
       return `Very good, it takes  only ${time} to correctly type this quote. Your type speed is ${speed} W/M that is above average.`
    }



}