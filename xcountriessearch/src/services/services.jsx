import axios from "axios";

const fetchCountries = async () => {
    const url = "https://restcountries.com/v3.1/all";
    try {
        // const cachedData = localStorage.getItem('countriesData');
        // if (cachedData) {
        //     return JSON.parse(cachedData);
        // }
        // const headers = {
        //     'Cache-Control': 'max-age=60', // Cache for 1 minute
        // };
        // const response = await axios.get(url, { headers });
        const response = await axios.get(url);
        if(response.status === 200) {
            const data = await response.data;
            // localStorage.setItem('countriesData', JSON.stringify(data));
            // console.log("services.jsx fetchCountries debug data::", data);
            return data;
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default fetchCountries;