import React from 'react';
import "./TableGrade.scss";
import { Table, Button, Icon } from 'semantic-ui-react';
import { map } from 'lodash';
import "./TableGrade.scss";

export function TableGrade(props) {
  const { grades, updateGrade, deleteGrade } = props;
  return (
    <Table className="table-grade">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nivel</Table.HeaderCell>
          <Table.HeaderCell>Letra</Table.HeaderCell>
          <Table.HeaderCell>Jornada</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(grades, (grade, index) =>(
          <Table.Row key={index}>
            <Table.Cell>{grade.level}</Table.Cell>
            <Table.Cell>{grade.letter}</Table.Cell>
            <Table.Cell>{grade.day_trip}</Table.Cell>

            <Actions grades={grade} updateGrade={updateGrade} deleteGrade={deleteGrade} />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

function Actions(props){
  const { grades, updateGrade, deleteGrade } = props;
  return(
    <Table.Cell textAlign="right">
      <Button icon color='blue' onClick={() => updateGrade(grades)}>
        <Icon name='pencil' />
      </Button>
      <Button negative icon onClick={() => deleteGrade(grades)}>
        <Icon name='trash' />
      </Button>
    </Table.Cell>
  )
}