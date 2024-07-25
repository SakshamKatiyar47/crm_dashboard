import React from 'react'
import { IoMdAddCircle } from "react-icons/io";

const Deals = () => {
    return (
        <div className="right-content w-100">
            <div className="d-sm-flex align-items-center justify-content-between p-3 mb-4">
                <h1 className="h3 mb-0 font-weight-bold text-body">Deals <br></br> <span className="deals_dash">deals / dashboard</span></h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="text-white align-items-center"></i> <IoMdAddCircle/> Create Deals</a>
            </div>

            <div className="col-xl-12 col-lg-12">
                    <div className="card shadow card-border  mb-4 mt-3 m-1">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h4 className="m-0 font-weight-bold text-body">Deals</h4>
                        </div>
                        <div className="table-data p-3 table-responsive">
                            <table className="table table-bordered">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Time</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15/07/2024</td>
                                        <td>Doe</td>
                                        <td>08:45am</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>15/07/2024</td>
                                        <td>Moe</td>
                                        <td>10:00am</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>13/07/2024</td>
                                        <td>Dinesh</td>
                                        <td>12:30pm</td>
                                      
                                    </tr>
                                    <tr>
                                        <td>12/07/2024</td>
                                        <td>Dooley</td>
                                        <td>01:30pm</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>11/07/2024</td>
                                        <td>Manish</td>
                                        <td>02:30pm</td>
                                      
                                    </tr>
                                    <tr>
                                        <td>10/07/2024</td>
                                        <td>Gunjan</td>
                                        <td>03:30pm</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>12/07/2024</td>
                                        <td>Dooley</td>
                                        <td>01:30pm</td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Deals;