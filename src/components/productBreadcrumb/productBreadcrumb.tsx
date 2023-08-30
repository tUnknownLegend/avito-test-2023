import {Breadcrumb, Button} from 'antd';
import {useNavigate} from 'react-router-dom';
import './productBreadcrumb.scss';

function ProductBreadcrumb({title}: { title: string}) {
    const navigate = useNavigate();
    const items = [
        {
            title: <button className="product-breadcrumb__button">Catalog</button>,
            onClick: () => navigate(-1),
        },
        {title: title},
    ];

    return (
        <Breadcrumb items={items}/>
    );
}

export default ProductBreadcrumb;
