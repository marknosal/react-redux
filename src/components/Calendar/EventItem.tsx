import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { 
    deleteUserEvent, 
    updateUserEvent, 
    UserEvent 
} from "../../redux/user-events";

interface Props {
    event: UserEvent
}

const EventItem: React.FC<Props> = ({ event }) => {
    const appDispatch = useAppDispatch();
    const handleDeleteClick = () => {
        appDispatch(deleteUserEvent(event.id));
    };

    const [editable, setEditable] = useState(false)
    const handleTitleClick = () => {
        setEditable(true);
    };

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (editable) {
            inputRef.current?.focus();
        }
    }, [editable]);

    const [title, setTitle] = useState(event.title);
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.target.value);
    };

    const handleBlur = () => {
        if (title !== event.title) {
            appDispatch(updateUserEvent({
                ...event,
                title
            }));
        }
        setEditable(false);
    };

    return (
        <div key={event.id} className='calendar-event'>
            <div className='calendar-event-info'>
                <div className='calendar-event-time'>10:00 - 12:00</div>
                <div className='calendar-event-title'>
                    {editable ? (
                        <input 
                            type='text' 
                            ref={inputRef} 
                            value={title} 
                            onChange={handleInputChange} 
                            onBlur={handleBlur}
                        />
                    ) : (
                        <span onClick={handleTitleClick}>{event.title}</span>
                    )}
                </div>
            </div>
            <button className='calendar-event-delete-button' onClick={handleDeleteClick}>
                &times;
            </button>
        </div>
    );
};

export default EventItem;