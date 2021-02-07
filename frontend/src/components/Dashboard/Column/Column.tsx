import React from 'react';
import { Menu } from 'antd';
import JobPreview from '../Job/JobPreview';

interface Data{
  id : number;
  company : string;
  position : string;
  date : string;
  status : string;
}

interface Props {
  data : Data[]
}

const Column = ( props : Props ) => {
  return (
    <Menu
    mode="inline"
    theme="dark"
    style={{ width:350, marginLeft : 20 }}
    >
      {props.data.map( d => {
        return (
          <JobPreview
            id={d.id}
            company={d.company}
            position={d.position}
            date="01/09/2021"
            status={d.status}
          />
        );
      })}

    </Menu>
  )
}

export default Column
