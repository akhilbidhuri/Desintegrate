import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Row, Column} from 'simple-flexbox'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardAction from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Tag from './tagging'
import CardMedia from '@material-ui/core/CardMedia'
class board extends Component{
    constructor(){
        super()
        this.state = {
            show:true,
            projects:[]
        }
        this.start = this.start.bind(this)
    }
 
    start(){
        this.setState({show:false})
    }
    componentDidMount(){
        console.log(this.props.data.projects[0])
        for(var i =0; i<this.props.data.projects.length;i++){
        console.log(this.props.data.projects[0][0]._id)
        axios.post('http://10.2.41.166:4000/project', {pid:this.props.data.projects[0][i]._id})
        .then((res)=>{
                console.log(res)
                this.setState({projects:[...this.state.projects,res.data]})
        }).catch(err=>console.log(err))
        }
    }

    render(){
        return(
            <div>
                <h1>Your Projects</h1>
                <Column >
                {this.state.show &&
                    this.state.projects.map((item)=>
                        <Card>
                            <Row>
                            <Column>
                            <CardContent>
                                <h1 style={{}}>{item.name}</h1>
                                <h3 style={{}}>{item.about}</h3>                               
                            </CardContent>
                            <CardAction>
                                <Button style={{background:'#6a1b9a', color:'#fff'}} onClick={this.start}>
                                    Tag
                                    </Button>
                            </CardAction>
                            </Column>
                            <img style={{height:'250px', float:'right', marginLeft:'40%'}} src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/RTS22W37.jpeg?VF5fBCz0_fq.e_0UH69wbzulN1ZPJUbZ"/>
                            </Row>
                        </Card>
                )}
                {
                    !this.state.show &&
                    <Tag />
                }
                </Column>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps)(board);