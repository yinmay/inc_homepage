import React, { Component } from 'react';
import Title from './../../../../components/Title'
import Paragraph from './../../../../components/Paragraph'
import Section from './../../../../components/Section'
import Button from './../../../../components/Button'
import './index.css'
export default class IPIndex extends Component {
  render() {
    return (
      <div className="IPIndex">
        <Section>
                    <div className="left">
                        <Title name="IP影响力指数" />
                        <Paragraph>
                        小说改编电视剧电影已经成为现在的潮流和未来发展方向，IP的影响力指数将分析各类资讯新闻，建立神经网络来完善舆情分析，并且通过各个渠道反馈，来进行机器学习，实现影响力指数的公平、公正、公开。
                        </Paragraph>
                        <Button name="敬请期待" />
                    </div>
                    <div className="center">
                        
                    </div>
                </Section>
      </div>
    )
  }
};
