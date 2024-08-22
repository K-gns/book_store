import {classNames} from "shared/lib/classNames/classNames";
import cls from './BookList.module.scss'
import {BookItem} from "widgets/BookItem";
import {FiltersBar} from "widgets/FiltersBar";
import React, {useEffect, useMemo, useState} from "react";

interface BookListProps {
    className?: string;
}

const bookMockData = [
    {
        title: "Plastic: A Novel",
        author: "Scott Guild",
        date: "February 2024",
        price: 420,
        tags: ["ClimateChange", "Sci-Fi"]
    },
    {
        title: "Space Oddities: The Mysterious Anomalies Challenging Our Understanding of the Universe",
        author: "Harry Cliff",
        date: "March 2024",
        price: 542,
        tags: ["ClimateChange", "History"]
    },
    {
        title: "H is for Hope: Climate Change from A to Z",
        author: "Elizabeth Kolbert",
        illustrator: "Wesley Allsbrook",
        date: "March 2024",
        price: 674,
        tags: ["ClimateChange", "Technology"]
    },
    {
        title: "The Exquisite Machine: The New Science of the Heart",
        author: "Sian E. Harding",
        date: "February 2024",
        price: 981,
        tags: ["Health", "Biochemistry" ]
    },
    {
        title: "Book with many many tags...",
        author: "Tagster E. Tag",
        date: "August 2024",
        price: 521,
        tags: ["Health", "Biochemistry", "ClimateChange", "Technology", "Sci-Fi", "History", "TestTag1", "TestTag2", "TestTag3" ]
    },
]

export const BookList = ({className}: BookListProps) => {
    const [bookData, setBookData] = useState(bookMockData)
    const [tagsList, setTagsList] = useState([])
    const [activeTagsList, setActiveTagsList] = useState([])

    useEffect(() => {
        let tagsSet = new Set()
        bookData.forEach((item) => {
            item.tags.forEach((tag) => {
                tagsSet.add(tag)
            })
        })

        setTagsList(Array.from(tagsSet))
    }, [])

    const filteredBooks = useMemo( () => {
        return bookMockData.filter((item) => {
            if (activeTagsList.length > 0) {
                return activeTagsList.every((tag) => item.tags.includes(tag))
            } else {
                return true
            }
        });
    }, [activeTagsList]);

    const onTagChangeHandler = (tagName: string, isAdding: boolean) => {
        if (isAdding) {
            setActiveTagsList([...activeTagsList, tagName])
        } else {
            setActiveTagsList(activeTagsList.filter((item) =>
                item !== tagName
            ))
        }
    }



    return (
        <div className={classNames(cls.BookList, {}, [className])}>
            <FiltersBar tagsList={tagsList} onTagChange={onTagChangeHandler}/>
            <div className={cls.BookItems}>
                {
                    filteredBooks.map((item, index) =>
                            <BookItem key={index} index={index + 1}
                                title={item.title}
                                author={item.author}
                                date={item.date}
                                price={item.price}
                                tags={item.tags}
                            />)
                }
            </div>
        </div>
    );
};


