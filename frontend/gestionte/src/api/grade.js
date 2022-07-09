import { BASE_API } from "../utils/constants"

export async function getGradesApi(){
    try {
        const url = `${BASE_API}/api/grades/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function addGradeApi(data, token){
    try {
        const formData = new FormData();
        formData.append("level", data.level);
        formData.append("letter", data.letter);
        formData.append("day_trip", data.day_trip);
        formData.append("sublevel", data.sublevel);
        const url = `${BASE_API}/api/grades/`;
        const params = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;   
    }
}

export async function updateGradeApi(id, data, token){
    try {
        const formData = new FormData();
        formData.append("level", data.level);
        formData.append("letter", data.letter);
        formData.append("day_trip", data.day_trip);
        const url = `${BASE_API}/api/grades/${id}/`;
        const params = {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        }
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;   
    }
}

export async function deleteGradeApi(id, token){
    try {
        const url = `${BASE_API}/api/grades/${id}/`;
        const params = {
            method: "DELETE",
            headers:{
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}