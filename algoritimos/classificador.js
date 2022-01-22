function classificador(pessoa){
    pessoa.sort(function(a,b){
        if(a.nome < b.nome){
            return-1
        }else{
            return true
        }
    });
    pessoa.sort(function(a,b){
        if(a.responsavel > b.responsavel){
            return-1
        }else{
            return true
        }
    });
    pessoa.sort(function(a,b){
        if(a.souEu > b.souEu){
            return-1
        }else{
            return true
        }
    });
    return pessoa
}
//criando o Array de objetos
var pessoa = [
    {
        souEu:false,
        responsavel:false,
        nome:"Rogério"
    },
    {
        souEu:false,
        responsavel:true,
        nome:"Matias"
    },
    {
        souEu:false,
        responsavel:false,
        nome:"Gabriela"
    },
    {
        souEu:true,
        responsavel:false,
        nome:"Lucas"
    },
    {
        souEu:false,
        responsavel:true,
        nome:"Julio"
    }
];

//chamando a função
classificador(pessoa)

//mostra objeto ordenado
for(var i=0 ; i<pessoa.length ; i++){
    console.log(pessoa[i])
}
