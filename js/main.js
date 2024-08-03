
class Destino{
    constructor(pais, precio){
    this.pais = pais;
    this.precio = precio
    }
}

const destinos = [
    new Destino('Mexico, Cancún', 1300),
    new Destino('Francia, Paris', 1600),
    new Destino('Argentina, Buenos Aires', 1200),
    new Destino('Alemania, Berlin', 1240)
];

const containerViajes = document.querySelector('#container')
destinos.forEach((e)=>{
const templateCopy = document.querySelector('template').content.cloneNode(true)
    templateCopy.querySelector('h5').textContent = e.pais;
    templateCopy.querySelector('p').textContent += e.precio;
    templateCopy.querySelector('a').addEventListener('click', ()=>{
        console.log(`Compraste el viaje a  ${e.pais} por el precio de ${e.precio} dolares`);
})
    containerViajes.append(templateCopy);
});

// Background Mode

function modobg() {
    let button = document.querySelector('button')
    let body = document.body

    let buttonText = localStorage.getItem('buttonText')
    button.textContent = buttonText;
    let modo = localStorage.getItem('mode')
    body.className = modo

    button.addEventListener('click', ()=>{
        if(body.className == 'light-mode'){
            body.className = 'dark-mode'
            button.textContent ='Light-Mode'
        }else{
            body.className = 'light-mode'
            button.textContent = 'Dark-Mode'

        }
    
        localStorage.setItem('mode', body.className)
        localStorage.setItem('buttonText', button.textContent)
    })
}

modobg()
