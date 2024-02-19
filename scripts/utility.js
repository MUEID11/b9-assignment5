function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
function totalCost(id, value) {
  const totalCost = document.getElementById(id).innerText;
  const totalCostNumber = parseInt(totalCost);
  const sum = totalCostNumber + parseInt(value);
  setInnerText(id, sum);
}
function grandTotal() {
  const totalCost = document.getElementById("total-price").innerText;
  const totalCostNumber = parseInt(totalCost);
  setInnerText("grand-total", totalCostNumber);
}