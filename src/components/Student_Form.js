import React,{useState} from 'react'
import { Form} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import { AddDetails } from '../Redux/Actions/index';
import {MdKeyboardBackspace} from 'react-icons/md'
function Student_Form() {
    const [name, setName] = useState("");
    const [surname,setSurname] =useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [gender,setGender] = useState("")
    const [cgpa,setcgpa] = useState("")
    const [dep,setdep] = useState("")
    const [classyear,setClassYear] =useState("");
    const [rollnum, setRollNum] =useState("");
    const history = useHistory();
    const details = useSelector((state) => state);

    const dispatch = useDispatch();



    const handleSubmit = (e) =>{
        e.preventDefault();

        const checkEmail = details.find((detail)=>detail.email === email && email);

        const checkMobile = details.find((detail)=>detail.mobile === parseInt(mobile));

        if(!email || !mobile || !name){
            return toast.warning("please fill details")
        }
        if(checkEmail){
            return toast.error("this email already exists!")
        }
        if(checkMobile){
            return toast.error("this number already exists!")
        }
        const data = {
            id: details[details.length - 1 ].id +1,
            name,
            surname,
            gender,
            mobile,
            email,
            dep,
            classyear,
            rollnum,
            cgpa
        }
        
    dispatch(AddDetails(data))
    toast.success("DETAIL successfully added")
    history.push("/")


    }

    return (
        <>
         <div className="container pt-2">
            <Link to='/' className="btn-back">
              <span> <MdKeyboardBackspace/></span> Details List
            </Link>
        </div>
        <Form onSubmit={handleSubmit} className="Form-table mx-auto  pt-3  pb-3 px-4">
        <div className=" d-flex align-items-center my-2">
        <h3>Name : </h3>
        <Form.Control type="text" className="inputDetails" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        
        <div className=" d-flex align-items-center my-2">
        <h3>surname : </h3>
        <Form.Control type="text" className="inputDetails" placeholder="last name" value={surname} onChange={(e)=>setSurname(e.target.value)} />
        </div>

        <fieldset className="d-flex flex-wrap align-items-center ">
        <h3>Gender : </h3>
        <div className="d-flex align-items-center mx-5 ">
        <Form.Check
        type="checkbox"
        label="Male"
        name="formHorizontalcheckboxs"
        id="formHorizontalcheckboxs1"
        checked={gender === 'Male'}
        value="Male" onClick={(e)=>setGender('Male')}
        />
        <Form.Check
        type="checkbox"       
        label="Female"
        name="formHorizontalcheckboxs"
        id="formHorizontalcheckboxs2"
        checked={gender === 'Female'}
        value="Female" onClick={(e)=>setGender('Female')}
        />
        </div>
        </fieldset>
        

        <div className=" d-flex align-items-center my-2" >
        <h3> Mobile : </h3>
        <Form.Control type="text" className="inputDetails" placeholder="mobile number" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
        </div>

        <div className=" d-flex align-items-center my-2">
        <h3>Email : </h3>
        <Form.Control type="email" className="inputDetails" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        
        <fieldset>
        <h3>Department : </h3>
        <div className="d-flex align-items-center flex-wrap mt-2 text-light ">
        <Form.Check
        type="checkbox"
        label="Computer "
        name="formHorizontalcheckbox"
        id="formHorizontalcheckboxs1"
        checked={dep === 'Cse'}
        value="Cse" onClick={(e)=>setdep('Cse')}
        />
        <Form.Check
        type="checkbox"
        label="Electronic"
        name="formHorizontalcheckbox"
        id="formHorizontalcheckboxs1"
        checked={dep === 'Electronic'}
        value="Electronic" onClick={(e)=>setdep('Electronic')}
        />
        <Form.Check
        type="checkbox"
        label="Mechnical"
        name="formHorizontalcheckbox"
        id="formHorizontalcheckboxs1"
        checked={dep === 'Mechnical'}
        value="Mechnical" onClick={(e)=>setdep('Mechnical')}
        />
        <Form.Check
        type="checkbox"
        label="Civil"
        name="formHorizontalcheckbox"
        id="formHorizontalcheckboxs1"
        checked={dep === 'Civil'}
        value="Civil" onClick={(e)=>setdep('Civil')}
        />
        </div>
        </fieldset>
        
        
        <fieldset>
        <h3>Year : </h3>
        <div className="d-flex align-items-center flex-wrap  mt-2 text-light ">
        <Form.Check
        type="checkbox"
        label="1st Year"
        name="formHorizontalcheckboxs"
        id="formHorizontalcheckboxs1"
        checked={classyear === '1st Year'}
        value="1st Year" onClick={(e)=>setClassYear('1st Year')}
        />
        <Form.Check
        type="checkbox"
        label="2nd Year"
        name="formHorizontalcheckboxs"
        id="formHorizontalcheckboxs1"
        checked={classyear === '2nd Year'}
        value="2nd Year" onClick={(e)=>setClassYear('2nd Year')}
        />
        <Form.Check
        type="checkbox"
        label="3rd Year"
        name="formHorizontalcheckboxs"
        id="formHorizontalcheckboxs1"
        checked={classyear === '3rd Year'}
        value="3rd Year" onClick={(e)=>setClassYear('3rd Year')}
        />
        <Form.Check
        type="checkbox"
        label="4th Year"
        name="formHorizontalcheckboxs"
        id="formHorizontalcheckboxs1"
        checked={classyear === '4th Year'}
        value="4th Year" onClick={(e)=>setClassYear('4th Year')}
        />
        </div>
        </fieldset>

        <div className="d-flex align-items-center mb-2">
        <h3>Roll Num : </h3> 
        <Form.Control type="number" className="inputNumDetails" placeholder="Roll number" value={rollnum} onChange={(e)=>setRollNum(e.target.value)} />
        </div>
        
        <div className="d-flex align-items-center my-2">
        <h3>CGPA : </h3>
        <Form.Control type="number" placeholder="CGPA"className="inputNumDetails" value={cgpa} onChange={(e)=>setcgpa(e.target.value)} />
        </div>

        <button type="submit" className="submitbtn mt-2 ">Submit</button>
        
        
    </Form>
        </>
    )
}

export default Student_Form
