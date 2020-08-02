function resultadoDasNotas(nota) {
    if (nota >=7) {
        console.log ('Aprovado com ' + nota)
    }
}

resultadoDasNotas(8.1)
resultadoDasNotas(6)

function osVerdadeirosSao(valor) {
    if(valor) {
console.log('É verdadeiro...' + valor)
    }
}

osVerdadeirosSao()
osVerdadeirosSao(null)
osVerdadeirosSao(undefined)
osVerdadeirosSao(NaN)
osVerdadeirosSao('')
osVerdadeirosSao(0)
osVerdadeirosSao(-1)
osVerdadeirosSao(' ')
osVerdadeirosSao('?')
osVerdadeirosSao([])
osVerdadeirosSao([1, 2])
osVerdadeirosSao({})
