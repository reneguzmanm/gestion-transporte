import React, { useState, useEffect} from 'react';
import { HeaderPage, TableGrade, AddEditGradeForm } from "../../components/Admin";
import { useGrade } from '../../hooks';
import { Loader } from 'semantic-ui-react';
import { ModalBasic } from "../../components/Common";

export function GradesAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);

  const [refetch, setRefetch] = useState(false);

  const { loading, grades, getGrades, deleteGrade } = useGrade();

  useEffect(() =>{ 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getGrades()}, [refetch]);
  

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addGrade = () =>{
    setTitleModal("Nuevo Curso");
    setContentModal(<AddEditGradeForm onClose={openCloseModal} onRefetch={onRefetch} />);
    openCloseModal();
  };

  const updateGrade = (data) =>{
    setTitleModal("Actualizar Curso");
    setContentModal(<AddEditGradeForm onClose={openCloseModal} onRefetch={onRefetch}  grades={data} />);
    openCloseModal();
  }
  const onDeleteGrade = async (data) =>{
    const result = window.confirm(`Seguro que deseas eliminar el curso?`);
    if(result){
      await deleteGrade(data.id);
      onRefetch();
    }
  }
  return (
    <>
      <HeaderPage title="Cursos" btnTitle="Nuevo curso" btnClick={addGrade}/>
      {loading ? (
        <Loader active inline="centered">
          Cargando ...
        </Loader>
      ) : (
        <TableGrade grades={grades} updateGrade={updateGrade} deleteGrade={onDeleteGrade} />
      )}
      <ModalBasic 
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
