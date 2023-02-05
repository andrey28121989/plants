document.addEventListener('DOMContentLoaded', ()=> {
    const burger = document.querySelector('.burger');
    const navigation = document.querySelector('.navigation');


    burger.addEventListener('click', ()=> {
        navigation.classList.toggle('active');
        burger.classList.toggle('opened');
    })  
})

const gardensButton = document.querySelector('#service_button-gardens');
const lawnButton = document.querySelector('#service_button-lawn');
const plantingButton = document.querySelector('#service_button-planting');

gardensButton.addEventListener('click', (e)=> {
    const isActive = e.target.classList.contains('button_active')
    const isLawnActive = lawnButton.classList.contains('button_active')
    const isPlantActive = plantingButton.classList.contains('button_active')

    if (isLawnActive && isPlantActive ) {
        return 
    }

    const allCards = document.querySelectorAll('.lawn,.planting');

    allCards.forEach((card) => {
        card.classList.toggle('blur')
    })

    if (isActive) {
        gardensButton.classList.remove('button_active');
        
    } else {
        gardensButton.classList.add('button_active');
    }
})

lawnButton.addEventListener('click', (e)=> {
    const isActive = e.target.classList.contains('button_active')
    const isGardenActive = gardensButton.classList.contains('button_active')
    const isPlantActive = plantingButton.classList.contains('button_active')

    if (isGardenActive && isPlantActive ) {
        return 
    }

    const allCards = document.querySelectorAll('.garden,.planting');

    allCards.forEach((card) => {
        card.classList.toggle('blur')
    })

    if (isActive) {
        lawnButton.classList.remove('button_active');
        
    } else {
        lawnButton.classList.add('button_active');
    }
})

plantingButton.addEventListener('click', (e)=> {
    const isActive = e.target.classList.contains('button_active')
    const isGardenActive = gardensButton.classList.contains('button_active')
    const isLawnActive = lawnButton.classList.contains('button_active')

    if (isGardenActive && isLawnActive ) {
        return 
    }

    const allCards = document.querySelectorAll('.garden,.lawn');

    allCards.forEach((card) => {
        card.classList.toggle('blur')
    })

    if (isActive) {
        plantingButton.classList.remove('button_active');
        
    } else {
        plantingButton.classList.add('button_active');
    }
})

const basicButton = document.querySelector('#basic_button');
const basicExpanded = document.querySelector('#basic_expanded');
const priceBasic = document.querySelector('#price_basic');
const closeBasicButton = document.querySelector('#close_basic_button')

basicButton.addEventListener('click', () => {
priceBasic.classList.toggle('hidden');
basicExpanded.classList.toggle('hidden');
}
)

closeBasicButton.addEventListener('click', () => {
    priceBasic.classList.toggle('hidden');
    basicExpanded.classList.toggle('hidden');
    }
    )

const standartButton = document.querySelector('#standart_button');
const standartExpanded = document.querySelector('#standart_expanded');
const priceStandart = document.querySelector('#price_standart');
const closeStandartButton = document.querySelector('#close_standart_button');

standartButton.addEventListener('click', () => {
priceStandart.classList.toggle('hidden');
standartExpanded.classList.toggle('hidden');
}
)

closeStandartButton.addEventListener('click', () => {
    priceStandart.classList.toggle('hidden');
    standartExpanded.classList.toggle('hidden');
    }
    )

const proCareButton = document.querySelector('#pro_care_button');
const proCareExpanded = document.querySelector('#pro_care_expanded');
const priceProCare = document.querySelector('#price_pro_care');
const closeProCareButton = document.querySelector('#close_pro_care_button');

proCareButton.addEventListener('click', () => {
    priceProCare.classList.toggle('hidden');
    proCareExpanded.classList.toggle('hidden');
    }
    )

    closeProCareButton.addEventListener('click', () => {
        priceProCare.classList.toggle('hidden');
        proCareExpanded.classList.toggle('hidden');
        }
        )
    
    