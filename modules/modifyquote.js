export const modifyQuote = (first, second) => {
  let definitive = [];

  first.forEach((el, i) => {
    if(!second[i]){
        definitive.push(el);
    }else{
        if (el === second[i]) {
            definitive.push(`<span style = "background-color : green; color :#fff;">${el}</span>`);
          } else {
            definitive.push(`<span style = "background-color : red"; color : #fff;>${el}</span>`);
          }
    }
  });

  
  return definitive;
};
