//Real Date & Time
function realDateTime() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
    const now = new Date();
    const timeFormat = now.toLocaleTimeString();
    const dateFormat = now.toLocaleDateString('en-US', options);
  
    const display = document.getElementById("date-now");
    display.textContent = `${dateFormat} ${timeFormat}`;
  }
  
  //Update the display every second
  setInterval(realDateTime, 1000);
  
  //Invokes this function for immediate display
  realDateTime();  