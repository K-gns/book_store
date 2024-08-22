import {classNames} from "shared/lib/classNames/classNames";
import cls from './TagsPopup.module.scss'
import {useState} from "react";

interface TagItemProps {
    className?: string;
    tagName: string;
    onTagChange: (tagName: string, isAdding: boolean) => void
}

export const TagItem = ({className, tagName, onTagChange}: TagItemProps) => {
    const [active, setActive] = useState(false)

    const handleTagClick = () => {
        onTagChange(tagName, !active)
        setActive(!active)
    }

    return (
        <div
            className={classNames(cls.popupTag, {}, [active ? cls.active : ""])}
            onClick={handleTagClick}
        >
            {tagName}
        </div>
    );
};


