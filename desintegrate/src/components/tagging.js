import React, {Component} from 'react'
import axios from 'axios'

 class tag extends Component{
    constructor(){
        super()
        this.state = {
            
        }
    }
    componentDidMount(){
        axios.post('http://10.2.41.166:4000/designer')
        .then(res=>{

        })
    }
    render(){
        return(
            <div>
            </div>
        )
    }
 }

 export default tag;