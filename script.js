let cols = 0;

const Cells = document.getElementsByTagName("td");

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

const addColumn = () => {
    if (cols === 0) {
      cols = 1;
      addRow();
    } else {
        cols++;
        const row = document.getElementsByClassName("row");
        const tableRow = Array.from(row);
        tableRow.forEach((cell) => {
        const pixel = document.createElement("td");
        pixel.classList.add("pixel", "uncolored");
        cell.appendChild(pixel);
        });
    }
};
