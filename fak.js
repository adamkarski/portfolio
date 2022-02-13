const fuk =()=> {

    const inp1 = 1;
    const inp2 = 2;
    const inp3 = 3;
    
    return {
         send1:()=> inp1
        
    }
}



class Fiuk {

    constructor(){

        this.inp1 = 1;

    }

    send(number){

        return this.inp1 + number;

    }



}


tems= new Fiuk()

console.log(
    tems.send(22));