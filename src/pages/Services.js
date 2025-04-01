import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  Chip,
  Rating,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PoolIcon from '@mui/icons-material/Pool';
import SpaIcon from '@mui/icons-material/Spa';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import WifiIcon from '@mui/icons-material/Wifi';
import StarIcon from '@mui/icons-material/Star';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CelebrationIcon from '@mui/icons-material/Celebration';

const services = [
  {
    title: 'قاعات الاجتماعات',
    description: 'قاعات مجهزة بأحدث التقنيات لاجتماعاتك وفعالياتك',
    images: [
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    ],
    details: ['شاشات عرض', 'نظام صوت متطور', 'خدمة انترنت عالية السرعة', 'خدمة ضيافة'],
    rating: 4.6,
    reviews: 150,
    price: '180 ر.س',
    availability: true,
    icon: <MeetingRoomIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'المطعم العالمي',
    description: 'تلذذ بأشهى المأكولات العالمية على يد أمهر الطهاة',
    images: [
      'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    ],
    details: ['بوفيه مفتوح', 'قائمة طعام متنوعة', 'ركن المأكولات البحرية', 'حلويات شرقية وغربية'],
    rating: 4.8,
    reviews: 245,
    price: '150 ر.س',
    availability: true,
    icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'النادي الصحي',
    description: 'استمتع بتجربة صحية متكاملة في نادينا الصحي',
    images: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    ],
    details: ['صالة رياضية متكاملة', 'مسبح داخلي', 'جاكوزي', 'ساونا وغرف بخار'],
    rating: 4.7,
    reviews: 200,
    price: '120 ر.س',
    availability: true,
    icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'السبا',
    description: 'دلل نفسك مع باقات السبا المتنوعة',
    images: [
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    ],
    details: ['مساج تايلندي', 'علاجات الوجه', 'حمام مغربي', 'مانيكير وباديكير'],
    rating: 4.9,
    reviews: 300,
    price: '200 ر.س',
    availability: true,
    icon: <SpaIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'خدمة رجال الأعمال',
    description: 'خدمات متكاملة لرجال الأعمال',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    ],
    details: ['مركز أعمال', 'خدمة سكرتارية', 'قاعات اجتماعات خاصة', 'خدمة ليموزين'],
    rating: 4.6,
    reviews: 150,
    price: '180 ر.س',
    availability: true,
    icon: <BusinessCenterIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'حفلات وأعراس',
    description: 'قاعات مجهزة لحفلاتك ومناسباتك الخاصة',
    images: [
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    ],
    details: ['قاعات فاخرة', 'خدمة تنظيم حفلات', 'تجهيزات صوت وإضاءة', 'خدمة ضيافة VIP'],
    rating: 4.8,
    reviews: 245,
    price: '150 ر.س',
    availability: true,
    icon: <CelebrationIcon sx={{ fontSize: 40 }} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

function ServiceCard({ service, onBook }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={itemVariants}
    >
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            {service.images.map((image, index) => (
              <SwiperSlide key={index}>
                <CardMedia
                  component="img"
                  image={image}
                  alt={`${service.title} - صورة ${index + 1}`}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Chip
            label={service.availability ? 'متاح' : 'محجوز'}
            color={service.availability ? 'success' : 'error'}
            sx={{ position: 'absolute', top: 16, right: 16, zIndex: 1 }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            {service.icon}
            <Typography variant="h5" component="h2" sx={{ mr: 2 }}>
              {service.title}
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            {service.description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={service.rating} precision={0.1} readOnly />
            <Typography variant="body2" sx={{ mr: 1 }}>
              ({service.reviews} تقييم)
            </Typography>
          </Box>
          <Typography variant="h6" color="primary" gutterBottom>
            {service.price}
          </Typography>
          <List>
            {service.details.map((detail, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <StarIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={detail} />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            fullWidth
            onClick={() => onBook(service)}
            disabled={!service.availability}
            sx={{ mt: 2 }}
          >
            احجز الآن
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Services() {
  const [bookingDialog, setBookingDialog] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingDate, setBookingDate] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleBook = (service) => {
    setSelectedService(service);
    setBookingDialog(true);
  };

  const handleBookingSubmit = () => {
    // Here you would typically make an API call to submit the booking
    setSnackbar({
      open: true,
      message: 'تم تأكيد حجزك بنجاح! سنتواصل معك قريباً',
      severity: 'success',
    });
    setBookingDialog(false);
    setBookingDetails({
      name: '',
      phone: '',
      email: '',
      notes: '',
    });
    setBookingDate(null);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            خدماتنا ومرافقنا
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            نقدم لكم مجموعة متكاملة من الخدمات والمرافق لتجربة إقامة لا تُنسى
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ServiceCard service={service} onBook={handleBook} />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Booking Dialog */}
        <Dialog
          open={bookingDialog}
          onClose={() => setBookingDialog(false)}
          fullScreen={isMobile}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            حجز {selectedService?.title}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="الاسم"
                  value={bookingDetails.name}
                  onChange={(e) =>
                    setBookingDetails({ ...bookingDetails, name: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="رقم الهاتف"
                  value={bookingDetails.phone}
                  onChange={(e) =>
                    setBookingDetails({ ...bookingDetails, phone: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="البريد الإلكتروني"
                  type="email"
                  value={bookingDetails.email}
                  onChange={(e) =>
                    setBookingDetails({ ...bookingDetails, email: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="موعد الحجز"
                    value={bookingDate}
                    onChange={(newValue) => setBookingDate(newValue)}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="ملاحظات إضافية"
                  multiline
                  rows={4}
                  value={bookingDetails.notes}
                  onChange={(e) =>
                    setBookingDetails({ ...bookingDetails, notes: e.target.value })
                  }
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setBookingDialog(false)}>إلغاء</Button>
            <Button onClick={handleBookingSubmit} variant="contained" color="primary">
              تأكيد الحجز
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default Services;
