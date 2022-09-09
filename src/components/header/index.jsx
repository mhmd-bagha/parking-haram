import {FiClock} from "react-icons/fi";
import {BsCalendar4Week} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";

const Header = () => {
    return (
        <div><header>
                <div className="row justify-content-center align-items-center w-100 mt-4">
                    <div className="col-4">
                        <h5 className="h5 fs-5-5 fw-bolder">صفحه نخست پنل کاربری</h5>
                        <div className="d-flex color-dark-gray">
                            <div className="d-flex">
                                <BsCalendar4Week/>
                                <p className="text-nowrap me-2">امروز چهارشنبه 2 بهمن 1400</p>
                            </div>
                            <div className="d-flex me-4">
                                <FiClock/>
                                <p className="fs-6 me-1">ساعت 13:45</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="form_search_header">
                            <AiOutlineSearch/>
                            <input type="search" name="search" id="search" className='form-control py-2'
                                   placeholder='از اینجا جستجو کنید'/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={require('../../Assets/images/logo-light.png')} alt=""/>
                            <h5 className="h5 fw-bold me-3">سامانه مدیریت پارکینگ رصد</h5>
                        </div>
                    </div>
                </div>
            </header></div>
    )
}

export default Header