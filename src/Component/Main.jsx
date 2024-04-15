import { Calendar } from "./Calendar/Calendar";
import CreateModal from "./CreateModal/CreateModal";
import Header from "./Header/Header";
import Section from "./Section/Section";
import Sidebar from "./Sidebar/Sidebar";

export default function Main() {
    return (
        <>
            <Header />
            <Sidebar />
            <Section />
            <CreateModal type />
            <Calendar />
        </>
    );
}