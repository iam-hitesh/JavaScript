class Person{
    constructor(name){
      this.name = name;
    }
    sayName(){
      console.log(this.name);
    }
  }
  Person.prototype.sayName = function(){
    document.write(this.name);
    // console.log(this.name);
  };
  let person = new Person('Hitesh Yadav');
  person.sayName();
