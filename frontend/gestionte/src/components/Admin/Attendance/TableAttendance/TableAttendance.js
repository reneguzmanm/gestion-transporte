import { map } from 'lodash'
import React, {useEffect, useState} from 'react';
import { Table, Dropdown } from 'semantic-ui-react';
import moment from "moment";
import "moment/locale/es";
import { IDA_VUELTA, RECORRIDO } from "../../../../utils/constants";
import { useGrade, useAttendance } from '../../../../hooks';
import SemanticDatePicker from "react-semantic-ui-datepickers";
import "./TableAttendance.scss";


export function TableAttendance() {
  const { getGrades} = useGrade();
  const { attendances, getAttendanceByFilter } = useAttendance();
  const [refetch, setRefetch] = useState(false);
  const [rec, setRec] = useState("");
  const [iv, setIv] = useState("");
  const [date, setDate] = useState();
  const onRefetch = () => setRefetch((prev) => !prev);


  const onChange = (event, data) => {
    setDate(data.value);
    getAttendanceByFilter(moment(data.value).format("YYYY-MM-DD"),rec,iv);
  }

  function cambioRec(e){
    setRec(e.target.outerText);
    getAttendanceByFilter(moment(date).format("YYYY-MM-DD"),rec,iv);
    onRefetch()
  }

  function cambioIV(e){
    setIv(e.target.outerText);
    getAttendanceByFilter(moment(date).format("YYYY-MM-DD"),rec,iv);
    onRefetch();
  }

  useEffect(() =>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getAttendanceByFilter(moment(date).format("YYYY-MM-DD"),rec,iv);
    // eslint-disable-next-line
  }, [refetch]);

  useEffect(() =>{ 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getGrades()
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className='table-attendance'>
        <SemanticDatePicker 
          onChange={onChange} 
          placeholder={"DD/MM/YYYY"} 
          locale='es-ES' 
          formatOptions={"dd/MM/yyyyy"}
        />
        <Dropdown 
          placeholder='RECORRIDO'
          selection 
          search
          options={RECORRIDO}
          onChange={cambioRec}
          clearable
        ></Dropdown>
        <Dropdown 
          placeholder='IDA/VUELTA'
          selection 
          search 
          options={IDA_VUELTA}
          onChange={cambioIV}
          clearable
        ></Dropdown>
      </div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Fecha</Table.HeaderCell>
            <Table.HeaderCell>Recorrido</Table.HeaderCell>
            <Table.HeaderCell>Ida/Vuelta</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(attendances, (attendance, index)=>(
            <Table.Row key={index}>
              <Table.Cell>{moment(attendance.date).format("DD/MM/YYYY")}</Table.Cell>
              <Table.Cell>{attendance.idRoute}</Table.Cell>
              <Table.Cell>{attendance.roundTrip}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}