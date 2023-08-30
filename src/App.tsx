import {Layout} from 'antd';
import MyHeader from './components/header/Header.tsx';
import MyFooter from './components/footer/Footer.tsx';
import {Outlet} from 'react-router-dom';

import './App.scss';

function App() {
    return (
        <Layout className="main-layout">
            <MyHeader/>
            <Outlet/>
            <MyFooter/>
        </Layout>
    );
}

export default App;
