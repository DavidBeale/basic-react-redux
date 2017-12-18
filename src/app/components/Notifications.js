import React, { Component } from 'react';
import moment from 'moment';

import '../../styles/Notifications.css';

class Notifications extends Component {

    constructor() {
        super();

        this.onAcknowledge = this.onAcknowledge.bind(this);
        this.onToggleAcknowledged = this.onToggleAcknowledged.bind(this);
    }

    componentDidMount() {
        this.props.loadNotifications();
    }

    onAcknowledge(event) {
        this.props.toggleStatus(Number(event.target.value))
    }

    onToggleAcknowledged() {
        this.props.toggleShowUnacknowledged();
    }

    render() {
        const { notificationItems, showUnacknowledged } = this.props.notifications;

        const items = notificationItems.filter(notification => showUnacknowledged || notification.acknowledged);

        return (
            <div className="notifications__wrapper">
                <div className="notifications__actions">
                    <button onClick={this.onDeleteAcknowledged} style={{ marginRight: '6px' }}>Delete acknowledged</button>
                    <button onClick={this.onAcknowledgeAll} style={{ marginRight: '6px' }}>Acknowledged all</button>
                    <button onClick={this.onToggleAcknowledged}>Toggle show unacknowledged</button>
                </div>
                <table className="notifications__table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{moment(new Date(item.date)).format('DD/MM/YYYY HH:MM')}</td>
                            <td>
                                <input type="checkbox" value={item.id} checked={item.acknowledged} onChange={this.onAcknowledge} />
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Notifications;
