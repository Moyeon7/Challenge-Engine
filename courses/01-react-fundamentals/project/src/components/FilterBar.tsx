type Filter = 'all' | 'active' | 'completed';
type SortOrder = 'newest' | 'oldest' | 'high' | 'low' | 'alphabetical'

interface FilterBarProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
  sortOrder: SortOrder
  onSortChange: (sortOrder: SortOrder) => void
  search: string;
  setSearch: (value: string) => void;
}

export default function FilterBar({ filter, onFilterChange, sortOrder, onSortChange, search, setSearch }: FilterBarProps & { onSortChange: (sortOrder: SortOrder) => void }) {
  return (
    <>
      <div className="filter-bar" id="filter-bar">
        <button data-active={filter === 'all'} onClick={() => onFilterChange('all')}>All</button>
        <button data-active={filter === 'active'} onClick={() => onFilterChange('active')}>Active</button>
        <button data-active={filter === 'completed'} onClick={() => onFilterChange('completed')}>Completed</button>
      </div>
      <input
        id="search-input"
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select name="sort" id="sort-order" value={sortOrder} onChange={(e) => onSortChange(e.target.value as SortOrder)}>
        <option value="newest">Recently Added</option>
        <option value="oldest">Oldest</option>
        <option value="high">Priority: High to Low</option>
        <option value="low">Priority: Low to High</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </>
    
  );
}
