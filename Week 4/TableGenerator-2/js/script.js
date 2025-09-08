// Multiplication Table Generator (While Loop)
(function () {
  const numInput = document.getElementById("numInput");
  const limitInput = document.getElementById("limitInput");
  const message = document.getElementById("message");
  const outputSection = document.getElementById("outputSection");
  const generateBtn = document.getElementById("generateBtn");
  const resetBtn = document.getElementById("resetBtn");

  generateBtn.addEventListener("click", generateTable);
  resetBtn.addEventListener("click", resetAll);

  function generateTable() {
    // Read and sanitize input
    const n = parseInt(numInput.value, 10);
    let limit = parseInt(limitInput.value, 10);

    // Basic validation
    if (Number.isNaN(n)) {
      showMessage("Enter a valid base number.", true);
      clearOutput();
      return;
    }
    if (Number.isNaN(limit) || limit < 1) limit = 10;
    if (limit > 50) limit = 50;

    // Build table header
    const table = document.createElement("table");
    table.className = "table";
    table.innerHTML = `
      <thead>
        <tr>
          <th>#</th>
          <th>Expression</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    const tbody = table.querySelector("tbody");

    // Core: WHILE loop to generate rows
    let i = 1;
    while (i <= limit) {
      const tr = document.createElement("tr");

      const idx = document.createElement("td");
      idx.textContent = i;

      const expr = document.createElement("td");
      expr.textContent = `${n} × ${i}`;

      const res = document.createElement("td");
      res.textContent = n * i;

      tr.append(idx, expr, res);
      tbody.appendChild(tr);
      i++;
    }

    // Render
    outputSection.innerHTML = "";
    outputSection.appendChild(table);
    showMessage(`Generated ${limit} rows for ${n}.`, false);
  }

  function resetAll() {
    numInput.value = "";
    limitInput.value = "10";
    clearOutput();
    showMessage("Enter values and generate a table.", false);
    numInput.focus();
  }

  function clearOutput() {
    outputSection.innerHTML = "";
  }

  function showMessage(text, isError) {
    message.textContent = text;
    message.classList.toggle("status-err", !!isError);
    message.classList.toggle("status-ok", !isError);
  }

  // Initial hint
  showMessage("Enter values and generate a table.", false);
})();
