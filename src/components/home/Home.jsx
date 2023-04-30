import React from 'react';

import { Outlet } from 'react-router-dom';
import FontPage from './../fontPage/FontPage';

const Home = () => {
    return (
        <div>
            <FontPage></FontPage>
            <Outlet></Outlet>

        </div>
    );
};

export default Home;