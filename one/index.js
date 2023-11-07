var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';
var input = document.querySelector('input');
input.value = 'Hello World'
var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';
var secondItem = document.querySelector ('.list-group-item:nth-child(2)'); secondItem.style.color = 'coral';
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';
var odd = document.querySelectorAll('.li:nth-child(odd)');
var even =document.querySelectorAll('.li:nth-child(even)');
for (var i = 0; i < odd.length; i++)
{
     odd[i].style.backgroundColor='#f4f4f4';
even[i].style.backgroundColor='#ccc';
}
var newDiv = document.createElement('div');
// Add class
 newDiv.className= 'hello';
// Add id
 newDiv.id = 'hello1';
// Add attr 
newDiv.setAttribute('title', 'Hello Div');
// Create text node
 var newDivText = document.createTextNode('Hello World');
// Add text to div 
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 =document.querySelector("header h1");
console.log(newDiv);
newDiv.style.fontSize = '30px'
container.insertBefore(newDiv, h1);
