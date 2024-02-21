// prototype 사용 -> ECMA6이전 문법을 사용하려고 하기에 var로 사용하는 점 참고
var Meal = function (food) {
  this.food = food;
};

Meal.prototype.eat = function () {
  return 'Yammy!!';
};

class Meal {
  constructor(food) {
    this.food = food;
  }

  eat() {
    return 'Yammy!!';
  }
}
