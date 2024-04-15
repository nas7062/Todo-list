import { useSelector } from "react-redux"
import style from "./Section.module.css";
import Post from "../Post/Post";

export default function Section() {
    const todos = useSelector((state) => state.todos.todos);
    const hideDones = useSelector((state) => state.event.hideDone);
    const isDark = useSelector((state) => state.theme.isDarkMode);
    return (

        <div className={`${!isDark ? style.box : style.darkbox}`}>
            {todos.filter((el) => {
                if (hideDones) {
                    return el.isDone === false;
                }
                else
                    return el;
            })
                .map((el) => {
                    return (
                        <Post {...el} />
                    );
                })
            }
        </div>
    );

}