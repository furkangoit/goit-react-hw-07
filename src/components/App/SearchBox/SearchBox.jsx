import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../Redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
    const dispatch = useDispatch();
    const value = useSelector(selectNameFilter);

    return (
        <div className={css.wrapper}>
            <label>
                Search
                <input
                    className={css.input}
                    value={value}
                    onChange={(e) => dispatch(changeFilter(e.target.value))}
                />
            </label>
        </div>
    );
}