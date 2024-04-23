import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDates, addTodo, updateTodo, resetTodo } from "../../reducers/todo";
import { openModal, openCalendar } from "../../reducers/event";
import style from "./CreateModal.module.css";
export default function CreateModal() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const selected = useSelector((state) => state.todos.selected);
    const date = useSelector((state) => state.todos.newDate);
    const isOpen = useSelector((state) => state.event.isOpen);
    const target = useSelector((state) => state.event.target);
    const type = useSelector((state) => state.event.type);

    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const titleHandler = (e) => {
        settitle(e.target.value);
    }
    const contentHandler = (e) => {
        setcontent(e.target.value);
    }

    const newTodos = {
        id: todos.length,
        title,
        content,
        tag: selected,
        isDone: false,
        date,
    };
    const editTodos = todos.find((el) => el.id === target);
    const updateTodos = {
        ...editTodos,
        title,
        content,
        tag: selected,
        date,
    };

    const CleanModal = () => {
        settitle("");
        setcontent("");
        dispatch((openModal()));
        dispatch(setDates(null));
        return null;
    }
    useEffect(() => {
        if (type === 'create') {
            settitle("");
            setcontent("");
            dispatch(setDates(null));
        }
        if (!editTodos)
            return;

        settitle(editTodos.title);
        setcontent(editTodos.content);
        dispatch(setDates(editTodos.date));

    }, [type, editTodos]);

    return (
        <>
            {isOpen ? (
                <div className={style.container} onClick={() => {
                    dispatch(openModal());
                    dispatch(resetTodo());
                }}
                >
                    <div className={style.view} onClick={(e) => e.stopPropagation()}>
                        <div className={style.buttonBox}>
                            <button className={style.btn} onClick={() => {
                                {
                                    if (type === "create") {
                                        dispatch(addTodo(newTodos));
                                        CleanModal();
                                    }
                                    else {
                                        dispatch(updateTodo(updateTodos));
                                        CleanModal();
                                    }
                                }
                            }}>{type}</button>
                            <button className={style.btn} onClick={() => dispatch(openModal())}>Cancel</button>
                        </div>
                        <div className={style.inputBox}>
                            <h2>Title</h2>
                            <textarea alue={title} onChange={titleHandler}></textarea>
                        </div>
                        <div className={style.inputBox}>
                            <h2>Descript</h2>
                            <textarea value={content} onChange={contentHandler}></textarea>
                        </div>
                        <div className={style.inputBox}>
                            <h2>Date</h2>
                            <div className={style.footer} onClick={() => dispatch(openCalendar())}>
                                <p>{date ? date : "YYYY - MM - DD"}</p>

                            </div>
                        </div>

                    </div>
                </div>
            ) : null}
        </>


    );
};