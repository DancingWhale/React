import { react } from "@babel/types";
import { render } from "@testing-library/react";
import React, { Component } from 'react';


/* 클래스선언
export default class Basic extends Component {
    renderSeparate() {
        return (
            <div> code divide </div>
        );
    }

    // 실제 그려지는 영역
    render() {
        return (
            <div>
                <span> component!! </span>
                {this.renderSeparate()}
            </div>
        );
    }
}*/

// 간단한 코드는 function 으로 생성
const renderSeparate = () => <div>code devide</div>;

export default function Basic(){
    return (
        <div> 
            <span>component!! </span>
            {renderSeparate()}
        </div>
    );
};