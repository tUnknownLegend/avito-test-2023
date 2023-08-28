import {Checkbox} from 'antd';
import {Content} from 'antd/es/layout/layout';

import './filterSelector.scss';

function FilterSelector({checkBoxContent}: {checkBoxContent: Array<string>}) {
    return (
        <Content className="filter-selector">
            <Checkbox.Group options={checkBoxContent} />
        </Content>
    );
}

export default FilterSelector;
