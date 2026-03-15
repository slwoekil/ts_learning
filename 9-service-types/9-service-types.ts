interface IA {
    a: number;
    b: string;
}

interface IB {
    a: number;
    c: boolean;
}

let a: IA = { a: 5, b: '' };
let b: IB = { a: 10, c: true };

interface IDifference {
    b: string;
}

function difference<T extends object, U extends object>(obj1: T, obj2: U): Partial<T> {
    const result: Partial<T> = {};

    (Object.keys(obj1) as Array<keyof T>).forEach(key => {
        // Если ключа нет во втором объекте
        if (!(key in obj2)) {
            result[key] = obj1[key];
        }
    });

    return result;
}

let v0 = difference(a, b);
console.log(v0);