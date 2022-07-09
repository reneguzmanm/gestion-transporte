import React, { useEffect, useState } from 'react';
import { HeaderPage, TableAttendance } from '../../components/Admin';
import { Loader } from 'semantic-ui-react';
import { useAttendance } from '../../hooks';
import { AddAttendanceForm } from  "../../components/Admin";
import { ModalBasic } from "../../components/Common";


export function AttendanceAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);

    const { loading, attendances, getAttendance } = useAttendance();

    useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
        
        getAttendance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refetch]);

    const openCloseModal = () => setShowModal((prev) => !prev);
    const onRefetch = () => setRefetch((prev) => !prev);
    
    const addAttendance = () =>{
        setTitleModal("Ingreso de asistencia");
        setContentModal(<AddAttendanceForm onClose={openCloseModal} onRefetch={onRefetch} />);
        openCloseModal();
      };
    
  return (
    <>
        <HeaderPage title="Asistencia" btnTitle="Ingresar asistencia" btnClick={addAttendance}/>
        {loading ? (
            <Loader active inline="centered">
                Cargando...
            </Loader>
        ):(
            <TableAttendance attendances={attendances} />
        )}
        <ModalBasic show={showModal} size="small" onClose={openCloseModal} title={titleModal} children={contentModal} />
    </>
  )
}
