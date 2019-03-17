import React,{Component} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import {Column} from 'simple-flexbox'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import addpro  from '../addpro'

class add extends Component{
    constructor(){
        super()
        this.state={
            form:true,
            success: false,
            project:{},
            addmore:false
        }
        this.add = this.add.bind(this)
        this.upload = this.upload.bind(this)
        this.addmore = this.addmore.bind(this)
    }
    addmore(){
        this.setState({addmore:false})
        this.setState({success:true})
    }
    add(){
        let name = document.getElementById('pname').value
        let desc = document.getElementById('desc').value
        axios.post('http://10.2.41.166:4000/addproject', {id: this.props.data._id, name:name, about:desc})
        .then(res=>{
            console.log(res)
            if(res.data.status!=='failure'){
                this.setState({form:false})
                this.setState({success:true})
                this.setState({project:res.data[0]})
            }             
        }).catch(err=>console.log(err))
    }
    upload(){
        console.log(this.state.project._id)
        console.log('Upload File')
        let count = document.getElementById('count').value
        let type = document.getElementById('type').value
        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        console.log(imagefile.files[0]) 
        formData.append("image", imagefile.files[0]);
        formData.append("id",this.state.project._id)
        formData.append("count", count)
        formData.append("type", type)
        formData.forEach((value, key) => {
            console.log("key %s: value %s", key, value);
            })
        console.log(formData.has('image'));
        axios.post('http://10.2.41.166:4000/layouts', formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(res=>{
                console.log(res)
                this.setState({addmore:true})
                this.setState({success:false})
            }).catch(err=>console.log(err))
    }
    render(){
        return(
            <div>
                <h1>Add Project</h1>
                <Card style={{width:'500px', marginLeft:'30%'}}>
                <CardContent>

                    {this.state.form &&
                    <Column horizontal="center">
                    <TextField
                    id="pname"
                    label="Project Name"
                    type="text"
                    name="pname"
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
                    id="desc"
                    label="Project Description"
                    type="text"
                    name="desc"
                    multiline
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                    style: {
                        color: '#fd55ff',
                        borderColor:'#fff'
                    }
                    }}
                    />
                     <Button onClick={this.add} size="large" variant="contained" style={{borderRadius:'20px', background:'#00695c', color:'#fff'}}>
                     Add
                     </Button>
                     </Column>
                    }
                    {this.state.success &&
                    <Column horizontal="center">
                    <h3>Layouts</h3>
                    <TextField
                    id="type"
                    label="Type"
                    type="text"
                    name="type"
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
                    id="count"
                    label="Count"
                    type="text"
                    name="count"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                    style: {
                        color: '#fd55ff',
                        borderColor:'#fff'
                    }
                    }}
                    />
                    <Button type="primary"  size="large" variant="contained" style={{borderRadius:'20px', marginBottom:'3%'}}>
                    <input type="file" id="file"  multiple/>
                    </Button>
                    <Button onClick={this.upload} size="large" variant="contained" style={{borderRadius:'20px', background:'#00695c', color:'#fff'}}>
                    Submit
                    </Button>
                    </Column>
                    }
                    {this.state.addmore &&
                    <Column horizontal="center">
                    <Button size="large" onClick={this.addmore} variant="contained" style={{background:"#01579b", color:'#fff', borderRadius:'20px', marginBottom:'3%'}}> Add More Layouts??</Button>
                    <Link to="/dashboard" style={{color:'#f50057'}}>Nope</Link>
                    </Column>
                    }
                    
                </CardContent>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps)(add);