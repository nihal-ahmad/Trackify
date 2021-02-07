import React from 'react';
import { Tag } from 'antd';

interface Props {
    color : string;
    text : string;
}

const Category = ( props : Props ) => {
    return (
        <div>
            <Tag
            color={props.color}
            style={{width:350, marginTop : 80, height : 30, fontSize : 20, textAlign : "center", marginLeft : 20}}
            >
                {props.text}
            </Tag>
        </div>
    )
}

export default Category
