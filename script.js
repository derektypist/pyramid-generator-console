function pyramid(ch,rows,isInverted) {
  let pyramidStr = "";
  

  for (let i=1;i<=rows;i++) {
    pyramidStr += "\n" + " ".repeat(rows - i) + ch.repeat(i * 2 - 1);
  }

  pyramidStr += "\n";

  if (isInverted) {
    pyramidStr = pyramidStr.split("\n").reverse().join("\n");
    
  }
  return pyramidStr;
  
  
}

// Call the functions
console.log(pyramid("o",4,false));
console.log(pyramid("p",5,true));
