import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Card,
  CardContent,
  Snackbar,
  Alert,
  useTheme,
  alpha,
  IconButton,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

const contactInfo = [
  {
    icon: <LocationOnIcon />,
    title: 'العنوان',
    content: 'شارع الملك فهد، الرياض، المملكة العربية السعودية',
    link: 'https://goo.gl/maps/your-location',
    color: '#4CAF50'
  },
  {
    icon: <PhoneIcon />,
    title: 'الهاتف',
    content: '+966 11 234 5678',
    link: 'tel:+966112345678',
    color: '#2196F3'
  },
  {
    icon: <WhatsAppIcon />,
    title: 'واتساب',
    content: '+966 50 234 5678',
    link: 'https://wa.me/966502345678',
    color: '#25D366'
  },
  {
    icon: <EmailIcon />,
    title: 'البريد الإلكتروني',
    content: 'info@happenies-hotel.com',
    link: 'mailto:info@happenies-hotel.com',
    color: '#FF5722'
  },
  {
    icon: <AccessTimeIcon />,
    title: 'ساعات العمل',
    content: '24/7 في خدمتكم',
    color: '#9C27B0'
  }
];

function ContactInfoCard({ info, index }) {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card
        component={info.link ? 'a' : 'div'}
        href={info.link}
        target={info.link?.startsWith('http') ? '_blank' : undefined}
        rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'translateY(-5px)' : 'none',
          boxShadow: isHovered ? theme.shadows[8] : theme.shadows[1],
          '&:hover': {
            cursor: info.link ? 'pointer' : 'default',
          },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundColor: info.color,
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
          <Box
            sx={{
              backgroundColor: alpha(info.color, 0.1),
              borderRadius: '50%',
              width: 60,
              height: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
            }}
          >
            {React.cloneElement(info.icon, {
              sx: { fontSize: 30, color: info.color }
            })}
          </Box>
          <Typography variant="h6" gutterBottom>
            {info.title}
          </Typography>
          <Typography color="text.secondary">
            {info.content}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب';
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    if (!formData.message.trim()) newErrors.message = 'الرسالة مطلوبة';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setSnackbar({
        open: true,
        message: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً',
        severity: 'success'
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Section Title */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          component="h1"
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
          تواصل معنا
        </Typography>
        <Typography variant="h6" color="text.secondary">
          نحن هنا لمساعدتك ونرحب بتواصلك معنا
        </Typography>
      </Box>

      {/* Contact Info Cards */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {contactInfo.map((info, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <ContactInfoCard info={info} index={index} />
          </Grid>
        ))}
      </Grid>

      {/* Contact Form */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
              }}
            >
              <Typography variant="h5" gutterBottom>
                أرسل لنا رسالة
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="الاسم"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="البريد الإلكتروني"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="رقم الهاتف"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="الموضوع"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="الرسالة"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        mt: 2,
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: theme.shadows[4],
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      إرسال الرسالة
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Paper
              elevation={3}
              sx={{
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.674754711597!2d46.6777273!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0x98f57c366c9e0f90!2sKing%20Fahd%20Rd%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1625641411576!5m2!1sen!2sus"
                style={{
                  border: 0,
                  width: '100%',
                  height: '100%',
                  minHeight: '400px'
                }}
                allowFullScreen=""
                loading="lazy"
                title="موقع الفندق"
              />
            </Paper>
          </motion.div>
        </Grid>
      </Grid>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;
