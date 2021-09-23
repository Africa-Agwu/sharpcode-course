var indexOfR = this.rowIndex;
var table = document.getElementById('table');
    
//Function to add row to table
var loadImage = function(event) {
    var img = document.getElementById('output');
    img.src = URL.createObjectURL(event.target.files[0]);
}
// check the empty input
function checkEmptyInput()
{
    var isEmpty = false,
    email = document.getElementById('email').value,
    fname = document.getElementById('fname').value,
    lname = document.getElementById('lname').value,
    address = document.getElementById('address').value;

    
    if(email === ""){
        alert("Email Cannot Be Empty");
        isEmpty = true;
    }
    else if(fname === ""){
        alert("First Name Cannot Be Empty");
        isEmpty = true;
    }
    else if(lname === ""){
        alert("Last Name Cannot Be Empty");
        isEmpty = true;
    }
    else if(address === ""){
        alert("Address Cannot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}
function addTableRow() {
debugger;
    //to get the table by Id
     
    //to create a new row and cells
    if(checkEmptyInput()== false){
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4)
        cell6 = newRow.insertCell(5),
        //to get the value of the form input
        email = document.getElementById('email').value,
        fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        address = document.getElementById('address').value;
         passport = document.getElementById('passport').value;
         console.log(newRow.rowIndex);

// passing the value gotten from input into the corresponding cell in the table
indexOfR = newRow.rowIndex;
console.log(indexOfR);
cell1.setAttribute("id", "email_row"+indexOfR);
cell2.setAttribute("id", "fname_row"+indexOfR);
cell3.setAttribute("id", "lname_row"+indexOfR);
cell4.setAttribute("id", "address_row"+indexOfR);
//console.log(imgSrc);     
cell1.innerHTML = email;
        cell2.innerHTML = fname;
        cell3.innerHTML = lname;
        cell4.innerHTML = address;
        cell5.innerHTML = '<img src="" id="passportImg'+indexOfR+'" width="50" height="50">';
        // document.getElementById('passportImg').src = imgSrc;
        cell6.innerHTML = '<input type="button" id="edit_button'+indexOfR+'" value="Edit" class="edit" onclick="displaySelectedRow()">  <input type="button" value="Delete" class="delete" onclick="deleteSelectedRow()">';
        document.getElementById("table").setAttribute("style","display: table");
        function myImgSrc() {
            var imgSrc = document.getElementById('output').src;
            var image = document.getElementById('passportImg'+indexOfR);
            image.setAttribute('src', imgSrc);
        }
       myImgSrc();
    document.getElementById('email').value = '';
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('address').value = '';
    document.getElementById('output').src = '';
    
    }
    else{
        alert('Get Away');
    }
}

    function displaySelectedRow() {
        for(var i =0; i < table.rows.length; i++)
         {
             table.rows[i].onclick = function(){
             indexOfR = this.rowIndex;
        console.log(indexOfR);
    
                document.getElementById('email').value = document.getElementById('email_row'+indexOfR).innerHTML;
                document.getElementById('fname').value = document.getElementById('fname_row'+indexOfR).innerHTML;
                document.getElementById('lname').value = document.getElementById('lname_row'+indexOfR).innerHTML;
                document.getElementById('address').value = document.getElementById('address_row'+indexOfR).innerHTML;
                document.getElementById('output').src = document.getElementById('passportImg'+indexOfR).src;
             }
         }
    };
        function updateSelectedTableRow() {
    
         //indexOfR = displaySelectedRow(indexOfR);
            console.log(indexOfR);
        var email = document.getElementById('email').value;
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var address = document.getElementById('address').value;
        var src = document.getElementById('output').src;
        console.log(src);
        console.log(indexOfR);
        
        table.rows[indexOfR].cells[0].innerHTML = email;
        table.rows[indexOfR].cells[1].innerHTML = fname;
        table.rows[indexOfR].cells[2].innerHTML = lname;
        table.rows[indexOfR].cells[3].innerHTML = address;
        table.rows[indexOfR].cells[4].innerHTML.src = src;
    }

    function deleteSelectedRow()
    {
        table.deleteRow(indexOfR);
        // clear input text
        // document.getElementById('email_row'+indexOfR).value = "";
        // document.getElementById('fname_row'+indexOfR).value = "";
        // document.getElementById('lname_row'+indexOfR).value = "";
        // document.getElementById('address_row'+indexOfR).value = "";
        // document.getElementById('passportImg'+indexOfR).hidden = true;
    }