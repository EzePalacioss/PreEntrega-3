class User{
    constructor(nombre, pass){
        this.nombre = nombre
        this.pass = pass
    }
}

const Users = [
    new User ('Ezequiel', 'Coder123'),
    new User ('Gabriel', 'Coder321'),
    new User ('Claudia', 'Coder')
]

localStorage.setItem('usuarios', JSON.stringify(Users))


const usersVerify = JSON.parse(localStorage.getItem('usuarios'))


const formulary = document.querySelector('form')

formulary.addEventListener('submit', (e)=>{
e.preventDefault()

let nombre = formulary[0].value
let pass = formulary[1].value

let user = usersVerify.find((usuario)=> usuario.nombre == nombre && usuario.pass == pass)

if(user){
    location.href = '../index.html'
}else{
    alert('los datos no coinciden')
}
})

