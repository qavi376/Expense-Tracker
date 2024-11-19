const expenseName = document.getElementById('expenseName');
const expenseAmount = document.getElementById('expenseAmount');
const addExpenseButton = document.getElementById('addExpense');
const expenseList = document.getElementById('expenseList');
const totalAmount = document.getElementById('totalAmount');

let total = 0;

addExpenseButton.addEventListener('click', () => {
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);

    if (name && !isNaN(amount) && amount > 0) {
        addExpense(name, amount);
        expenseName.value = '';
        expenseAmount.value = '';
    } else {
        alert('Please enter valid name and amount!');
    }
});

function addExpense(name, amount) {
    total += amount;
    updateTotal();

    const li = document.createElement('li');
    li.innerHTML = `
        ${name} - Rs${amount.toFixed(2)}
        <button class="delete-btn">X</button>
    `;

    const deleteButton = li.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        total -= amount;
        updateTotal();
        expenseList.removeChild(li);
    });

    expenseList.appendChild(li);
}

function updateTotal() {
    totalAmount.textContent = total.toFixed(2);
}
