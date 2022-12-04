// fetch("https://api.nasa.gov/planetary/apod?api_key=d1Edj1llcqC0hM01H2rGRtEDvQmenYSapa9QjqzY")
// .then(response => response.json())
// .then(media_type => console.log(media_type))

// .catch(error => console.log(error));

// document.addEventListener("DOMContentLoaded", function(event) {
//     nasa();
// });

// function nasa() {
//     fetch("https://api.nasa.gov/planetary/apod?api_key=d1Edj1llcqC0hM01H2rGRtEDvQmenYSapa9QjqzY")
//     .then(response => response.json()) 
// .then(explanation => console.log(explanation))
// }

fetch("https://api.nasa.gov/planetary/apod?api_key=d1Edj1llcqC0hM01H2rGRtEDvQmenYSapa9QjqzY")
.then(response => response.json())
.then(data => {
    console.log(data);
    renderHtml(data);
})

.catch(error => console.log(error));

function renderHtml(data) {
    document.getElementById('result').innerHTML = 
    `<div>${data.date}</div>
    <div><img src="${data.hdurl}" style="width: 300px;"></div>
    <span>${data.explanation}</span>`
}