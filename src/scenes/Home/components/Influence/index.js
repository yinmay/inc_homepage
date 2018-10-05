import React, { Component } from 'react';
import Title from './../../../../components/Title'
import Paragraph from './../../../../components/Paragraph'
import Section from './../../../../components/Section'
import Button from './../../../../components/Button'
import './index.css'

export default class Influence extends Component {
  render() {
    return (
      <div className="influence">
         <Section>
                    <div className="left">
                        <div className="pic">
                        </div>
                    </div>
                    <div className="right">
                        <Title name="区块链影响力指数" />
                        <Paragraph>
                        如今的区块链正如火如荼，每天都有新的数字货币产生，我们通过对区块链的开发进度、持币情况、交易流动等数据进行采集，让币圈的用户能通过影响指数查看、分析币种是否具有投资价值。
                        </Paragraph>
                        <Button name="敬请期待"/>
                    </div>

                </Section>
      </div>
    )
  }
};
