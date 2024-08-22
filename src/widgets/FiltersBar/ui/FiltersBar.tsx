import {classNames} from "shared/lib/classNames/classNames";
import cls from './FiltersBar.module.scss'
import SortArrow from "shared/assets/icons/sortArrow.svg"
import TagsArrow from "shared/assets/icons/tagsArrow.svg"
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import {useState} from "react";
import {TagsPopup} from "widgets/TagsPopup";

interface FiltersBarProps {
    className?: string;
    tagsList: string[];
    onTagChange: (tagName: string, isAdding: boolean) => void
}

export const FiltersBar = ({className, tagsList, onTagChange}: FiltersBarProps) => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);
    const popupOpen = Boolean(anchor)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };


    return (
        <div className={classNames(cls.FiltersBar, {}, [className])}>
            <p className={cls.sortHeader}><span>price</span> <SortArrow /></p>
            <p className={cls.sortHeader}><span>author</span> <SortArrow /></p>
            <p className={cls.sortHeader}><span>date</span> <SortArrow /></p>
            <p className={cls.sortHeader} onClick={handleClick}><span>tags</span> <TagsArrow/></p>
            <p className={cls.sortHeader} ><span>reset rules</span> </p>

            <BasePopup open={popupOpen} anchor={anchor}>
                <TagsPopup tagsList={tagsList} onTagChange={onTagChange} />
            </BasePopup>
        </div>
    );
};


