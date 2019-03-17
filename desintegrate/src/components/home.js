import React from 'react'
import {Row} from 'simple-flexbox'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router'
import './main.css'
import Background from '../back.gif'
const home = () =>{
    return(
    <div style={{height:'100vh', marginTop:'-3%', background:`url(${Background})`}}> 
        <h1 style={{ fontSize:'350%', paddingTop:'20%', marginLeft:'29%', color:'#fd55ff'}}>Desintegrate</h1>
        <Row horizontal="center">
        <Link to="/register" style={{textDecoration:'none'}}>
        <Button size="large" variant="contained" style={{background:'#fd55ff', color:'#fff', marginRight:'10px', borderRadius:'16px'}}>Register</Button>
        </Link>
        <Link to="/login" style={{textDecoration:'none'}}>
        <Button size="large" variant="contained" style={{background:'#fd55ff', color:'#fff', marginLeft:'10px', borderRadius:'16px'}}>Login</Button>
        </Link>
        </Row>
        </div>
    )
}

export default home;