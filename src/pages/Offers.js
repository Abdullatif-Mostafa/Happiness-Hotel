import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const offers = [
  {
    title: 'عرض شهر العسل',
    description: 'إقامة رومانسية لمدة 3 ليالٍ مع وجبة عشاء فاخرة وجلسة سبا للزوجين',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '1500',
    originalPrice: '2000',
    validUntil: '2025-12-31',
    features: [
      'إفطار مجاني',
      'عشاء رومانسي',
      'جلسة سبا للزوجين',
      'ترقية مجانية للغرفة',
    ],
    persons: '2',
  },
  {
    title: 'باقة العائلة',
    description: 'إقامة مريحة للعائلة مع أنشطة ترفيهية للأطفال ووجبات مجانية',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '2000',
    originalPrice: '2800',
    validUntil: '2025-12-31',
    features: [
      'إفطار وعشاء مجاني للأطفال',
      'نادي للأطفال',
      'رحلة عائلية مجانية',
      'غرفتين متصلتين',
    ],
    persons: '4',
  },
  {
    title: 'عطلة نهاية الأسبوع',
    description: 'استمتع بعطلة نهاية الأسبوع مع إفطار فاخر وإقامة مميزة',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: '800',
    originalPrice: '1200',
    validUntil: '2025-12-31',
    features: [
      'إفطار فاخر',
      'تسجيل مغادرة متأخر',
      'خصم 20% على المطاعم',
      'دخول مجاني للسبا',
    ],
    persons: '2',
  },
];

function OfferCard({ offer }) {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.shadows[8],
          },
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={offer.image}
          alt={offer.title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {offer.title}
            </Typography>
            <Chip
              icon={<LocalOfferIcon />}
              label={`${offer.price} ر.س`}
              color="primary"
              sx={{ fontWeight: 'bold' }}
            />
          </Box>
          
          <Typography variant="body1" color="text.secondary" paragraph>
            {offer.description}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
            <Chip
              size="small"
              icon={<EventIcon />}
              label={`صالح حتى ${new Date(offer.validUntil).toLocaleDateString('ar-SA')}`}
              variant="outlined"
            />
            <Chip
              size="small"
              icon={<PersonIcon />}
              label={`${offer.persons} أشخاص`}
              variant="outlined"
            />
            <Chip
              size="small"
              icon={<AttachMoneyIcon />}
              label={`وفر ${offer.originalPrice - offer.price} ر.س`}
              variant="outlined"
              color="secondary"
            />
          </Box>

          <Typography variant="subtitle1" gutterBottom>
            المميزات:
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 2 }}>
            {offer.features.map((feature, index) => (
              <Typography component="li" key={index} variant="body2" color="text.secondary">
                {feature}
              </Typography>
            ))}
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 'auto' }}
          >
            احجز الآن
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Offers() {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          العروض الخاصة
        </Typography>
        <Typography variant="h6" color="text.secondary">
          اكتشف باقاتنا المميزة وعروضنا الحصرية
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {offers.map((offer, index) => (
          <Grid item key={index} xs={12} md={4}>
            <OfferCard offer={offer} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Offers;
