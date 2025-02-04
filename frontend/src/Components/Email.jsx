import React from 'react'
import { FaRegSquare } from "react-icons/fa6";
import { TiStarOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

function Email() {
    const navigate=useNavigate("")
    function mailDetails(){
        navigate("/mailDetails/12")
    }
    return (
        <div onClick={mailDetails} className='flex px-4 py-3 items-center border-b border-gray-300 justify-between cursor-pointer hover:shadow-md hover:border-gray-200 hover:border-1'>
            <div className='flex gap-3 items-center'>
                <div>
                    <FaRegSquare />
                </div>
                <div>
                   <TiStarOutline size={"20px"}/> 
                </div>
                <div>
                    <h1>Linkedin</h1>
                </div>
            </div>

            <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non eos facilis et cum fugiat? Cupiditate, rem?
            </div>

            <div className='text-sm'>12 days ago</div>
        </div>
    )
}

export default Email
