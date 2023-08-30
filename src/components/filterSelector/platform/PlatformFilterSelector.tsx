import {changeParamFunctionPayload, filterSelectorProps} from '../../siderCategory/SiderCategory.tsx';
import FilterSelector from '../FilterSelector.tsx';
import {platforms} from '../../../../public/apiConsts.ts';

const getNewParams = (
    {searchParams, paramValue, isCheckedState, queryParam} : changeParamFunctionPayload) => {
    if (!searchParams.get(queryParam)) {
        isCheckedState ?
            searchParams.set(queryParam,
                platforms.filter((val) => val !== paramValue)[0]) :
            searchParams.set(queryParam, paramValue);
    } else {
        searchParams.delete(queryParam);
    }
    return searchParams;
};
function PlatformFilterSelector({checkBoxContent, queryParam}: filterSelectorProps) {
    return (
        <FilterSelector
            checkBoxContent={checkBoxContent}
            queryParam={queryParam}
            getNewParams={getNewParams}
        />
    );
}

export default PlatformFilterSelector;
