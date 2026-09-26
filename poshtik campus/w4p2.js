console.log("dishes modelled:",3);
const checkkBtn=document.getElementById("check - order");

checkBin.addEventListener("click", function() {
    const nameBox = document.getElementById("name");
    const qtyBox = document.getElementById("quantity");

    let customerName=nameBox.Value;
    let howMany=qtyBox.value;

    const picked=document.querySelector("input[name='dish']:checked");
    let chosenDish=picked.value;

    console.log("customer name:",customerName);
    console.log("dish ordered:",chosenDish);
    console.log("quantity:",howMany);

    if(customerName===""){
        console.log(" The name field is empty");
    }

});