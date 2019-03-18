import React,{Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Row, Column} from 'simple-flexbox'

const stats = [
    {name:'Total Clicks', num: 89},{name:'Total Revenue', num:689},{name:'Active users', num:878}
]
class analytics extends Component{
    constructor(){
        super()
        this.state={
            numbers: [550, 230, 234]
        }
    }
    componentDidMount(){
        for(let i =0;i<stats.length;i++){
            stats[i].num = this.state.numbers[i];
        }       
    }
    render(){
        return(
            <div>
                <h1>Analytics</h1>
                <Row horizontal="center">    
                {stats.map((item, i)=>
                <Card key={i} style={{margin:'2%', borderRadius:'8px', width:'300px', height:'160px'}} raised="true">
                    <CardContent>
                        <Column horizontal="center">
                        <div style={{width:'250px', height:'100px', background:'#eee', borderRadius:'8px'}}>
                            <h1 style={{fontSize:'400%', textAlign:'center', marginTop:'10%'}}>{item.num}</h1>
                        </div>
                            <h4 className="logo" style={{marginTop:'20px'}}>{item.name}</h4>
                        </Column>
                    </CardContent>
                </Card>   
                )}
                </Row>
            </div>
        )
    }
}

export default analytics;