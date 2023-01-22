document.addEventListener('DOMContentLoaded', ()=> {
    const burger = document.querySelector('.burger');
    const navigation = document.querySelector('.navigation');


    burger.addEventListener('click', ()=> {
        navigation.classList.toggle('active')
        burger.classList.toggle('opened')
        console.log({burger})
        console.log({navigation})
    })  
})


