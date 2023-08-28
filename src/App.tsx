import './App.scss';
import {Layout} from 'antd';
import MyHeader from './components/header/Header.tsx';
import MyFooter from './components/footer/Footer.tsx';
import ProductPage from './pages/product/ProductPage.tsx';
import {Outlet, Route, Routes} from 'react-router-dom';
import CatalogPage from './pages/catalog/CatalogPage.tsx';

function App() {
    return (
        <Layout className="main-layout">
            <MyHeader/>
            <Outlet/>
            <MyFooter/>
        </Layout>
        // <CatalogPage/>
        // <Routes
        //     // element={
        //     //     <Layout className="main-layout">
        //     //         <MyHeader/>
        //     //         <Outlet />
        //     //         <MyFooter/>
        //     //     </Layout>
        //     // }
        // >
        //     <Route path="/" element={<CatalogPage/>} />
        //     <Route path="/game/:gameID" element={<ProductPage/>} />
        // </Routes>
    )
    ;
}

export default App;
