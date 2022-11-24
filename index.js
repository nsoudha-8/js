{/*var fruits=['apple','mango','orange'];
fruits.forEach(fruit=>console.log(fruit));

for (fruit in fruits){
console.log(fruits[fruit]);
}

for (fruit of fruits) {
    console.log(fruit);
}
*/}

//shift
{/*var num=8,n=2;
console.log(num<<n);
console.log(num>>n);
console.log(num*(2**n));
console.log(num/(2**n));*/}

//function Expression
(function(a,b){
    console.log(''+(a+b));
})(5,6);


//call
//animalobject
let animal={
    name:'cat',
    eat(a,b){
        console.log(this.name+" is eating "+a+ "  "+b);
    }
}
//human object
let human={
    name:'jon'
}

animal.eat(5,'bones');
animal.eat.call(human,4,'chips');//using call :borrow method of animal object to human object

//apply()
animal.eat.apply(human,[4,'chips']);//using arguments in the form of array[]

//bind()
let human_eat=animal.eat.bind(human);
human_eat(5,'apples');

var arr=[1,2,5,'apple'];
arr.push(100);//push() insert item to last index
console.log(arr);

arr.pop();// pop() delete from last index
console.log(arr);

arr.unshift(100);// unshift() insert item to first index of array
console.log(arr);

arr.shift();//shift() delete from first index
console.log(arr);

arr.splice(0,2);//splice delete item excluding second argument .including  0,1
//console.log(arr.splice(0,2));//spliced items i.e, 1,2
console.log(arr);
//arr.splice(2) delete item including index 2,3....

var arr1=[1,2,3,4,5,7,8];
console.log(arr1.slice(2,6));//3,4,5,7 excluding second argument *array remain same*
console.log(arr1);//1,2,3,4,5,7,8
console.log(arr1.slice(2));//slice the array from index 2 to last index 



//Higher order function
function print(){
    console.log('hi');
}
setInterval(print,1000);//higher order function takes function as argument or return function
clearInterval(1);//stop timer

function canVote(age){
    return age>=18;
};
//console.log(canVote(22));

function age_req(req_age){
    return function(age){
        return age>=req_age;
    }   
};

{/*let can_Vote=age_req(18);
let can_Drive=age_req(16);
let can_Marry=age_req(21);

console.log(can_Vote(28));//true
console.log(can_Drive(28));//true
console.log(can_Marry(20));//false */}

console.log("can vote "+age_req(18)(28));//true

console.log("can Drive "+age_req(16)(28));
console.log("can marry "+age_req(21)(28));


//oop
//Encapsulation
class Student{
    constructor(rollno,name){ //constructor special function to allocate memory nd initialize object
this.name=name;
this.rollno=rollno;
    }

    attendance(){
console.log(this.name+" is present");
    }
}

var st1=new Student(23,'Adam');
st1.attendance();//Adam is present

class Box{
    constructor(len){
        this.len=len;
    }
    display(){
        console.log(this);
    }
}

var b1=new Box(15);
b1.display();


//prototype used to access properties nd methods
let father={
    name:'father'
};
let son=Object.create(father);//or use son.__proto__=father
console.log(father.isPrototypeOf(son));//check whether child has a property of parent

var parent={  //object
    name:'parent',
    sing(){     // or function declared using function keyword or arrow 
        console.log("singing");
    },
    eat: function(){
        console.log("eating");
    },
    drink:()=>{
        console.log("drinking");
    }
};

var child={
    name:'child',
    eat: function(){
        console.log("eating");
    }
};


child.__proto__=parent;


for(let prop in child){
    console.log("child has "+prop +" is a own prop: " +child.hasOwnProperty(prop));//check child has own prop or not
}


//inheritance
class Fruit{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    grow(){
        console.log(this.name+ " color "+this.color+" is growing");
    }
}
class Apple extends Fruit{
    constructor(name,color,type){
        super(name,color);          //super() must use in child class constructor
        this.type=type;
    }
    eat(){
        console.log(this);
    }
}
 let a1=new Apple('greenApple','green','big');
 a1.eat();
 a1.grow();


//polymorphism
class P{
    print(s1){
        console.log(s1);
    }
    print(s1,s2){
        console.log(s1+s2);
    }
}
let ob=new P();
ob.print(10);//NaN ,Js doesnot support classical method overloading it only consider last implementation of print()
ob.print(10,14);//24. last implementation

//method overrriding
class Parent{
    a=10;
    live(con1){console.log(a);
        console.log(" parent live in "+con1);
    }
}
class Child extends Parent{
    constructor(){
        super();
    }
    live(con){
        console.log("child in "+con);
    }
}
var c=new Child();
c.live("India");//child in india . method of Child class overriding parent class method

//exception

const err=new Error("Error!");
console.log(err.message);//Error!

console.log(err.name);//Error
console.log(err.stack);//Error: Error! at index.js:228:11

function a(){
    const b=new Error("This is Error");
    return b;
};

console.log(a());//Error: This is Error


//try nd catch
try{
    console.log(g);
}catch(error){       //catch parameter is optional
    console.log("error is "+error);//error is ReferenceError: g is not defined
}

//throw
function vote(age){
    if (age<=18){
        try{
            throw new Error("youre under age");
            console.log("not executing");//this line will not executes as error occurs in the above line
        }catch(error){
            console.log(error);
        }
    }else{
        console.log("you can vote");
    }
}
console.log(vote(22));
console.log(vote(12));

//finally block will execute no mater what
function vote(age){
    if (age<=18){
        try{
            throw new Error("youre under age");
        }catch(error){
            console.log(error);
        }
        finally{
            console.log("finally block executes if an exception occurs ");//this will executes with error in previous block
        }
    }else{
        console.log("you can vote");
    }
}

console.log(vote(12));

//DOM events
function printt(i){
    i.innerHTML="clicked"
    console.log("h1 is clicked");
};

//execute it in console
{/*document.getElementById("btn1").addEventListener('click',function(){
console.log("Button Click is clicked");});*/}

{/*var lis=document.getElementsByTagName('li');
for(var i=0;i<lis.length;i++){
    lis[i].addEventListener('click',function(){
        this.style.color="red";
    });
}

//mouseover
var lis=document.getElementsByTagName('li');
for(var i=0;i<lis.length;i++){
    lis[i].addEventListener('mouseover',function(){
        this.style.color="red";
    });
}
*/}

//closure
function pa(){
    var x=10;
    console.log("Parent function");
    ch=(y)=>{
        console.log(x+y);
    }
    return ch;
}

console.log(pa()(8));//18

//closure using arrow function
pa=(x)=>ch=(y)=>console.log(x+y);
pa(10)(5);

let addby5=pa(5);//currying
addby5(5);
addby5(11);

//currying
//with normal function
let mul=function(a,b){
    console.log(a*b);
}
//with bind function
let mulby10=mul.bind(this,10);
mulby10(4);
mulby10(7);
//with arrow func
let mult=(x)=>(y)=>console.log(x*y);
let mult10=mult(10);
mult10(6);
mult10(8);

