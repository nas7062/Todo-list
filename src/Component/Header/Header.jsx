import { useDispatch, useSelector } from "react-redux";
import { isHideTodo, resetTodo } from "../../reducers/todo";
import { modalType, openModal } from "../../reducers/event";
import style from "./Header.module.css";
export default function Header() {
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.theme.isDarkMode);
    return (
        <>
            <div className={`${!isDark ? style.box : style.darkbox}`}>
                <h1 >TO DO LIST</h1>
                <button className={style.btn} onClick={() => {
                    dispatch(openModal());
                    dispatch(modalType("create"));
                }}> 추가하기 </button>
            </div>
        </>

    );
}