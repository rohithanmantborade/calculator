//constructor-special method for defining the properties and methods of an object

function cars(brand,model,year){
    this.brand=brand;
    this.model=model;
    this.year=year;
}

const car1=new cars("ford","mustang",2020);
const car2=new cars("chevrolet","camaro",2021);
console.log(car1.brand); //ford
console.log(car2.model); //camaro