import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  useTheme,
  alpha,
  Paper,
  Divider,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PoolIcon from '@mui/icons-material/Pool';
import SpaIcon from '@mui/icons-material/Spa';
import WifiIcon from '@mui/icons-material/Wifi';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
    description: 'أشهى الأطباق العالمية من مختلف المطابخ العالمية بإشراف أمهر الطهاة',
    bgColor: '#FFF3E0',
    link: '/services#restaurants'
  },
  {
    icon: <PoolIcon sx={{ fontSize: 40 }} />,
    title: 'مسبح خارجي',
    description: 'استمتع بالسباحة والاسترخاء في مسبحنا الفاخر مع إطلالات خلابة',
    bgColor: '#E3F2FD',
    link: '/services#pool'
  },
  {
    icon: <SpaIcon sx={{ fontSize: 40 }} />,
    title: 'سبا فاخر',
    description: 'دلل نفسك مع جلسات السبا المتنوعة وخدمات المساج المميزة',
    bgColor: '#F3E5F5',
    link: '/services#spa'
  },
  {
    icon: <WifiIcon sx={{ fontSize: 40 }} />,
    title: 'واي فاي مجاني',
    description: 'اتصال إنترنت فائق السرعة في جميع مرافق الفندق',
    bgColor: '#E8F5E9',
    link: '/services#amenities'
  },
  {
    icon: <MeetingRoomIcon sx={{ fontSize: 40 }} />,
    title: 'قاعات اجتماعات',
    description: 'قاعات مجهزة بأحدث التقنيات لاجتماعاتك وفعالياتك الخاصة',
    bgColor: '#FBE9E7',
    link: '/services#meetings'
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: 'خدمة 24/7',
    description: 'فريق متكامل في خدمتكم على مدار الساعة لتلبية جميع احتياجاتكم',
    bgColor: '#E0F7FA',
    link: '/services#support'
  },
];

function FeatureCard({ feature, index }) {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Paper
        elevation={isHovered ? 8 : 1}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          height: '100%',
          background: `linear-gradient(135deg, ${feature.bgColor} 0%, ${alpha(feature.bgColor, 0.4)} 100%)`,
          transition: 'all 0.3s ease-in-out',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 100%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }
        }}
      >
        <CardContent sx={{ height: '100%', p: 3 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  borderRadius: '50%',
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: isHovered ? 'rotate(5deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease-in-out',
                }}
              >
                {React.cloneElement(feature.icon, {
                  sx: {
                    fontSize: 40,
                    color: theme.palette.primary.main,
                  }
                })}
              </Box>
            </Box>

            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: theme.palette.text.primary,
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              {feature.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                mb: 2,
                flex: 1,
                opacity: isHovered ? 0.9 : 0.7,
                transition: 'opacity 0.3s ease-in-out',
              }}
            >
              {feature.description}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                mt: 'auto',
              }}
            >
              <IconButton
                size="small"
                sx={{
                  transform: isHovered ? 'translateX(-5px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease-in-out',
                  color: theme.palette.primary.main,
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Paper>
    </motion.div>
  );
}

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
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              component="h2"
              variant="h3"
              color="primary"
              gutterBottom
              sx={{
                fontWeight: 600,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 4,
                  backgroundColor: 'primary.main',
                  borderRadius: 2,
                }
              }}
            >
              خدماتنا المميزة
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
              نقدم لكم مجموعة متكاملة من الخدمات الراقية لإقامة لا تُنسى
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard feature={feature} index={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

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
