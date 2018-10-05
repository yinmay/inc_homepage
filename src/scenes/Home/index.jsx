import * as React from 'react'
import WhatIsIndex from './components/WhatIsIndex'
import IndexIntro from './components/IndexIntro'
import PlayerIndex from './components/PlayerIndex'
import Influence from './components/Influence'
import IPIndex from './components/IPIndex'
import './index.css'


class Home extends React.Component {
    componentDidMount () {
    }

    render() {
        return (
            <div className="home grow">
        
                <WhatIsIndex />
                <IndexIntro />
                <PlayerIndex />
                <Influence />
                <IPIndex />
                
            </div>
        )
    }
}

export default Home

