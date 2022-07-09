import React, { useEffect, useState } from 'react';
import { TableStudentAdmin } from '../../Student/TableStudentAdmin';
import { useStudent } from '../../../../hooks';
import { useGrade, useAttendance } from '../../../../hooks';
import "./AddAtendance.scss"

export function AddAttendanceForm() {

  const { getAttendance } = useAttendance();
  const { getStudents } = useStudent();
  const { getGrades } = useGrade();
  const [refetch] = useState(false);

  useEffect(() =>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getAttendance();}, [refetch]);

  useEffect(() =>{ 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getGrades()}, []);
    
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getStudents()}, [refetch]);

  return (
    <>
      <TableStudentAdmin />
    </>
  )
}