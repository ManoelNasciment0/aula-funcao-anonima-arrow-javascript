var saberAprovados = function () {
    var aprovados = [
        { candidato: "Renata Soares", nota: 7.8, idade: 29 },
        { candidato: "Marcos Teixeira", nota: 7.8, idade: 26 },
        { candidato: "Priscila Gomes", nota: 7.8, idade: 30 },
        { candidato: "João Oliveira", nota: 7.8, idade: 27 },
        { candidato: "Adriana Telles", nota: 7.8, idade: 28 },
    ];
    return console.log(aprovados.slice(0, 1), "\n", aprovados.slice(2, 3), "\n", aprovados.slice(4, 5))
}

saberAprovados()

