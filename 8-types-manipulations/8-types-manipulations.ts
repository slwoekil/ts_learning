const user = {
    name: "Vasiliy",
    age: 8,
    skills: ['typescript', 'javascript']
}

function pickObjectKeys<K extends string>(obj: object, keys: K[]) {

    const res = {} as { [key in K]: unknown };
    for (const key of keys) {
        if (!(key in obj)) {
            throw new Error(`key ${key} not found`);
        }

        res[key] = obj[key];
    }

    return res;
}

const res = pickObjectKeys(user, ['age', 'skills']);
