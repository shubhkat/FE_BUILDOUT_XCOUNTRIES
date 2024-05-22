import axios from "axios";

const fetchCountries = async () => {
    const url = "https://restcountries.com/v3.1/all";
    try {
        const cachedData = localStorage.getItem('countriesData');
        if (cachedData) {
            return JSON.parse(cachedData);
        }
        const headers = {
            'Cache-Control': 'max-age=3600', // Cache for 1 hour
        };
        const response = await axios.get(url, { headers });
        localStorage.setItem('countriesData', JSON.stringify(response.data));
        const data = response.data;
        // console.log("services.jsx fetchCountries debug data::", data);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default fetchCountries;