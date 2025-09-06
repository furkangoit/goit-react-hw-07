import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../Redux/filtersSlice';

export default function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleFilterChange = (evt) => {
        dispatch(changeFilter(evt.target.value));
    };

    return (
        <div style={{
            marginBottom: '20px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
        }}>
            <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#333'
            }}>
                İsme göre kişi ara
            </label>
            <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Kişi ara..."
                style={{
                    display: 'block',
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '14px'
                }}
            />
        </div>
    );
}