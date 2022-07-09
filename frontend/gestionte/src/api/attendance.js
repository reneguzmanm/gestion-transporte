import { toInteger } from "lodash";
import {BASE_API} from "../utils/constants"

export async function getAttendanceByFilterApi(date="", idRoute="", roundTrip="", ordering=""){
    const dateFilter = `date=${date}`;
    const idRouteFilter = `idRoute=${idRoute}`;
    const roundTripFilter = `roundTrip=${roundTrip}`;
   
    try {
        const url = `${BASE_API}/api/attendances/?${dateFilter}&${idRouteFilter}&${roundTripFilter}&${ordering}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getAttendanceApi(){
    try {
        const url = `${BASE_API}/api/attendances/`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function addAttendanceApi(data, iv, rec, token){
    try {
        
        const formData = new FormData();
        console.log(data.id);
        await formData.append('idRoute', rec);
        console.log(formData);
        formData.append('roundTrip', iv);
        formData.append('student', toInteger(data.id));
        const url = `${BASE_API}/api/attendances/`;
        console.log(url);
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
}}