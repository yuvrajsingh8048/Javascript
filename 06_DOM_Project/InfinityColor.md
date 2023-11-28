# Project Related to DOM

## **Infinity Color**

## _**Javascript Code File**_

```javascript
const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

start.addEventListener("click", function (e) {
  let myInterval = setInterval(function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b}, 1)`;
    // console.log("Hello")
    stop.addEventListener("click", function () {
      clearInterval(myInterval);
    });
  }, 500);
});
```

## _**HTML Code File**_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Infinity Color</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>

  <body>
    <nav>
      <button class="home-button"><a href="../home.html">Home</a></button>
    </nav>
    <section>
      <h1>Project 5 : Infinity Color</h1>
      <p>
        Press 'Start button to start changing Background Color and press 'Stop'
        to stop the process
      </p>
      <button id="start">Start</button>
      <button id="stop">Stop</button>
    </section>
  </body>
  <script src="./server.js"></script>
</html>
```

## _**CSS Code File**_

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

body {
  background-color: #414141;
  color: white;
  display: flex;
  flex-direction: column;
}

nav {
  background-color: #fff;
}
.home-button {
  width: 30%;
  border: 2px solid gray;
  margin: 10px 35%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #cccccc;
}
a {
  text-decoration: none;
  font-size: 1.25rem;
  color: crimson;
}
h1 {
  color: #fff;
  font-size: 2rem;
  margin: 3% 0;
  text-align: center;
  font-weight: 900;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
section {
  text-align: center;
}
p {
  font-size: 1rem;
  font-weight: 700;
  color: coral;
}
button {
  background-color: crimson;
  color: white;
  font-weight: 700;
  padding: 10px 25px;
  border: transparent;
  border-radius: 5px;
  font-size: 1.25rem;
  margin-top: 25px;
  margin-right: 35px;
  border: 2px solid transparent;
}
section button:hover {
  color: crimson;
  background-color: white;
  border: 2px solid black;
  cursor: pointer;
}
```
