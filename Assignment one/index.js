/*function addTag() {
var para = document.createElement('p');
var pText = document.createTextNode('We are trying to create a p tag inside a div');
para.appendChild(pText);
var newTag = document.getElementById('africaDiv');
newTag.appendChild(para);
}

document.getElementById('newBtn').onclick = addTag();
var x = document.getElementById('africaDiv');
var y = x.getElementsByClassName('btn');
document.getElementById('newTag').innerHTML = y[1].innerHTML;
*/

debugger;
function isEven() {
    var num = prompt('input a number');
    if (num % 2 = 0) {
        status = 'Number is Even';
        console.log(status);
    } else{
        status = 'Number is odd';
        console.log(status);
    }
}
isEven();