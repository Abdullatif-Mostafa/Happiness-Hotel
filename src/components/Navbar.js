import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const navItems = [
  { title: 'الرئيسية', path: '/' },
  { title: 'الغرف والأجنحة', path: '/rooms' },
  { title: 'الخدمات والمرافق', path: '/services' },
  { title: 'العروض الخاصة', path: '/offers' },
  { title: 'اتصل بنا', path: '/contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem 
          button 
          component={Link} 
          to={item.path} 
          key={item.title}
          onClick={handleDrawerToggle}
        >
          <ListItemText 
            primary={item.title} 
            sx={{ textAlign: 'right' }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            🏨 فندق السعادة
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  component={Link}
                  to={item.path}
                  sx={{ color: 'primary.main' }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
