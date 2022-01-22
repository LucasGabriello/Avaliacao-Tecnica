function validade(dataProduto,validade){
    //pega validade
    var valid = parseInt(validade.split("d",1))
    
    //data atual
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0')
    var mes = String(data.getMonth() + 1).padStart(2, '0')
    var ano = data.getFullYear();
    dataAtual = ano + '-' + mes + '-' + dia
    //subtrai datas
    var data1 = new Date(dataProduto)
    var data2 = new Date(dataAtual)
    
    var data1utc = Date.UTC(data1.getFullYear(), data1.getMonth(), data1.getDate())
    var data2utc = Date.UTC(data2.getFullYear(), data2.getMonth(), data2.getDate())
    dia = 1000*60*60*24;
    var tempo_diferenca = (data2utc - data1utc)/dia

    if(valid < tempo_diferenca){
        return false
    }else{
        return true
    }

}

// testando primeiro exemplo
console.log("---------primeiro exemplo---------")

var dataProduto = new Date('2021-11-17T20:40:09.503Z')
var valid = "10d"

console.log(validade(dataProduto,valid))

// testando segundo exemplo
console.log("---------segundo exemplo---------")

var dataProduto = new Date('2021-12-10T00:00:00.000Z')
var valid = "180d"

console.log(validade(dataProduto,valid))