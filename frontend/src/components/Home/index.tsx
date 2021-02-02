import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'antd';
import Navigation from '../Navigations';
import AuthenticationNavigation from '../Navigations/AuthenticationNavigation';
import GuestMode from '../GuestMode/GuestMode';

const Home = () => {

    const history = useHistory();

    useEffect(() => {
        if(sessionStorage.getItem("token") || sessionStorage.getItem("guestmode")){
            history.push("/dashboard");
        }
    },[]);

    return (
        <>
            <Row>
                <Navigation/>
            </Row>
            <Row>
                <AuthenticationNavigation/>
            </Row>
            <Row style={{display : 'flex', justifyContent : 'center'}}>
                <h1 style={{marginTop : 50, marginBottom : 20}}>or</h1>
            </Row>
            <Row style={{display : 'flex', justifyContent : 'center'}}>
                <GuestMode/>
            </Row>
        </>
    )
}

export default Home;
