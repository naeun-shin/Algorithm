// 알고리즘 3일차 설명[]

//str1 안에 str2가 있다면 1 (참) 을 없다면 2 (거짓)를 return

function solution(str1, str2) {
    let answer = 0;
    str1.includes(str2) ? answer = 1 : answer = 2;
    return answer;
}



function solution(str1, str2) {
    let a = str1.indexOf(str2)
    if (a === 2) {
        return 1
    } else { 
        return 2
    };
}


function solution(str1, str2) {
    if (str1.includes(str2)) {
        return 1
    }else{
        return 2
    }
    
}









    // 모음 삭제
      function solution(my_string) {
        let result = ''; 
        for (let i = 0; i < my_string.length; i++) {
          let currentChar = my_string[i] 
          if (!'aeiou'.includes(currentChar)){
        
            result += currentChar
          }
          
        }
      
        return result;
      }
      console.log(solution('nice to meet you'))