// import React from 'react'
// import eth from "../assets/ether.jpg"
import eth2 from "../assets/eth.jpg"
import ethkris from "../assets/ethereum.jpg"
export default function Home() {
  return (
    <>
    <div className=' h-[110vh] md:h-[60vh] lg:[100vh] xl:h-[110vh] 2xl:h-[110vh] w-full flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'>
        <div className="flex items-center justify-center bg-white w-full h-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] md:h-full lg:h-full xl:h-full 2xl:h-full">
            <div className="h-[90%] w-[90%] flex flex-col items-center justify-center">
                <h1 className="h1 py-8">MUEREHTE</h1>
                <img src={eth2} className="py-4" />
            </div>
        </div>
        <div className="flex items-center justify-center  w-full h-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] md:h-full lg:h-full xl:h-full 2xl:h-full">
            <div className="h-[90%] w-[90%] flex flex-col items-center justify-center">
                <h1 className="h1 py-8 text-white">ETHEREUM</h1>
                <img src={eth2} className="py-4" />
            </div>
        </div>    
    </div>
    <div className="h-[35vh] bg-eth100 flex items-center justify-center">
        <span className="w-[80%] h-[60%]">
        <h1 className="h1 text-white text-center">BRING BACK THE VOLUME OF ETHEREUM <strong>MUEREHTE</strong> </h1>
        </span>
    </div>
    <div className=' h-[140vh]  md:h-[80vh] lg:[120vh] xl:h-[140vh] 2xl:h-[140vh]  w-full flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'>
        <div className="pattern text-white flex items-center justify-center bg-white w-full h-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] md:h-full lg:h-full xl:h-full 2xl:h-full">
            <div className="h-[95%] w-[90%] m-0 flex items-center justify-center ">
                <div className=" h-[90%]  w-[80%] flex flex-col justify-center" >
                <h1 className="h1">ABOUT MUEREHTE</h1>

                <div className="pt-4 ">
                    <h2 className="h2">TOTAL SUPPLY: </h2>
                    <h3 className="h3">100,000,000 HTE</h3>
                </div>

                <div className="mt-[180px] md:mt-[180px] lg:mt-[200px] xl:mt-[250px]">
                    <h2 className="h2">CONTRACT ADRESS:</h2>
                    <h3 className="h3 text-left">0x6D68723a62447e48B9150982E0 <br></br>c95143a04018D3</h3>
                </div>

                <div className="pt-4">
                    <h2 className="h2">TRANSACTION TAX</h2>
                    <h3 className="h3">0% /  0%</h3>
                </div>
                <div className="pt-2">
                    <h2 className="h2">LIQUIDITY POOL</h2>
                    <h3 className="h3">100% BURNT</h3>
                </div>
                </div>
            </div>
        </div>    
        <div className="flex items-center justify-center bg-white w-full h-[50%] md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] md:h-full lg:h-full xl:h-full 2xl:h-full">
            <div className="h-[90%] w-[90%] flex flex-col items-center justify-center">
               {/* <div className="w-[90%]"> */}
                <img src={ethkris} className="object-contain w-[60%] h-[60%] md:w-[90%] md:h-[80%] lg:w-[90%] lg:h-[80%] xl:w-[90%] xl:w-[90%] "></img>
               {/* </div> */}
            </div>
        </div>
       
    </div>
    <div className="h-[12vh] bg-black items-center justify-center flex" >
            <div className=" text-white w-[10%] h-[100%] items-center justify-center flex ">
                <h4 className="text-white "><strong>MUEREHTE</strong></h4>
                <div className="f-icon w-full md:w-[50%] lg:w-[50%] xl:w-[100%] flex items-center justify-start order-1 md:order-2 lg:order-2 xl:order-2 cursor-pointer  md:justify-end lg:justify-end xl:justify-end py-4 md:p-4 lg:p-4 xl:p-4">
                      <a href="https://x.com/MuerehteETH/"><i className="fa-brands fa-x-twitter mx-2  hover:text-white "></i></a>
                      <a href="https://t.me/MUEREHTECOMMUNITY"><i className="fa-brands fa-telegram mx-2 hover:text-white"></i></a>
                </div>
            </div>
    </div>
  
    </>
  )
}
