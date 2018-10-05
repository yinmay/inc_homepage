import React, { Component } from 'react';
import Title from './../../../../components/Title'
import Paragraph from './../../../../components/Paragraph'
import Section from './../../../../components/Section'
import Button from './../../../../components/Button'
import './index.css'
export default class PlayerIndex extends Component {
    render() {
        return (
            <div className="playerIndex">
                <Section>
                    <div className="left">
                        <Title name="球星影响力指数" />
                        <Paragraph>
                            球星影响力指数通过对足球明星各类数据的分析，让其具有影响力的球星通过排行榜的方式进行展示，让更多的用户能轻松的选择、了解球星影响力的传播能力，同时，还可以时时查看球星最新的资讯新闻动态等。
                        </Paragraph>
                        <Button name="查看排行榜>>" />
                    </div>
                    <div className="right">
                        <div className="players">
                            <div className="player-card">
                                <div className="player-unknow"></div>
                                <h4>埃梅里克·奥巴梅扬</h4>
                                <p>Emerick Aubameyang</p>
                            </div>
                            <div className="player-card">
                                <h4>里奥·梅西</h4>
                                <p>Lionel Messi</p>
                                <div className="border-facebook">
                                    <div className="player-messi"></div>
                                    <p>Facebook</p>
                                    <button>+ Attention</button>
                                </div>
                            </div>
                            <div className="player-card">
                                <div className="player-neymar"></div>
                                <h4>内马尔·达席尔瓦</h4>
                                <p>Neymar da Silva Santos<br /> Júnior</p>
                            </div>
                        </div>
                    </div>
                </Section>

            </div>
        )
    }
};
