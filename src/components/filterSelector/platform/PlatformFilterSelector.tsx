import {changeParamFunctionPayload} from '../../siderCategory/SiderCategory.tsx';
import FilterSelector from '../FilterSelector.tsx';
import {platforms, queryParams} from '../../../../public/apiConsts.ts';
import {setCheckedStatePlatform, setPlatform} from '../../../features/filterCatalogPlatform.ts';
import {useAppSelector} from '../../../app/hooks.ts';

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

/**
 * Component to render platform filter selector
 */
function PlatformFilterSelector() {
    const checkedState =
        useAppSelector((state) =>
            state.filterCatalogPlatform.value);
    return (
        <FilterSelector<setCheckedStatePlatform>
            checkBoxContent={platforms}
            queryParam={queryParams.platforms}
            getNewParams={getNewParams}
            setCheckedState={setPlatform}
            checkedState={checkedState}
        />
    );
}

export default PlatformFilterSelector;
