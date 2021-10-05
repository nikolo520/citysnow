import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    InputGroup,
    InputGroupAddon,
    Button,
    Input,
    Container,
  } from 'reactstrap';

  function Menu(props){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="dark" dark expand="md" className="mt-3">
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
                        <Button onClick={()=>props.search(props.get_data())} color="secondary">Buscar</Button>
                    </InputGroupAddon>
                </InputGroup>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;