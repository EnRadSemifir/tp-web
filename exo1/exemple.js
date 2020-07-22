for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
}

const maFonction = () => {
    console.log('coucou')
}

const maFonctionAvecParamètres = (param1, param2 = 4) => {
    console.log(param1)
    console.log(param2)
}

maFonctionAvecParamètres('toto')

let users = [{ nom: '1', prenom: '11' }, { nom: '2', prenom: '22' }]
