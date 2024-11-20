const person = {
  // 데이터 프로퍼티
  firstName: 'jade',
  lastName: 'Lee',

  //fullName : 접근자 함수로 구성된 접근자 프로퍼티
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}}`;
  },

  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
};

// 접근자 프로퍼티를 활용한 값의 저장
person.fullName = 'Heegun Lee'; // setter함수가 호출된다.
console.log(person);

// 접근자 프로퍼티를 통한 값의 참조
console.log(person.fullName); // getter함수가 호출된다.

// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// console.log(Object.getOwnPropertyDescriptors(person));

const use = {
  get name(){
    return this._name;
  }

  set name(value){
    // 이름이 너무 짧아지는것을 방지할 수 있다.
    if(value.length > 4){
      alert('입력값이 너무 짧습니다.');
      return ;
    }
    // _로 시작하는 변수는 객체 내부에서만 활용하고, 외부에서는 건드리지 않는것이 관례이다.
    this._name = value;
  }
}

function User(name, age){
  this.name = name;
  this.age = age;

}

let john =  new User('john', 25);

// 만약 age 대신 birthday로 바꿔서 저장해야 하는 상황이 온다면?
// -> age를 가지고 잇는 모든 코드를 찾아 수정해야 한다.
// -> age는 그대로 사용하면서 birthday를 추가하자

// age를 위한 getter를 추가해서 문제를 해결하자
function User2(name, birthday){
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get(){
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  })
}
let john2= new User2("john", new Date(1992,6,1))