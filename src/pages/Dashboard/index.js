import React from 'react'
import { FaUsersLine } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa6";
import { GiCrystalGrowth } from "react-icons/gi";
import SendIcon from '@mui/icons-material/Send';
import { Button, IconButton } from '@mui/material';
import { FaCaretDown } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdDoneOutline } from "react-icons/md";


const Dashboard = () => {
    return (
        <div className="right_content w-100">
            <div className="row">
                <div className="col-md-4">
                    <div className="dashboardBox"
                        style={{ backgroundImage: 'linear-gradient(0deg,#011D3C, #007AFF)' }}>
                        <div className="d-flex dash" >
                            <div className="col1">
                                <h3 className="text-white">Total customers</h3>
                                <span className="text-white">277</span>
                            </div>
                            <div className="ml-auto">
                                <div className="icon"><FaUsersLine /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="dashboardBox"
                        style={{ backgroundImage: 'linear-gradient(0deg,#011D3C, #007AFF)' }}>
                        <div className="d-flex dash" >
                            <div className="col1">
                                <h3 className="text-white">Active deals</h3>
                                <span className="text-white">207</span>
                            </div>
                            <div className="ml-auto">
                                <div className="icon"><FaRegHandshake /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="dashboardBox"
                        style={{ backgroundImage: 'linear-gradient(0deg,#011D3C, #007AFF)' }}>
                        <div className="d-flex dash" >
                            <div className="col1">
                                <h3 className="text-white">Total revenue</h3>
                                <span className="text-white"> ₹ 27 lakh.</span>
                            </div>
                            <div className="ml-auto">
                                <div className="icon"><GiCrystalGrowth /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                {/*   <!-- Area Chart --> */}
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow card-border  mb-4 mt-3 m-1">
                        {/*  <!-- Card Header - Dropdown --> */}
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h4 className="m-0 font-weight-bold text-body">Appointments</h4>
                        </div>
                        <div className="table-data p-3 table-responsive">
                            <table className="table table-bordered">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>15/07/2024</td>
                                        <td>Doe</td>
                                        <td>08:45am</td>
                                        <td><Button variant="contained" endIcon={<FaCaretDown />}>
                                            Panding
                                        </Button></td>
                                    </tr>
                                    <tr>
                                        <td>15/07/2024</td>
                                        <td>Moe</td>
                                        <td>10:00am</td>
                                        <td><Button variant="contained" color="success" endIcon={<FaCaretDown />}>
                                            Accept
                                        </Button></td>
                                    </tr>
                                    <tr>
                                        <td>13/07/2024</td>
                                        <td>Dinesh</td>
                                        <td>12:30pm</td>
                                        <td><Button variant="contained" endIcon={<FaCaretDown />}>
                                            Panding
                                        </Button></td>
                                    </tr>
                                    <tr>
                                        <td>12/07/2024</td>
                                        <td>Dooley</td>
                                        <td>01:30pm</td>
                                        <td><Button variant="contained" endIcon={<FaCaretDown />}>
                                            Panding
                                        </Button></td>
                                    </tr>
                                    <tr>
                                        <td>11/07/2024</td>
                                        <td>Manish</td>
                                        <td>02:30pm</td>
                                        <td><Button variant="contained" color="success" endIcon={<FaCaretDown />}>
                                            Accept
                                        </Button></td>
                                    </tr>
                                    <tr>
                                        <td>10/07/2024</td>
                                        <td>Gunjan</td>
                                        <td>03:30pm</td>
                                        <td><Button variant="contained" color="success" endIcon={<FaCaretDown />}>
                                            Accept
                                        </Button></td>
                                    </tr>
                                    <tr>
                                        <td>12/07/2024</td>
                                        <td>Dooley</td>
                                        <td>01:30pm</td>
                                        <td><Button variant="contained" endIcon={<FaCaretDown />}>
                                            Panding
                                        </Button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-5">
                    <div className="card shadow card-border mb-4 mt-3 m-1">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h4 className="m-0 font-weight-bold text-body">Upcoming tasks</h4>
                        </div>
                        <div className="task-add d-flex p-3 ">
                            <div className="task-name">
                                <h5>Add row in table</h5>
                                <p>04/07/2024</p>
                            </div>
                            <div className="task-icon d-flex align-items-center justify-content-center"><IoMdEye />
                            </div>
                            <div className="task-icon2 d-flex align-items-center justify-content-center"><MdDoneOutline />
                            </div>
                        </div>
                        <div className="task-add d-flex p-3 ">
                            <div className="task-name">
                                <h5>Add row in table</h5>
                                <p>04/07/2024</p>
                            </div>
                            <div className="task-icon d-flex align-items-center justify-content-center"><IoMdEye />
                            </div>
                            <div className="task-icon2 d-flex align-items-center justify-content-center"><MdDoneOutline />
                            </div>
                        </div>
                    </div>
                    <div className="card shadow card-border  mb-4 mt-3 m-1">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h4 className="m-0 font-weight-bold text-body">Activities feed</h4>
                        </div>
                        <div class="activity-feed">
                            <div className="feed-item">
                                <div className="date">Sep 25</div>
                                <div className="text">Responded to need <a href="#">“Volunteer opportunity”</a></div>
                            </div>
                            <div className="feed-item">
                                <div className="date">Sep 24</div>
                                <div className="text">Added an interest “Volunteer Activities”</div>
                            </div>
                            <div className="feed-item">
                                <div className="date">Sep 23</div>
                                <div className="text">Joined the group <a href="#">“Boardsmanship Forum”</a></div>
                            </div>
                            <div className="feed-item">
                                <div className="date">Sep 21</div>
                                <div className="text">Responded to need <a href="#">“In-Kind Opportunity”</a></div>
                            </div>
                            <div className="feed-item">
                                <div className="date">Sep 18</div>
                                <div className="text">Created need <a href="#">“Volunteer Opportunity”</a></div>
                            </div>
                            <div className="feed-item">
                                <div className="date">Sep 17</div>
                                <div className="text">Attending the event <a href="#">“Some New Event”</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;