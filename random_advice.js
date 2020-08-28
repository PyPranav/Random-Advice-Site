function advice() {
    console.log("hey");
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('advice').innerHTML = data.slip.advice;
    })

}

advice()
