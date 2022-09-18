import { FiClock } from "react-icons/fi";
import { BsCalendar4Week } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <div className="row mt-4 align-items-center">
        {/* header */}
        <div className="col-8 col-lg-4">
          <h5 className="fs-5-5 fw-bold d-none d-lg-block">
            صفحه نخست پنل کاربری
          </h5>
          <div className="d-flex color-dark-gray">
            {/* date */}
            <span className="d-none d-lg-block">
              <BsCalendar4Week className="ms-2" />
              امروز چهارشنبه 2 بهمن 1400
            </span>
            {/* clock */}
            <span className='me-5'>
              <FiClock className="ms-2" />
              ساعت 13:45
            </span>
          </div>
        </div>
        {/* search */}
        <div className="col-lg-4 d-none d-lg-block">
          <div className="form_search_header">
            <AiOutlineSearch />
            <input
              type="search"
              name="search"
              id="search"
              className="form-control py-2"
              placeholder="از اینجا جستجو کنید"
            />
          </div>
        </div>
        {/* logo and name */}
        <div className="col-4">
          <div className="d-flex justify-content-end align-items-center">
            <img src={require("../../Assets/images/logo-light.png")} alt="" />
            <h5 className="fw-bold me-3 d-none d-lg-block">
              سامانه مدیریت پارکینگ رصد
            </h5>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;