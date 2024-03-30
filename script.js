document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const payButton = document.getElementById('payButton');
  
    searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value;
      // Perform search functionality here
      console.log(`Searching for ${searchTerm}`);
    });
  
    payButton.addEventListener('click', function() {
      const selectedPaymentMode = document.querySelector('input[name="paymentMode"]:checked');
      if (selectedPaymentMode) {
        const paymentMode = selectedPaymentMode.value;
        // Perform payment functionality here
        console.log(`Selected payment mode: ${paymentMode}`);
      } else {
        alert('Please select a payment mode.');
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const seatMap = document.getElementById('seatMap');
    const bookSeatsButton = document.getElementById('bookSeatsButton');
  
    // Generate seat map
    const numRows = 6; // Example number of rows
    const numCols = 10; // Example number of columns
    for (let i = 1; i <= numRows; i++) {
      for (let j = 1; j <= numCols; j++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.dataset.row = i;
        seat.dataset.col = j;
        seat.textContent = `${String.fromCharCode(64 + i)}${j}`;
        seatMap.appendChild(seat);
      }
    }
  
    // Seat selection functionality
    seatMap.addEventListener('click', function(event) {
      const selectedSeat = event.target;
      if (selectedSeat.classList.contains('seat')) {
        selectedSeat.classList.toggle('selected');
      }
    });
  
    // Book selected seats functionality
    bookSeatsButton.addEventListener('click', function() {
      const selectedSeats = document.querySelectorAll('.seat.selected');
      const selectedSeatNumbers = Array.from(selectedSeats).map(seat => seat.textContent);
      if (selectedSeatNumbers.length > 0) {
        alert(`You have selected seats: ${selectedSeatNumbers.join(', ')}`);
        // Proceed with booking logic
      } else {
        alert('Please select at least one seat.');
      }
    });
  });
  