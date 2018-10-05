import 'babel-polyfill'
import 'url-search-params-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'
import Helmet from 'react-helmet'
import registerServiceWorker from './registerServiceWorker'
import './style/index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './scenes/Home'
import Ranking from './scenes/Ranking'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Helmet 
                    title="世界杯"
                    meta={[
                        { name: 'keywords', content: '' },
                        { name: 'description', content: '' }
                    ]}
                />
                <Header />
                <Switch>
                    <Route exact={true} path={'/'} component={Home} />
                    <Route exact={true} path={'/ranking'} component={Ranking} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={history}>
        <Route component={App} />
    </Router>,
    document.getElementById('root')
)

registerServiceWorker()
