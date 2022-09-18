import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import sidebarItems from "./sidebar-items";
import {FiChevronLeft, FiPhoneCall} from "react-icons/fi";
import {FaBars, FaWhatsapp} from "react-icons/fa";
import {HiOutlineMailOpen} from "react-icons/hi";
import {AiOutlineMessage} from "react-icons/ai";
import {IoMdClose} from "react-icons/io";

const Sidebar = () => {
    const [active] = useState(false)
    let [isOffcanvas, setOffcanvas] = useState(false)
    let width = window.innerWidth
    window.addEventListener("resize", resizeAction)
    window.onload = () => {
        resizeAction()
    }

    let class_backdrop
    let class_sidebar
    if (isOffcanvas) {
        class_backdrop = 'admin-backdrop opacity_0 visible_hidden'
        class_sidebar = 'bg-sidebar'
    } else {
        class_backdrop = 'admin-backdrop opacity_1 visible open'
        class_sidebar = 'bg-sidebar open'
    }

    function resizeAction() {
        if (width <= 991)
            setOffcanvas(true)
        else
            setOffcanvas(false)
    }

    return (
        <div>
            {/* icon toggle */}
            <span className='toggle-menu me-2 d-lg-none'
                  onClick={() => setOffcanvas(isOffcanvas ? false : true)}><FaBars/></span>
            <div className={'card bg-transparent shadow-none border-0 ' + class_sidebar}>
                {/* sidebar header */}
                <div className="card-header bg-transparent shadow-none border-0">
                    <span className='d-lg-none pointer'
                          onClick={() => setOffcanvas(isOffcanvas ? false : true)}><IoMdClose/></span>
                    <div className="sidebar_header">
                        <img src={require('../../Assets/images/logo-light.png')} alt=""/>
                        <div className="me-3">
                            <p className="fs-6 fw-bolder d-flex m-1">میثم خرمپور</p>
                            <div className="d-flex">
                                <p className="badge bg-true-blue p-025_040 fs-6 rounded-2">5</p>
                                <p className='me-2 color-spanish-gray'>اعلان خوانده نشده</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* sidebar items */}
                    <p className="fw-bold mt-5 mb-4">منو اصلی</p>
                    <div className="nav w-100 me-3">
                        {
                            sidebarItems.map((itemSideBar, keySideBar) => (
                                <NavLink to={{pathname: itemSideBar.to}}
                                         className={(active ? "sidebar_item active" : "sidebar_item")}>
                                    <div className="row">
                                        <div className="col-2">
                                            <img src={require('../../Assets/images/sidebar/' + itemSideBar.img_src)}
                                                 alt={itemSideBar.label}/>
                                        </div>
                                        <div className="col-10">
                                            <p className="fs-6">{itemSideBar.label}</p>
                                        </div>
                                    </div>
                                </NavLink>
                            ))
                        }
                    </div>
                    {/* border bottom */}
                    <div className="container mt-2 mb-3">
                        <p className="border_bottom_spanish_gray"></p>
                    </div>
                    {/* messages end */}
                    <div className="sidebar_midd_message_end container my-3">
                        <div className="d-flex justify-content-center align-items-baseline my-2">
                            <div className="w-100"><p className="fs-6 fw-bold">آخرین پیام‌های دریافتی</p></div>
                            <Link to='/' className="bg-true-blue rounded-2"><FiChevronLeft className='m-1'/></Link>
                        </div>
                        <div className="card border-0 shadow-none bg_baltic_sea container rounded-4">
                            {/* message */}
                            <div className="card border-0 shadow-none bg-transparent my-3 mx-2 text-center">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <img src={require('../../Assets/images/logo-light.png')} alt="" width='30'
                                             height='30'/>
                                        <p>مدیریت</p>
                                    </div>
                                    <p className="fs-8 color-dark-gray text-nowrap">45 دقیقه پیش</p>
                                </div>
                                <p className="fs-6 text-truncate">سلام، جهت سرکشی به معابر عابر... </p>
                            </div>
                            {/* message */}
                            <div className="card border-0 shadow-none bg-transparent my-3 mx-2 text-center">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <img src={require('../../Assets/images/logo-light.png')} alt="" width='30'
                                             height='30'/>
                                        <p>مدیریت</p>
                                    </div>
                                    <p className="fs-8 color-dark-gray text-nowrap">45 دقیقه پیش</p>
                                </div>
                                <p className="fs-6 text-truncate">سلام، جهت سرکشی به معابر عابر... </p>
                            </div>
                        </div>
                    </div>
                    {/* border bottom */}
                </div>
                <div className="card-footer">
                    <div className="container my-3">
                        <p className="border_bottom_spanish_gray"></p>
                    </div>
                    {/* emergency contact */}
                    <div className="card bg-transparent border-0 shadow-none">
                        <p className="fs-6 fa-bold">تماس اضطراری با مدیریت</p>
                        <div className="card-body bg_baltic_sea w-100 h-100 py-2">
                            <div className="emergency_contact">
                                <div className="tooltip-custom">
                                    <FaWhatsapp className='hover_gray ico_contact'/>
                                    <span className='tooltip-custom-text'>ارسال پیامک</span>
                                </div>
                                <div className="tooltip-custom">
                                    <HiOutlineMailOpen className='hover_gray ico_contact'/>
                                    <span className='tooltip-custom-text'>ارسال پیامک</span>
                                </div>
                                <div className="tooltip-custom">
                                    <AiOutlineMessage className='hover_gray ico_contact'/>
                                    <span className='tooltip-custom-text'>ارسال پیامک</span>
                                </div>
                                <div className="tooltip-custom">
                                    <FiPhoneCall className='hover_gray ico_contact'/>
                                    <span className='tooltip-custom-text'>ارسال پیامک</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={class_backdrop} onClick={() => setOffcanvas(isOffcanvas ? false : true)}></div>
        </div>
    )
}

export default Sidebar