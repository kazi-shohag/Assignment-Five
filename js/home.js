// // click history button 
// document.getElementById('history-button').addEventListener('click',function(){
//     const donateButton=document.getElementById('donation-button').classList.remove('color');
//    const historybutton= document.getElementById('history-button').classList.add('color');
    
// })
// click donation button 
document.getElementById('donation-button').addEventListener('click',function(){
    const donateButtonClick=document.getElementById('donation-button').classList.add('color');
    const historybuttonRemove= document.getElementById('history-button').classList.remove('color');
})

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

    const popup= document.getElementById('popup');
    popup.classList.add('popup-open');
   }
   else{
    alert('Invalid Donation Amount')
   } 
   document.getElementById('close-popup').addEventListener('click',function(){
    const popup= document.getElementById('popup');
    popup.classList.remove('popup-open');
    })
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

    const popup= document.getElementById('popup');
    popup.classList.add('popup-open');
   }
   else{
    alert('Invalid Donation Amount')
   } 
   document.getElementById('close-popup').addEventListener('click',function(){
    const popup= document.getElementById('popup');
    popup.classList.remove('popup-open');
    })
})

// for quota 
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

    const popup= document.getElementById('popup');
    popup.classList.add('popup-open');
   
   }
   else{
    alert('Invalid Donation Amount')
   } 
   document.getElementById('close-popup').addEventListener('click',function(){
    const popup= document.getElementById('popup');
    popup.classList.remove('popup-open');
    })
})