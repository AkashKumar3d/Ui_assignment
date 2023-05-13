import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../styles/nav.css"
import img1 from "../assets /images/susant.jpg";
import img2 from "../assets /images/we.png";
import img3 from "../assets /images/Salesforce.com_logo.svg.png";
import { BiHide, BiSearch } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { TiShoppingBag } from "react-icons/ti";
import { AiOutlineArrowDown, AiOutlineMessage } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrDocumentPdf } from "react-icons/gr";
import { BsArrowDown, BsBoxArrowUpRight, BsShare,BsThreeDotsVertical } from "react-icons/bs";
import { GrZoomIn, GrZoomOut } from "react-icons/gr";
// import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isOptionOpen, setisOptionopen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleoption = () => {
        setisOptionopen(!isOptionOpen);
    };
    return (
        <>

            <nav>
                {/* logo container  */}
                <div className="logo">
                    <div className="logo1">
                        <div className="logo2">

                        </div>
                    </div>
                </div>
                <div className={`menu ${isNavOpen ? 'active' : ''}`}>
                    <ul className={isNavOpen?("orderlist"):""}>
                        <li className='navbar_link'>
                            <Link  to="/"><BiSearch style={{height:"20px", width:"20px"}}/></Link>
                            {isNavOpen?(<span>Search</span>):("")}
                        </li>
                        {isNavOpen ? (<hr style={{color:"red" ,width:"10px"}}/>) :""}
                        <li>
                            <Link to="/contact"><TiShoppingBag  style={{height:"20px", width:"20px"}}/></Link>  
                            {isNavOpen?(<span>Inbox</span>):("")}
                        </li>
                        {isNavOpen ? (<hr style={{color:"red" ,width:"10px"}}/>) :""}
                        <li>
                            <Link to="/about"><HiOutlineBell style={{height:"20px", width:"20px"}}/></Link>
                            {isNavOpen?(<span>Notification</span>):("")}
                        </li>
                        {isNavOpen ? (<hr style={{color:"red" ,width:"10px"}}/>) :""}
                        <li>
                            <Link to="/services"><IoMdHelpCircleOutline style={{height:"20px", width:"20px"}}/></Link>
                            {isNavOpen?(<span>help</span>):("")}
                        </li>
                        {isNavOpen ? (<hr style={{color:"red" ,width:"10px"}}/>) :""}
                        <li className='profile'>
                            <Link to="/"> <img src={img1} alt="error" /></Link>
                            {isNavOpen?(<span>Susant Singh</span>):("")}
                        </li>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleNav}>
                    {
                        isNavOpen ? (<p style={{height:"20px", width:"20px", fontSize:"20;px"}}>X</p>):(<><div className={`line ${isNavOpen ? 'open' : ''}`} /><div className={`line ${isNavOpen ? 'open' : ''}`} /><div className={`line ${isNavOpen ? 'open' : ''}`} /></>)
                    }
                </div>
              
            </nav>

            {/* second section  */}
            <div className="second_container">
                <div className="box1">
                    <h2 className='box1_text'>WeWork + Salesforce</h2>
                </div>
                <div className="box2">
                    <button className='box2_btn'>
                        Publish/Share
                    </button>
                </div>
            </div>

            {/* third section  */}
            <div className={`${isNavOpen ? "third_extra_option":"third_container "}`} >
                <div className={`${isNavOpen ? "third_extra_text":"text_container"}`}>
                    <h1>Workspace<br />Proposal</h1>
                </div>

                <div className={`${isNavOpen ? "third_extra_container_box":"third_container_box"}`}>
                    <img src={img2} alt="" />
                    <p>+    </p>
                    <img src={img3} alt="" />
                </div>
            </div>


            {/*  forth section  */}
            <div className="forth_main">
                <div className="forth_one">
                    <h3>Project Scope Recap</h3>
                    <div className="forth_one_mini">
                        <p style={{color: "gray"}}>Mutual Action Plan <span>3%</span></p>
                        <div className="progress">
                            <div className='one'></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div className='last'></div>
                        </div>
                    </div>
                </div>
                <div className="forth_last">
                    <div className="forth_last_one">
                        <button className="btn">Basic Info</button>
                        <button className="btn">Files</button>
                        <button className="btn">Mutual Action plan</button>
                        <button className="btn">Contact</button>
                    </div>
                    <div className='forth_last_two'>
                        <button className='btn'>Internal Action</button>
                    </div>
                </div>
            </div>

            {/* fifth  section */}
            <div className='fifth_section'>
                <div className="fifth_section1">
                    <h3 className='fifth_section1_head'>Overview</h3>
                    <hr />
                    <p>Welcome</p>
                    <p>Product Capabilites</p>
                    <p>Customer sucess Stories</p>
                    <p>File sharing</p>
                    <p>Our Deck</p>
                </div>
                <div className="fifth_section2">
                    <div className="fifth_section2_box1" onClick={toggleoption}>
                        <h2>Company Profile</h2>
                        {
                            isOptionOpen ? (<div className="fifth_section2_box1_mini">
                            <button><AiOutlineArrowDown /></button>
                            <button><BiHide /></button>
                            <button className='fifth_section2_box1_mini_last'><RiDeleteBin6Line /></button>
                        </div>):( <div>
                            <button><BsThreeDotsVertical/></button>
                        </div>)
                        }
                    </div>
                    <div className="fifth_section2_box2">
                        <div id={`${isNavOpen ? "extra_box":"box"}`}>
                            <div id={`${isNavOpen ? "extra_box":"box1"}`}>
                                <button className="btn"><GrDocumentPdf style={{ height: "45px" }} /></button>
                                <button className="btn">1/15 </button>
                                <button className="btn"><BsArrowDown style={{ height: "45px" }} /></button>
                                <button className="btn"><GrZoomOut style={{ height: "45px" }} /></button>
                                <button className="btn"><GrZoomIn style={{ height: "45px" }} /></button>
                                <button className="btn"><BsBoxArrowUpRight style={{ height: "45px" }} /></button>
                            </div>
                            <div id={`${isNavOpen ? "extra_box_class":"box2"}`}>
                                <div className={`${isNavOpen ? "extra_box_class":"box"}`}>
                                    <h1 className={`${isNavOpen ? "extra_para1":'para1'}`}>Wework</h1>
                                    <p>For all the ways you work, we`re here</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="fifth_section2_box3">
                        <button className="btn"><AiOutlineMessage style={{height:"25px", width:"25px"}} /></button>
                        <button className="btn"><BsShare  style={{height:"21px", width:"21px"}} /></button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar
