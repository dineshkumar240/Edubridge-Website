function displayDate() {
    let date = new Date();
    let h1 = document.querySelector('#date');
    h1.innerHTML = date.toLocaleTimeString();

    let h3 = document.querySelector('#day');
    h3.innerHTML = date.toDateString();
}

let interval = setInterval(displayDate, 1000);