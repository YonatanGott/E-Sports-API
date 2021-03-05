import axios from "axios";

const baseUrl = "https://api.pandascore.co/";

const token = 'd7PgibJk0PYCbKlJTxqMtoGpIvuIgmcBw3dQMFpVLmU4rt1BC7E';
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

// Overwatch Teams 

export async function getAllOwTeams() {
    try {
        const response = await axios.get(baseUrl + "ow/teams", config);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}
// CSGO Teams 

export async function getAllCsgoTeams() {
    try {
        const response = await axios.get(baseUrl + "csgo/teams", config);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}
// LoL Teams 

export async function getAllLolTeams() {
    try {
        const response = await axios.get(baseUrl + "lol/teams", config);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}
// DoTA2 Teams 

export async function getAllDotaTeams() {
    try {
        const response = await axios.get(baseUrl + "dota2/teams", config);
        const data = response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
}