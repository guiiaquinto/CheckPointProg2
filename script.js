let equipamentos = require("./consertos");
//console.log(equipamentos.length)

const equipFinalizado = equipamentos.filter(aparelho => aparelho.pronto === true);
const equipNaoFinalizado = equipamentos.filter(aparelho => aparelho.pronto === false);

console.log(equipFinalizado);
console.log(equipNaoFinalizado);
console.table(equipFinalizado);
console.table(equipNaoFinalizado);

/* function printOrder() {
    console.log("Produtos no carrinho: ");

    equipFinalizado.forEach(aparelho => {
        console.log(`Aparelho: ${aparelho.nome}`);
        console.log(`Preço: R$ ${aparelho.valores.toFixed(2)}\n`);
    });
    console.log(`Total: R$ ${equipFinalizado.reduce((acc, aparelho) => acc + aparelho.valores, 0).toFixed(2)}`);
} */
//printOrder();

var total = equipFinalizado.reduce((total, equipFinalizado)=> total + equipFinalizado.valores,0);
console.log(total)