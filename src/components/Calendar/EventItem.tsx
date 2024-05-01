import React from "react";
import { useAppDispatch } from "../../redux/store";
import { deleteUserEvent, UserEvent } from "../../redux/user-events";

interface Props {
    event: UserEvent
}

const EventItem: React.FC<Props> = ({ event }) => {
    const appDispatch = useAppDispatch();
    const handleDeleteClick = () => {
        appDispatch(deleteUserEvent(event.id));
    };

    return (
        <div key={event.id} className='calendar-event'>
            <div className='calendar-event-info'>
                <div className='calendar-event-time'>10:00 - 12:00</div>
                <div className='calendar-event-title'>
                    {event.title}
                </div>
            </div>
            <button className='calendar-event-delete-button' onClick={handleDeleteClick}>
                &times;
            </button>
        </div>
    );
};

export default EventItem;