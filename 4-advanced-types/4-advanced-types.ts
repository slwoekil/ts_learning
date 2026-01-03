enum ErrorCode {
    FetchError = 'FETCH_ERROR',
    ParseError = 'PARSE_ERROR',
}

async function logUsers() {
    try {
        const response = await fetch('https://dummyjson.com/users');

        if (!response.ok) {
            throw new Error(ErrorCode.FetchError);
        }

        const responseData = await response.json();
        const {users} = responseData;
        const filteredData = [];

        for (const user of users) {
            filteredData.push({
                id: user.id,
                first_name: user.firstName,
                last_name: user.lastName,
                age: user.age
            })
        }

        console.log(filteredData);

        if (!users || !users.length) {
            throw new Error(ErrorCode.ParseError);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
    }
}


logUsers()