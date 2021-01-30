//--------- below 5 const is for event handling
const firstClassPlus = document.getElementById("first-class-plus");
const firstClassMinus = document.getElementById("first-class-minus");
const economyPlus = document.getElementById("economy-plus");
const economyMinus = document.getElementById("economy-minus");
const bookNow = document.getElementById("book-now");

//-------- below 5 const is for updating display
const firstClassInput = document.getElementById("first-class-input");
const economyInput = document.getElementById("economy-input");
const subtotalAmount = document.getElementById("subtotal");
const vatAmount = document.getElementById("vat");
const totalAmount = document.getElementById("total");

//-------- functions
function updateSpanContent(targetSpan, updateValue) {
    let currentContent = parseInt(targetSpan.innerText);
    targetSpan.innerText = currentContent + updateValue;
}

function updateInputContent(targetInputField, updateAmount) {
    let currentContent = parseInt(targetInputField.value);
    targetInputField.value = currentContent + updateAmount;
}

function updateVatTotal(vat) {
    vatAmount.innerText = vat;
    totalAmount.innerText = parseInt(subtotalAmount.innerText) + vat;
}

function firstClassUpdater(plusOrMinus) {
    updateInputContent(firstClassInput, plusOrMinus * 1);
    updateSpanContent(subtotalAmount, plusOrMinus * 150);
    let vat = parseInt(subtotalAmount.innerText) * 0.1; // 10% vat
    updateVatTotal(vat);
}

function economyUpdater(plusOrMinus) {
    updateInputContent(economyInput, plusOrMinus * 1);
    updateSpanContent(subtotalAmount, plusOrMinus * 100);
    let vat = parseInt(subtotalAmount.innerText) * 0.1; // 10% vat
    updateVatTotal(vat);
}

//-------- event handlers
firstClassPlus.addEventListener('click', () => {
    firstClassUpdater(1);
});

firstClassMinus.addEventListener('click', () => {
    let currentAmount = parseInt(firstClassInput.value);
    // dont allow negative input
    if (currentAmount == 0) {
        return;
    }
    firstClassUpdater(-1);
});

economyPlus.addEventListener('click', () => {
    economyUpdater(1);
});

economyMinus.addEventListener('click', () => {
    let currentAmount = parseInt(economyInput.value);
    // dont allow negative input
    if (currentAmount == 0) {
        return;
    }
    economyUpdater(-1);
});

//---- confirmation section
let confirmationDialog = document.querySelector(".confirmation");
let confirmationClose = document.querySelector(".confirm-close");
bookNow.addEventListener('click', () => {
    confirmationDialog.classList.add("confirmation-active");
    document.getElementById("confirm-first-class").innerText = firstClassInput.value;
    document.getElementById("confirm-economy").innerText = economyInput.value;
    document.getElementById("confirm-subtotal").innerText = subtotalAmount.innerText;
    document.getElementById("confirm-vat").innerText = vatAmount.innerText;
    document.getElementById("confirm-total").innerText = totalAmount.innerText;
});

confirmationClose.addEventListener('click', () => {
    confirmationDialog.classList.remove("confirmation-active");
});