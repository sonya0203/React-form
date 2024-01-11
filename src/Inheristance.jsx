import React from "react";

function Inheristance() {
  class Animal {
    constructor(name, habbit) {
      this.name = name;
      this.habbit = habbit;
    }
    Display() {
      console.log(`${this.name} barking`);
    //   console.log(`Animal habbit is:${(this, this.habbit)}`);
    }
    Run(){
        console.log(`Animal name is:${this.name}`);
    }
  }
  class Tiger extends Animal {
    Show() {
      console.log(`${this.name} Climbing`);
    //   console.log(`Animal habbit is:${(this, this.habbit)}`);
    }
  }
  let An = new Animal("monkey", "jumping");
  let Ti = new Tiger("simba", "Sleeping");
  An.Display();
  Ti.Show();
}

export default Inheristance;
