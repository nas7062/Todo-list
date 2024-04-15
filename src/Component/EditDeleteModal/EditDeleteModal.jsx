import { useDispatch, useSelector } from "react-redux";
import { modalType, openModal } from "../../reducers/event";
import { deleteTodo } from "../../reducers/todo";
import style from "./EditDeleteModal.module.css";
export default function EditDeleteModal({ id, OpenModalHandler }) {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div className={style.container} onClick={OpenModalHandler}>
                <div className={style.view}>
                    <button className={style.btn} onClick={() => {
                        dispatch(openModal(id));
                        dispatch(modalType("edit"));
                        OpenModalHandler();
                    }}>
                        Edit
                    </button>
                    <button className={style.btn} onClick={() => {
                        dispatch(deleteTodo(id));
                        OpenModalHandler();
                    }}>
                        Delte
                    </button>
                </div>
            </div>
        </>

    );
}