import { useState } from "react";
import { getAttendanceByFilterApi, getAttendanceApi, addAttendanceApi } from "../api/attendance";
import { useAuth } from "./useAuth";

export function useAttendance(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [attendances, setAttendances] = useState(null);
    const { auth } = useAuth();

    const getAttendanceByFilter = async (date, idRoute, roundTrip, ordering) =>{
        try {
            setLoading(true);
            const response = await getAttendanceByFilterApi(date, idRoute, roundTrip, ordering);
            setLoading(false);
            setAttendances(response);
            
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    const getAttendance = async () =>{
        try {
            setLoading(true);
            const response = await getAttendanceApi();
            setLoading(false);
            setAttendances(response);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    const addAttendance = async (data, iv, rec) =>{
        try {
            setLoading(true);
            for(let i = 0; i < data.length; i++){
                await addAttendanceApi(data[i], iv, rec, auth.token);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    return{
        loading,
        error,
        attendances,
        getAttendance,
        getAttendanceByFilter,
        addAttendance,
    }
}