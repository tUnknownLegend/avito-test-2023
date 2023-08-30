import {Button} from 'antd';
import {sortBy} from '../../../public/apiConsts.ts';
import {Link, useSearchParams} from 'react-router-dom';
import {queryParams} from '../../../public/apiConsts.ts';

import './SortBySelector.scss';


function SortBySelector() {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleClick = (sortParam: string) => {
        const newSortParams = new URLSearchParams(searchParams);
        newSortParams.set(queryParams.sortBy, sortParam);
        setSearchParams(newSortParams);
    };

    const sortButtons = sortBy.map((element, number) => (
        // <Link to={`?${queryParams.sortBy}=${element}`} key={element + number}>
        <Button type="text" key={element + number} onClick={() => handleClick(element)}>
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
