export const checkAnswer = (arr) => {
    let value = 1;
    arr.forEach(el =>{
      if(el.includes('green')){
        value *= 1;
      }else{
        value *= 0;
      }
    })

    return value;

}