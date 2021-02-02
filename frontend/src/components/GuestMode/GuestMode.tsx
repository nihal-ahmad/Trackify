import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthenticationStatus } from '../../store';

const GuestMode = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch(setAuthenticationStatus(true));
        sessionStorage.setItem("guestmode","on");
        history.push('/dashboard');
    }

    return (
        <div>
            <h3>Guest mode without authentication{"  "} 
                <span>
                    <Button type="primary" htmlType="submit" style={{width : 80}} onClick={handleClick}>
                        Go    
                    </Button>
                </span>
            </h3>
        </div>
    )
}

export default GuestMode
