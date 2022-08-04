// 1. Element: ID, class, tag
// CSS selector, HTML collection
var headingNode = document.getElementById('heading');
console.log([headingNode]);
var headingNodes = document.getElementsByClassName('headings');
console.log(headingNodes);
var headingNodes = document.getElementsByTagName('h2');
console.log(headingNodes);
var headingNode = document.querySelector('.headings'); // bỏ CSS vào lấy ra 1 phần tử
console.log(headingNode);
var headingNodes = document.querySelectorAll('.headings'); // bỏ CSS vào lấy ra 1 phần tử
console.log(headingNodes[1]);

console.log(document.forms[2]);
console.log(document.forms.TestForm);
console.log(document.anchors);

console.log(document.querySelectorAll('.box-1 li'));
// công việc 1: sử dụng box-1
//..
var boxNode = document.querySelector('.box-1');
// công việc 2: sử dụng tới các li elements là con của box-1
console.log(boxNode.getElementsByTagName('li'));
console.log(boxNode.getElementsByTagName('p'));

// 2. Attribute
var h4Element = document.querySelector('h4');
//seter
h4Element.title = 'h4';
h4Element.className = 'h4';
//
h4Element.setAttribute('id', 'h4');
console.log(h4Element.getAttribute('id'));
console.log(h4Element.getAttribute('title'));
console.log(h4Element.className);

// 3. Text
// innerText, textContent
var headingText = document.querySelector('.headings');
// seter
// set những gì trong code
headingText.innerText = 'Class1';
// geter
// chỉ hiện những cái mình thấy, tồn tại trên element node
console.log(headingText.innerText);
// hiện tất cả
console.log(headingText.textContent);

// Thêm element, attribute, text vào element
var boxElement = document.querySelector('.box');
console.log(boxElement);

boxElement.innerHTML = '<h4>Inner HTML text</h4>';
console.log(boxElement.innerHTML);
console.log(boxElement.outerHTML);