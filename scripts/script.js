let totalSeat = 40;
let seatCount = 0;
let totalPrice = 0;
const numberOfSeats = parseInt(
  document.getElementById("selected-seat").innerText
);
const phoneNumber = document.getElementById("phone-number");
const couponField = document.getElementById("coupon-input");
const seats = document.querySelectorAll(".seat");
const applyBtn = document.getElementById("apply-btn");
const nextBtn = document.getElementById("next-btn");
const couponSection = document.getElementById('coupon-section')
for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    seat.style.backgroundColor = "#1DD100";
    seat.style.color = "white";
    seatCount++;
    totalSeat--;
    phoneNumber.disabled = false;
    //append seat
    const seatName = e.target.innerText;
    const seatClass = "Economy";
    const seatPrice = 550;
    const selectedContainer = document.getElementById("select-container");

    const table = document.createElement("tr");
    const tableData = document.createElement("td");
    tableData.innerText = seatName;
    const tableData2 = document.createElement("td");
    tableData2.innerText = seatClass;
    const tableData3 = document.createElement("td");
    tableData3.innerText = seatPrice;
    table.appendChild(tableData);
    table.appendChild(tableData2);
    table.appendChild(tableData3);
    selectedContainer.appendChild(table);
    totalCost("total-price", seatPrice);
    grandTotal("grand-total", seatPrice);
    setInnerText("selected-seat", seatCount);
    setInnerText("seats", totalSeat);
    seat.disabled = false;

    if (seatCount >= 4) {
      for (const seat of seats) {
        seat.disabled = true;
        couponField.disabled = false;
        applyBtn.disabled = false;
      }
    } else {
    }
  });
}

applyBtn.addEventListener("click", function () {
  const cuponElement = couponField.value;
  const couponCode = cuponElement.split(" ").join("").toUpperCase();
  if (seatCount === 4) {
    let getGrandTotal = parseInt(
      document.getElementById("grand-total").innerText
    );
    if (couponCode === "NEW15") {
      const discount = getGrandTotal * 0.15;
      getGrandTotal = getGrandTotal - discount;
      setInnerText("grand-total", getGrandTotal);
      setInnerText("discount", discount);
      couponSection.style.display = 'none';
    } else if (couponCode === "COUPLE20") {
      const discount = getGrandTotal * 0.2;
      getGrandTotal = getGrandTotal - discount;
      setInnerText("grand-total", getGrandTotal);
      setInnerText("discount", discount);
      couponSection.style.display = 'none';
    } else {
      alert("Invalid coupon code");
    }
  } else {
    alert("Select 4 seats");
  }
});

phoneNumber.addEventListener("input", function () {
  const passengerNumber = phoneNumber.value;
  if (seatCount > 0 && passengerNumber.length > 0) {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }
});
