import React, {Component} from 'react'
import axios from 'axios'
import {Row, Column} from 'simple-flexbox'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardAction from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Done from '@material-ui/icons/Done'
import Clear from '@material-ui/icons/Clear'
import IconButton from '@material-ui/core/IconButton'
import {connect} from 'react-redux'

function getimages(){
    let im = []
    axios.post('http://10.2.41.166:4000/projects', {pid:this.props.data.project[0][0]._id})
    .then(res =>{
        console.log(res.data)
        
    })
    .catch(err=>console.log(err))
}

const gallery="<script>var script = document.createElement('script');"+
"script.src = '//code.jquery.com/jquery-1.11.0.min.js';"+
"document.getElementsByTagName('head')[0].appendChild(script);"+
"var div = document.createElement('div');"+
"var in = ''"+
"$.post('http://10.2.41.166:4000/projects',{pid:"+//this.props.data.projects[0][0]._id+
"}).then(res=>{for(var i=0;i<res.data.projects[0][0].themes.length;i++){in=in+'<img style='height:200px;width:200px' src='res.data.projects[0][0].themes[i]'/>'}}})"+
"div.innerHTML=in"+
+"</script>"

class tag extends Component{
    constructor(){
        super()
        this.state = {
            show:true,
            des: null,
            links:[]
        }
        this.addtolist = this.addtolist.bind(this)
        this.submit = this.submit.bind(this)
    }
    submit(){
        console.log(this.state.links)
        axios.post('http://10.2.41.166:4000/addthemes',{pid:this.props.data.projects[0][0]._id, urls:String(this.state.links)})
        .then(res=>{
            console.log(res)
        }).catch(err=>console.log(err))
        this.setState({links:[]})
        this.setState({show:false})
    }
    addtolist(img){
            this.setState({links:[...this.state.links, img]})
    }
    componentDidMount(){
        axios.post('http://10.2.41.166:4000/designer')
        .then(res=>{
            console.log(res.data)
            this.setState({des:res.data})
        }).catch(err=>console.log(err))
    }
    render(){
        return(
            <div style={{margin:'0'}}>
                {this.state.des!==null &&
                <Row >{
                    this.state.des.projects[0].themes.map(item => (
                        
                        <Card style={{margin:'3%', width:'300px'}}>    
                            <img src={item.design} height="200" />
                            <CardContent>
                                {this.state.des.name}
                            </CardContent>
                            <CardAction>
                            <Row>
                            <IconButton style={{marginRight:'2%', background:'#004d40', color:'#fff'}} onClick={()=>{this.addtolist(item.design);this.disabled=true}}><Done/></IconButton><IconButton style={{marginLeft:'2%', background:'#b71c1c', color:'#fff'}}><Clear/></IconButton>
                            </Row>
                            </CardAction>
                            </Card>
                            
                    ))}</Row>
                }
                {this.state.show &&
                <Button style={{background:'#6a1b9a', color:'#fff'}} onClick={this.submit}>
                    Done
                </Button>
                }
                {!this.state.show &&
                <Button style={{background:'#6a1b9a', color:'#fff'}} >
                    GetCode
                </Button>
                }
            </div>
        )
    }
 }
 const mapStateToProps = state => ({
    ...state
});
 export default connect(mapStateToProps)(tag);