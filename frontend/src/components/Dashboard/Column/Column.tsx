import React from 'react';
import ModalDetail from '.././Modal/Modal';
import { Card, Menu, Modal } from 'antd';
import { CSSProperties } from '@material-ui/styles';

const gridStyle : CSSProperties = {
    width: '100%',
    textAlign: 'center',
};


interface Data{
  id : number;
  company : string;
  notes : string;
  role : string;
  applied_date : string;
  status : string;
}

interface Props {
  data : Data[]
}

const Column = ( props : Props ) => {

  const [ isModalVisible, setIsModalVisible] = React.useState(false)

    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      console.log(isModalVisible);

  return (
    <div
      style={{ width:350, marginLeft : 20 }}
    >
      {props.data.map( (d,index) => {
        return (
          <div key={index}>
            <div onClick={showModal} >
              <Card.Grid style={gridStyle}>
                  <p>{d.company} | <strong>{d.role}</strong></p>
                  <i>Date : {d.applied_date}</i>
              </Card.Grid>
            </div>
            <Modal title="Enter Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <ModalDetail
                    id={d.id}
                    company={d.company}
                    notes={d.notes}
                    position={d.role}
                    status={d.status}
                    date={d.applied_date}
                    update={true}
                />
            </Modal>
          </div>
        );
      })}

    </div>
  )
}

export default Column
