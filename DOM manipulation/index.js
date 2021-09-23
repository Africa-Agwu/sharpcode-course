// // // //document.getElementById('domDemo').innerHTML='HELLO AFRICA';

// // // //const para = document.getElementById('domDemo');

// // // //para.textContent = 'Hi there':
// // // //console.log(para.innerHTML);

// // // const list = document.querySelector('.domDemo');
// // // console.log(list);

// // // const lis = document.querySelectorAll('li');
// // // console.log(lis);

// // // var heading = document.getElementById('heading');
// // // // heading.style.color='red';
// // // // heading.style.backgroundColor='yellow';
// // // heading.className = 'changeBG';
// // // // heading.className = 'changeFT';

// // // heading.className += ' changeFT';
// // // heading.classList.add('changeCL');
// // // console.log(heading.classList);
// // // //var bodyTag = document.getElementById('bodyTag');
// // // //bodyTag.style.backgroundColor='brown';
// // // for (let i = 0; i < lis.length; i++) {
// // //     lis[i].style.backgroundColor = 'royalblue';
// // // }

// // // lis[0].style.cssText = 'background-color: coral; color: white; font-size: 25px;';

// var heading = document.querySelector('.heading');
// var btn = document.querySelector('.btn');
// btn.onclick = () => {
//     console.log('Clicked!');
// };

// btn.onmouseover = () => {
//     heading.style.cssText += 'background: orange; font-style: italic';
// };

// btn.onmouseout = () => {
// heading.removeAttribute('style', 'background: orange');
// }
// btn.addEventListener('click',(e) => {
// console.log(e.target);
// });

// const paragraph = document.querySelector('.paragraph');
// console.log(paragraph.getAttribute('id'));
// console.log(paragraph.getAttribute('class'));

// paragraph.setAttribute('style', 'background:coral');

var listItem = document.getElementById('list-item');
console.log(listItem.parentNode);
console.log(listItem.parentNode.parentNode.parentNode);

var list = document.querySelector('.list');
// console.log(list.childNodes);
// console.log(list.children);
// console.log(list.firstChild);
// console.log(list.firstElementChild);
var newEl = document.createElement('li');
var text = document.createTextNode('Blog');
newEl.appendChild(text);
list.appendChild(newEl);
list.insertBefore(newEl, list.children[1]);
console.log(list);