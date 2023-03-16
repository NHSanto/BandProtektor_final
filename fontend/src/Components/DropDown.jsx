// import {useEffect, useState} from "react";
// import {useLoaderData, useNavigate, useNavigation, useParams} from "react-router-dom";
// import {ChangeKeyword} from "./SideMenu";
// // import {keyword} from "./SideMenu";
//
//
//
// function DropDown() {
//
//
//     const [dropDownOptions, setDropDownOptions ] = useState([]);
//     const [dropDownValue, setDropDownValue] = useState('Select One');
//     const data = useLoaderData();
//
//     useEffect( () => {
//         setDropDownOptions(Object.values(data))
//     }, [data])
//
//
//
//
//
//     return (
//         <div className="pt-3">
//             <select className="w-52 h-10 bg-[#173B33] border-none text-white rounded-md border-[#1B463D] cursor-pointer" value={dropDownValue} onChange={ ChangeKeyword(e)}>
//                 {dropDownOptions?.map(v=>(
//                     <option key={v.id} value={v.domain}>
//                         {v.domain}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// };
// export default DropDown;