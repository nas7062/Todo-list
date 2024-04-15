import { format } from "date-fns";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../../reducers/todo";
import EditDeleteModal from "../EditDeleteModal/EditDeleteModal";
import style from "./Post.module.css";
export default function Post({ id, title, content, tag, tagColor, isDone, date }) {
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.theme.isDarkMode);
    const today = parseInt(format(new Date(), 'yyyy-MM--dd'));
    const targetDate = date;
    const TimeDifference = new Date(targetDate) - new Date(today) / 1000;
    const DaysDifference = Math.floor(TimeDifference / (1000 * 60 * 60 * 24)) - 19801;

    const D_day = DaysDifference === 0 ? "D-day" :
        DaysDifference > 0 ? `D-${DaysDifference}` : `D+${Math.abs(DaysDifference)}`;

    console.log(`daysDifference: ${DaysDifference}`);
    const [isModal, setisModal] = useState(false);
    const OpenModalHandler = () => {
        setisModal(!isModal);
    }

    return (
        <div className={`${!isDark ? style.PostContainer : style.DarkPost}`}>
            <div key={id}>
                <div className={style.title}>
                    <h3>{title}
                        <p className={style.date}>{D_day}</p>
                    </h3>
                    <div className={style.btn} onClick={() => OpenModalHandler()}>
                        ...
                    </div>
                </div>
                <div className={style.content}>
                    {content}
                    {isModal ? (
                        <EditDeleteModal id={id} OpenModalHandler={OpenModalHandler} />
                    ) : null}
                </div>
                <div className={style.PostFooter} color={tagColor}>
                    <div>
                        <div>
                            <input type="checkbox" checked={isDone} onClick={() => {
                                dispatch(updateTodo({
                                    id,
                                    title,
                                    content,
                                    tag,
                                    tagColor,
                                    isDone: !isDone,
                                }))
                            }} />
                            <label >{isDone ? "Done" : "Active"}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
