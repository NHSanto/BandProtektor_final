import React, {useEffect, useState} from 'react';
import Logo from '../../Assets/Group.png';
import '../../index.css';
import CompanyNameLogo from "./CompanyNameLogo";
import {useLoaderData} from "react-router-dom";


function HeroSection() {

    const [googleUrl,setGoogleUrl] = useState("https://www.google.com/search?igu=1&ei=&q=+brandprotektor")

    const [dropDownOptions, setDropDownOptions] = useState([]);
    const [dropDownValue, setDropDownValue] = useState("");
    const data = useLoaderData();

    useEffect( () => {
        setDropDownOptions(Object.values(data))
    }, [data])


    const [keyword, setKeyword] = useState([]);

    const ChangeKeyword = (event) => {
        const selectedDropDown = dropDownOptions.find(option=>option.domain === event.target.value)["keyword"].split(',');
        const _keyword = []
        selectedDropDown.map((v,index)=>{
            _keyword.push({id:index,name:v});
        })
        setKeyword(_keyword);
        setDropDownValue(event.target.value);

    }

    const searchOnGoogle = (event)=>
    {
        const searchKeyword = event.target.value.split(' ').join('+');
        setGoogleUrl(`https://www.google.com/search?igu=1&ei=&q=${searchKeyword}`);

    }
    return (<>
        <section className="bg-hero-bg bg-no-repeat w-full bg-cover h-auto pb-4">
            <div className="flex flex-row justify-center">
                <a href="brandprotektor-brand-audit-dynamic-pages/src/Components/HeroSection/HeroSection#" className="mt-5" role="alert">
                    <img className="mt-5" src={Logo}/>
                </a>
            </div>
            <p className="text-[#FFAC00] text-center mt-10"><span className="text-[#95E3C5] mr-2">&gt; &gt; &gt;</span>GOOGLE BRAND AUDIT<span className="text-[#95E3C5] ml-2">&lt; &lt; &lt;</span></p>
            <div className="mx-auto max-w-screen-xl px-4 lg:flex lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <div className="flex flex-wrap justify-center mt-10 gap-6">

                        <div className="pt-3">
                            <select className="w-52 h-10 bg-[#173B33] border-none text-white rounded-md border-[#1B463D] cursor-pointer" onChange={ChangeKeyword}>
                                <option hidden>{"Select your domain"}</option>
                                {dropDownOptions?.map(v=>(
                                    <option key={v.id} value={v.domain}>
                                        {v.domain}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <p className="text-[42px] text-white font-roboto">Is Hijacking Your</p>
                    </div>
                </div>
            </div>
           <CompanyNameLogo/>
            <div className="flex justify-center mt-10 mb-10">
                <button className="transform transition-all ease-in-out duration-500 font-bold w-52 h-14 rounded-3xl text-center bg-[#15CD5E] bg-gradient-to-br from-[#15CD5E] via-[#F9FF50] hover:-translate-y-1 hover:scale-100 bg-size-200 bg-pos-0 hover:bg-pos-100">FIGHT BACK NOW</button>
            </div>
        </section>
            <div className="flex flex-row h-[40rem] bg-[#0F1C1D]">
                <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
                    <div className="w-auto h-full text-white flex flex-row justify-center">
                        <ul className="text-[16px] leading-10 mt-10">
                            {
                                keyword.map((k,i) => (
                                    <li key={k.id} className="text-sm sm:text-[16px] p-3 mb-6"><span className="border border-dashed border-white rounded-[100%] p-2 mr-2">{i+1}</span>
                                        <button onClick={searchOnGoogle} value={k.name}>{k.name}</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-span-2 w-full h-full bg-white">
                        <iframe id="inlineFrameExample"
                                className="col-span-2 w-full h-full bg-white"
                                title="Inline Frame Example"
                                src={googleUrl}>
                        </iframe>
                    </div>
                </div>
            </div>

        </>


    );
}
export default HeroSection;