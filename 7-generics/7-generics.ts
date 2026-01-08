function swapKeysAndValues<K, V>(obj: Record<K, V>): {} {
    const res = {};
    const objKeys = Object.keys(obj);
    const objValue = Object.values(obj);

    for (let i = 0; i < objKeys.length; i++) {
        res[objValue[i]] = objKeys[i];
    }

    return res;
}

const obj: Record<string, number> = {
    a: 1,
    b: 2
}

const res = swapKeysAndValues(obj);
console.log(res);