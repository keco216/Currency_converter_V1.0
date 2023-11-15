function calc(){
    let euro = euroField.value;
    let result = euro * 1.09;
    usd.value = result.toFixed(2).replace('.', ',');
}