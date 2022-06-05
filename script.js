let income = document.getElementById("income");
let mybal = document.getElementById("my-balance");
let expense = document.getElementById("expense");

let text = document.getElementById("text-details");
let amount = document.getElementById("amount-sign");
let history = document.getElementById("history");
function newTrasaction() {


    let a = (text.value);
    let b = (amount.value);


    // let newChild = document.createElement('div') ;
    // newChild.innerHTML ='<button class="cancel-entry">X<button>'+'<div>'+ a + ' </div>' + '<div>' +  b + '</div>'
    // history.appendChild(newChild);

    if (text.value == '' || amount.value == '') {
        alert("Enter Apropriate values");
    }
    else if (parseInt(amount.value) > 0) {
        income.innerHTML = parseInt(income.textContent) + parseInt(amount.value);
        let newChild = document.createElement('div');
        newChild.innerHTML = '<div class = "history-entry"> <button class="cancel-entry">X<button>' + '<div>' + a + ' </div>' + '<div>' + b + '</div> </div>' ;
        history.appendChild(newChild);
    }
    else {
        expense.innerHTML = parseInt(expense.textContent) - parseInt(amount.value);

    }

    mybal.innerHTML = parseInt(income.textContent) - parseInt(expense.textContent);
    text.value = '';
    amount.value = '';

}

const submit = document.getElementById("submit");

submit.addEventListener('click', newTrasaction);