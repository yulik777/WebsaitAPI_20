fetch("http://jservice.io/api/random?count=1")
    .then(response => response.json())
    .then(random => {
        document.getElementById("random").innerText += random[0].question;
        document.getElementById("answer").innerText += random[0].answer;
    })
    .catch(error => console.log(error));