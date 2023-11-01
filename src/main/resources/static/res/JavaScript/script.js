const currencyChange = document.querySelector('.currency1');
    const currencyInput = document.getElementById('inputCur');
    const currenctOutput = document.getElementById('resConvert');

    const rates = {
    'fromRuble': 1,
    'fromDollar': 0.0103,
    'fromEuro': 0.0098,
    'fromEuan': 0.0752,
    'fromPound': 0.0084
}

    function convert(rub, currency){
    if (!rates[currency]){
    return null;
}

    return rub * rates[currency];
}

    currencyInput.addEventListener('input', function (){
    const rub = Number(currencyInput.value);
    const currency = currencyChange.selectedOptions.item(0).value;

    currenctOutput.value = convert(rub, currency);
    console.log(currencyInput.value);
    console.log(currencyChange.selectedOptions.item(0).value);
})

function plus(){
    var num1, num2, res;
    num1 = Number(document.getElementById('num1').value);
    num2 = Number(document.getElementById('num2').value);
    res = num1 + num2;
    document.getElementById('resCalc').innerHTML = res;
}

function minus(){
    var num1, num2, res;
    num1 = Number(document.getElementById('num1').value);
    num2 = Number(document.getElementById('num2').value);
    res = num1 - num2;
    document.getElementById('resCalc').innerHTML = res;
}

function multi(){
    var num1, num2, res;
    num1 = Number(document.getElementById('num1').value);
    num2 = Number(document.getElementById('num2').value);
    res = num1 * num2;
    document.getElementById('resCalc').innerHTML = res;
}

function divide(){
    var num1, num2, res;
    num1 = Number(document.getElementById('num1').value);
    num2 = Number(document.getElementById('num2').value);
    res = num1 / num2;
    document.getElementById('resCalc').innerHTML = res;
}