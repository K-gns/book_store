import {classNames} from "shared/lib/classNames/classNames";
import cls from './TagsPopup.module.scss'
import {TagItem} from "widgets/TagsPopup/ui/TagItem";
import React from "react";
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

interface TagsPopupProps {
    className?: string;
    popupOpen: boolean;
    anchor: HTMLElement;
    tagsList: string[];
    onTagChange: (tagName: string, isAdding: boolean) => void
}

export const TagsPopup = ({className, tagsList, onTagChange, popupOpen, anchor}: TagsPopupProps) => {

    return (
        <BasePopup open={popupOpen} anchor={anchor}>
            <div className={classNames(cls.TagsPopup, {}, [className])}>
                {tagsList.map((item, index) =>
                    <TagItem key={index} tagName={item} onTagChange={onTagChange}/>
                )}
            </div>
        </BasePopup>
    );
};


