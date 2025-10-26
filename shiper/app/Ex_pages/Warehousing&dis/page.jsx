"use client"
import { Montserrat } from "next/font/google";
import Image from "next/image"

const  montrasset= Montserrat({
    subsets: ["latin"],
    weight: ["300", "400", "700"]
})

export default function Freight() {
    return (
        <div className="w-full">
            <Image
                src="/imgs/warehouse.jpg"
                height={100}
                width={100}
                alt="Freight Page"
                className="w-full sm:h-90 object-contain"
            />

            <div className="absolute mt-[-7rem] ml-2 sm:ml-5 font-mono text-3xl sm:text-5xl font-bold ">
              

            </div>
            <div className="flex-col flex justify-center items-center m-3">
                <Image
                    src="/imgs/warehouse.gif"
                    height={100}
                    width={100}
                    alt="Freight Page"
                    className="sm:h-90 "
                />
                <h1 className="text-2xl font-bold text-gray-900 font-sans"style={{fontVariant: "small-caps"}}>Warehousing & Distributon</h1>
                <p className="text-gray-900 flex text-center m-2 font-mono">Our warehousing and Distribution services provides safe, efficienct, and Scalable Storage for Your Goods<br />
                 </p>
                 <p className={`${montrasset.className} text-gray-900 text-[0.9rem] flex text-start`}
                 >  We manage the entire process of moving your goods- from point of origin to the final destination - with precision and transparency. Our partnerships with carriers and our vast Network of Agents ensures timely, cost-effective delivery via air, sea, and land. We handle everything: shipment booking, documentation, cargo insurnance, customs compliance, and Tracking.
</p>
            </div>
<h1 className="text-2xl  text-gray-900 flex text-center font-sans  m-5">Our Freight Fowarding Services </h1>
 <div className="flex-col">
    <div className="flex">
        <span className="text-4xl font-black text-gray-900">

             <Image
        src="/imgs/seccure.png"
        height={100}
        width={100}
        alt="Freight Page"
        className="h-24 w-24 object-contain"
      />
        </span>
        <div className="flex-col text-gray-900 font-sans">

        <h3>-Inventoory management and Order fullfilment</h3> 
        <h3>-Cross-docking and Pick-and-pak Servcies</h3> 
        <h3>-Temperature-controlled and specialized storage</h3> 
        <h3>-Barcode and RFID tracking for Full visibility</h3> 
        <h3>-National and regional Distribution</h3> 
        </div>
</div>

  <p className="text-gray-900 flex text-center m-2 font-mono">At ShipFast Logistics , Our Frieght Fowarding solutions are built on reliability, efficiency, and Global reach. <br />
                 </p>
          <p className="text-gray-900 flex text-center font-serif font-semibold m-3">Wether you need short-term storage or a complete fullfilment partner, our solutions adapt to your business demands<br />
                 </p>

        </div>
        </div>
    )
}