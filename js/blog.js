document.getElementById('question').addEventListener('click',function(){
    const svganswer=document.getElementById('answer');
    svganswer.classList.remove('faq-display');
})
document.getElementById('quest').addEventListener('click',function(){
    const svganswer=document.getElementById('answer');
    svganswer.classList.remove('faq-display');
    const svg1=document.getElementById('quest');
    svg1.classList.add('faq-display')
    const svg2=document.getElementById('svg2');
    svg2.classList.remove('faq-display');
    svg2.addEventListener('click',function sbg(){
        svganswer.classList.add('faq-display');
        svg2.classList.add()

    })

})



