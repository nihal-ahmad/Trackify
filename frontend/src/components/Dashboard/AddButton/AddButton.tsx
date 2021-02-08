import React, { useState } from 'react';
import { Modal,Button } from 'antd';
import ModalDetail from '../Modal/Modal';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
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
            alignItems: "center",
           height: "4vh",
           paddingTop: "3em"
        }}>
             {/* <Button shape="round" style={{height: "6em"}} type="primary" ghost>
      
 
            <AddCircleIcon 
            
                style={{width:"3em", height:"3em"}}
                onClick={showModal}
            />
               </Button> */}
               <Fab color="primary" aria-label="add">
        <AddIcon onClick={showModal}/>
      </Fab>
            <Modal title="Enter Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <ModalDetail
                    status={props.status}
                />
            </Modal>
        </div>
    )
}

export default AddButton;
