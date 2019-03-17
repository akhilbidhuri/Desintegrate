import React,{Component} from 'react'
import Back from '../back1.gif'
import TextField from '@material-ui/core/TextField';
import {Row, Column} from 'simple-flexbox'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { browserHistory } from 'react-router'
import axios from 'axios'
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';


function handleClick(){
      browserHistory.push("/login")
}
class reg extends Component{
    constructor(){
      super()
      this.state = {
        success: false
      }
      this._register = this._register.bind(this)
    }

    _register(){
      let r = null
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let pass =  document.getElementById('password').value
        let compname = document.getElementById('compname').value
        axios.post('http://10.2.41.166:4000/register',  {email:email, password:pass, compname:compname, name:name})
        .then(res=>{
            console.log(res.data)
            r = res.data
            this.setState({success:true})
        }).catch(err=>console.log(err))
    }
    render(){
    return(
    <div style={{marginTop:'-3px',height:'100vh', background:`url(${Back})`}}>
        <IconButton color="#fff" onClick={ browserHistory.goBack }>
        <ArrowBack />
        </IconButton>
        <Row horizontal="center">
        <Paper style={{width:'400px', marginTop:'1%', background:'rgba(0, 0, 0, 0.5)', borderTop:'6px solid #7d4cdb'}} elevation={4}>
        <h1 style={{  paddingTop:'3%',marginLeft:'28%',fontSize:'350%', color:'#fd55ff'}}>Register</h1>
        <Column horizontal="center">
        <TextField
          id="name"
          label="Name"
          type="text"
          name="name"
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
          id="compname"
          label="Company Name"
          type="text"
          name="compname"
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
        {!this.state.success &&
        <Button onClick={this._register} size="large" variant="contained" style={{background:'#7d4cdb', color:'#fd55ff', marginLeft:'10px', borderRadius:'16px', marginBottom:'5%'}}>Submit</Button>
        }
        {this.state.success &&
        <Chip
        style={{background:'#004d40', color:'#fff', marginBottom:'3%'}}
        icon={<FaceIcon />}
        label="Head to Login"
        onClick={handleClick}
        />}
        </Column>
        </Paper>
        </Row>
    </div>
    )
    }
  }
export default reg;