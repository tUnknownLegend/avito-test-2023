import {Checkbox} from 'antd';
import {Content} from 'antd/es/layout/layout';

import './filterSelector.scss';

function FilterSelector({checkBoxContent}: {checkBoxContent: Array<string>}) {
    const checkBoxList = checkBoxContent.map((item, index) => {
        return (
            <Checkbox key={item + index}>
                {item}
            </Checkbox>
        );
    });
    return (
        <div className="filter-selector">
            {checkBoxList}
            {/* <Checkbox.Group options={checkBoxContent} />*/}
        </div>
    );
}

export default FilterSelector;
