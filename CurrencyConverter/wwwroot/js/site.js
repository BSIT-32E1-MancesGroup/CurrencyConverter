
const form = document.getElementById('currency-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const convertedAmount = convertCurrency(fromCurrency, toCurrency, amount);

    resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});

function convertCurrency(fromCurrency, toCurrency, amount) {
    // currency converter samples
    const conversionRates = {
        USD: { EUR: 0.91, GBP: 0.78, SGD: 1.33, PHP: 55.42 },
        EUR: { USD: 1.09, GBP: 0.85, SGD: 1.46, PHP: 60.63 },
        GBP: { USD: 1.28, EUR: 1.17, SGD: 1.71, PHP: 71.17 },
        SGD: { USD: 0.75, EUR: 0.69, GBP: 0.58, PHP: 41.62 },
        PHP: { USD: 0.024, EUR: 0.017, GBP: 0.014, SGD: 0.024 }
    };

    return amount * conversionRates[fromCurrency][toCurrency];
}
