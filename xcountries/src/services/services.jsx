import axios from "axios";

const fetchCountries = async () => {
    const url = "https://restcountries.com/v3.1/all";
    try {
        const response = await axios.get(url);
        const data = response.data;
        // console.log("services.jsx fetchCountries debug data::", data);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default fetchCountries;