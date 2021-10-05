import React, { useState ,useEffect } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,InputGroup, InputGroupAddon, Button, Input, Container
  } from 'reactstrap';

  import axios from 'axios';

  function Menu(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [data,setData]=useState([]);

    const search =()=>{

    }
    return(
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand href="/"><img src={props.logoapp} width="30" height="30" alt={props.nameapp} className="d-inline-block align-top" />{props.nameapp}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Ingresa la Ciudad que quieres buscar</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    </UncontrolledDropdown>
                </Nav>
                <InputGroup>
                    <Input />
                    <InputGroupAddon addonType="append">
                        <Button color="secondary">Buscar</Button>
                    </InputGroupAddon>
                </InputGroup>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;