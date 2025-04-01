import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useScrollTrigger,
  Slide,
  Fade,
  useTheme,
  useMediaQuery,
  alpha,
  Divider,
  Badge,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion, AnimatePresence } from 'framer-motion';

const pages = [
  { name: 'الرئيسية', path: '/', icon: <HomeIcon /> },
  { name: 'الغرف', path: '/rooms', icon: <HotelIcon /> },
  { name: 'الخدمات', path: '/services', icon: <RestaurantIcon /> },
  { name: 'من نحن', path: '/about', icon: <InfoIcon /> },
  { name: 'اتصل بنا', path: '/contact', icon: <ContactsIcon /> },
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const NavButton = ({ page, index }) => {
    const isActive = location.pathname === page.path;
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <Button
          component={RouterLink}
          to={page.path}
          sx={{
            my: 2,
            mx: 1,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 3,
              backgroundColor: 'primary.main',
              transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'right',
              transition: 'transform 0.3s ease-in-out',
            },
            '&:hover::after': {
              transform: 'scaleX(1)',
              transformOrigin: 'left',
            },
          }}
        >
          <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
            {React.cloneElement(page.icon, {
              sx: { fontSize: 20, opacity: 0.7 }
            })}
          </Box>
          {page.name}
        </Button>
      </motion.div>
    );
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          فندق السعادة
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ backgroundColor: alpha('#fff', 0.1) }} />
      <List>
        {pages.map((page, index) => {
          const isActive = location.pathname === page.path;
          return (
            <motion.div
              key={page.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <ListItem
                button
                component={RouterLink}
                to={page.path}
                onClick={handleDrawerToggle}
                sx={{
                  backgroundColor: isActive ? alpha('#fff', 0.1) : 'transparent',
                  '&:hover': {
                    backgroundColor: alpha('#fff', 0.05),
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                  {page.icon}
                </ListItemIcon>
                <ListItemText primary={page.name} />
              </ListItem>
            </motion.div>
          );
        })}
      </List>
      <Divider sx={{ backgroundColor: alpha('#fff', 0.1) }} />
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle2" sx={{ mb: 2, opacity: 0.7 }}>
          تواصل معنا مباشرة
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            startIcon={<PhoneIcon />}
            component="a"
            href="tel:+966112345678"
            sx={{
              backgroundColor: alpha('#fff', 0.1),
              '&:hover': {
                backgroundColor: alpha('#fff', 0.2),
              },
            }}
          >
            اتصل الآن
          </Button>
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            component="a"
            href="https://wa.me/966502345678"
            target="_blank"
            sx={{
              backgroundColor: '#25D366',
              '&:hover': {
                backgroundColor: '#128C7E',
              },
            }}
          >
            واتساب
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            background: isHomePage
              ? isScrolled
                ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
                : 'transparent'
              : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            boxShadow: isScrolled || !isHomePage ? theme.shadows[4] : 'none',
            transition: 'all 0.3s ease-in-out',
            backdropFilter: isScrolled || !isHomePage ? 'blur(10px)' : 'none',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Typography
                  variant="h5"
                  noWrap
                  component={RouterLink}
                  to="/"
                  sx={{
                    mr: 2,
                    fontWeight: 700,
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  فندق السعادة
                </Typography>
              </motion.div>

              {/* Mobile Menu Button */}
              {isMobile && (
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                  <IconButton
                    size="large"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    sx={{ color: 'white' }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              )}

              {/* Desktop Menu */}
              {!isMobile && (
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                  {pages.map((page, index) => (
                    <NavButton key={page.name} page={page} index={index} />
                  ))}
                </Box>
              )}

              {/* Book Now Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Button
                  component={RouterLink}
                  to="/rooms"
                  variant="contained"
                  startIcon={<BookOnlineIcon />}
                  sx={{
                    ml: 2,
                    color: 'white',
                    backgroundColor: theme.palette.secondary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.dark,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                    boxShadow: theme.shadows[4],
                  }}
                >
                  احجز الآن
                </Button>
              </motion.div>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
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
          '& .MuiDrawer-paper': {
            width: 280,
            border: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
