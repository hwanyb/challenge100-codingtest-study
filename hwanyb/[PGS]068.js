function solution(food) {
    const arr = [];
    for (let i = 1; i < food.length; i++) {
        if (food[i] > 1) {
            arr.push(i.toString().repeat(Math.floor(food[i] / 2)));
        }
    }
    const reversedArr = [...arr].reverse().join();
    arr.push(0, reversedArr);
    return arr.join().replaceAll(",", "");
}

// 더 깔끔한 풀이

function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i] / 2));
    }

    return res + '0' + [...res].reverse().join('');
}