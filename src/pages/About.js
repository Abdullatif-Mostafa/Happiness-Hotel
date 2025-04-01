import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  useTheme,
  alpha,
  Paper,
  Button,
  Rating,
  IconButton,
  Divider,
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TimelineIcon from '@mui/icons-material/Timeline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Link as RouterLink } from 'react-router-dom';

// Custom motion variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

const slideIn = (direction) => ({
  initial: { opacity: 0, x: direction === 'left' ? -50 : 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
});

const milestones = [
  {
    year: '1990',
    title: 'تأسيس الفندق',
    description: 'بدأت رحلتنا مع افتتاح أول فرع في قلب مدينة الرياض'
  },
  {
    year: '2000',
    title: 'توسيع المرافق',
    description: 'إضافة مرافق جديدة وتحديث الغرف لتلبية احتياجات ضيوفنا'
  },
  {
    year: '2010',
    title: 'جوائز التميز',
    description: 'حصلنا على جوائز عديدة في مجال الضيافة والخدمة المتميزة'
  },
  {
    year: '2020',
    title: 'تجديد شامل',
    description: 'تحديث كامل للفندق مع إضافة تقنيات حديثة وخدمات عصرية'
  },
];

const testimonials = [
  {
    name: 'أحمد محمد',
    position: 'رجل أعمال',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    comment: 'تجربة رائعة في فندق السعادة. الخدمة ممتازة والموظفون ودودون للغاية.',
    rating: 5,
  },
  {
    name: 'سارة عبدالله',
    position: 'مدونة سفر',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    comment: 'من أفضل الفنادق التي أقمت فيها. النظافة والراحة في أعلى مستوياتها.',
    rating: 5,
  },
  {
    name: 'خالد العمري',
    position: 'مدير تنفيذي',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    comment: 'موقع ممتاز وخدمات استثنائية. سأعود بالتأكيد مرة أخرى.',
    rating: 4,
  },
];

const stats = [
  { icon: <BusinessIcon />, value: '300+', label: 'غرفة وجناح', color: '#2196F3' },
  { icon: <GroupIcon />, value: '50,000+', label: 'ضيف سنوياً', color: '#4CAF50' },
  { icon: <StarIcon />, value: '4.8', label: 'تقييم العملاء', color: '#FFC107' },
  { icon: <LocationOnIcon />, value: '5', label: 'مواقع مميزة', color: '#FF5722' },
];

const teamMembers = [
  {
    name: 'محمد العزيز',
    position: 'المدير التنفيذي',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    bio: 'خبرة 20 عاماً في مجال الضيافة الفاخرة',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'mohamed@example.com'
    }
  },
  {
    name: 'فاطمة الزهراء',
    position: 'مديرة العمليات',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    bio: 'متخصصة في تطوير تجربة الضيوف',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'fatima@example.com'
    }
  },
  {
    name: 'عبدالله الخالد',
    position: 'رئيس قسم الضيافة',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    bio: 'حاصل على شهادات عالمية في الضيافة',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'abdullah@example.com'
    }
  },
];

function About() {
  const theme = useTheme();
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Parallax Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'primary.dark',
          color: 'white',
          overflow: 'hidden',
        }}
      >
        <motion.div style={{ y }} sx={{ position: 'absolute', width: '100%', height: '100%' }}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920"
            alt="Hotel Facade"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.4,
            }}
          />
        </motion.div>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                textAlign: 'center',
                mb: 3,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              مرحباً بكم في فندق السعادة
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                maxWidth: 800,
                mx: 'auto',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              حيث تلتقي الأصالة العربية مع الرفاهية العصرية
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Stats Section */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                variants={scaleIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        backgroundColor: alpha(stat.color, 0.1),
                        borderRadius: '50%',
                        width: 60,
                        height: 60,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                      }}
                    >
                      {React.cloneElement(stat.icon, {
                        sx: { fontSize: 30, color: stat.color }
                      })}
                    </Box>
                    <Typography variant="h4" component="div" gutterBottom color="primary">
                      {stat.value}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* History Timeline */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            <TimelineIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />
            مسيرتنا
          </Typography>
          <Timeline position="alternate">
            {milestones.map((milestone, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <motion.div
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <TimelineDot color="primary">
                      <EventIcon />
                    </TimelineDot>
                  </motion.div>
                  {index < milestones.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    variants={slideIn(index % 2 === 0 ? 'right' : 'left')}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        backgroundColor: alpha(theme.palette.primary.main, 0.02),
                      }}
                    >
                      <Typography variant="h6" component="h3" color="primary">
                        {milestone.year}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                        {milestone.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {milestone.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Team Section */}
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            <GroupIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />
            فريقنا المتميز
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Avatar
                        src={member.avatar}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 2,
                          border: `4px solid ${theme.palette.primary.main}`,
                        }}
                      />
                      <Typography variant="h6" gutterBottom>
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="primary"
                        gutterBottom
                        sx={{ fontWeight: 500 }}
                      >
                        {member.position}
                      </Typography>
                      <Typography color="text.secondary" paragraph>
                        {member.bio}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                        <IconButton
                          component="a"
                          href={member.social.linkedin}
                          color="primary"
                          size="small"
                        >
                          <LinkedInIcon />
                        </IconButton>
                        <IconButton
                          component="a"
                          href={member.social.twitter}
                          color="primary"
                          size="small"
                        >
                          <TwitterIcon />
                        </IconButton>
                        <IconButton
                          component="a"
                          href={`mailto:${member.social.email}`}
                          color="primary"
                          size="small"
                        >
                          <EmailIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Enhanced Testimonials Carousel */}
        <Box sx={{ my: 8, position: 'relative' }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            <FormatQuoteIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />
            ماذا يقول عنا ضيوفنا
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <IconButton
              onClick={prevTestimonial}
              sx={{
                position: 'absolute',
                left: { xs: 'calc(50% - 100px)', md: -20 },
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'background.paper',
                boxShadow: 1,
                '&:hover': { bgcolor: 'background.paper' },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={nextTestimonial}
              sx={{
                position: 'absolute',
                right: { xs: 'calc(50% - 100px)', md: -20 },
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'background.paper',
                boxShadow: 1,
                '&:hover': { bgcolor: 'background.paper' },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  maxWidth: 600,
                  mx: 'auto',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    backgroundColor: theme.palette.primary.main,
                    borderTopLeftRadius: theme.shape.borderRadius,
                    borderTopRightRadius: theme.shape.borderRadius,
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Avatar
                    src={testimonials[currentTestimonialIndex].avatar}
                    sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                  />
                  <Typography variant="h6" gutterBottom>
                    {testimonials[currentTestimonialIndex].name}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {testimonials[currentTestimonialIndex].position}
                  </Typography>
                  <Rating
                    value={testimonials[currentTestimonialIndex].rating}
                    readOnly
                    sx={{ mb: 2 }}
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontStyle: 'italic',
                      maxWidth: 450,
                      mx: 'auto',
                    }}
                  >
                    "{testimonials[currentTestimonialIndex].comment}"
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Box>

        {/* Contact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              my: 8,
              py: 6,
              px: 4,
              textAlign: 'center',
              borderRadius: 2,
              bgcolor: alpha(theme.palette.primary.main, 0.05),
            }}
          >
            <Typography variant="h4" gutterBottom>
              هل أنت مستعد لتجربة إقامة لا تُنسى؟
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              اتصل بنا اليوم لحجز إقامتك في فندق السعادة واستمتع بتجربة ضيافة استثنائية
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              تواصل معنا
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;
