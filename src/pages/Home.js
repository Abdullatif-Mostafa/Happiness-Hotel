import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PoolIcon from '@mui/icons-material/Pool';
import SpaIcon from '@mui/icons-material/Spa';
import WifiIcon from '@mui/icons-material/Wifi';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'مرحباً بكم في فندق السعادة',
    subtitle: 'حيث الراحة والرفاهية تلتقيان',
  },
  {
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'غرف وأجنحة فاخرة',
    subtitle: 'تجربة إقامة لا تُنسى',
  },
  {
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    title: 'مرافق استثنائية',
    subtitle: 'استمتع بأفضل الخدمات والمرافق',
  },
];

const features = [
  {
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
    title: 'مطاعم عالمية',
    description: 'أشهى الأطباق العالمية',
  },
  {
    icon: <PoolIcon sx={{ fontSize: 40 }} />,
    title: 'مسبح خارجي',
    description: 'استمتع بالسباحة والاسترخاء',
  },
  {
    icon: <SpaIcon sx={{ fontSize: 40 }} />,
    title: 'سبا فاخر',
    description: 'خدمات سبا متكاملة',
  },
  {
    icon: <WifiIcon sx={{ fontSize: 40 }} />,
    title: 'واي فاي مجاني',
    description: 'إنترنت سريع ومجاني',
  },
  {
    icon: <MeetingRoomIcon sx={{ fontSize: 40 }} />,
    title: 'قاعات اجتماعات',
    description: 'قاعات مجهزة بالكامل',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: 'خدمة 24/7',
    description: 'فريق متكامل لخدمتكم',
  },
];

function Home() {
  return (
    <Box>
      {/* Hero Section with Carousel */}
      <Box sx={{ height: '80vh', position: 'relative' }}>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          style={{ height: '100%' }}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  height: '100%',
                  backgroundImage: `url("${slide.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    textAlign: 'center',
                    color: 'white',
                    zIndex: 1,
                    transform: 'translateY(-20px)',
                    opacity: 0,
                    animation: 'slideUp 1s ease forwards',
                    '@keyframes slideUp': {
                      to: {
                        transform: 'translateY(0)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
                    {slide.title}
                  </Typography>
                  <Typography variant="h5">
                    {slide.subtitle}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" sx={{ mb: 6 }}>
          خدماتنا المميزة
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
                elevation={2}
              >
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Welcome Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                تجربة إقامة فاخرة
              </Typography>
              <Typography variant="body1" paragraph>
                استمتعوا بتجربة إقامة فاخرة في فندق السعادة، حيث الأجواء المريحة، والخدمات الراقية، 
                والموقع المثالي يجتمعون ليمنحوكم تجربة لا تُنسى.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="غرفة فاخرة"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
