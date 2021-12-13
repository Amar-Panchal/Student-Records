import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {MdKeyboardBackspace} from 'react-icons/md' 
import {RiUserSearchFill} from 'react-icons/ri'
function Student_details() {
    const details = useSelector(state =>state); 
    const [search,setSearch] =useState("");
    return (
        <>
        <div className="container pt-2 d-print-none">
        <Link to='/add' className="btn-back">
            <span> <MdKeyboardBackspace/></span> Add Details 
        </Link>
        </div>
        <div className=" d-print-none search-bar d-flex  flex-wrap align-items-center justify-content-center ">
        <input 
        type="text" placeholder="serach..." onChange={(e)=>{setSearch(e.target.value)}}/>
        <span><RiUserSearchFill/></span>
        </div>
        <table className="table text-dark text-center  table-bordered border-secondary  bg-light table-hover my-4 mx-auto">
            <thead className="thead text-light">
                <tr>
                    <th  scope="col" >Id</th>
                    <th  scope="col" >Name</th>
                    <th  scope="col" >Surname</th>
                    <th scope="col" >gender</th>
                    <th  scope="col" >Email</th>
                    <th  scope="col" >Mobile</th>
                    <th scope="col" >department</th>
                    <th scope="col" >year</th>
                    <th scope="col" >rollnumber</th>
                    <th scope="col" >cgpa</th>
                    <th  scope="col" >Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    details.filter((val)=>{
                        if(search === ""){
                            return val;
                        }
                        else if(val.name.toLowerCase().includes(search.toLowerCase())||
                        val.rollnum.toLowerCase().includes(search.toLowerCase())||
                        val.gender.toLowerCase().includes(search.toLowerCase())||
                        val.dep.toLowerCase().includes(search.toLowerCase())||
                        val.classyear.toLowerCase().includes(search.toLowerCase())||
                        val.email.toLowerCase().includes(search.toLowerCase())
                        ){
                            return val
                        }
                        
                    }).map((detail,id)=>(
                        <tr key={id}>
                            <td>{detail.id+1}</td>
                            <td>{detail.name}</td>
                            <td>{detail.surname}</td>
                            <td>{detail.gender}</td>
                            <td>{detail.email}</td>
                            <td>{detail.mobile}</td>
                            <td>{detail.dep}</td>
                            <td>{detail.classyear}</td>
                            <td>{detail.rollnum}</td>
                            <td>{detail.cgpa}</td>

                            <td>
                                <Link to={`/detail/${detail.id}`} 
                                className="btn-back ">edit</Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div className="text-center">
        <button className="btn-print d-print-none " onClick={()=>window.print()}>Print Records</button>
        </div> 
        </>
    )
}

export default Student_details
