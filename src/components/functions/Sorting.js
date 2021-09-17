import React from 'react';

export  const useSortableData = (users, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {

    let sortableItems = [...users];

    if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
        }
    if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
        });
    }
    return sortableItems;
    }, [users, sortConfig]);

    const requestSort = (key) => {

    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    };

return { users: sortedItems, requestSort, sortConfig };

};

