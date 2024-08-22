import {classNames} from "shared/lib/classNames/classNames";
import cls from './TagsPopup.module.scss'
import {TagItem} from "widgets/TagsPopup/ui/TagItem";

interface TagsPopupProps {
    className?: string;
    tagsList: string[];
    onTagChange: (tagName: string, isAdding: boolean) => void
}

export const TagsPopup = ({className, tagsList, onTagChange}: TagsPopupProps) => {

    return (
        <div className={classNames(cls.TagsPopup, {}, [className])}>
                {tagsList.map((item, index) =>
                    <TagItem key={index} tagName={item} onTagChange={onTagChange} />
                )}
        </div>
    );
};


