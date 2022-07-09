import React from 'react';
import "./AddEditGradeForm.scss";
import { Form, Button, Dropdown } from 'semantic-ui-react';
import { LEVEL, LETTER, DAY_TRIP, SUBLEVEL } from "../../../../utils/constants";
import { useGrade } from '../../../../hooks';
import { useFormik } from 'formik';
import * as Yup from "yup";

export function AddEditGradeForm(props) {
  const { onClose, onRefetch, grades } = props;
  const {addGrade, updateGrade} = useGrade();

  
  const formik = useFormik({
    initialValues: initialValues(grades),
    validationSchema: Yup.object(newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) =>{
      if(grades) await updateGrade(grades.id, formValue);
      else await addGrade(formValue);
      
      onRefetch();
      onClose();
    },
  })
  return (
    
    <Form className='add-edit-grade-form' onSubmit={formik.handleSubmit}>
      <Dropdown 
        placeholder='Nivel' 
        fluid 
        selection 
        search 
        options={LEVEL}
        value={formik.values.level}
        error={formik.errors.level}
        onChange={(_, data) => formik.setFieldValue('level', data.value)}
      />
      <Dropdown 
        placeholder='Letra' 
        fluid 
        selection 
        search 
        options={LETTER}
        value={formik.values.letter}
        error={formik.errors.letter}
        onChange={(_, data) => formik.setFieldValue('letter', data.value)}
      />
      <Dropdown 
        placeholder='Jornada' 
        fluid 
        selection 
        search 
        options={DAY_TRIP}
        value={formik.values.day_trip}
        error={formik.errors.day_trip}
        onChange={(_, data) => formik.setFieldValue('day_trip', data.value)}
      />
      <Dropdown 
        placeholder='SubNivel' 
        fluid 
        selection 
        search 
        options={SUBLEVEL}
        value={formik.values.sublevel}
        error={formik.errors.sublevel}
        onChange={(_, data) => formik.setFieldValue('sublevel', data.value)}
      />
      <Button 
        type='submit' 
        primary 
        content={grades ? "Actualizar" : "Crear"} 
        onClick={()=>addGrade()}
      />
    </Form>
  );
}

function initialValues(data){
  
  return{
    level: data?.level || "",
    letter: data?.letter || "",
    day_trip: data?.day_trip || "",
    sublevel: data?.sublevel || "",
  }
}

function newSchema(){
  return{
    level: Yup.string().required(true),
    letter: Yup.string().required(true),
    day_trip: Yup.string().required(true),
    sublevel: Yup.string().required(true),
  }
}