import * as React from 'react'
import Paragraph from './../../components/Paragraph'
import { Pagination } from 'antd';
import  {ajax} from './../../util'
import 'antd/dist/antd.css';
import './index.css'

const PAGE_SIZE = 9

class Ranking extends React.Component {
    constructor() {
        super()
        this.state = {
            current: 1,
            list: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        ajax('/player')
        .then((res)=>{
            this.setState({
                list:res
            })
        })
    }

    onChange = (page) => {
        this.setState({
          current: page,
        })
    }

    render() {
      const {list} = this.state
      if(list.length > 0) {
          return (
              <div className="ranking grow">
                  <div className="top">
                      <div className="icon"></div>
                      <div className="title">STAR <span>INDEX RANKING</span></div>
                      <div className="icon"></div>
                  </div>
                  <Paragraph >
                      球星影响力指数是通过对球星的背景分析、技术统计、热度趋势、舆情分析以及历史数据加权来进行排行打分，同时会通过机器学习，不断的更新影响力指数，更多详情可通过小程序【影响力指数】来查看。
                  </Paragraph >
                  <div className="players">
                      {
                          list.slice((this.state.current - 1) * PAGE_SIZE,
                           (this.state.current - 1) * PAGE_SIZE + PAGE_SIZE)
                           .map((item, index) => {
                          return <div className="playercard" key={index}>
                           <div className="playeritem">
                              <div className="index">{index + 1 + PAGE_SIZE * (this.state.current - 1)}</div>
                              <img src={`${item.player_photo}`} alt="" style={{ height: 247, width: 247 }}/>
                              {/* <div className="img" style={{ height: 247, width: 247, background: '#eee' }}></div> */}
                              <p className="enname">{item.flower_name_en}</p>
                              <p className="name">{item.flower_name}</p>
                              <hr style={{ height: 1, border: 'none', borderTop: '1px dashed rgba(255,255,255,.1)' }} />
                              {
                                  item.delta_influence_value > 0 ?
                                  <div className='triangle-up'></div> :
                                  <div className='triangle-down'></div>
                              }
                              <p className={'player-index ' + (item.delta_influence_value>0?'green':'red')}>{item.influence_value}</p>
                            </div>
                            </div>
                      })}
                  </div>
                  <Pagination 
                      current={this.state.current} 
                      onChange={this.onChange} 
                      total={list.length} 
                      pageSize={PAGE_SIZE}
                  />
              </div>
          )
      } else {
        return null
      }
    }
}

export default Ranking

