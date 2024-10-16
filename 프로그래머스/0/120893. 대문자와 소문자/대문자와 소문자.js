function solution(my_string) {
	const tempArr = [];
	for (let i = 0; i < my_string.length; i++) {
		const char = my_string[i];
		char === char.toUpperCase()
			? tempArr.push(char.toLowerCase())
			: tempArr.push(char.toUpperCase());
	}
	const answer = tempArr.join('');
	return answer;
}
