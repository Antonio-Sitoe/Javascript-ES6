//  funcoes recursivas;
// funcao que se chama a ela mesma;
// ela executa o codogo dela e se chama de volta;
// a unica coisa que devemos se precupar e quando ela deve parar de se chamar de volta.
// essa funcao tem um limite 


const recursiva = (max) => {
    if (max > 10) return;
    max++;
    console.log(max)
    recursiva(max)
}

recursiva(0)