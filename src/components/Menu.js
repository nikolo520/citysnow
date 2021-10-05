import React, { useState, useEffect } from "react";
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
    Container
  } from 'reactstrap';

  import axios from 'axios';

  function Menu(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [data, setData]=useState([]);
    const[textInput, setTextInput]= useState({});
    const handleChange=e=>{
        const {name, value} = e.target;
        console.log(e.target.value);
        setTextInput({
            ...textInput,
            [name]:value
        })
    }

    useEffect(()=>{
        if (typeof(textInput.city) !== 'undefined'){
            const api_key = "62378f67cf044057bf2e6fa94e83d4b7"
            var baseUrl = "https://newsapi.org/v2/everything?"+
                            "sortBy=popularity"+
                            "&from=2021-09-05"+
                            "&apiKey=" + api_key +
                            "&q=" + textInput.city
            const search_data = async() =>{
                await axios.get(baseUrl)
                .then(response=>{
                    if(response.data.status === "ok"){
                        setData(response.data.articles );
                    }else{
                        setData({})
                    }
                }).catch(error=>{
                    console.log(error);
                })
            }
            search_data();
        }else{
            console.log("No hay criterios de busqueda")
        }
    },[]);
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
                    <Input name="city" onChange={handleChange}/>
                    <InputGroupAddon addonType="append">
                        <Button onClick={()=>setData} color="secondary">Buscar</Button>
                    </InputGroupAddon>
                </InputGroup>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;