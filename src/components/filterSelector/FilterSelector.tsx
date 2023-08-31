import {Checkbox} from 'antd';
import './filterSelector.scss';
import {useSearchParams} from 'react-router-dom';
import {firstLetterUppercase} from '../../common/string.ts';
import {filterSelectorPropsFunc} from '../siderCategory/SiderCategory.tsx';
import {useAppDispatch} from '../../app/hooks.ts';

/**
 * Component to render filter selector
 */
function FilterSelector<setCheckedStateType>(
    {checkBoxContent, queryParam, getNewParams, setCheckedState, checkedState}:
        filterSelectorPropsFunc<setCheckedStateType>) {
    if (!(setCheckedState instanceof Function)) {
        throw Error(`wrong type of ${setCheckedState}`);
    }
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const handleOnChange = (changedCheckboxIndex: number, paramValue: string) => {
        dispatch(setCheckedState(changedCheckboxIndex));

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
