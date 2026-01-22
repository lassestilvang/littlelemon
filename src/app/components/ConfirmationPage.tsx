import { Button } from '@/app/components/ui/button';
import { CheckCircle2, Calendar, Clock, Users, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { BookingData } from './BookingPage';

interface ConfirmationPageProps {
  bookingData: BookingData;
  onBackToHome: () => void;
}

export function ConfirmationPage({ bookingData, onBackToHome }: ConfirmationPageProps) {
  const { date, time, guests, occasion, seating } = bookingData;

  return (
    <div className="min-h-screen bg-[#EDEFEE]">
      {/* Header */}
      <header className="bg-[#495E57] text-white py-4 px-6 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-['Markazi_Text'] tracking-wide">
            Little Lemon
          </h1>
        </div>
      </header>

      {/* Confirmation Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-6">
              <CheckCircle2 className="w-16 h-16 text-green-600" />
            </div>
          </div>

          {/* Confirmation Message */}
          <h2 className="text-5xl font-['Markazi_Text'] text-[#495E57] mb-4">
            Reservation Confirmed!
          </h2>
          <p className="text-lg font-['Karla'] text-gray-600 mb-8">
            We look forward to serving you at Little Lemon
          </p>

          {/* Booking Details */}
          <div className="bg-[#EDEFEE] rounded-xl p-8 mb-8 text-left max-w-2xl mx-auto">
            <h3 className="text-2xl font-['Markazi_Text'] text-[#495E57] mb-6">
              Reservation Details
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-lg p-3">
                  <Calendar className="w-6 h-6 text-[#495E57]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-['Karla']">Date</p>
                  <p className="text-lg font-['Karla'] text-[#333333]">
                    {date ? format(date, 'EEEE, MMMM d, yyyy') : 'Not selected'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white rounded-lg p-3">
                  <Clock className="w-6 h-6 text-[#495E57]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-['Karla']">Time</p>
                  <p className="text-lg font-['Karla'] text-[#333333]">{time}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white rounded-lg p-3">
                  <Users className="w-6 h-6 text-[#495E57]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-['Karla']">Party Size</p>
                  <p className="text-lg font-['Karla'] text-[#333333]">
                    {guests} {guests === 1 ? 'guest' : 'guests'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white rounded-lg p-3">
                  <MapPin className="w-6 h-6 text-[#495E57]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-['Karla']">Seating</p>
                  <p className="text-lg font-['Karla'] text-[#333333] capitalize">
                    {seating} seating
                  </p>
                </div>
              </div>

              {occasion !== 'casual' && (
                <div className="flex items-center gap-4">
                  <div className="bg-white rounded-lg p-3">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-['Karla']">Special Occasion</p>
                    <p className="text-lg font-['Karla'] text-[#333333] capitalize">
                      {occasion}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-[#F4CE14] rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <p className="font-['Karla'] text-[#333333]">
              A confirmation email has been sent to your email address with all the
              details of your reservation.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <p className="font-['Karla'] text-gray-600 mb-2">
              Little Lemon Restaurant
            </p>
            <p className="font-['Karla'] text-gray-600 mb-2">
              123 Main Street, Chicago, IL 60601
            </p>
            <p className="font-['Karla'] text-gray-600">
              (312) 555-0100
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onBackToHome}
              className="bg-[#495E57] hover:bg-[#3d4d47] text-white px-8 py-6 rounded-lg font-['Karla'] transition-all"
            >
              Back to Home
            </Button>
            <Button
              onClick={() => window.print()}
              variant="outline"
              className="border-[#495E57] text-[#495E57] hover:bg-[#495E57] hover:text-white px-8 py-6 rounded-lg font-['Karla'] transition-all"
            >
              Print Confirmation
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#495E57] text-white py-8 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-['Karla'] text-sm">
            © 2026 Little Lemon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
