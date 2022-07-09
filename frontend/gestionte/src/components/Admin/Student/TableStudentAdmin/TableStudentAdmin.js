import React, {useState, useEffect} from 'react';
import { Table, Button, Icon, Checkbox, Dropdown } from 'semantic-ui-react';
import { map } from 'lodash';
import "./TableStudentAdmin.scss";
import { RECORRIDO, IDA_VUELTA } from "../../../../utils/constants";
import { useAttendance, useStudent } from '../../../../hooks';


export function TableStudentAdmin(props) {
  const { students, getStudents } = useStudent();
  const { addAttendance } = useAttendance();
  const { updateStudent, deleteStudent, list} = props;
  const [refetch] = useState(false);
  const [tableList, setTableList] = useState(students);
  const [reco, setReco] = useState();
  const [ivo, setIvo] = useState();
  

  var rec = "";
  var iv = "";
  var auxList = [];
  var checks = [];

  async function newAttendance(){
    var attendanceIn = []
    for(let i = 0; i < tableList.length; i++){
      if(checks[i]){
        attendanceIn.push(tableList[i]);
      }
    }
    await addAttendance(attendanceIn, ivo, reco);
    window.location.reload();
  }

  function cambioRec(e){
    rec = e.target.outerText;
    setReco(rec);
    getStudents();
    auxList = students;
    if(rec.split(' ')[0] === 'PREBÁSICA'){
      if(rec.split(' ')[1] === 'MAÑANA'){
        const filterList = (auxList.filter((item) => item.grade_data.sublevel === "PREBÁSICA")).filter((item) => item.grade_data.day_trip === "MAÑANA");
        setTableList(filterList);
      }
      else if(rec.split(' ')[1] === 'TARDE'){
        const filterList = auxList.filter((item) => (item.grade_data.sublevel === "PREBÁSICA")).filter((item) => item.grade_data.day_trip === "TARDE");
        setTableList(filterList);
      }
    }
    else if(rec.split(' ')[0] === 'BÁSICA'){
      if(rec.split(' ')[1] === 'MAÑANA'){
        const filterList = (auxList.filter((item) => item.grade_data.sublevel === "BÁSICA")).filter((item) => item.grade_data.day_trip === "MAÑANA");
        setTableList(filterList);
      }
      else if(rec.split(' ')[1] === 'TARDE'){
        const filterList = auxList.filter((item) => (item.grade_data.sublevel === "BÁSICA")).filter((item) => item.grade_data.day_trip === "TARDE");
        setTableList(filterList);
      }
    }
  }
  function cambioIV(e){
    iv = e.target.outerText;
    setIvo(iv);
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getStudents();
    // eslint-disable-next-line
  }, [refetch]);
  return (
    <>
      <div className='drop-attendance'>
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
      <Table className="table-student-admin">
        <Table.Header>
          <Table.Row>
          {!list && (
            <Table.HeaderCell></Table.HeaderCell>
          )}
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellidos</Table.HeaderCell>
          {!list && (
            <Table.HeaderCell>Curso</Table.HeaderCell>
          )}
          {list && (
            <Table.HeaderCell>Dirección</Table.HeaderCell>
          )}
          {list && (
              <Table.HeaderCell>Depto</Table.HeaderCell>
          )}
          {list && (
            <Table.HeaderCell>Comuna</Table.HeaderCell>
          )}
          {list &&(
            <Table.HeaderCell></Table.HeaderCell>
          )}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(tableList, (student, index)=>(
            // eslint-disable-next-line
            checks[index] = false,
            <Table.Row key={index}>
              {!list && (
                <Table.Cell ><Checkbox className='checkeo' onClick={(_,data) => data.checked ? checks[index] = data.checked : checks[index] = false} toggle /></Table.Cell>
              )}
              <Table.Cell>{student.name}</Table.Cell>
              <Table.Cell>{student.paternal} {student.maternal}</Table.Cell>
              {!list && (
                <Table.Cell>{student.grade_data.level} {student.grade_data.letter}</Table.Cell>
              )}
              {list && (
              <Table.Cell>{student.address_street} {student.address_number}</Table.Cell>
              )}
              {list && (
              <Table.Cell>{student.address_depart}</Table.Cell>
              )}
              {list && (
              <Table.Cell>{student.commune}</Table.Cell>
              )}
              {list && (
              <Actions student={student} updateStudent={updateStudent} deleteStudent={deleteStudent} />
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {
        !list && (
          <Button  content="Enviar" color='blue' primary fluid onClick={() => newAttendance()}/>
          //<Button type='submit' content="Enviar a" primary fluid/>
        )
      }
    </>
  )
}

function Actions(props){
  const { student, updateStudent, deleteStudent } = props;
  return(
    <Table.Cell textAlign="center">
      <Button icon onClick={() => console.log("ver más")}>
        <Icon name='eye' />
      </Button>
      <Button icon positive onClick={() => updateStudent(student)}>
        <Icon name='pencil' />
      </Button>
      <Button icon negative onClick={() => deleteStudent(student)}>
        <Icon name='trash' />
      </Button>
    </Table.Cell>
    
  )
}
