import { useState } from 'react';
import { HomePage } from '@/app/components/HomePage';
import { BookingPage, BookingData } from '@/app/components/BookingPage';
import { ConfirmationPage } from '@/app/components/ConfirmationPage';

type PageView = 'home' | 'booking' | 'confirmation';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  const handleBookTable = () => {
    setCurrentPage('booking');
  };

  const handleConfirmBooking = (data: BookingData) => {
    setBookingData(data);
    setCurrentPage('confirmation');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setBookingData(null);
  };

  const handleBackFromBooking = () => {
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-family-primary)' }}>
      {currentPage === 'home' && (
        <HomePage onBookTable={handleBookTable} />
      )}
      
      {currentPage === 'booking' && (
        <BookingPage 
          onConfirm={handleConfirmBooking}
          onBack={handleBackFromBooking}
        />
      )}
      
      {currentPage === 'confirmation' && bookingData && (
        <ConfirmationPage 
          bookingData={bookingData}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
}
