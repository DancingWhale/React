import React, {useState} from 'react';
import ProTypes from 'prop-types';

// Props는 읽기 전용
// Component 상속 받아서 state 확인
const Test = ({name, birth, lang}) => {
    const [hidden, setHidden] = useState(false);        //useState (hook 기능) hook에는 constructor (class용)이 없음

    return (
        <div>
            <span> I'm {lang} expert {name}</span>
            I was born in {!hidden && <span>{birth} </span>}
            <button onClick={() => setHidden(true)}>숨기기</button>    
        </div>
    );
};

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