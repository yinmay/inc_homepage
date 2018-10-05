import React, { Component } from 'react';
import Title from './../../../../components/Title'
import Paragraph from './../../../../components/Paragraph'
import Section from './../../../../components/Section'
import Button from './../../../../components/Button'
import './index.css'

export default class IndexIntro extends Component {
    render() {
        return (
            <div className="indexIntro">
                <Section>
                    <div className="left">
                        <div className="pic">
                        </div>
                    </div>
                    <div className="right">
                        <Title name="指数算法介绍" />
                        <Paragraph>
                            我们用深度神经网络来计算球星的影响因子，影响因子的算计由右图中所示的4个重要模块构成，其中4个模块为构建计算影响因子的神经网络的特征，即背景分析，热度分析，情绪分析，和历史数据。有了这些提取的特征，神经网络能够动态合理的组合各个模块，最大化的使得评分更加准确。
              </Paragraph>
              <Button name="下载影响力指数说明"/>
                    </div>

                </Section>

            </div>
        )
    }
};
