import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, {useState} from "react";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [sidebarToggle, setSideBarToggle] = useState(false)

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: sidebarToggle}, [className])}
        >
            <div className={cls.sidebarContainer}>
                <button onClick={() => setSideBarToggle(!sidebarToggle)}>toggle sidebar</button>
            </div>

        </div>)

}


