import React, {Component} from 'react';
import ProTypes from 'prop-types';
import { render } from '@testing-library/react';

// Props는 읽기 전용
// Component 상속 받아서 state 확인
class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            hidden : true,
        };
    }

    // 실제로 그려지는 부분
    // Props = 부모 component 로부터 물려받는 속성
    render() {
        return (
            <div>
                <span> I'm {this.props.lang} expert {this.props.name}. </span>
                I was born in {this.state.hidden && <span>{this.props.birth} </span>}
                <button onClick={() => this.setState(() => ({ hidden: false }))}>숨기기</button>
            </div>
        );
    }
}

// 부모 Component 속성 내용
Test.ProTypes = {
    name: ProTypes.string.isRequired,
    birth: ProTypes.number.isRequired,
    lang: ProTypes.string,
};

Test.defaultProps = {
    lang: 'javascript',
};

export default Test;