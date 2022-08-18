
// equal button
document.getElementById('equal').addEventListener('click', function () {
    filter('user-input');
})
// enter key press
// see function onlyNumberInput

// AC button
document.getElementById('ac').addEventListener('click', function () {
    allClear('user-input', 'equal-result');
})

// buttons
const buttons = document.getElementsByClassName('btn')
for (const btn of buttons) {
    console.log(btn);
    btn.addEventListener('click', function (event) {
        const buttonValue = event.target.innerText;
        setInput('user-input',buttonValue);
    })
}