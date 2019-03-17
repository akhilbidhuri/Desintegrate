import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { connect } from "react-redux";
import {browserHistory} from 'react-router'
import {Row, Column} from 'simple-flexbox'
import Chip from '@material-ui/core/Chip';
import AddIcon from '@material-ui/icons/Add';
import TimeLine from '@material-ui/icons/Timeline'
import Work from '@material-ui/icons/Work'
import {Link} from 'react-router'
class dash extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount(){
        if(this.props.data.length==0){
            browserHistory.push('/login')
        }
    }
    render(){
        return (
        <div>
                          <style>{
                    `
                    .listcontents{
                      margin-top:6%; width:170px;color:#fff; font-size:120%; background:#8865ce;
                    }
                    .listcontents:hover{
                        fontWeight: 580;
                        background: #6a1b9a;

                    }
                    `}
                </style>
        <Row>
        <div style={{background:'#7d4cdb', height:'100vh', width:'16%',position:'fixed', boxShadow:'6px 0 4px -3px #ddd', zIndex:'3'}}>
        <h2 style={{fontWeight:'350', color:'#fff', textAlign:'center'}}>
              Desintegrate
            </h2>
            <Column horizontal="center" style={{paddingTop:'40%'}}>
            <Link to="/dashboard" style={{textDecoration:'none'}}>
            <Chip className="listcontents"  icon={<Work style={{color:'#fff'}} />} label="Your Projects" />
            </Link>
            <Link to="/addproject" style={{textDecoration:'none'}}>
            <Chip className="listcontents"  icon={<AddIcon style={{color:'#fff'}}/>} label="Add Project" />
            </Link>
            <Link to="/analytics" style={{textDecoration:'none'}}>
            <Chip className="listcontents"  icon={<TimeLine style={{color:'#fff'}} />} label="Analytics" />
            </Link>
            </Column>
        </div>
        <div style={{width:'85%'}}>
        <AppBar position="static" style={{background:'#fff', zIndex:'0', marginLeft:'18%', boxShadow:'none', borderBottom:'1px solid #999'}}>
          <Toolbar>

              <IconButton style={{marginLeft:'76%', color:'#444'}}>
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton style={{ color:'#444'}}>
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-haspopup="true"
                style={{ color:'#444'}}
              >
                <AccountCircle />
              </IconButton>
                <div >
              <IconButton aria-haspopup="true"  style={{ color:'#444'}}>
                <MoreIcon />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>
        {
                    <div style={{marginLeft:'23%', marginTop:'2%'}}>
                        {
                            this.props.children
                        }
                    </div>
                    
                }
        </div>
        </Row>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
export default connect(mapStateToProps)(dash);