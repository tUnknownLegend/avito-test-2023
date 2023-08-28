import {Button} from 'antd';
import {ArrowUpOutlined} from '@ant-design/icons';

import './SortBySelector.scss';
import {sortBy} from '../../../public/apiConsts.ts';
import {Link} from 'react-router-dom';

function SortBySelector() {
    const sortButtons = sortBy.map((element, number) => (
        <Link to={`?sort-by=${element}`} key={element + number}>
            <Button type="text" key={element + '-btn-' + number}>
                {element.split('-').join(' ')}
            </Button>
        </Link>
    ));
    return (
        <div className="sort-by-container" key={'lol'}>
            {/* <ArrowUpOutlined/>*/}
            <span> Sort by</span>
            {sortButtons}
        </div>
    );
}

export default SortBySelector;
