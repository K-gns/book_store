import {classNames} from "shared/lib/classNames/classNames";
import cls from './FiltersBar.module.scss'
import SortArrow from "shared/assets/icons/sortArrow.svg"
import TagsArrow from "shared/assets/icons/tagsArrow.svg"
import {useState} from "react";
import {TagsPopup} from "widgets/TagsPopup";

interface FiltersBarProps {
    className?: string;
    tagsList: string[];
    onTagChange: (tagName: string, isAdding: boolean) => void
    onSortChange: (sortName: string, isDescending: boolean) => void
    onReset: () => void
}

export const FiltersBar = ({className, tagsList, onTagChange, onSortChange, onReset}: FiltersBarProps) => {
    const [anchor, setAnchor] = useState<null | HTMLElement>(null);
    const [isDescending, setIsDescending] = useState(false)
    const [activeSort, setActiveSort] = useState<string | null>(null)
    const popupOpen = Boolean(anchor)


    const handleTagsClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(anchor ? null : event.currentTarget);
    };

    const handleSortsClick = (sortName: string) => {
        setActiveSort(sortName);
        const newIsDescending = activeSort === sortName ? !isDescending : isDescending;
        onSortChange(sortName, newIsDescending);
        setIsDescending(newIsDescending)

    };

    return (
        <div className={classNames(cls.FiltersBar, {}, [className])}>
            <p className={classNames(cls.sortHeader, {[cls.activeSort] : activeSort === "price"})}
               onClick={() => handleSortsClick("price")}>
                <span>price</span>
                <SortArrow
                    className={classNames(cls.SortArrow, {[cls.descending]: activeSort === "price" && isDescending})}
                />
            </p>
            <p className={classNames(cls.sortHeader, {[cls.activeSort] : activeSort === "author"})}
               onClick={() => handleSortsClick("author")}>
                <span>author</span>
                <SortArrow
                    className={classNames(cls.SortArrow, {[cls.descending]: activeSort === "author" && isDescending})}
                />
            </p>
            <p className={classNames(cls.sortHeader, {[cls.activeSort] : activeSort === "date"})}
               onClick={() => handleSortsClick("date")}>
                <span>date</span>
                <SortArrow
                    className={classNames(cls.SortArrow, {[cls.descending]: activeSort === "date" && isDescending})}
                />
            </p>
            <p className={cls.sortHeader} onClick={handleTagsClick}>
                <span>tags</span> <TagsArrow/>
            </p>
            <p className={cls.sortHeader} onClick={onReset}><span>reset rules</span> </p>

            <TagsPopup popupOpen={popupOpen} anchor={anchor} tagsList={tagsList} onTagChange={onTagChange} />
        </div>
    );
};


