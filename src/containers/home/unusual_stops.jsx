import {Link} from "react-router-dom";
import {FiChevronLeft} from "react-icons/fi";

const Unusual_stops = () => {
    return (
        <div className="col-xxl-4 mt-4 mt-lg-0">
            <div className="card bg-white rounded-2 border-0 shadow-sm">
                <div className="card-header bg-white border_bottom_spanish_gray">
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <h6 className="h6 fs-16p fw-bold">توقف‌های نامتعارف</h6>
                        <Link to='/' className="text-primary text-nowrap">مشاهده همه <FiChevronLeft/></Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card border-0 align-items-center">
                        {/* btn tabs stops */}
                        <div className="col-10 card bg_tab_stops d-flex justify-content-center align-items-center py-1 border-0">
                            <ul className="nav nav-pills border-0" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="stop-car-tab" data-bs-toggle="pill"
                                            data-bs-target="#stop-car" type="button" role="tab"
                                            aria-controls="stop-car" aria-selected="true">توقف خودرو
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="human-stop-tab" data-bs-toggle="pill"
                                            data-bs-target="#human-stop" type="button" role="tab"
                                            aria-controls="human-stop" aria-selected="false">توقف انسان
                                    </button>
                                </li>
                            </ul>
                        </div>
                        {/* tabs stops */}
                        <div className="tab-content col-10 mt-3" id="pills-tabContent">
                            {/* tab stop items */}
                            <div className="tab-pane fade show active" id="stop-car" role="tabpanel" aria-labelledby="stop-car-tab" tabIndex="0">
                                <div className="card bg-transparent border-0">
                                    <div
                                        className="card-header border-0 m-0 p-0 justify-content-start bg-transparent">
                                        <p className='fs-6 m-0 p-0'><span className='fw-bold'>25</span> توقف
                                            نامتعارف خودرو</p></div>
                                    <div className="card-body">
                                        {/* card stop's */}
                                        <div className="card bg-transparent rounded-4 mb-3 border_spanish_gray">
                                            <div
                                                className="d-flex justify-content-between align-items-center py-3 px-2">
                                                <div className="badge bg_stop_card_number">B 5</div>
                                                <div className='me-3 text-truncate'>
                                                    <h6 className="h6 fw-bold text-truncate">توقف به مدت 25
                                                        دقیقه</h6>
                                                    <p className="color-dark-gray p-0 m-0 text-truncate fw-bold">ورود
                                                        ساعت 13:45</p>
                                                </div>
                                                <Link to='/'
                                                      className="badge bg-true-blue p-1 rounded-3 text-white me-auto fs-7">دوربین <FiChevronLeft/></Link>
                                            </div>
                                        </div>
                                        {/* card stop's */}
                                        <div className="card bg-transparent rounded-4 mb-3 border_spanish_gray">
                                            <div
                                                className="d-flex justify-content-between align-items-center py-3 px-2">
                                                <div className="badge bg_stop_card_number">B 5</div>
                                                <div className='me-3 text-truncate'>
                                                    <h6 className="h6 fw-bold text-truncate">توقف به مدت 25
                                                        دقیقه</h6>
                                                    <p className="color-dark-gray p-0 m-0 text-truncate fw-bold">ورود
                                                        ساعت 13:45</p>
                                                </div>
                                                <Link to='/'
                                                      className="badge bg-true-blue p-1 rounded-3 text-white me-auto fs-7">دوربین <FiChevronLeft/></Link>
                                            </div>
                                        </div>
                                        {/* card stop's */}
                                        <div className="card bg-transparent rounded-4 border_spanish_gray">
                                            <div
                                                className="d-flex justify-content-between align-items-center py-3 px-2">
                                                <div className="badge bg_stop_card_number">B 5</div>
                                                <div className='me-3 text-truncate'>
                                                    <h6 className="h6 fw-bold text-truncate">توقف به مدت 25
                                                        دقیقه</h6>
                                                    <p className="color-dark-gray p-0 m-0 text-truncate fw-bold">ورود
                                                        ساعت 13:45</p>
                                                </div>
                                                <Link to='/'
                                                      className="badge bg-true-blue p-1 rounded-3 text-white me-auto fs-7">دوربین <FiChevronLeft/></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Unusual_stops