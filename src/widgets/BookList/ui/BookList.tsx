import {classNames} from "shared/lib/classNames/classNames";
import cls from './BookList.module.scss'
import {BookItem} from "widgets/BookItem";
import {FiltersBar} from "widgets/FiltersBar";
import React, {useEffect, useMemo, useState} from "react";

interface BookListProps {
    className?: string;
}

type Book = {
    title: string;
    author?: string;
    date?: string;
    price?: number;
    tags?: string[]
}

const bookMockData : Book[] = [
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
        tags: ["Health", "Biochemistry", "ClimateChange", "Technology", "Sci-Fi", "History"]
    },
]

export const BookList = ({className}: BookListProps) => {
    const [bookData, setBookData] = useState(bookMockData)
    const [tagsList, setTagsList] = useState([])
    const [activeTagsList, setActiveTagsList] = useState([])
    const [sortType, setSortType] = useState<string | null>(null)
    const [isSortDescending, setIsSortDescending] = useState(false)

    useEffect(() => {
        let tagsSet = new Set()
        bookData.forEach((item) => {
            item.tags.forEach((tag) => {
                tagsSet.add(tag)
            })
        })

        setTagsList(Array.from(tagsSet))
    }, [])


    const sortBooks = (books: Book[], sortType: string, isDescending: boolean) => {
        switch(sortType) {
            case 'price':
                return books.sort((a, b) => isDescending ? a.price - b.price : b.price - a.price)
            case 'author':
                return books.sort((a, b) => isDescending ? a.author.localeCompare(b.author): b.author.localeCompare(a.author))
            case 'date':
                // @ts-ignore
                return books.sort((a, b) => isDescending ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date))
            default:
                return books.sort((a, b) => a.title.localeCompare(b.title))
        }
    }

    const filteredAndSortedBooks = useMemo( () => {
        const filtered = bookMockData.filter((item) => {
            if (activeTagsList.length > 0) {
                return activeTagsList.every((tag) => item.tags.includes(tag))
            } else {
                return true
            }
        });

        return sortBooks(filtered, sortType, isSortDescending)
    }, [activeTagsList, sortType, isSortDescending]);

    const onTagChangeHandler = (tagName: string, isAdding: boolean) => {
        if (isAdding) {
            setActiveTagsList([...activeTagsList, tagName])
        } else {
            setActiveTagsList(activeTagsList.filter((item) =>
                item !== tagName
            ))
        }
    }

    const onSortChangeHandler = (sortName: string, isDescending: boolean) => {
        setSortType(sortName)
        setIsSortDescending(isDescending)
        console.log(sortName, isDescending)
    }

    const onReset = () => {
        setActiveTagsList([])
        setSortType(null)
    }



    return (
        <div className={classNames(cls.BookList, {}, [className])}>
            <FiltersBar tagsList={tagsList}
                        onTagChange={onTagChangeHandler}
                        onSortChange={onSortChangeHandler}
                        onReset={onReset}
            />
            <div className={cls.BookItems}>
                {
                    filteredAndSortedBooks.map((item, index) =>
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


