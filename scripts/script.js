
let totalSeat = 8;
let seatCount = 0;

const seats = document.querySelectorAll('.seat');
for(const seat of seats){
   seat.addEventListener('click', function(e){
        seat.classList.add('bg-green-500');
        seatCount = seatCount+1;
        totalSeat = totalSeat-1;
        //append seat
        const seatName = e.target.innerText;
        const seatClass = 'Economy';
        const seatPrice = 550;
        const selectedContainer = document.getElementById('select-container');
        
        const table = document.createElement('tr');
        const tableData = document.createElement('td');
        tableData.innerText = seatName;
        const tableData2 = document.createElement('td');
        tableData2.innerText = seatClass;
        const tableData3 = document.createElement('td');
        tableData3.innerText = seatPrice;
        table.appendChild(tableData);
        table.appendChild(tableData2);
        table.appendChild(tableData3);
        selectedContainer.appendChild(table);
        totalCost('total-price', seatPrice);
        grandTotal('grand-total', seatPrice);
        setInnerText('selected-seat', seatCount);
        setInnerText('seats',totalSeat);
   })
}

const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function(){
    const cuponElement = document.getElementById('coupon-input').value;
    const couponCode = cuponElement.split(' ').join('').toUpperCase();
})