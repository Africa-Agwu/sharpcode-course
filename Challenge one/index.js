//Challenge 1 (Age in Days)

function ageInDays() {
var birthyear = prompt('What year were you born?');
var ageInDayss = (2020 - birthyear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}
function reset() {
    document.getElementById('ageInDays').remove();
}