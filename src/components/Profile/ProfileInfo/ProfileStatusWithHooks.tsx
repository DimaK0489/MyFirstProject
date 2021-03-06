import React, {ChangeEvent, useEffect, useState} from "react";
import {ProfileStatusType} from "../../../redux/Types";

export const ProfileStatusWithHooks = React.memo((props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>("")

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activatedMode = () => {
        setEditMode(true)
    }
    const deactivatedMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <>
            {!editMode &&
            <div>
                <b>Status: </b><span onDoubleClick={activatedMode}>{props.status || "-----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       onBlur={deactivatedMode}
                       autoFocus={true}
                       value={status}/>
            </div>
            }
        </>
    )
})




