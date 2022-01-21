function teste(obj) {
    for (var i in obj) {
      if (obj[i] == null) {
        delete obj[i];
      }
    }
    return obj;
  }

//criando o objeto
var objeto={"fizz" : "buzz", "foo": null, "bar": 42}

//chamando a função
console.log(teste(objeto))
