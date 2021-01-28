// function Dog(name){

//     this.name = name;
//     this.bark = () =>{
        
//         console.log(this.name);
//     }
// }

function Dog(name){

    this.name = name;
    this.bark = bark;
}

function bark(){

    console.log(this.name);
}


const dog1 = new Dog('dog1');
const dog2 = new Dog('dog2');

dog1.bark();

