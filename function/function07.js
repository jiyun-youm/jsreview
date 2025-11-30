//익명함수
let myName=function(name, age) {
    return `${name}님의 나이는 ${age}입니다`;
}

//화살표 함수
let myName2=(name,age) => `${name}님의 나이는 ${age}입니다`;


//배열 안에 객체가 저장되는 형태
//많이 쓰임
let list=[
    {id:1, title:"주토피아", contents:"재미있다", num:[1,2,3]},
    {id:2, title:"얼굴", contents:"박정민", num:[1,2]},
    {id:3, title:"위키드", contents:"그냥그럼", num:[4,5,6]}
];

console.log(list[0].title, list[0]["id"]);
console.log(list[2].num[0]); //4

