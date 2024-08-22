import React, {useState} from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {FiltersBar} from "widgets/FiltersBar";
import {BookList} from "widgets/BookList";



const App = () => {
    const [sidebarToggle, setSidebarToggle] = useState(true)

    const {theme} = useTheme();
    const toggleSidebar = () => {
        setSidebarToggle((state) => !state)
    }

    return (
            <div className={classNames('app', {}, [theme])}>
                <Navbar/>
                <div className="content-page">
                    <div className="content">
                        <BookList></BookList>
                    </div>
                </div>
            </div>
    );
};

export default App;
