import React, { useState } from 'react';
import { 
  Container, Typography, Grid, Card, CardMedia, CardContent, Box, 
  Button, Chip, IconButton, Dialog, DialogContent, TextField,
  Select, MenuItem, FormControl, InputLabel, Snackbar, Alert,
  ImageList, ImageListItem
} from '@mui/material';
import {
  Wifi, AcUnit, Tv, LocalBar, RoomService, Pool, 
  Spa, KingBed, People, SquareFoot, ChevronLeft, ChevronRight
} from '@mui/icons-material';

const rooms = [
  {
    id: 1,
    title: 'الغرفة الكلاسيكية',
    description: 'غرفة أنيقة مع سرير مزدوج وإطلالة على المدينة',
    price: 500,
    size: 35,
    capacity: 2,
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2070&q=80'
    ],
    amenities: [
      { name: 'تكييف', icon: <AcUnit /> },
      { name: 'واي فاي', icon: <Wifi /> },
      { name: 'تلفاز', icon: <Tv /> },
      { name: 'ميني بار', icon: <LocalBar /> },
      { name: 'خدمة الغرف', icon: <RoomService /> }
    ],
    available: true,
  },
  {
    id: 2,
    title: 'جناح تنفيذي',
    description: 'جناح فسيح مع غرفة معيشة منفصلة وإطلالة بانورامية',
    price: 800,
    size: 55,
    capacity: 3,
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2070&q=80'
    ],
    amenities: [
      { name: 'تكييف', icon: <AcUnit /> },
      { name: 'واي فاي', icon: <Wifi /> },
      { name: 'تلفاز', icon: <Tv /> },
      { name: 'ميني بار', icon: <LocalBar /> },
      { name: 'خدمة الغرف', icon: <RoomService /> },
      { name: 'جاكوزي', icon: <Spa /> }
    ],
    available: true,
  },
  {
    id: 3,
    title: 'الجناح الملكي',
    description: 'أفخم أجنحتنا مع مساحة واسعة وخدمات حصرية',
    price: 1200,
    size: 85,
    capacity: 4,
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2070&q=80'
    ],
    amenities: [
      { name: 'تكييف', icon: <AcUnit /> },
      { name: 'واي فاي', icon: <Wifi /> },
      { name: 'تلفاز', icon: <Tv /> },
      { name: 'ميني بار', icon: <LocalBar /> },
      { name: 'خدمة الغرف', icon: <RoomService /> },
      { name: 'جاكوزي', icon: <Spa /> },
      { name: 'مسبح خاص', icon: <Pool /> }
    ],
    available: false,
  },
];

function Rooms() {
  const [filters, setFilters] = useState({
    priceRange: 'all',
    capacity: 'all'
  });
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingDialog, setBookingDialog] = useState(false);
  const [imageDialog, setImageDialog] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const filteredRooms = rooms.filter(room => {
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (room.price < min || room.price > max) return false;
    }
    if (filters.capacity !== 'all' && room.capacity !== parseInt(filters.capacity)) {
      return false;
    }
    return true;
  });

  const handleBooking = (room) => {
    setSelectedRoom(room);
    setBookingDialog(true);
  };

  const handleBookingSubmit = () => {
    setBookingDialog(false);
    setSnackbar({
      open: true,
      message: 'تم حجز الغرفة بنجاح!',
      severity: 'success'
    });
  };

  const handleImageClick = (room, index) => {
    setSelectedRoom(room);
    setCurrentImageIndex(index);
    setImageDialog(true);
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        الغرف والأجنحة
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        اختر من بين مجموعة متنوعة من الغرف والأجنحة الفاخرة
      </Typography>

      {/* Filters */}
      <Box sx={{ mb: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>نطاق السعر</InputLabel>
          <Select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
            label="نطاق السعر"
          >
            <MenuItem value="all">جميع الأسعار</MenuItem>
            <MenuItem value="0-600">أقل من 600 ريال</MenuItem>
            <MenuItem value="600-1000">600 - 1000 ريال</MenuItem>
            <MenuItem value="1000-2000">أكثر من 1000 ريال</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>عدد الأشخاص</InputLabel>
          <Select
            name="capacity"
            value={filters.capacity}
            onChange={handleFilterChange}
            label="عدد الأشخاص"
          >
            <MenuItem value="all">الكل</MenuItem>
            <MenuItem value="2">2 أشخاص</MenuItem>
            <MenuItem value="3">3 أشخاص</MenuItem>
            <MenuItem value="4">4 أشخاص</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      <Grid container spacing={4}>
        {filteredRooms.map((room) => (
          <Grid item key={room.id} xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={room.images[0]}
                  alt={room.title}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => handleImageClick(room, 0)}
                />
                <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                  <Chip
                    label={room.available ? 'متاح' : 'محجوز'}
                    color={room.available ? 'success' : 'error'}
                  />
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {room.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {room.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" color="primary">
                    {room.price} ريال / ليلة
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <SquareFoot sx={{ mr: 1 }} />
                    <Typography>{room.size} متر مربع</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <People sx={{ mr: 1 }} />
                    <Typography>{room.capacity} أشخاص</Typography>
                  </Box>
                </Box>

                <Typography variant="subtitle1" gutterBottom>
                  المميزات:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {room.amenities.map((amenity, i) => (
                    <Chip
                      key={i}
                      icon={amenity.icon}
                      label={amenity.name}
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleBooking(room)}
                  disabled={!room.available}
                >
                  {room.available ? 'احجز الآن' : 'محجوز'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Booking Dialog */}
      <Dialog open={bookingDialog} onClose={() => setBookingDialog(false)}>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            حجز {selectedRoom?.title}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="الاسم" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="البريد الإلكتروني" type="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="رقم الهاتف" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="تاريخ الوصول" type="date" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="تاريخ المغادرة" type="date" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth onClick={handleBookingSubmit}>
                تأكيد الحجز
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      {/* Image Gallery Dialog */}
      <Dialog
        open={imageDialog}
        onClose={() => setImageDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogContent>
          <Box sx={{ position: 'relative' }}>
            <img
              src={selectedRoom?.images[currentImageIndex]}
              alt={selectedRoom?.title}
              style={{ width: '100%', height: 'auto' }}
            />
            <IconButton
              sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)' }}
              onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : selectedRoom.images.length - 1))}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              sx={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }}
              onClick={() => setCurrentImageIndex((prev) => (prev < selectedRoom.images.length - 1 ? prev + 1 : 0))}
            >
              <ChevronRight />
            </IconButton>
          </Box>
          <ImageList sx={{ mt: 2 }} cols={3} rowHeight={100}>
            {selectedRoom?.images.map((img, index) => (
              <ImageListItem
                key={index}
                sx={{
                  cursor: 'pointer',
                  opacity: currentImageIndex === index ? 1 : 0.6
                }}
                onClick={() => setCurrentImageIndex(index)}
              >
                <img src={img} alt={`${selectedRoom.title} ${index + 1}`} />
              </ImageListItem>
            ))}
          </ImageList>
        </DialogContent>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Rooms;
