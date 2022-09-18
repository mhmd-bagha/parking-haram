import {Link} from "react-router-dom";
import {FiChevronLeft} from "react-icons/fi";
const Parking_capacity = () => {
    return (
        <div className="col-12 col-xxl-4 ms-xxl-0 mb-4">
            <div className="card bg-white rounded-2 border-0 shadow-sm">
                <div className="card-header bg-white border_bottom_spanish_gray">
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <h6 className="h6 fs-16p fw-bold">ظرفیت پارکینگ</h6>
                        <Link to="/" className="text-primary text-nowrap">
                            مشاهده همه <FiChevronLeft/>
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card bg-transparent border-0 shadow-none">
                        <div className="card-header bg-transparent border-0 shadow-none row">
                            {/* count parked cars */}
                            <div className="col-lg-6">
                                <p className="color-dark-gray fs-7 fw-bold m-0 mb-2">
                                    خودرو‌های پارک شده
                                </p>
                                <p className="fs-6 fw-bold">تاکنون 86 خودرو</p>
                            </div>
                            {/* btn new record item */}
                            <div className="col-lg-6 text-start">
                                <button className="btn btn_science_blue py-2 text-white">
                                    ثبت مورد جدید
                                </button>
                            </div>
                        </div>
                        <div className="card-body my-3 py-5">
                            <div className="card border-0 w-100 h-100">
                                <div className="d-flex justify-content-start scroll_chart_items">
                                    {/* chart view parking item */}
                                    <div className="chart_items">
                                        <div className="chart_item">
                                            <div className="chart" style={{height:60}}></div>
                                                <span className='chart_text'>132</span>
                                        </div>
                                        <span className='chart_label'>پارکینگ A</span>
                                    </div>
                                    {/* chart view parking item */}
                                    <div className="chart_items">
                                        <div className="chart_item">
                                            <div className="chart" style={{height:42}}></div>
                                            <span className='chart_text'>132</span>
                                        </div>
                                        <span className='chart_label'>پارکینگ A</span>
                                    </div>
                                    {/* chart view parking item */}
                                    <div className="chart_items">
                                        <div className="chart_item">
                                            <div className="chart" style={{height:60}}></div>
                                            <span className='chart_text'>132</span>
                                        </div>
                                        <span className='chart_label'>پارکینگ A</span>
                                    </div>
                                    {/* chart view parking item */}
                                    <div className="chart_items">
                                        <div className="chart_item">
                                            <div className="chart" style={{height:55}}></div>
                                            <span className='chart_text'>132</span>
                                        </div>
                                        <span className='chart_label'>پارکینگ A</span>
                                    </div>
                                    {/* chart view parking item */}
                                    <div className="chart_items">
                                        <div className="chart_item">
                                            <div className="chart" style={{height:140}}></div>
                                            <span className='chart_text'>132</span>
                                        </div>
                                        <span className='chart_label'>پارکینگ A</span>
                                    </div>
                                    {/* chart view parking item */}
                                    <div className="chart_items">
                                        <div className="chart_item">
                                            <div className="chart" style={{height:100}}></div>
                                            <span className='chart_text'>132</span>
                                        </div>
                                        <span className='chart_label'>پارکینگ A</span>
                                    </div>
                                    {/* chart view parking item */}
                                    <div className="chart_items">
                                        <div className="chart_item">
                                            <div className="chart" style={{height:50}}></div>
                                            <span className='chart_text'>132</span>
                                        </div>
                                        <span className='chart_label'>پارکینگ A</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Parking_capacity;
