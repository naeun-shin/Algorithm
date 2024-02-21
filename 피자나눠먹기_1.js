// 옷가게 할인 받기


function solution(price) {
  if(price > 500000){
    return price - ~~(price * 0.2);
  } else if(
    price > 300000
  ){return price - ~~(price * 0.1);
  } else if(price > 100000){
   return price - ~~(price * 0.05);
  }
}

//  ~~ 대신 Math.floor() 이랑 price*0.2 참고해서 코딩해보세요!




function solution(price) {
  if(price > 500000){
    return price - Math.floor( price * 0.2);
  } else if(price > 300000){
    return price - Math.floor( price * 0.1);
  } else if(price > 100000){
    return price - Math.floor( price * 0.05);
  }
}

// 제곱수 -> 함수 2개 사용해서 if절을 활용하시면 되요!
// 함수 찾는데 조금 더 시간 할애하셔도 충분히 푸실거에요!



// 제곱수 판별하기





function solution(n) {
  let root = Math.sqrt(n);
  if(Number.isInteger(root)){
    return 1;
  } else {
    return 2;
  }
}



function solution(n) {
  let answer = 0;
  if( Number.isInteger(Math.sqrt(n))=== false){
       answer = 2
  }else{
      answer = 1
  }
  return answer;
}