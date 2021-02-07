import React, { useState } from 'react';
import { Modal } from 'antd';
import ModalDetail from '../Modal/Modal';
import AddCircleIcon from '@material-ui/icons/AddCircle';

interface Props {
    status : string;
}

const AddButton = ( props : Props ) => {

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
        <div style={{
            display:"flex",
            justifyContent:"center",
            marginTop : 10
        }}>
            <AddCircleIcon 
                style={{width:"15%", height:"15%"}}
                onClick={showModal}
            />
            <Modal title="Enter Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <ModalDetail
                    status={props.status}
                />
            </Modal>
        </div>
    )
}

export default AddButton;
