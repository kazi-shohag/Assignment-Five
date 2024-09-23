// document.getElementById('donation-button').addEventListener('click',function(){
    
//     console.log('akho')
// })

document.getElementById('noyakhali-donate').addEventListener('click',function(event){
    event.preventDefault();
   const noyakhaliCurrentBalan= balancsOfAcount('money-of-noyakhali');
   const noyakhaliAddMoney=inputedMoney('input-noyakhali-money');
   if(noyakhaliAddMoney>0){
    const updateMoney=noyakhaliCurrentBalan+noyakhaliAddMoney;
    document.getElementById('money-of-noyakhali').innerText=updateMoney
    document.getElementById('input-noyakhali-money').value=''
    const yourMoney=balancsOfAcount('your-money');
    const currentYourMony=yourMoney-noyakhaliAddMoney;
    document.getElementById('your-money').innerText=currentYourMony;
   }
   else{
    alert('Invalid Donation Amount')
   } 
})

// for feni 

document.getElementById('feni-donate').addEventListener('click',function(event){
    event.preventDefault();
   const feniCurrentBalan= balancsOfAcount('money-of-feni');
   const feniAddMoney=inputedMoney('input-feni-money');
   if(feniAddMoney>0){
    const updateMoney=feniCurrentBalan+feniAddMoney;
    document.getElementById('money-of-feni').innerText=updateMoney
    document.getElementById('input-feni-money').value=''
    const yourMoney=balancsOfAcount('your-money');
    const currentYourMony=yourMoney-feniAddMoney;
    document.getElementById('your-money').innerText=currentYourMony;
   }
   else{
    alert('Invalid Donation Amount')
   } 
})
document.getElementById('quota-donate').addEventListener('click',function(event){
    event.preventDefault();
   const quotaCurrentBalan= balancsOfAcount('money-of-quota');
   const quotaAddMoney=inputedMoney('input-quota-money');
   if(quotaAddMoney>0){
    const updateMoney=quotaCurrentBalan+quotaAddMoney;
    document.getElementById('money-of-quota').innerText=updateMoney
    document.getElementById('input-quota-money').value=''
    const yourMoney=balancsOfAcount('your-money');
    const currentYourMony=yourMoney-quotaAddMoney;
    document.getElementById('your-money').innerText=currentYourMony;
   }
   else{
    alert('Invalid Donation Amount')
   } 
})