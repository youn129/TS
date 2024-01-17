type Animal = { name : string, age : number };

let 동물 : Animal = { name : 'jeong', age : 28 }


type Girlfriend = { 
    readonly name : string
 }

const 여친 :Girlfriend = { 
    name : '선영'
}

여친.name = '엠버'

type PostionX = { x : number }
type Postiony = { x : number }
type newType = PostionX & Postiony

let Postion : newType = { x :10, x: 20 }

type 숙제 = { color? : string, size : number, readonly position : number[] }

let 숙제변수 : 숙제 = { size : 14, position : [1,2,3]}


type 이것도 = { name : string, phone : number, email? : string, }
type Adult = { adult : boolean }   

type 합치기 = 이것도 & Adult

let 해봐 : 합치기 = { name : 'kim', phone : 123, adult : true }

let 접니다 : '풍성충' | '커플';

접니다 = '탈모';
접니다 = '풍성충';

function 함수(a : 'hello') : (1 | 0) {
    return 1 
}

함수('hello')

function 가바보(a : '가위' | '바위' | '보') : ('가위' | '바위' | '보')[] {
    return ['가위']
}

가바보('가위')


var 자료 = {
    name : 'kim'
} as const



function 내함수(a: 'kim') {

}


내함수(자료.name)

type 함수타입 = (a : string) => number;

let 뭐고 : 함수타입 = function (a) {
    return 28
}

type Member = {
    name : string,
    age : number,
    plusOne : ( x :number ) => number,
    changeName : () => void
  }

let 회원정보 : Member = {
    name : 'hwang',
    age : 33,
    
    plusOne(a) {
        return a + 1
    },
    changeName : () => {
        console.log('안녕')
    }
}

console.log(회원정보.plusOne(1));
회원정보.changeName();


type CutType = (x : string) => string

type removeType = (x : string) => number

let cutZero : CutType = function(x) {
    let result = x.replace(/^0+/, "");
    return result
}
let removeDash : removeType = function(a) {
    let result = a.replace(/-/g, "");
    return parseFloat(result)
}

type 함수타입1 = (a :string) => string;
type 함수타입2 = (a :string) => number;

function 만들함수(a : string, func1 : 함수타입1, func2 : 함수타입2){
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2)
  }
console.log(만들함수('010-1111-2222', cutZero, removeDash));

console.log(cutZero("010"))
console.log(removeDash("010-5461-5582"))

let 제목 = document.querySelector('#title');
if (제목 instanceof Element) {
    제목.innerHTML = '반가워요';
}

let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com'
}

let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', function() {
    console.log('안녕')
})

let 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg"
}


class Person {
    name : string;
    constructor (a : string) {
        this.name = a;
    }
    함수(a : string) {
        console.log('안녕' + a)
    }
}

let 사람1 = new Person('kim');
let 사람2 = new Person('park');
사람1.함수('안녕')

class Car {
    model : string;
    price : number;
    constructor(x : string, y : number) {
        this.model = x;
        this.price = y;
    }
    tax() : number {
        return this.price * 0.1
    }
}

let car1 = new Car('소나타', 3000)
console.log(car1);
console.log(car1.tax());

class Word {
    num : number;
    str : string;
    constructor(num : Array, str : Array)
}

interface Square {
    color : string, 
    width : number 
}

let 네모:Square = { color : 'red', width : 100 }

interface Student {
    name : string
}

interface Teacher extends Student {
    age : number
}

let 학생 : Student = { name : 'kim' }
let 선생 : Teacher = { name : 'kim', age : 38 }

type Ani = { name : string }
type Cat = { age : number } & Ani


interface iffy {
    brand : string,
    serialNumber : number,
    model : string[]
}

let 상품 : iffy = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface dream {
    product : string,
    price : number
}

interface 추가 extends dream {
    card : boolean
}

let 장바구니 : dream[] =[ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ];

let 장바 : 추가 = { product : '청소기', price : 7000, card : false }


interface MathObj {
    plus : (a : number, b : number) => number,
    minus : (a : number, b : number) => number
}

let 오브젝트 : MathObj = {
    plus(a, b) {
        return a + b
    },
    minus(a, b) {
        return a - b
    }
}

function 함(...a : number[]) {
    console.log(a)
}

함(1,2,4,5,5,6)

let arr = [1,2,3]
let arr2 = [4,5]
let arr3 = [...arr, ...arr2]
console.log(arr3)

let person = { student : true, age : 20 }

function 함함({student, age} : { student : boolean, age : number}) {
    console.log(student, age)
}

함함({ student : true, age : 20 })


function 최대(...a : number[]) {
    let result = 0;
    a.forEach((i)=>{
        if (result < i) {
            result = i
        }
    })
    return result
}

console.log(최대(7,4,8,22))


type userType = {
    user : string,
    comment : number[],
    admin : boolean
}

function 타입({user, comment, admin} : userType) : void {
    console.log(user, comment, admin)
}

타입({ user : 'kim', comment : [3,5,4], admin : false})

type 어레이1 = (number | string | boolean)[];

function 함우([a,b,c]:어레이1) {
    console.log(a,b,c)
}

함우( [40, 'wine', false])


type Fish = {swim : string}
type Bird = {fly : string}

function 풩(animal : Fish | Bird) {
    if ('swim' in animal) {
        animal.swim
    }
}


type Car2 = {
    wheel : '4개',
    color : string
}
type Bike = {
    wheel : '2개',
    color : string
}

function 함수요(x : Car2 | Bike) {
    if (x.wheel === '4개') {
        console.log('x는 Car2 타입이에요')
    }
}


class User {
    name : string;
    private familyName : string = 'Hwang';
    constructor(a){
        this.name = a + this.familyName
    }

    이름변경함수(){
        this.name = 'Park';
    }
}
let 유저1 = new User('선영');
유저1.이름변경함수()
console.log(유저1);

class 사람 {
    constructor(public name : string){

    }
}

let 자식 = new 사람('정');
console.log(자식);


class 사용자 {
    protected x = 10;
}

class 새사용자 extends 사용자 {
    doThis(){
        this.x = 20;
    }
}

class 유저2 {
    static x = 10;
    y = 20;
}

let 유저자식 = new 유저2();
console.log(유저자식)


class Users {
    static skill = 'js';
    intro = Users.skill + ' 전문가입니다';
}

let 철수 = new Users();
console.log(철수)

Users.skill = 'ts';

let 철수2 = new Users();
console.log(철수2);


interface LengthCheck {
    length : number
}

function 함수함수<myType extends LengthCheck>(x : myType){
    return x.length
}

let a = 함수함수<string['123']>
console.log(a)

// import {Name} from './a.js';

// console.log(Name);

function 제네릭<T>( x: T[]) : T{
    return x[0]
}

let b = 제네릭<number>([9,3]);
let c = 제네릭<string>(['안녕', 'ㅇㅁㄹ'])
console.log(b);



function 예시<myType2 extends string | string[]>(x : myType2) {
    console.log(x.length) 
}

예시<string>('aa')
예시<string[]>(['21', 'dasf', 'd'])

let 멍멍 : [string, boolean?] = ['dog', true]

function 함수3(...x : [number, string]) {

}

let arr10 = [1,3,4];
let arr11 : [number, number, ...number[]]= [4,5, ...arr10]

type arr12 = [string, number, ...boolean[]]
let 모음집 : arr12 = ['동서녹차', 4000, true, false, true, true, false, true]


declare let d : number;

import {e} from './data';

console.log(e + 1)

let f : Dog = 'kim'; 

import { Age11 } from './test.d'

let age11 : Age11

let 누구이름 : string = '김';

type 안녕 = number;