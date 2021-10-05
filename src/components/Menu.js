import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    InputGroup,
    InputGroupAddon,
    Button,
    Input,
    Container,
    Col
  } from 'reactstrap';

  function Menu(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="light" light expand="md">
            <Container>
                <NavbarBrand href="/"><img src={props.logoapp} width="30" height="30" alt={props.nameapp} className="d-inline-block align-top" />{props.nameapp}</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                    </UncontrolledDropdown>
                </Nav>
                <InputGroup>
                    <Input name="city" onChange={props.onInputChange} placeholder="Por favor ingrese la ciudad a consultar"/>
                    <InputGroupAddon addonType="append">
                        <Button onClick={()=>props.setData} color="secondary">Buscar</Button>
                    </InputGroupAddon>
                </InputGroup>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;