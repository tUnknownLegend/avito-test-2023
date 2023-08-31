import {Breadcrumb} from 'antd';
import {useNavigate} from 'react-router-dom';
import './ProductBreadcrumb.scss';

/**
 * Component to render product go back to catalog button
 */
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
