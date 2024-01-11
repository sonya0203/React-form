import React from 'react'

function Class() {
class Name{
    constructor(x1,x2){
        this.x1=x1;
        this.x2=x2;
       
     }
    Display(){
        console.log(`Name:${this.x1}`)
        console.log(`SurName:${this.x2}`)
    }
}

const obj1 =new Name("sanjay","gawade");
obj1.Display();
}

export default Class 