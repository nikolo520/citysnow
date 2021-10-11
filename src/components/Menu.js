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
    Label,
    FormGroup,
    Row
  } from 'reactstrap';

  class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            collapse_is_open:false,
            text_search:'',
        }
        this.toggle = this.toggle.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
        this.onChangeEvent = this.onChangeEvent.bind(this)
        this.onChangeServer = this.onChangeServer.bind(this)
    }

    onChangeText = e =>{
        if(e.key === 'Enter'){
            console.log(this.state.text_search);
            this.props.onsearch(this.state.text_search);
        }else{
            const query = e.target.value.toString();
            this.setState({text_search:query})
        }
    }
    // const [isOpen, setIsOpen] = useState(false);
    toggle (){
        this.setState({collapse_is_open: !this.state.collapse_is_open})
    }
    // const [dropdownOpen, setDropdownOpen] = useState(false);
    
    // const [splitButtonOpen, setSplitButtonOpen] = useState(false);
    // toggleDropDown = () => setDropdownOpen(!dropdownOpen);
    // toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

    onChangeEvent = e =>{
        this.props.onsearch(this.state.text_search);
    }

    onChangeServer = e =>{
        const server = e.target.value.toString();
        this.props.onchangeserver(server)
    }

    render(){
        return(
            <Navbar expand="md" className="nav_per align-top">
                <Container>
                    <NavbarBrand href="/"><img src={this.props.logoapp} alt={this.props.nameapp} className="d-inline-block" /><small className="titulo">{this.props.nameapp}</small></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.collapse_is_open} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                        </UncontrolledDropdown>
                    </Nav>
                    <div className="special-w">
                        <Row className="mt-3">
                            <InputGroup>
                                <Input name="city" onKeyUp={this.onChangeText} placeholder="Ej.Cali"/>
                                <InputGroupAddon addonType="append">
                                    <Button onClick={this.onChangeEvent} color="dark">Buscar</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Row>
                        <Row className="text-light">
                            <FormGroup tag="fieldset">
                                <FormGroup check>
                                    <Label className="rb">Servidor: </Label>
                                    <Label check className="rb radio-inline">
                                        <Input type="radio" name="radio1" value="remote" onChange={this.onChangeServer} checked={this.props.server ==='remote'}/>{'Remoto'}
                                    </Label>
                                    <Label check className="rb radio-inline">
                                        <Input type="radio" name="radio1" value="local" onChange={this.onChangeServer} checked={this.props.server ==='local'}/>{'Local'}
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                {
                                    this.props.history.map(obj=>(
                                        <a>{obj.word}</a>
                                    ))
                                }
                            </FormGroup>
                        </Row>
                    </div>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}
{/* <Row>
<div classname="history align-left">
    <small classname="history-item active">Búsquedas recientes: </small> 
    {
        this.state.history.map(obj=>(
            <small className="history-item active">{obj}</small>
        ))
    }
</div>
</Row> */}
export default Menu;