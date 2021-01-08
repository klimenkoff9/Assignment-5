let cols = 0;
var selectedColor = "#FFFFFF";
const Cells = document.getElementsByTagName("td");

// add row
const addRow = () => {
  if (cols === 0) { 
      cols = 1;
  }
  const row = document.createElement("tr");
  const table = document.getElementById("table");
  row.classList.add("row");
  table.appendChild(row);
  


  for (let i = 0; i < cols; i++) {
    const pixel = document.createElement("td");
    pixel.classList.add("pixel", "uncolored");
    row.appendChild(pixel);
  }

};
// add Column
const addColumn = () => {
    if (cols === 0) {
      cols = 1;
      addRow();
    } else {
        cols++;
        const row = document.getElementsByClassName("row");
        const tableRow = Array.from(row);
        tableRow.forEach(cell => {
        const pixel = document.createElement("td");
        pixel.classList.add("pixel", "uncolored");
        cell.appendChild(pixel);
        });
    }
};

//remove row
const removeRow = () => {
  const row = document.getElementsByClassName("row");
  const tableRow = Array.from(row);
  tableRow[0].remove();
}

//remove col
const removeCol = () => {
  const cs = document.querySelectorAll("td");
  const tableCol = Array.from(cs);
  tableCol.forEach(cell => {
    if(tableCol.indexOf(cell) % cols == 0){
      cell.remove();
    }
  });
  cols--;
};

//fill all cells
const fillAll = () => {
  const cs = document.querySelectorAll("td");
  const tableCol = Array.from(cs);
  tableCol.forEach(cell => {
    cell.style.backgroundColor = selectedColor;
  });
    
};
//select red color;
const setRed = () => {
  selectedColor = "#FF0000";
};
//select blue color;
const setBlue = () => {
  selectedColor = "#0000FF";
};
//select white color;
const setWhite = () => {
  selectedColor = "#FFFFFF";
};

//clear all cells
const clearAll = () => {
    const cs = document.querySelectorAll("td");
    const tableCol = Array.from(cs);
    tableCol.forEach(cell => {
        cell.style.background = "#FFFFFF";
    });
};

// fill uncolored cells 
// D.K - feature doesn't work. Needs debugging
const fillUncolored = () => {
    const cs = document.querySelectorAll("td");
    const tableCol = Array.from(cs);
    tableCol.forEach(cell => {
    cell.addEventListener("mouseenter", function () {
    cell.style.background = selectedColor;
        });
    });
}