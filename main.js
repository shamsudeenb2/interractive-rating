let buttons = document.querySelectorAll('li')
let cardOne = document.querySelector('.cardOne')
let cardTwo = document.querySelector('.cardTwo')
let submit = document.querySelector('#submit')
let cardTwoText = document.querySelector('.cardTwoText')
let ratingNo=0
 
buttons.forEach(btns =>{
    btns.addEventListener('click',(e)=>{
        e.preventDefault()
        const btnClick = e.target
        buttons.forEach(btn =>{
            btn.classList.remove('active')
        })
        btnClick.classList.add('active')
        ratingNo = e.target.innerText
        submission()
    })

})

function submission(){
    console.log(ratingNo)
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        cardTwo.classList.remove('hidden')
        cardOne.classList.add('hidden')
        cardTwoText.innerText = `You selected ${ratingNo} out of 5`
    })
}