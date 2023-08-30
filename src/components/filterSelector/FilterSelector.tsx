import {Checkbox} from 'antd';
import {useState} from 'react';
import './filterSelector.scss';
import {defer, useSearchParams} from 'react-router-dom';
import {firstLetterUppercase} from '../../common/string.ts';
import {filterSelectorPropsFunc} from '../siderCategory/SiderCategory.tsx';

function FilterSelector({checkBoxContent, queryParam, getNewParams}: filterSelectorPropsFunc) {
    const [checkedState, setCheckedState] = useState(
        checkBoxContent.map((value) => location.search.includes(value)),
    );
    const [searchParams, setSearchParams] = useSearchParams();

    const handleOnChange = (changedCheckboxIndex: number, paramValue: string) => {
        const updatedCheckedState = checkedState.map((isChecked, index) =>
            index === changedCheckboxIndex ? !isChecked : isChecked,
        );

        setCheckedState(updatedCheckedState);
        setSearchParams(getNewParams({
            searchParams,
            paramValue,
            isCheckedState: checkedState[changedCheckboxIndex],
            queryParam,
        }));
    };

    const checkBoxList = checkBoxContent.map((item, index) => {
        return (
            <Checkbox key={item + index}
                onChange={() => handleOnChange(index, item)} checked={checkedState[index]}
            >
                {firstLetterUppercase(item).split('-').join(' ')}
            </Checkbox>
        );
    });

    return (
        <div className="filter-selector">
            {checkBoxList}
        </div>
    );
}

export default FilterSelector;
