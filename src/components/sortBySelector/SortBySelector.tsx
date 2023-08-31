import {Button} from 'antd';
import {queryParams, sortBy} from '../../../public/apiConsts.ts';
import {useSearchParams} from 'react-router-dom';

import './SortBySelector.scss';
import {useState} from 'react';

const accentClassName = 'sort-by-container__button_selected';

/**
 * Component to render sort by selector
 */
function SortBySelector() {
    const [selectedState, setSelectedState] = useState(
        sortBy.map((value) =>
            location.search.includes(value) ? accentClassName : ''),
    );

    const [searchParams, setSearchParams] = useSearchParams();
    const handleClick = (sortParam: string, clickedIndex: number) => {
        const newSortParams = new URLSearchParams(searchParams);
        newSortParams.set(queryParams.sortBy, sortParam);
        setSearchParams(newSortParams);

        setSelectedState(selectedState.map(
            (isSelected, index) =>
                index === clickedIndex ? accentClassName : ''));
    };

    const sortButtons = sortBy.map((element, index) => (
        <Button
            type={'text'}
            key={element + index}
            onClick={() => handleClick(element, index)}
            className={selectedState[index]}
        >
            {element.split('-').join(' ')}
        </Button>
    ));
    return (
        <div className="sort-by-container">
            <span> Sort by</span>
            {sortButtons}
        </div>
    );
}

export default SortBySelector;
