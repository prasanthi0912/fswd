const orderForm = document.getElementById("order-form");

const orderResult = document.getElementById("order-result");

orderForm.addEventListener("submit", function(event)
{
    event.preventDefault();

    const nameTyped = document.getElementById("cust-name").value;
    const customerName = nameTyped.trim();

    const phoneTyped = document.getElementById("cust-phone").value;
    const phone = phoneTyped.trim();

    const quantity = Number(document.getElementById("qty").value);

    let dishName = "";

    for (let i = 0; i < poshtikMenu.length; i = i + 1)
    {
        const dishButton = document.getElementById("dish-" + i);

        if (dishButton.checked)
        {
            dishName = poshtikMenu[i].name;
        }
    }

    const problems = [];

    if (customerName === "")
    {
        problems.push("Please enter your name.");
    }

    let notDigits = 0;

    for (let i = 0; i < phone.length; i = i + 1)
    {
        if (phone[i] < "0" || phone[i] > "9")
        {
            notDigits = notDigits + 1;
        }
    }

    if (phone.length !== 10 || notDigits > 0)
    {
        problems.push("Phone number must be exactly 10 digits.");
    }

    if (dishName === "")
    {
        problems.push("Please pick a dish.");
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10)
    {
        problems.push("Quantity must be a whole number from 1 to 10.");
    }

    if (problems.length > 0)
    {
        orderResult.className = "refused";
        orderResult.textContent = problems.join("\n");
        console.log("Order refused: " + problems.length + " problem(s)");
    }
    else
    {
        orderResult.className = "";
        orderResult.textContent = "Order placed: " + quantity + " × " + dishName;
        console.log("Order placed for " + customerName);
    }
});