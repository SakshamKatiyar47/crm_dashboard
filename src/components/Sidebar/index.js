import React from 'react'
import Button from '@mui/material/Button';
import { MdSpaceDashboard } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <Link to="/">
                    <li>
                        <Button className='w-100' ><span className='icon'><MdSpaceDashboard /></span> Dashboard </Button>
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <Button className='w-100' ><span className='icon'><FaHandshake /></span> Deals </Button>
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <Button className='w-100' ><span className='icon'><MdContacts /></span> Contacts </Button>
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <Button className='w-100' ><span className='icon'><MdContacts /></span> Contacts </Button>
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <Button className='w-100' ><span className='icon'><MdContacts /></span> Contacts </Button>
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <Button className='w-100' ><span className='icon'><MdContacts /></span> Contacts </Button>
                    </li>
                </Link>
            </ul>

            <div className="logout">
                <div className="logout-box">
                    <Button variant="contained">Logout <IoLogOut/></Button>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;