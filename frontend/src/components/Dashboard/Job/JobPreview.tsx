import React, { useState } from 'react';
import ModalDetail from '.././Modal/Modal';
import { Card, Menu, Modal } from 'antd';
import { CSSProperties } from '@material-ui/styles';

const gridStyle : CSSProperties = {
    width: '100%',
    textAlign: 'center',
};

interface Props {
    id : number;
    company : string;
    position : string;
    date : string;
    status : string;
}

const JobPreview = ( props : Props ) => {

    const [ isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    return (
        <Menu.Item onClick={showModal} key="1">
            <Card.Grid style={gridStyle}>
                <p>{props.company} | <strong>{props.position}</strong></p>
                <i>Date : {props.date}</i>
            </Card.Grid>
            <Modal title="Enter Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <ModalDetail
                    id={props.id}
                    company={props.company}
                    position={props.position}
                    status={props.status}
                />
            </Modal>
        </Menu.Item>
    )
}

export default JobPreview
