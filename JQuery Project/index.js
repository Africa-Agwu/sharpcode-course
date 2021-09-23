$(document).ready(function(){
    $("#payment_success").hide();
    $("#table").hide();  
    var selection = [
{item: "Html Tutorial and Certification", unit_price: 30000, quantity:"", price:"", id: 1},
{item: "CSS Tutorial and Certification", unit_price: 35000, quantity:"", price:"", id: 1},
{item: "Javascript Tutorial and Certification", unit_price: 80000, quantity:"", price:"", id: 1},
{item: "C-sharp Tutorial and Certification", unit_price:90000, quantity:"", price:"", id: 1},
{item: "Python Tutorial and Certification", unit_price:60000, quantity:"", price:"", id: 1},
{item: "PHP Tutorial and Certification", unit_price:50000, quantity:"", price:"", id: 1},
{item: "SQL Tutorial and Certification", unit_price:55000, quantity:"", price:"", id: 1},
{item: "Photoshop Tutorial and Certification", unit_price:30000, quantity:"", price:"", id: 2},
{item: "Illustrator Tutorial and Certification", unit_price:30000, quantity:"", price:"", id:2},
{item: "XD Tutorial and Certification", unit_price:40000, quantity:"", price:"", id:2},
{item: "Sketch Tutorial and Certification", unit_price:40000, quantity:"", price:"", id:2},
{item: "Webflow Tutorial and Certification", unit_price:40000, quantity:"", price:"", id:2},
{item: "Figma Tutorial and certification", unit_price:25000, quantity:"", price:"", id:2},
{item: "Android Development Tutorial and Certification", unit_price:60000, quantity:"", price:"", id:3},
{item:"IOS Development Tutorial and Certification", unit_price:75000, quantity:"", price:"", id:3},
{item : "Java Development Tutorial and Certification", unit_price:70000, quantity:"", price:"", id:3},
{item: "Ethical Hacking Course", unit_price:150000, quantity:"", price:"", id: 4},
{item: "Small office Home Office Network Deployment", unit_price: 90000, quantity:"", price:"", id:4},
{item:"Pen Testing Fundamentals", unit_price:50000, quantity:"", price:"", id:4},
{item:"Android and IOS hacking Course", unit_price:80000, quantity:"", price:"", id:4},
{item: "IOT and Embedded Systems", unit_price:60000, quantity:"", price:"", id: 5}
] 
$("#service_name").on("click", function(){
    $("tbody").empty();
    for (let x = 0; x < selection.length; x++) {
       if ($(this).val()==selection[x].id) {
           $("tbody").append(`<tr>
           <td class="item"><input type="radio" name="rad_but" class="radio_but"> ${selection[x].item}</td>
           <td class="unit_price"> ${selection[x].unit_price}</td>
           <td><input type="number" class="form-control quantity" value=" ${selection[x].quantity}" disabled ></td>
           <td class="table_span"> ${selection[x].price}</td>
       </tr>`);
       $("#table").show();   
       }
    }
})
$(document).on("click",".radio_but", function(){
    $("#amount_to_pay").val("");
    $(".table_span").empty();
    $(".quantity").val("");
    $(".quantity").attr("disabled", true);
    if ($(this).is(":checked")) {
        $(this).closest("tr").find(".quantity").attr("disabled", false);
        $(this).closest("tr").find(".quantity").val(1);
        var q = $(this).closest("tr").find(".quantity").val();
        var item = $(this).closest("tr").find(".item").text();
        var new_amount;
        var u = $(this).closest("tr").find(".unit_price").html();
        var z = q * u;
        var new_z = parseFloat(z).toLocaleString();
        $(this).closest("tr").find(".table_span").append(new_z);
        $("#amount_to_pay").attr("placeholder", new_z);
     $(document).on("blur",".quantity", function() {
            $(".table_span").empty();
            var quantity = $(this).val();
            var uni_price = $(this).closest("tr").find(".unit_price").html();
            var amount = uni_price * quantity;
             new_amount = parseFloat(amount).toLocaleString()
            $(this).closest("tr").find(".table_span").append(new_amount);
            $("#amount_to_pay").attr("placeholder", new_amount);
        });
        $(document).on("click","#submit_btn", function(){
            var payer_name = $("#payer_name").val();
            var payer_phone = $("#payer_phone").val();
            var state = $("#state").val();
            $("#name_value").html(payer_name);
            $("#phone_value").html(payer_phone);
            $("#state_value").html(state);
            $("#course").html(item);
            $("#amount_paid").html(new_amount);
            $("#payment_success").show();
            $("#payment").hide();
             })
    }
})
})