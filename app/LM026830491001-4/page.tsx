"use client";


import Footer from "./components/footer";
import HerbForm from "./components/HerbForm";

import { Samunprai } from "./data/samunprai";

import { useState } from "react";


export default function ToDoList() {

    const toDoList = [...Samunprai];
    const [tasks, setTasks] = useState(Samunprai); 
    const [type, setType] = useState(null);


    const [editingTask, setEditingTask] = useState(null);

    const resetEditingTask = () => setEditingTask(null);

    const filteredTasks = type == null ? tasks : tasks.filter((item) => item.type === type);

    // setTasks([toDoList]);

    

    const Status = (type: Number) => {
        if (type = 1) {
            return <span style={{ color: "green" }}>ใช้ภายใน</span>
        }
        else if (type = 2) {
            return <span style={{ color: "red" }}>ใช้ภายนอก</span>
        }else 
            return <span style={{ color: "blue" }}>ใช้ทั่งภายในและภายนอก</span>
    } 

    
    

    const updateTask = (id, name, type, detail) => {
        setTasks(
            tasks => tasks.map(
                t => t.id === id ?
                {...t, 
                name: name,
                detail: detail,
                type: type}
                :t
            )
        );
        
    }

    const onDelete = (id) => {
       // alert(`Want to delete? AGEMASEN ${id}`);
       const updatedTasks = tasks.filter(
        item => item.id !== id
       );
       setTasks(updatedTasks);
    }

    // const toDoList = [...dataitem, ...appendItem];

    const tmpTDL = filteredTasks.map((item, index) => {
        const {id, name, detail, type, supplier} = item;
        return (
        <div className="max-w-md mx-auto border border-8 border-pink-400 rounded-sm p-1 m-4 mt-20 p-8 bg bg-pink-400 font-bold text-slate-50 dark:text-white" key={id}>
        <span>ชื่อสมุนไพร: {name}</span><br />
        <span>รายระเอียด: {detail}</span><br />
        <span>ผู้ผลิต: {supplier}</span><br />
        <span>ประเภท: {Status(type)}</span>

        
        
        <div className="flex gap-2 mt-2">
            
            {/* Delete */}
        <button onClick={(e) =>onDelete(id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
        </div>
        </div>
        );
    }
    );


    const addTask = (tasks, type, detail) => {
        const newTask = {
            id: tasks.length + 1,
            name: name,
            detail: detail,
            date_added: "13/08/2569",
            author: "Natchaphon",
            type: type
        };

        setTasks([...tasks, newTask]);
       
        console.log("เพิ่มงานเรียบร้อยแล้ว");
    }



    return (
        <>  
        <section className="relative bg-center flex items-center justify-center  mt-10 mb-1 repeat-" style={{ backgroundImage: `url('./images/BackgroundGray.jpg')` }}>

        

        <div>
         <div className="flex justify-center gap-3 space-y-3 flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="border border-8 border-pink-400 rounded-sm p-1 m-4 mt-20 mb-1 p-8  font-bold text-slate-50 dark:text-white">
              
            <div className="items-center justify-center">
                <HerbForm 
                    addTask={addTask} 
                    editingTask={editingTask}
                    updateTask={updateTask}
                    resetEditingTask={resetEditingTask}
                />

                
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