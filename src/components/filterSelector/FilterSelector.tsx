import {Checkbox} from 'antd';
import {useState} from 'react';
import './filterSelector.scss';
import {useFetcher, useSearchParams} from 'react-router-dom';
import {queryParams} from '../../../public/apiConsts.ts';
import {firstLetterUppercase} from '../../common/string.ts';

const removeParam = (query: string, param: string) => query.split('.').
    filter((value) => value != param).join('.');

const addParam = (query: string, param: string) => (query ? query + '.' : '') + param;

function FilterSelector({checkBoxContent, queryParam}: { checkBoxContent: Array<string>, queryParam: string }) {
    const [checkedState, setCheckedState] = useState(
        checkBoxContent.map((value) => location.search.includes(value)),
    );
    const [searchParams, setSearchParams] = useSearchParams();

    const handleOnChange = (changedCheckboxIndex: number, item: string) => {
        const newSearchParams: URLSearchParams = new URLSearchParams(searchParams);
        const currentQueryParams = newSearchParams.get(queryParam) ?? '';
        newSearchParams.set(queryParam, checkedState[changedCheckboxIndex] ?
            removeParam(currentQueryParams, item) :
            addParam(currentQueryParams, item),
        );
        if (!newSearchParams.get(queryParam)) {
            newSearchParams.delete(queryParam);
        }
        setSearchParams(newSearchParams);

        const updatedCheckedState = checkedState.map((isChecked, index) =>
            index === changedCheckboxIndex ? !isChecked : isChecked,
        );

        setCheckedState(updatedCheckedState);
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
