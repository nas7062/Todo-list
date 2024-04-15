import { useDispatch, useSelector } from "react-redux";

import { doneFilterTodo } from "../../reducers/todo";
import Toggle from "../Toggle/Toggle";
import style from "./Sidebar.module.css";
export default function Sidebar() {
    const dispatch = useDispatch();
    const isHide = useSelector((state) => state.todos.isHide);
    const isDark = useSelector((state) => state.theme.isDarkMode);
    return (
        <nav className={`${!isDark ? style.Side : style.darkbox}`}>

            <div className={style.main} onClick={() => {
                dispatch(doneFilterTodo());
            }}>


                <input type="checkbox" checked={isHide} />
                <label > HIDE DONE!</label>
            </div>
            <Toggle />
        </nav>
    );
};