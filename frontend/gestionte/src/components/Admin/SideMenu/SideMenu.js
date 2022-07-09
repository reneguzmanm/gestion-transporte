import React from 'react';
import "./SideMenu.scss";
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import { Link, useLocation } from "react-router-dom";


export function SideMenu(props) {
    const {children } = props;
    const { pathname } = useLocation();
  return (
    <div className='side-menu-admin'>
        <MenuLeft pathname={pathname} />
        <div className='content'>{children}</div>
    </div>
  )
}

function MenuLeft(props){
    const { pathname } = props;

    return(
        <Menu fixed='left' borderless className='side' vertical> 
            <Menu.Item as={Link} to={'/admin/students'} active={pathname === "/admin/students"}>
                <Icon name='student' /> Alumnos
            </Menu.Item>
            <Menu.Item as={Link} to={'/admin/payments'} active={pathname === "/admin/payments"}>
                <Icon name='money bill alternate outline' /> Pagos
            </Menu.Item>
            <Menu.Item as={Link} to={'/admin/attendance'} active={pathname === "/admin/attendance"}>
                <Icon name='list' /> Asistencia
            </Menu.Item>
            <Menu.Item as={Link} to={'/admin/maintenance'} active={pathname === "/admin/maintenance"}>
                <Icon name='bus' /> Mantenimiento Transporte
            </Menu.Item>
            <Menu.Item as={Link} to={'/admin/users'} active={pathname === "/admin/users"}>
                <Icon name='user' /> Usuarios
            </Menu.Item>
            <Menu.Item>
                <Dropdown 
                    item 
                    text='Alumnos'
                    icon='student'
                    floating
                    labeled
                    button
                    className='icon'
                    >
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={'/admin/users'} active={pathname === "/admin/users"}>Básica Mañana</Dropdown.Item>
                        <Dropdown.Item>PreBásica Mañana</Dropdown.Item>
                        <Dropdown.Item>Básica Tarde</Dropdown.Item>
                        <Dropdown.Item>PreBásica Tarde</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </Menu>
    );
}