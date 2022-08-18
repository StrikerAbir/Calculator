
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
