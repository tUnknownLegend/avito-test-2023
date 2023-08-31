import FilterSelector from '../FilterSelector.tsx';
import {changeParamFunctionPayload, filterSelectorProps} from '../../siderCategory/SiderCategory.tsx';

const addParam = (query: string, param: string) => (query ? query + '.' : '') + param;
const removeParam= (query: string, param: string) => query.split('.').
    filter((value) => value != param).join('.');

const getNewParams = (
    {searchParams, paramValue, isCheckedState, queryParam} : changeParamFunctionPayload) => {
    const currentQueryParams = searchParams.get(queryParam) ?? '';
    searchParams.set(queryParam, isCheckedState ?
        removeParam(currentQueryParams, paramValue) :
        addParam(currentQueryParams, paramValue),
    );
    if (!searchParams.get(queryParam)) {
        searchParams.delete(queryParam);
    }
    return searchParams;
};

/**
 * Component to render category filter selector
 */
function CategoryFilterSelector({checkBoxContent, queryParam}: filterSelectorProps) {
    return (
        <FilterSelector
            checkBoxContent={checkBoxContent}
            queryParam={queryParam}
            getNewParams={getNewParams}
        />
    );
}

export default CategoryFilterSelector;
