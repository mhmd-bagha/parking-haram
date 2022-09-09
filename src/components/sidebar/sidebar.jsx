import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import sidebarItems from "./sidebar-items";
import {FiChevronLeft, FiPhoneCall} from "react-icons/fi";
import ReactTooltip from "react-tooltip";
import {FaWhatsapp} from "react-icons/fa";
import {HiOutlineMailOpen} from "react-icons/hi";
import {AiOutlineMessage} from "react-icons/ai";

const Sidebar = () => {
    const [active] = useState(false)
    return (
        <div>
            {/* sidebar header */}
            <div className="card bg-transparent shadow-none border-0">
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
                                    <p className="fs-5-5">{itemSideBar.label}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
            {/* border bottom */}
            <div className="container mt-2 mb-4">
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
                    <div className="card border-0 shadow-none bg-transparent my-3 mx-4 text-center">
                        <div className="d-flex w-100">
                            <div className="d-flex w-100">
                                <img src={require('../../Assets/images/logo-light.png')} alt="" width='30' height='30'/>
                                <p>مدیریت</p>
                            </div>
                            <p className="fs-8 color-dark-gray text-nowrap">45 دقیقه پیش</p>
                        </div>
                        <p className="fs-6 text-truncate">سلام، جهت سرکشی به معابر عابر... </p>
                    </div>
                    {/* message */}
                    <div className="card border-0 shadow-none bg-transparent my-3 mx-4 text-center">
                        <div className="d-flex w-100">
                            <div className="d-flex w-100">
                                <img src={require('../../Assets/images/logo-light.png')} alt="" width='30' height='30'/>
                                <p>علی فلان‌آبادی</p>
                            </div>
                            <p className="fs-8 color-dark-gray text-nowrap">10:35 دیروز</p>
                        </div>
                        <p className="fs-6 text-truncate">لطفا درب‌های آزمایشگاه شیمی را... </p>
                    </div>
                </div>
            </div>
            {/* border bottom */}
            <div className="container my-4">
                <p className="border_bottom_spanish_gray"></p>
            </div>
            {/* emergency contact */}
            <div className="card bg-transparent border-0 shadow-none container">
                <p className="fs-6 fa-bold">تماس اضطراری با مدیریت</p>
                <div className="card bg_baltic_sea w-100 h-100 py-2">
                    <div className="emergency_contact">
                        <FaWhatsapp className='hover_gray' data-place="bottom" data-tip="ارسال پیامک"/>
                        <HiOutlineMailOpen className='hover_gray' data-place="bottom" data-tip="ارسال پیامک"/>
                        <AiOutlineMessage className='hover_gray' data-place="bottom" data-tip="ارسال پیامک"/>
                        <FiPhoneCall className='hover_gray' data-place="bottom" data-tip="ارسال پیامک"/>
                    </div>
                </div>
            </div>
            <ReactTooltip/>
        </div>
    )
}

export default Sidebar