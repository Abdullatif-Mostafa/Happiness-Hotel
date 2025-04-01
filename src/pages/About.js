import React, { useState } from 'react';
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
} from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventIcon from '@mui/icons-material/Event';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TimelineIcon from '@mui/icons-material/Timeline';
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

function About() {
  const theme = useTheme();
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);

  return (
    <Box sx={{ pt: { xs: 6, md: 8 }, pb: 8, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <motion.div {...fadeInUp}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              من نحن
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mt: 2 }}>
              نحن نقدم تجربة فندقية استثنائية تجمع بين الأصالة العربية والرفاهية العصرية
            </Typography>
          </Box>
        </motion.div>

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

        {/* Testimonials */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            <FormatQuoteIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />
            ماذا يقول عنا ضيوفنا
          </Typography>
          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                >
                  <Card
                    sx={{
                      height: '100%',
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
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          src={testimonial.avatar}
                          sx={{ width: 60, height: 60, mr: 2 }}
                        />
                        <Box>
                          <Typography variant="h6">
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.position}
                          </Typography>
                        </Box>
                      </Box>
                      <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                      <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        "{testimonial.comment}"
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 6 },
              textAlign: 'center',
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
              borderRadius: 4,
            }}
          >
            <Typography variant="h4" gutterBottom>
              هل أنت مستعد لتجربة إقامة لا تُنسى؟
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 600, mx: 'auto' }}>
              اكتشف الرفاهية والراحة في فندق السعادة. احجز إقامتك اليوم واستمتع بتجربة فريدة.
            </Typography>
            <Button
              component={RouterLink}
              to="/rooms"
              variant="contained"
              size="large"
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
              احجز الآن
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

export default About;
