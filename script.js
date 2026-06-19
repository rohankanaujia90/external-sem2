function resultCalculator(event) {
    event.preventDefault();

    const subject1 = parseFloat(document.getElementById('subject1').value) || 0;
    const subject2 = parseFloat(document.getElementById('subject2').value) || 0;
    const subject3 = parseFloat(document.getElementById('subject3').value) || 0;
    const subject4 = parseFloat(document.getElementById('subject4').value) || 0;

    const total = subject1 + subject2 + subject3 + subject4;
    const average = total / 4;


    document.getElementById('result').innerHTML = `
        <h2>Result</h2>
        <p><strong>Total:</strong> ${total}</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}</p>
    `;
}