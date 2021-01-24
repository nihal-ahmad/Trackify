import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'antd';
import Navigation from '../Navigations';
import AuthenticationNavigation from '../Navigations/AuthenticationNavigation';

const Home = () => {

    const history = useHistory();

    useEffect(() => {
        if(sessionStorage.getItem("token")){
            history.push("/arena");
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
        </>
    )
}

export default Home;
