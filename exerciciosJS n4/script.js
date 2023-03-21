function generateTable() {
  const number = document.getElementById("number").value;
  let table =
    "<table><thead><tr><th>Operação</th><th>Resultado</th></tr></thead><tbody>";
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    table +=
      "<tr><td>" + number + " x " + i + "</td><td>" + result + "</td></tr>";
  }
  table += "</tbody></table>";
  document.getElementById("result").innerHTML = table;
}
