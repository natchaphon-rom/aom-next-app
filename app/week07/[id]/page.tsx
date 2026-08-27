import Link from "next/link";
import { shops } from "../component/shopitem";
import Loading from "../component/Loading";
import { Suspense } from "react";
import ShopList from "../component/ShopList";

export default async function ShopDetail({ params }){
    const Status = (status: boolean) => {
        if (status)
            return <span style={{ color: "green" }}>เปิด</span>
        return <span style={{ color: "red" }}>ไม่เปิด</span>
    }


    const {id} = await params;

    const shop = shops.find(
        item => item.id === Number(id)
        
    )
    return(
        <>
        <Suspense fallback={<Loading />}>
                <div className="w-xl mx-auto p-6">
                    <h1 className="text-3xl font-bold">
                    Shop Detail
                    </h1>

                <div
                key={shop.id}
                className="border rounded-lg p-4 m-4"
                >
                <p className="mt-4 font-semibold">
                ID: {shop.id}
                </p>
                <p className="my-4">
                Title: {shop.title}
                </p>
                <p className="my-4">
                Open Status: {Status(shop.openstatus)}
                </p>
            </div>

            <Link
                href="/week07"
                className="bg-gray-600 text-white px-4 py-2 rounded"
            >Back</Link>

            </div>
        </Suspense>
        </>
    );
}