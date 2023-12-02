let activeCellId = null;
const activeCellElement = document.getElementById("active-cell");
// console.log("vali");

//assigning on focus cell id to active cell
function onFocusCell(event) {
 
 if(activeCellId === event.target.id){
    return;
 }   
  activeCellId = event.target.id;
  activeCellElement.innerText = activeCellId;


  if(state[activeCellId]){
    resetForm(state[activeCellId]);
  }
  else{
    resetForm(defaultStyles);
  }
} 

function resetForm(styles){
    form.fontSize.value = styles.fontSize;
    form.fontFamily.value = styles.fontFamily;
    form.isBold.checked = styles.isBold;
    form.isItalic.checked = styles.isItalic;
    form.isUnderline.checked = styles.isUnderline;
    form.align.value = styles.align;
    form.textColor.value = styles.textColor;
    form.bgColor.value = styles.bgColor;
}


const form = document.querySelector(".form");
const state = {};
form.addEventListener("change", onChangeFormData);

function onChangeFormData() {
    const options = {
        fontFamily: form["fontFamily"].value,
        fontSize: form["fontSize"].value,
        isBold: form["isBold"].checked,
        isItalic: form["isItalic"].checked,
        isUnderline: form.isUnderline.checked,
        align: form.align.value, // "left" | "center" | "right"
        textColor: form["textColor"].value,
        bgColor: form["bgColor"].value,
    };
  // console.log(options.align)
  applyStyles(options);
}


function onChangeCellText(event){
    let changedText = event.target.innerText;
    if(state[activeCellId]){
        state[activeCellId].text= changedText
    }
    else{
        state[activeCellId] = {...defaultStyles , text:changedText};
    }
}




function applyStyles(styles) {
    //to apply changes in styles to the active cell
    if (!activeCellId) {
        // no sctive cell is present
        form.reset();
        return;
     };
  // for any selected cell we to apply tne styles that taken form inputs
  const activeCell = document.getElementById(activeCellId);
  activeCell.style.fontWeight = styles.isBold ? "600" : "400";
  activeCell.style.fontFamily = styles.fontFamily;
  activeCell.style.fontSize = styles.fontSize + "px";
  activeCell.style.textAlign = styles.align;
  activeCell.style.textDecoration = styles.isUnderline ? "underline" : "none";
  activeCell.style.fontStyle = styles.isItalic ? "italic" : "normal";
  activeCell.style.color = styles.textColor;
  activeCell.style.backgroundColor = styles.bgColor;

  state[activeCellId]={...styles , text:activeCell.innerText};
}


const defaultStyles = {
  // todo
  fontFamily: "poppins-regular",
  fontSize: 16,
  isBold: false,
  isItalic: false,
  isUnderline: false,
  align: "left",
  textColor: "#000000",
  bgColor: "#ffffff",
};


function exportData(){
    const jsonData = JSON.stringify(state);
    const blob = new Blob([jsonData] ,{type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "data.json";
    link.href = url;
    link.click();
}
