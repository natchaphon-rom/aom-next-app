import Header from "../compronents/header";
import Footer from "../compronents/footer";
import { toDoList } from "../data/toDoList";

export default function ToDoList() {

    
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
    const status = (status: boolean) => {
        if (status)
            return <span style={{ color: "green" }}>เสร็จสิ้น</span>
        return <span style={{ color: "red" }}>ยังไม่เสร็จ</span>
    }

    const tmpTDL = toDoList.map((item, index) => 
        <>
        <div className="max-w-md mx-auto border border-8 border-pink-400 rounded-sm p-1 m-4 mt-20 p-8 bg bg-pink-400 font-bold text-slate-50 dark:text-white" key={index}>
        <span>หัวข้อ: {item.title}</span><br />
        <span>คำอธิบาย: {item.desc}</span><br />
        <span>วันที่เพิ่ม: {item.date_added}</span><br />
        <span>ผู้เขียน: {item.author}</span><br />
        <span>สถานะ: {status(item.status)}</span>
        </div>
        </>
    );

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
        <div className="flex justify-center gap-3">
            {tmpTDL}
        </div>
        </section>
        <Footer />
        </>
    )
}