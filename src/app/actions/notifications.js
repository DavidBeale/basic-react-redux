import moment from 'moment';

export const LOAD_NOTIFICATIONS = 'LOAD_NOTIFICATIONS';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';

/**
 * Mock getting data from an api.
 */
export const loadNotifications = () => {
    const payload = [
            { id: 1, title: 'Search completed', acknowledged: false },
            { id: 2, title: 'Search failed', acknowledged: false },
            { id: 3, title: 'Advanced search completed', acknowledged: false },
            { id: 4, title: 'Routine finished', acknowledged: false },
            { id: 4, title: 'Routine finished', acknowledged: false },
            { id: 5, title: 'New data received', acknowledged: false },
            { id: 6, title: 'Search completed', acknowledged: false },
            { id: 7, title: 'Search failed', acknowledged: false },
            { id: 8, title: 'Advanced search completed', acknowledged: false },
            { id: 9, title: 'Routine finished', acknowledged: false },
            { id: 10, title: 'Routine finished', acknowledged: false },
            { id: 11, title: 'New data received', acknowledged: false },
            { id: 12, title: 'Search completed', acknowledged: false },
            { id: 13, title: 'Search failed', acknowledged: false },
            { id: 14, title: 'Advanced search completed', acknowledged: false },
            { id: 15, title: 'Routine finished', acknowledged: true },
            { id: 16, title: 'Routine finished', acknowledged: true },
            { id: 17, title: 'New data received', acknowledged: true },
    ];

    return {
        type: LOAD_NOTIFICATIONS,
        payload: payload.map((item, index) => ({ ...item, date: moment().subtract(index, 'days') }))
    };
}


export const toggleStatus = (id) => {
    return {
        type: TOGGLE_STATUS,
        payload: id,
    };
}
