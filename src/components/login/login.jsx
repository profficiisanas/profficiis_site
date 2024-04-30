import React from 'react'
import Header from '../header/header'
import { Container, Row, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Col } from "reactstrap";
import Img2 from '../../assets/images/img2.jpg'
import "./login.css";

const login = () => {
  return (
    <>
    
    <Row>
        <Col lg='5'>
          <div className='login'>
              < img  className='login_img' src={Img2} alt="" />
          </div>  
        </Col>
    </Row>
    </>
  )
}

export default login
