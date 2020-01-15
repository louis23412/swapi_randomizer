const GetData = async name => {
    name = name.toLowerCase();
    let message = '';
    let data_promise = null;
    try {
        data_promise = await fetch('https://swapi.co/api/' + name);
    } catch {
        data_promise = null;
    }
    if (data_promise) {
        const data = await data_promise.json();
        const dataArray = data.results
        let random_number = Math.floor(Math.random() * data.results.length);
        const result_obj = dataArray[random_number];

        for (let i in result_obj) {
            if (
                !(String(result_obj[i]).includes('https://swapi.co/api')) 
                && !(String(i) === "created") 
                && !(String(i) === "edited")) {
                message += `${String(i).toUpperCase()} : ${result_obj[i]}\n`
            }
        }
        return message
    } else {
        message = 'Data loading failed! Please press any button to try again...'
    }
    return message
}

export default GetData;