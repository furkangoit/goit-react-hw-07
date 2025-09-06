import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../Redux/filtersSlice';
import styles from './SearchBox.module.css';

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilterChange = (evt) => {
        dispatch(changeFilter(evt.target.value));
    };

    return (
        <div className={styles.searchBox}>
            <label htmlFor="search">Find contacts by name</label>
            <input
                type="text"
                id="search"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Search contacts..."
            />
        </div>
    );
}