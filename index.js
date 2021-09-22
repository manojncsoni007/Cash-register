let checkBtn = document.querySelector("#check-btn");
let billAmount = document.querySelector("#bill-amount");
let givenCash = document.querySelector("#given-cash");
let message = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll('.no-of-notes');
const notesAvailable = [2000, 500, 100, 20, 10, 5, 1];
const nextButton = document.querySelector('#next-btn');
let hidden = document.querySelectorAll('.hide');

checkBtn.addEventListener('click', () => {
    hide(message);
    if (billAmount.value > 0) {
        if (givenCash.value >= billAmount.value) {
            let returnAmount = givenCash.value - billAmount.value;
            calculateChange(returnAmount);
        } else {
            showMessage('Give cash atleast equal of amount');
        }

    } else {
        showMessage('Amount Invalid')
    }

})

function calculateChange(amount) {
    for (let i = 0; i < notesAvailable.length; i++) {
        const numberOfNotes = Math.trunc(amount / notesAvailable[i])
        noOfNotes[i].innerText = numberOfNotes;
        amount = amount % notesAvailable[i];
    }
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

function hide(param) {
    param.style.display = 'none';
}