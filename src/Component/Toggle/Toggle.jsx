import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../reducers/theme";
import style from "./Toggle.module.css";
import { useState } from "react";

export default function Toggle() {
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.theme.isDarkMode);
    return (
        <div onClick={() => {dispatch(toggleTheme());}}>
            <button className={style.btn} >{isDark ? "WHITE-MODE" : "DARK-MODE"}</button>
        </div>
    );
}