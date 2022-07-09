import { useState } from "react";
import { getGradesApi, addGradeApi, updateGradeApi, deleteGradeApi } from "../api/grade";
import { useAuth } from "./useAuth";

export function useGrade(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [grades, setGrades] = useState(null);
    const { auth } = useAuth();

    const getGrades = async () =>{
        try {
            setLoading(true);
            const response = await getGradesApi();
            setLoading(false);
            setGrades(response);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const addGrade = async (data) =>{
        try {
            setLoading(true);
            await addGradeApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    const updateGrade = async (id, data) =>{
        try {
            setLoading(true);
            await updateGradeApi(id, data, auth.token);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    const deleteGrade = async (id) =>{
        try {
            setLoading(true);
            await deleteGradeApi(id, auth.token);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    return{
        loading,
        error,
        grades,
        getGrades,
        addGrade,
        updateGrade,
        deleteGrade,
    }
}