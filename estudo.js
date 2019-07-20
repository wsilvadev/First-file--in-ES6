class AllList{
    constructor(){
        this.all = [];
    }
    addList(){
        this.all.push("element");
        console.log(this.all);
    }
    
}
    var myList = new AllList();

   document.getElementById('Element').onclick = function () {
        myList.addList();
}
const arr = [1,2,3,4,5,6];
var useMaps = arr.map((item, index) =>{
    

    return  item +1;
});
var useReduce = arr.reduce((total, next)=>{
    return total + next;
});
console.log(useReduce);
const nomes = ["tamires", "willian", "laiza"];

var verification = nomes.find((item) =>{
    if(item == "tamires"){
        console.log("O nome encontrado é " + item);
    }
});
console.log(verification );
//desestruturação 
var pessoa = {
    nome: "Willian",
    idade: 21,
    endereço:{
        rua:"a",
        casa:5
    },
};
//usando rest e spred
var pessoa1 = {...pessoa, nome: "Laiza"};
const {nome , endereço:{ rua,casa}, idade} = pessoa;
console.log(pessoa1);

var verify = ({nome, idade}) =>{
    // usando template literals do ES6 comcatenação com sinal de Crazi
    console.log(`Meu nome é ${nome} e tenho ${idade} de idade`);
}
verify(pessoa);

