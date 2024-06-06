import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ScienceIcon from '@mui/icons-material/Science';
import BusinessIcon from '@mui/icons-material/Business';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BiotechIcon from '@mui/icons-material/Biotech';
import TvIcon from '@mui/icons-material/Tv';


const Navbar = () => {
    const [active, setactive] = useState("Home");

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon className='text-teal-400'/>
                        </ListItemIcon>
                        <ListItemText primary={"Home"} className='font-quicksand text-teal-400 font-semibold'/>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <ScienceIcon className='text-teal-400'/>
                        </ListItemIcon>
                        <ListItemText primary={"Science"} className='font-quicksand text-teal-400 font-semibold'/>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <BusinessIcon className='text-teal-400'/>
                        </ListItemIcon>
                        <ListItemText primary={"Business"} className='font-quicksand text-teal-400 font-semibold'/>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <SportsBaseballIcon className='text-teal-400'/>
                        </ListItemIcon>
                        <ListItemText primary={"Sports"} className='font-quicksand text-teal-400 font-semibold'/>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <FavoriteIcon className='text-teal-400'/>
                        </ListItemIcon>
                        <ListItemText primary={"Health"} className='font-quicksand text-teal-400 font-semibold'/>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <BiotechIcon className='text-teal-400'/>
                        </ListItemIcon>
                        <ListItemText primary={"Technology"} className='font-quicksand text-teal-400 font-semibold'/>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <TvIcon className='text-teal-400'/>
                        </ListItemIcon>
                        <ListItemText primary={"Entertainment"} className='font-quicksand text-teal-400 font-semibold'/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );


    return (
        <div className='w-[100vw] h-[50px] m-0 p-0 flex flex-row'>
            <div className='md:w-[30%] w-[70%] h-[100%] flex justify-start items-center'>
                <h1 className='md:text-2xl text-sm bg-gradient-to-r from-purple-700 via-teal-500 to-indigo-400 text-transparent bg-clip-text font-semibold ml-10 font-tyny5'>
                    NEWS DAILY
                </h1>
            </div>
            <div className='md:w-[70%] md:h-[100%] md:flex md:justify-center md:items-center hidden'>
                <ul className='flex flex-row justify-center items-center'>
                    <li className='mx-2'><Link to='/' onClick={() => setactive("Home")} className={`text-md font-quicksand font-semibold text-teal-500 ${active === 'Home' ? 'bg-teal-400 p-2 rounded-md text-white' : ""}`}>Home</Link></li>

                    <li className='mx-2'><Link to='/science' onClick={() => setactive("Science")} className={`text-md font-quicksand font-semibold text-teal-500 ${active === 'Science' ? 'bg-teal-400 p-2 rounded-md text-white' : ""}`}>Science</Link></li>

                    <li className='mx-2'><Link to='/business' onClick={() => setactive("Business")} className={`text-md font-quicksand font-semibold text-teal-500 ${active === 'Business' ? 'bg-teal-400 p-2 rounded-md text-white' : ""}`}>Business</Link></li>

                    <li className='mx-2'><Link to='/sports' onClick={() => setactive("Sports")} className={`text-md font-quicksand font-semibold text-teal-500 ${active === 'Sports' ? 'bg-teal-400 p-2 rounded-md text-white' : ""}`}>Sports</Link></li>

                    <li className='mx-2'><Link to='/health' onClick={() => setactive("Health")} className={`text-md font-quicksand font-semibold text-teal-500 ${active === 'Health' ? 'bg-teal-400 p-2 rounded-md text-white' : ""}`}>Health</Link></li>

                    <li className='mx-2'><Link to='/technology' onClick={() => setactive("Technology")} className={`text-md font-quicksand font-semibold text-teal-500 ${active === 'Technology' ? 'bg-teal-400 p-2 rounded-md text-white' : ""}`}>Technology</Link></li>

                    <li className='mx-2'><Link to='/entertainment' onClick={() => setactive("Entertainment")} className={`text-md font-quicksand font-semibold text-teal-500 ${active === 'Entertainment' ? 'bg-teal-400 p-2 rounded-md text-white' : ""}`}>Entertainment</Link></li>
                </ul>
            </div>
            <div className='w-[30%] h-[100%] flex justify-end items-center mx-5 md:hidden'>
                <React.Fragment>
                    <MenuIcon onClick={toggleDrawer("right", true)} className='menuIcon' />

                    <Drawer
                        anchor='right'
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}
                    >
                        {list("right")}
                    </Drawer>
                </React.Fragment>
            </div>
        </div>
    )
}

export default Navbar;