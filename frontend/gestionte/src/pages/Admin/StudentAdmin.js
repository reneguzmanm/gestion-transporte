import React, { useEffect, useState } from 'react'
import { HeaderPage, TableStudentAdmin, AddEditStudentForm } from "../../components/Admin";
import { useStudent } from '../../hooks/useStudent';
import { Loader } from 'semantic-ui-react';
import { ModalBasic } from "../../components/Common";


export function StudentAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);

  const { loading, students, getStudents, deleteStudent } = useStudent();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getStudents()}, [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addStudent = () =>{
    setTitleModal("Nuevo Estudiante");
    setContentModal(<AddEditStudentForm onClose={openCloseModal} onRefetch={onRefetch} />);
    openCloseModal();
  }

  const updateStudent = (data) =>{
    setTitleModal("Editar Estudiante");
    setContentModal(<AddEditStudentForm onClose={openCloseModal} onRefetch={onRefetch} student={data} />);
    openCloseModal();
  }

  const onDeleteStudent = async (data) =>{
    const result= window.confirm(`Seguro que desea eliminar este alumno?`);
    if(result){
      await deleteStudent(data.id);
      onRefetch();
    }
  }
  
  return (
    <>
        <HeaderPage title="Alumnos" btnTitle="Nuevo alumno" btnClick={addStudent} />
        {loading ? (
          <Loader active inline="centered">
            Cargando ...
          </Loader>
        ):(
          <TableStudentAdmin students={students} updateStudent={updateStudent} deleteStudent={onDeleteStudent} list={true} />
        )}

        <ModalBasic show={showModal} onClose={openCloseModal} title={titleModal} children={contentModal} />
    </>
  )
}
