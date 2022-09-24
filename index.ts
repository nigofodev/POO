class Account {
	amount: number= 0
	titularName: string = ""
	creationDate: string = ""
	
	constructor (amount: number, titularName: string, creationDate:string){
		this.amount = amount
		this.titularName = titularName
		this.creationDate = creationDate
	};
	income(){
		return "This is the income method" 
	}

	refund(){
		return "This is the refund method " 
	}

	transfer(){
		return "This is the transfer method " 
	}
};
const customer = new Account(2500000, "Andres Ospina", "24/09/2019");
/*
console.log (customer.refund());
console.log (customer.transfer());
console.log( customer.income()); 
*/


class Counter{

	public number: number = 0

	constructor(number: number){
		this.number = number;
		
	}

	increase(){
		return this.number ++
	}
	decrease(){
		return this.number --
	}
	

};
const variable = new Counter(40);

// console.log( variable.increase());
// console.log( variable.decrease());

class complex {
	private variableA: number = 0;
	private variableB: number = 0;
	private result: number= 0;
	
	constructor(variableA:number,variableB:number,result:number){
		this.variableA = variableA;
		this.variableB = variableB;
		this.result = result;

	}
	sum(){
		this.result = this.variableA + this.variableB;
		return this.result;
	}
	
	subtract(){
		this.result = this.variableA - this.variableB;
		return this.result;
	}
	
	multiply(){
		this.result = this.variableA * this.variableB;
		return this.result;
	}
	
	divide(){
		this.result = (this.variableA / this.variableB);
		return this.result;
	}
};
	const operation = new complex(70,30,0);
	
/* console.log( operation.sum());
 console.log( operation.subtract());
 console.log( operation.multiply());
console.log( operation.divide()); */


class vehicle{
	brand: string= ""
	color: string= ""
	type: string=""
	serialNumber: number = 0

	constructor (brand: string, color: string, type: string, serialNumber: number){
		this.brand= brand
		this.color= color
		this.type= type
		this.serialNumber= serialNumber
	}

	turnOn(){
		return "The vehicle is ON"
	}

	turnOff(){
		return "The vehicle is OFF"
	}
};

const transport= new vehicle("Mustang","Negro Mate","Deportivo",123456789);

/*console.log(transport.turnON)
console.log(transport.turnOFF)*/

class car extends vehicle {
	numberOfWheels: number = 0;
	doorsNumber: number = 0;

	constructor(doorsNumber: number,numberOfWheels:number, brand: string, color: string, type: string, serialNumber: number){
		super(brand, color, type, serialNumber)
		this.doorsNumber =doorsNumber
		this.numberOfWheels =numberOfWheels
	}

	driving(){
		return "The Car is travelling "
	}

	stop(){
		return "The Car has stopped "
	}
};

const Transport = new car(4, 4,"Renult","Blanco","Camioneta",123456789);
/*console.log(Transport.driving() );*/

class Motorcylce extends vehicle {
	Speed: number = 0;
	Power: number = 0;
	
	
	constructor(Speed: number, Power: number,brand:string,color:string,tipe:string,serialNumber:number){
		super(brand,color,tipe,serialNumber);
		this.Speed = Speed;
		this.Power = Power;
			
	}

	parked(){
		return "The Motorcycle is parked "
	}

	acceleration(){
		return "The Motorcycle is accelerating "
	}
};


const transport2 = new Motorcylce(300, 212,"BMW","Blue","Sport",123456789);
//console.log(transport2.acceleration() );
