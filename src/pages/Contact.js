import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
      severity: 'success',
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'العنوان',
      content: 'شارع السعادة، المدينة السعيدة',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'الهاتف',
      content: '+123 456 789',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'البريد الإلكتروني',
      content: 'info@happenieshotel.com',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'ساعات العمل',
      content: '24 ساعة / 7 أيام في الأسبوع',
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          اتصل بنا
        </Typography>
        <Typography variant="h6" color="text.secondary">
          نحن هنا لمساعدتك والإجابة على جميع استفساراتك
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              معلومات التواصل
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              يمكنك التواصل معنا مباشرة أو تعبئة النموذج وسنقوم بالرد عليك في أقرب وقت
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    sx={{ 
                      height: '100%',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: theme.shadows[4],
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {info.icon}
                        <Box>
                          <Typography variant="h6" gutterBottom>
                            {info.title}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {info.content}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card sx={{ p: 3 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="الاسم"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="البريد الإلكتروني"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      required
                      fullWidth
                      label="الموضوع"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label="الرسالة"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      إرسال الرسالة
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Map Section */}
      <Box sx={{ mt: 8 }}>
        <Card>
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d-122.419415!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0LCsDQ2JzI5LjciTiAxMjLCsDI1JzEwLjEiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Card>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
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
