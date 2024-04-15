import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDates } from "../../reducers/todo";
import { openCalendar } from "../../reducers/event";
import uuid from "react-uuid";
import {
    startOfMonth, endOfMonth, startOfWeek,
    endOfWeek, isSameMonth, isSameDay,
    addDays, format, addMonths,
} from "date-fns";
import style from "./Calendar.module.css";
const RenderHeader = ({ currentMonth }) => {
    return (
        <div className={style.row}>
            {currentMonth.toLocaleString('en-US', { month: 'long' })}
        </div>

    );
}
const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
    const MonthStart = startOfMonth(currentMonth);
    const MonthEnd = endOfMonth(MonthStart);
    const StartDate = startOfWeek(MonthStart);
    const EndDate = endOfWeek(MonthEnd);
    const rows = [];
    let days = [];
    let day = StartDate;
    let formattedDate = '';

    while (day <= EndDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            const cloneDay = day;
            days.push(
                <div className={`col cell ${!isSameMonth(day, MonthStart) ? `${style.disabled}` :
                    isSameDay(day, selectedDate) ? `${style.selected}` : `${style.notvalid}`}`}
                    key={day} onClick={() => onDateClick(cloneDay)}>
                    <span
                        className={format(currentMonth, 'M') !== format(day, 'M') ? `${style.notvalid}`
                            : isSameMonth(day, MonthStart) && isSameDay(day, selectedDate) ? `${style.today}` : ""}>
                        {formattedDate}
                    </span>
                </div>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className={style.row} key={day}>
                {days}
            </div>
        );
        days = [];
    }
    return <div className={style.rows}>{rows}</div>;

};

export const Calendar = () => {
    const dispatch = useDispatch();

    const isOpenCalendar = useSelector((state) => state.event.CalendarOpen);
    const currentDate = new Date();
    const currentDateClone = new Date();
    const [selectedDate, setselectedDate] = useState(new Date());

    const DateSelect = (day) => {
        setselectedDate(day);
        dispatch(setDates(day.toISOString()));
    }
    useEffect(() => {
        setselectedDate(new Date());
    }, [isOpenCalendar]);

    let currentMonth = new Date(format(currentDate, 'yyyy'));
    let Months = [];
    const monthRef = useRef(null);

    const handleScroll = () => {

        monthRef.current.scrollTop = 100;
        monthRef.current.scrollLeft = 50;
    };
    for (let i = 0; i < 12; i++) {
        Months.push(
            <div className={style.item} key={uuid()}
                ref={
                    format(currentMonth, 'MM') === format(currentDateClone, 'MM')
                        ? monthRef
                        : null
                }
                onScroll={handleScroll}>
                <RenderHeader currentMonth={currentMonth} />
                <RenderCells currentMonth={currentMonth} selectedDate={selectedDate}
                    onDateClick={DateSelect} />
            </div>
        );
        currentMonth = addMonths(currentMonth, 1);
    }
    useEffect(() => {
        if (monthRef.current !== null) {
            monthRef.current.scrollIntoView({ behavior: 'auto' });
        }
    }, [isOpenCalendar]);
    const scrollCurrentMonth = () => {
        if (monthRef.current !== null) {
            monthRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            {isOpenCalendar ? (
                <div className={style.container} onClick={() => dispatch(openCalendar())}>
                    <div className={style.calendar} onClick={(e) => e.stopPropagation()}>
                        <div className={style.head} onClick={() => {
                            setselectedDate(new Date());
                            scrollCurrentMonth();
                        }}>
                            <div className={style.text}>
                                {currentDate.toLocaleString('en-US', {
                                    month: 'long',
                                })}
                                {format(currentDate, " dd")}
                            </div>
                            <div className={style.year}>
                                {format(currentDate, 'yyyy')}
                            </div>
                        </div>
                        <div className={style.body}>
                            <div className={style.list}>
                                {Months}
                            </div>
                        </div>
                    </div>

                </div>
            ) : null}
        </>

    );

}