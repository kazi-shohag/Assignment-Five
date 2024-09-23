function balancsOfAcount(id){
    const currentBalance=document.getElementById(id).innerText;
    const currentBalanceNum=parseFloat(currentBalance);
    return currentBalanceNum;
}
function inputedMoney(id){
    const inputMoney=document.getElementById(id).value;
    const inputMoneyNum=parseFloat(inputMoney);
    return inputMoneyNum;
}