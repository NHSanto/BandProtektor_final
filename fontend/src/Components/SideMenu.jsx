import React, {useState} from "react";
import GooglePage from '../Assets/screencapture-google-search-2023-03-08-19_56_02.png'
import {
  useLoaderData
} from "react-router-dom";


// export const keyword = [
//     {id:1, name:'DOMAIN_1 KEYWORD_1'},
//     {id:2, name:'DOMAIN_1 KEYWORD_2'},
//     {id:3, name:'DOMAIN_1 KEYWORD_3'},
//     {id:4, name:'DOMAIN_1 KEYWORD_4'},
//     {id:5, name:'DOMAIN_1 KEYWORD_5'},
// ];

const ChangeKeyword = (event,dropDownOptions) => {

    const [keyword, setKeyword] = useState([]);
    const selectedDropDown = dropDownOptions.find(option=>option.domain === event.target.value)["keyword"].split(',');
     const _keyword = []
    selectedDropDown.map((v,index)=>{
        _keyword.push({id:index,name:v});
    })
    setKeyword(_keyword);

}

function SideMenu () {

    return (
        <div className="flex flex-row h-auto bg-[#0F1C1D]">
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
                <div className="w-auto h-full text-white flex flex-row justify-center">
                    <ul className="text-[16px] leading-10 mt-10">
                        {/*{*/}
                        {/*    keyword.map((k,i) => (*/}
                        {/*        <li key={k.id} className="text-sm sm:text-[16px] p-3 mb-6"><span className="border border-dashed border-white rounded-[100%] p-2 mr-2">{i+1}</span>*/}
                        {/*            <button value={k.name}>{k.name}</button>*/}
                        {/*        </li>*/}
                        {/*    ))*/}
                        {/*}*/}
                    </ul>
                </div>
                <div className="col-span-2 w-full h-full bg-white">
                    <img src={GooglePage}/>
                </div>
            </div>
        </div>
    );

};
export default SideMenu;
