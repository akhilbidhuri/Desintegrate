import React, {Component} from 'react'
import Back from '../back1.gif'
import TextField from '@material-ui/core/TextField';
import {Row, Column} from 'simple-flexbox'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { browserHistory } from 'react-router'
import axios from 'axios'
import action  from '../action'
import { connect } from "react-redux";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';

class login extends Component{
  constructor(){
    super()
    this.state={
      success: true
    }
    this._login = this._login.bind(this)
}
  _login =() =>{
    console.log("yaha aa gaya")
    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value
    console.log(email, pass)
    axios.post('http://10.2.41.166:4000/login', {email:email, password:pass})
    .then((res)=>{
        if(res.data.status !== "failure"){
        console.log("result:",res.data)
        this.props.action(res.data)
        browserHistory.push('/dashboard')
        this.setState({success:true})
        }
        else{
          this.setState({success:false})
        }
    }).catch(err=>{console.log(err)})
  }
    render(){
    return (
    <div style={{marginTop:'-3px',height:'100vh', background:`url(${Back})`}}>
        <IconButton color="#fff" onClick={ browserHistory.goBack }>
        <ArrowBack />
        </IconButton>
        <Row horizontal="center">
        <Paper style={{width:'400px', marginTop:'10%', background:'rgba(0, 0, 0, 0.5)', borderTop:'6px solid #7d4cdb'}} elevation={4}>
        <h1 style={{  paddingTop:'3%',marginLeft:'36%',fontSize:'350%', color:'#fd55ff'}}>Login</h1>
        <Column horizontal="center">
        <TextField
          id="email"
          label="Email"
          type="email"
          name="email"
          margin="normal"
          variant="outlined"
          InputProps={{
            style: {
                color: '#fd55ff',
                borderColor:'#fff'
            }
         }}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          InputProps={{
            style: {
                color: '#fd55ff',
                borderColor:'#fff'
            }
         }}
        />       
        <Button onClick={this._login} size="large" variant="contained" style={{background:'#7d4cdb', color:'#fd55ff', marginLeft:'10px', borderRadius:'16px', marginBottom:'5%'}}>Submit</Button>
        {!this.state.success &&
        <Chip
        avatar={
          <Avatar>
            <FaceIcon />
          </Avatar>
        }
        style={{marginBottom:'3%'}}
        label="Incorrect Email or Password !!!"
        color="secondary"
        />}
        </Column>
        </Paper>
        </Row>
    </div>
    )
    }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  action: (payload) => dispatch(action(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(login);