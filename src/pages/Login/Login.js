import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Header from '../../components/Header/Header'
import './style.scss'

class Login extends Component {
    
    render() {
        let list = [
            {id: 0, src: '/images/Login/wuxing.png' , name: "收藏",href: '/login/notmore'},
            {id: 1, src: '/images/Login/lishi.png' , name: "历史",href: '/login/notmore'},
            {id: 2, src: '/images/Login/manhuadan.png' , name: "关于漫画岛",href: '/login/notmore'},
            {id: 3, src: '/images/Login/fankui.png' , name: "反馈",href: '/login/notmore'}
        ];
        return (
            <div className="login">
                <Header left="/images/Login/left.png" title="我的"/>
                <div className="login-regist">
                    <img src="/images/Login/maomi.png" alt=""/>
                    <p>
                        <span>登录</span>
                        <span>/</span>
                        <span>注册</span>
                    </p>
                </div>
                {
                    list.map(item=>{
                        return (
                            <Link className="login-list" to={item.href} id="item.id">
                                <div className="left">
                                    <img src={item.src} alt=""/>
                                    <p>{item.name}</p>
                                </div>
                                <div className="right">
                                    <img src="/images/Login/jiantou-right.png" alt=""/>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

export default Login;