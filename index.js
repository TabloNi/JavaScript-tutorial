let a = 30
let b = 90
var c = 60
const d = 20
console.log(a-b)
const daysOfWeek = ["mon", "Tue"];
console.log(daysOfWeek[1]);


const myInfo = {
    name : "nam",
    age : 33,
    gender : "Male",
    myArr : ["sfsdfds","dsfdsfd", "sdfsd"],

    myObj :[{
        hi : 3,
        name : "efw",
        kks : true
    },
    {

        kow : 30,
        nana : "asdas"
    }
]
}

myInfo.gender = "sdfds"

console.log(myInfo.myObj[1].kow)


function sayHello(name,age){
    console.log('hi',name,'age',age)
}

sayHello("nam", 20)

const calc = {

    plus : function(a,b){
        return a+b
    },
    minus : function(a,b){

        return a-b
    }

}


kk = calc.plus(5,6)
dd = calc.minus(2,4)
console.log(kk,dd)



const title = document.getElementById("title")

console.log(title)

title.innerHTML = "LOL"

// 자바 스크립트의 선언은 let으로 한다. var 은 변수 선언 const 는 상수 선언 이다.
// 다 아는거긴 하네
//배열은 c랑 똑같음. 근데 선언 타입이 없어서 여러 타입이 한번에 입력 가능함.
//object 선언은 {}로 함. 선언 후에 값을 .접근을 통해 변경 가능.
//calc 라는 Object를 선언한 후, 그 안에 함수들을 선언하여 접근함.
//title 이라는 id를 선언하고 객체를 가져와서 택스트를 바꿈.
//