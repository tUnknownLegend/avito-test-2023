import FilterSelector from '../FilterSelector.tsx';
import {changeParamFunctionPayload} from '../../siderCategory/SiderCategory.tsx';
import {categories, queryParams} from '../../../../public/apiConsts.ts';
import {useAppSelector} from '../../../app/hooks.ts';
import {setCategory, setCheckedStateCategory} from '../../../features/filterCatalogCategory.ts';

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
function CategoryFilterSelector() {
    const checkedState =
        useAppSelector((state) =>
            state.filterCatalogCategory.value);
    return (
        <FilterSelector<setCheckedStateCategory>
            checkBoxContent={categories}
            queryParam={queryParams.categories}
            getNewParams={getNewParams}
            setCheckedState={setCategory}
            checkedState={checkedState}
        />
    );
}

export default CategoryFilterSelector;
