function multiplicar(a: number, b: number): number {
    return a * b;
}

function dizOla(nome: string): string {
    return `Olá ${nome}`;
}

const resultadoMultiplicacao = multiplicar(2, 3);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

const mensagem = dizOla("Leandro");
console.log(mensagem);

