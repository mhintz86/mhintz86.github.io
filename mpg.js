"use strict";

document.getElementById('mpgForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const miles = parseFloat(document.getElementById('miles').value);
    const gallons = parseFloat(document.getElementById('gallons').value);
    
    if (isNaN(miles) || miles <= 0 || isNaN(gallons) || gallons <= 0) {
        alert("Please enter valid numbers greater than 0 for both miles and gallons.");
        return;
    }
    
    const mpg = miles / gallons;
    
    document.getElementById('result').value = mpg.toFixed(2);
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('mpgForm').reset();
    document.getElementById('result').value = '';
});
