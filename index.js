var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 동물 = { name: 'jeong', age: 28 };
var 여친 = {
    name: '선영'
};
여친.name = '엠버';
var Postion = { x: 10, x: 20 };
var 숙제변수 = { size: 14, position: [1, 2, 3] };
var 해봐 = { name: 'kim', phone: 123, adult: true };
var 접니다;
접니다 = '탈모';
접니다 = '풍성충';
function 함수(a) {
    return 1;
}
함수('hello');
function 가바보(a) {
    return ['가위'];
}
가바보('가위');
var 자료 = {
    name: 'kim'
};
function 내함수(a) {
}
내함수(자료.name);
var 뭐고 = function (a) {
    return 28;
};
var 회원정보 = {
    name: 'hwang',
    age: 33,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
console.log(회원정보.plusOne(1));
회원정보.changeName();
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
var removeDash = function (a) {
    var result = a.replace(/-/g, "");
    return parseFloat(result);
};
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
console.log(만들함수('010-1111-2222', cutZero, removeDash));
console.log(cutZero("010"));
console.log(removeDash("010-5461-5582"));
var 제목 = document.querySelector('#title');
if (제목 instanceof Element) {
    제목.innerHTML = '반가워요';
}
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    console.log('안녕');
});
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
}
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    Person.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return Person;
}());
var 사람1 = new Person('kim');
var 사람2 = new Person('park');
사람1.함수('안녕');
var Car = /** @class */ (function () {
    function Car(x, y) {
        this.model = x;
        this.price = y;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
var Word = /** @class */ (function () {
    function Word() {
    }
    return Word;
}());
var 네모 = { color: 'red', width: 100 };
var 학생 = { name: 'kim' };
var 선생 = { name: 'kim', age: 38 };
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
var 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
var 장바 = { product: '청소기', price: 7000, card: false };
var 오브젝트 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
function 함() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함(1, 2, 4, 5, 5, 6);
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3);
var person = { student: true, age: 20 };
function 함함(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함함({ student: true, age: 20 });
function 최대() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result = 0;
    a.forEach(function (i) {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
console.log(최대(7, 4, 8, 22));
function 타입(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
타입({ user: 'kim', comment: [3, 5, 4], admin: false });
function 함우(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
함우([40, 'wine', false]);
function 풩(animal) {
    if ('swim' in animal) {
        animal.swim;
    }
}
function 함수요(x) {
    if (x.wheel === '4개') {
        console.log('x는 Car2 타입이에요');
    }
}
var User = /** @class */ (function () {
    function User(a) {
        this.familyName = 'Hwang';
        this.name = a + this.familyName;
    }
    User.prototype.이름변경함수 = function () {
        this.name = 'Park';
    };
    return User;
}());
var 유저1 = new User('선영');
유저1.이름변경함수();
console.log(유저1);
var 사람 = /** @class */ (function () {
    function 사람(name) {
        this.name = name;
    }
    return 사람;
}());
var 자식 = new 사람('정');
console.log(자식);
var 사용자 = /** @class */ (function () {
    function 사용자() {
        this.x = 10;
    }
    return 사용자;
}());
var 새사용자 = /** @class */ (function (_super) {
    __extends(새사용자, _super);
    function 새사용자() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    새사용자.prototype.doThis = function () {
        this.x = 20;
    };
    return 새사용자;
}(사용자));
var 유저2 = /** @class */ (function () {
    function 유저2() {
        this.y = 20;
    }
    유저2.x = 10;
    return 유저2;
}());
var 유저자식 = new 유저2();
console.log(유저자식);
var Users = /** @class */ (function () {
    function Users() {
        this.intro = Users.skill + ' 전문가입니다';
    }
    Users.skill = 'js';
    return Users;
}());
var 철수 = new Users();
console.log(철수);
Users.skill = 'ts';
var 철수2 = new Users();
console.log(철수2);
function 함수함수(x) {
    return x.length;
}
var a = (함수함수);
console.log(a);
// import {Name} from './a.js';
// console.log(Name);
function 제네릭(x) {
    return x[0];
}
var b = 제네릭([9, 3]);
var c = 제네릭(['안녕', 'ㅇㅁㄹ']);
console.log(b);
function 예시(x) {
    console.log(x.length);
}
예시('aa');
예시(['21', 'dasf', 'd']);
var 멍멍 = ['dog', true];
function 함수3() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
}
var arr10 = [1, 3, 4];
var arr11 = __spreadArray([4, 5], arr10, true);
var 모음집 = ['동서녹차', 4000, true, false, true, true, false, true];
import { e } from './data';
console.log(e + 1);
var f = 'kim';
var age11;
var 누구이름 = '김';
