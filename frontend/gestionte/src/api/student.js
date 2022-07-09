import {BASE_API} from "../utils/constants"

export async function getStudentsApi(){
    try {
        const url = `${BASE_API}/api/students/`;
        const response = await fetch(url);
        const result = response.json();
        
        return result;
    } catch (error) {
        throw error;
    }    
}

export async function getStudentsByFilterApi(subLevel="", dayTrip=""){
    const subLevelFilter = `sublevel=${subLevel}`;
    const dayTripFilter = `dayTrip=${dayTrip}`;
    try {
        const url = `${BASE_API}/api/students/?${subLevelFilter}&${dayTripFilter}/`;
        const response = await fetch(url);
        const result = response.json();
        
        return result;
    } catch (error) {
        throw error;
    }    
}


export async function addStudentApi(data, token){
    try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('paternal', data.paternal);
        formData.append('maternal', data.maternal);
        formData.append('grade', data.grade);
        formData.append('attorney', data.attorney);
        formData.append('commune', data.commune);
        formData.append('address_street', data.address_street);
        formData.append('address_number', data.address_number);
        formData.append('address_depart', data.address_depart);
        formData.append('active', true);
        formData.append('phone', data.phone);
        formData.append('email', data.email);
        
        const url = `${BASE_API}/api/students/`;
        const params={
            method: 'POST',
            headers:{
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function updateStudentApi(id, data, token){
    try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('paternal', data.paternal);
        formData.append('maternal', data.maternal);
        formData.append('grade', data.grade);
        formData.append('attorney', data.attorney);
        formData.append('commune', data.commune);
        formData.append('address_street', data.address_street);
        formData.append('address_number', data.address_number);
        formData.append('address_depart', data.address_depart);
        formData.append('active', true);
        formData.append('phone', data.phone);
        formData.append('email', data.email);
        
        const url = `${BASE_API}/api/students/${id}/`;
        const params={
            method: 'PATCH',
            headers:{
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function deleteStudentApi(id, token){
    try {
        const url = `${BASE_API}/api/students/${id}/`;
        const params = {
            method: "DELETE",
            headers: {
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