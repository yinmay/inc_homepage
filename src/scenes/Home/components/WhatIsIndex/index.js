import React, { Component } from 'react';
import Title from './../../../../components/Title'
import Paragraph from './../../../../components/Paragraph'
import Section from './../../../../components/Section'
import './index.css'

export default class WhatIsIndex extends Component {
    render() {
        return (
            <div className="whatIsIndex">
                <Section>
                    <div className="left">
                        <Title name="什么是影响力指数" />
                        <Paragraph>
                            影响力指数( Influence index ) 是由影链( influencechain.org )基于海量数据、用户深度反馈及专家建议推出，用于衡量红人影响力的传播能力。
                    
                        </Paragraph>
                    </div>
                    <div className="right">
                    <div className="earth">
                        <div className="qr-code"></div>
                        <div className="qr-text">微信扫一扫，立即体验</div>
                    </div>
                    </div>
                </Section>
            </div>
        )
    }
};
