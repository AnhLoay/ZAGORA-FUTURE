"use client";

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import './IconMenu.css';
import Link from 'next/link';
function IconMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                className="menu-icon"
            >
                <div className="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link href='/'>Acceuil</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link href='/medecin' >Nos medecins</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link href='/horaire'>Nos horaire</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link href='/propos'>A propos</Link></MenuItem>
            </Menu>
        </div>
    );
}

export default IconMenu;