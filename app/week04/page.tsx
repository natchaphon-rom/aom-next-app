"use client";

import Header from "../compronents/header";
import Footer from "../compronents/footer";
import { dataitem, appendItem } from "../data/dataitem";
import { useState } from "react";

export default function ToDoList() {

    const toDoList = [...dataitem, ...appendItem];
    const [tasks, setTasks] = useState(toDoList); 
    const [numOfTask, SetNoft] = useState(tasks.length);
    const [status, setStatus] = useState(null);

    const filteredTasks = status == null ? tasks : tasks.filter((item) => item.status === status);

    // setTasks([toDoList]);

    let name = "Natchaphon Aom";
    const major = "เทคโนโลยีสารสนเทศ (Information Technology)";
    let classYear = 2;
    let classSec = "ทส.ท./ทส.ต."
    let active = true;

    const isActive = (act: boolean) => {
        if (act)
            return <span style={{ color: "green" }}>กำลังศึกษาอยู่</span>
        return <span style={{ color: "red" }}>ไม่ได้เป็นนักศึกษา</span>
    }
    const Status = (status: boolean) => {
        if (status)
            return <span style={{ color: "green" }}>เสร็จสิ้น</span>
        return <span style={{ color: "red" }}>ยังไม่เสร็จ</span>
    }

    // const toDoList = [...dataitem, ...appendItem];

    const tmpTDL = filteredTasks.map((item, index) => {
        const {id, title, desc, date_added, author, status} = item;
        return (
        <div className="max-w-md mx-auto border border-8 border-pink-400 rounded-sm p-1 m-4 mt-20 p-8 bg bg-pink-400 font-bold text-slate-50 dark:text-white" key={id}>
        <span>หัวข้อ: {title}</span><br />
        <span>คำอธิบาย: {desc}</span><br />
        <span>วันที่เพิ่ม: {date_added}</span><br />
        <span>ผู้เขียน: {author}</span><br />
        <span>สถานะ: {Status(status)}</span>
        </div>
        );
    }
    );


    const addTask = () => {
        const newTask = {
            id: tasks.length + 1,
            title: "ทดสอบเพิ่มงาน",
            desc: "รายระเอียดของงานที่เพิ่ม",
            date_added: "13/08/2569",
            author: "Natchaphon",
            status: true
        };

        setTasks([...tasks, newTask]);
        SetNoft(tasks.length + 1);
        console.log("เพิ่มงานเรียบร้อยแล้ว");
    }

    console.log(`Name: ${name}`);
    console.log(`Major: ${major}`);

    return (
        <>  
        <Header />
        <section className="relative bg-center flex items-center justify-center  mt-10 repeat-" style={{ backgroundImage: `url('./images/BackgroundGray.jpg')` }}>
        <div className="max-w-md mx-auto border border-8 border-pink-400 rounded-sm p-1 m-4 mt-20 mb-1 p-8 bg bg-pink-400">
        <h3 className="text-2xl font-bold text-slate-50 dark:text-white">To Do List</h3><br></br>
        <p className="font-bold text-slate-50 dark:text-white">
            ชื่อ-นามสกุล: {name} <br></br>
            สาขาวิชา: {major} <br></br>
            กลุ่มเรียน/ชั้นปี: {classSec} / {classYear} <br></br>
            สถานะภาพนักศึกษา: {isActive(active)} <br></br>
        </p>
        </div>
        
        </section>
        <section className="relative bg-center flex items-center justify-center  mt-10 mb-1 repeat-" style={{ backgroundImage: `url('./images/BackgroundGray.jpg')` }}>

        
        <div>
         <div className="flex justify-center gap-3 space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="border border-8 border-pink-400 rounded-sm p-1 m-4 mt-20 mb-1 p-8  font-bold text-slate-50 dark:text-white">
                <div className="flex justify-center rounded-xl bg-blue-400 text-slate-50 dark:text-white p-2 m-4 mt-4 mb-4 p-4 py-5">งานที่ต้องทำ {numOfTask}x รายการ</div>
            <div>
                <button onClick= {addTask} className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded m-4">
                    เพิ่มงาน
                </button>
            </div>
            <div>
                <button onClick={() => setStatus(null)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">[A] All</button>
                <button onClick={() => setStatus(true)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4">[C] Completed</button>
                <button onClick={() => setStatus(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4">[P] Pending</button><br />
            </div>
            </div>
        </div>
        <div className="flex justify-center gap-3 space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tmpTDL}
        
        </div>
        </div>
        </section>
        <Footer />
        </>
    )
}