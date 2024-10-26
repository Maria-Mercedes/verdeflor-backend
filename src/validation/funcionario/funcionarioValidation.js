export function idInexistente(registros){
    if (registros.length == 0) {
         throw new Error('ID não encontrado.');
    }
}