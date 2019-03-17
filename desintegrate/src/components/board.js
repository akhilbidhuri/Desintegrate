import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Column} from 'simple-flexbox'
class board extends Component{
    constructor(){
        super()
        this.state = {
            projects:[]
        }

    }
    componentDidMount(){
        console.log(this.props.data.projects)
        for(var i =0; i<this.props.data.projects.length;i++){
        axios.post('http://10.2.41.166:4000/project', {id:this.props.data.projects[i].id})
        .then((res)=>{
                console.log(res)
                this.setState({projects:[...this.state.projects,res]})
        }).catch(err=>console.log(err))
        }
    }

    render(){
        return(
            <div>
                <h1>Your Projects</h1>
                <Column style={{marginLeft:'40%'}}>
                {this.state.projects.map((item)=>
                        <h1>{item.data.themes[0]}</h1>
                )}
                </Column>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps)(board);