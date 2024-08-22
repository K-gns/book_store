import {classNames} from "shared/lib/classNames/classNames";
import cls from './BookItem.module.scss'

interface BookItemProps {
    className?: string;
    index: number;
    title: string;
    author: string;
    date: string;
    price: number;
    tags: string[];
}

export const BookItem = ({className, ...book}: BookItemProps) => {

    return (
        <div className={classNames(cls.BookItem, {}, [className])}>
            <div className={cls.BookItemContent}>
                <div className={cls.BookInfo}>
                    <h1 className={cls.BookHeader}>{book.index} {book.title}</h1>
                    <div className={cls.extraInfoBlock}>
                        <p className={cls.BookInfoRow}>by {book.author}</p>
                        <p className={cls.BookInfoRow}>{book.date}</p>
                        <p className={cls.BookInfoRow}>{book.price}$</p>
                    </div>
                </div>

                <div className={cls.BookTags}>
                    {book.tags.map((item, index) =>
                       <div key={index} className={cls.Tag}>{item}</div>
                    )}
                </div>
            </div>
        </div>
    );
};


