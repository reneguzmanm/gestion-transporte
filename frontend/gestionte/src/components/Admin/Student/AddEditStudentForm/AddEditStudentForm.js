import React, { useEffect, useState } from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import { useGrade, useStudent } from "../../../../hooks"
import "./AddEditStudentForm.scss";
import { map } from "lodash";
import { useFormik } from 'formik';
import * as Yup from "yup";

import { COMMUNE } from "../../../../utils/constants";

export function AddEditStudentForm(props) {
  const [gradesFormat, setGradesFormat] = useState([]);
  const { grades , getGrades } = useGrade();
  const { addStudent, updateStudent } = useStudent();
  const { onClose, onRefetch, student } = props;
 

  useEffect(() =>{ 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getGrades()}, []);

  useEffect(() =>{
    setGradesFormat(formatDropdownData(grades));
  }, [grades]);
  
  const formik = useFormik({
    initialValues: initialValues(student),
    validationSchema: Yup.object(newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) =>{
      if(student) await updateStudent(student.id, formValue);
      else await addStudent(formValue);
      
      onRefetch();
      onClose();
    },
  })

  return (
    <Form className='add-edit-student-form' onSubmit={formik.handleSubmit} >
      <Form.Input 
        name="name" 
        placeholder="Nombre" 
        value={formik.values.name} 
        onChange={formik.handleChange} 
        error={formik.errors.name} 
      />
      <Form.Input 
        name="paternal"
        placeholder="Apellido paterno" 
        value={formik.values.paternal} 
        onChange={formik.handleChange} 
        error={formik.errors.paternal} 
      />
      <Form.Input 
        name="maternal" 
        placeholder="Apellido materno" 
        value={formik.values.maternal} 
        onChange={formik.handleChange} 
        error={formik.errors.maternal}
      />
      <Dropdown 
        placeholder='Curso' 
        fluid 
        selection 
        search 
        options={gradesFormat} 
        value={formik.values.grade} 
        onChange={(_, data)=> formik.setFieldValue('grade', data.value)} 
        error={formik.errors.grade} 
      />
      <Form.Input 
        name="attorney" 
        placeholder="Nombre Apoderado" 
        value={formik.values.attorney} 
        onChange={formik.handleChange} 
        error={formik.errors.attorney} 
      />
      <Dropdown 
        placeholder='Comuna' 
        fluid 
        selection 
        search 
        options={COMMUNE} 
        value={formik.values.commune} 
        onChange={(_, data) => formik.setFieldValue('commune', data.value)} 
        error={formik.errors.commune} 
      /> 
      <Form.Input 
        name="address_street" 
        placeholder="Dirección" 
        value={formik.values.address_street} 
        onChange={formik.handleChange} 
        error={formik.errors.address_street} 
      />
      <Form.Input 
        name="address_number" 
        placeholder="Número" 
        value={formik.values.address_number} 
        onChange={formik.handleChange} 
        error={formik.errors.address_number} 
      />
      <Form.Input 
        name="address_depart" 
        placeholder="Departamento" 
        value={formik.values.address_depart} 
        onChange={formik.handleChange} 
        error={formik.errors.address_depart} 
      />
      <Form.Input 
        name="email" 
        type="email" 
        placeholder="Email" 
        value={formik.values.email} 
        onChange={formik.handleChange} 
        error={formik.errors.email} 
      />
      <Form.Input 
        name="phone" 
        placeholder="Teléfono" 
        value={formik.values.phone} 
        onChange={formik.handleChange} 
        error={formik.errors.phone} 
      />
      <Button type='submit' primary fluid content={student ? "Actualizar" : "Crear" } />
    </Form>
  )
}

function formatDropdownData(data){
  return map(data, (item) =>({
    key: item.id,
    text: item.level + item.letter,
    value: item.id,
  }));
}

function initialValues(data){
  return{
    name: data?.name || "",
    paternal: data?.paternal || "",
    maternal: data?.maternal || "",
    grade: data?.grade || "",
    attorney: data?.attorney || "",
    commune: data?.commune || "",
    address_street: data?.address_street || "",
    address_number: data?.address_number || "",
    address_depart: data?.address_depart || "",
    email: data?.email || "",
    phone: data?.phone || "",
  }
}

function newSchema(){
  
  const phoneRegExp = /^(\+?56)?(0?9)[9876543]\d{7}$/

  return{
    name: Yup.string().required(true),
    paternal: Yup.string().required(true),
    maternal: Yup.string().required(true),
    grade: Yup.number().required(true),
    attorney: Yup.string().required(true),
    commune: Yup.string().required(true),
    address_street: Yup.string().required(true),
    address_number: Yup.string().required(true),
    address_depart: Yup.string(),
    email: Yup.string().email(true),
    phone: Yup.string().matches(phoneRegExp, 'Número de teléfono no válido')
  }
}

