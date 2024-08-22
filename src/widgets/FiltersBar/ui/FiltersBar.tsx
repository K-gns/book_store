import {classNames} from "shared/lib/classNames/classNames";
import cls from './FiltersBar.module.scss'
import SortArrow from "shared/assets/icons/sortArrow.svg"
import TagsArrow from "shared/assets/icons/tagsArrow.svg"

interface FiltersBarProps {
    className?: string;
    tagsList: string[];
}

export const FiltersBar = ({className, tagsList}: FiltersBarProps) => {

    return (
        <div className={classNames(cls.FiltersBar, {}, [className])}>
            <p className={cls.sortHeader}><span>price</span> <SortArrow /></p>
            <p className={cls.sortHeader}><span>author</span> <SortArrow /></p>
            <p className={cls.sortHeader}><span>date</span> <SortArrow /></p>
            <p className={cls.sortHeader}><span>tags</span> <SortArrow /></p>
            <p className={cls.sortHeader}><span>reset rules</span> <TagsArrow/></p>
        </div>
    );
};


