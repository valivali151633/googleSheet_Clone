const header = document.getElementById("header");
const columns = 26;
const rows = 50;
const bodyContainer = document.getElementById("bodycontainer");
const snoContainer = document.getElementById("sno");
// creating header columns a, b, c, d
for (let i = 1; i <= columns; i++) {
  
  const headCell = document.createElement("div");

  headCell.className = "head-cell";
  //for first column there should not be any text

  headCell.innerText = String.fromCharCode(64 + i);
  headCell.className = "head-cell";

  header.appendChild(headCell);
}


// creating  sno row 1,2,3,4...

for (let i = 1; i <= rows; i++) {
  const snoCell = document.createElement("div");
  snoCell.innerText = i;
  snoCell.className = "sno-cell";
  snoContainer.appendChild(snoCell);
//   console.log("vali");
}


//creating cells inside body container
for(let i=1; i<= rows; i++){
  
   const rowElement = document.createElement("div");
   rowElement.className="row";
   for(let j =1 ; j<= columns ; j++)
   {
      const cell = document.createElement("div");
      cell.className="cell";
      cell.id = `${String.fromCharCode(64 + j)}${i}`;
      cell.contentEditable = true;
      rowElement.appendChild(cell);
      cell.addEventListener("focus" , onFocusCell);
      cell.addEventListener("input" , onChangeCellText);

   }
   bodyContainer.appendChild(rowElement)
}
