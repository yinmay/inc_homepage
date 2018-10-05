import * as React from 'react'
import { Link, withRouter ,NavLink} from 'react-router-dom'
import './index.css'

class Header extends React.Component {

  
    render() {
        return (
             <div className="header">
                <ul>
                    <li><div className="logo"></div></li>
                    <li><NavLink to="/" exact activeClassName="selected">首页</NavLink></li>
                    <li><NavLink to="/ranking" exact activeClassName="selected">球星指数排行</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Header)
