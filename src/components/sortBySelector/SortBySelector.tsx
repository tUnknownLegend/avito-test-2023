import {Button} from 'antd';
import {ArrowUpOutlined} from '@ant-design/icons';

import './SortBySelector.scss';

function SortBySelector() {
    return (
        <div className="sort-by-container">
            <ArrowUpOutlined/>
            <Button>
                By Alphabet order
            </Button>
        </div>
    );
}

export default SortBySelector;
