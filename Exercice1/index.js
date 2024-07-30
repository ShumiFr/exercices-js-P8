function pairNumbers(min, max) {
    let pairs = [];

    if (min > max) {
        return '';
    }

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            pairs.push(i);
        }
    }
    
    return pairs.join(',');
}

export default pairNumbers;