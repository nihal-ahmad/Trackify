import React from 'react';
import { Button } from 'antd';

interface Props {
    styles? : Record<string,any>;
    text : string;
}

const CustomButton = ( props : Props ) => {
    return (
        <Button
            style={props.styles}
            type="primary"
            htmlType="submit"
        >
            {props.text}
        </Button>
    )
}

export default CustomButton
