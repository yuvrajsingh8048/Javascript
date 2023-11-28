# Project Related to DOM

## **Keyboard**


## _**Javascript Code File**_
```javascript
const insert = document.querySelector('.insert')
const body = document.querySelector('body')
body.addEventListener('keydown', function (e){
    insert.innerHTML = `
    <table>
<tr>
    <th>KEY</th>
    <th>KEYCODE</th>
    <th>CODE</th>
    <th>TYPE</th>
</tr>
<tr>
    <td>${e.key === ' ' ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    <td>${e.type}</td>
</tr>
</table>
    `
})
```
## _**HTML Code File**_
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keyboard</title>
    <link rel="stylesheet" href="./style.css">
        
</head>
<body>
    <nav>
        <button class="home-button"><a href="../home.html">Home</a></button>
    </nav>
    <section>
        <h1>Project 6 : Keyboard</h1>
        <p>Press any key to see the magic</p>
        <div class="insert"></div>
    </section>
</body>
<script src="./server.js"></script>

</html>
```


## _**CSS Code File**_
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

body{
    background-color: #414141;
    color: white;
    display: flex;
    flex-direction: column;
}

nav{
    background-color: #fff;
}
.home-button{
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
a{
    text-decoration: none;
    font-size: 1.25rem;
    color:crimson;
}
h1{
    color: #fff;
    font-size: 2rem;
    margin: 3% 0;
    text-align: center;
    font-weight: 900;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
section{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
p{
    font-size: 1rem;
    font-weight: 700;
    color:coral;
    margin: 25px 0;
}
.insert{
    margin-top: 40px;
}
table, th, td{
    border: 2px solid white;
    border-collapse: collapse;
    padding: 15px;
}
th{
    color: #fff;
}
td{
    color: #cccccc;
}
```