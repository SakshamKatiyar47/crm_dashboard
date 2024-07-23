import React, { useContext } from 'react'
import logo from '../../assests/images/logo.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import Search from '../Search';
import { FaCircleUser } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { MyContext } from '../../App';

const Header = () => {

    const context = useContext(MyContext)

    return (
        <>
            <header className="d-flix align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flix align-items-center w-100">
                        {/*logo*/}
                        <div className="col-sm-2">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo} /><span>Dashboard</span>
                            </Link>
                        </div>
                        <div className="col-sm-3 d-flex align-items-center pl-4">
                            <Button className="rounded-circle mr-3" onClick={()=>context.setIsToggleSidebar
                                (!context.setIsToggleSidebar)}>
                                {
                                    context.isToggleSidebr===false ? <MdMenuOpen /> : <MdMenu/>
                                }
                                </Button>
                            <Search />
                        </div>
                        <div className="col-sm-7 d-flex align-items-center justify-content-end">
                            <Button className="rounded-circle mr-3"><IoMdNotifications /></Button>
                            <Button className="rounded-circle mr-3"><FaCircleUser /></Button>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;