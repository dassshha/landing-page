const URL = 'https://private-anon-62b9b889cf-lampshop.apiary-mock.com/lamps';

export const getLamps = async () => {
    let data = await fetch(URL);

    if (data.status === 200) {
        return await data.json();
    }

    throw new Error("Wrong request");
}
