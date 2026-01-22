import { useState } from 'react';
import { Calendar } from '@/app/components/ui/calendar';
import { Button } from '@/app/components/ui/button';
import { Label } from '@/app/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/ui/popover';
import { Calendar as CalendarIcon, Clock, Users } from 'lucide-react';
import { format } from 'date-fns';

interface BookingPageProps {
  onConfirm: (data: BookingData) => void;
  onBack: () => void;
}

export interface BookingData {
  date: Date | undefined;
  time: string;
  guests: number;
  occasion: string;
  seating: string;
}

const timeSlots = [
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00', '21:30', '22:00'
];

export function BookingPage({ onConfirm, onBack }: BookingPageProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('casual');
  const [seating, setSeating] = useState('indoor');
  
  const [errors, setErrors] = useState<{ date?: string }>({});

  const validate = () => {
    const newErrors: { date?: string } = {};
    if (!date) {
      newErrors.date = 'Please select a date for your reservation.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onConfirm({ date, time, guests, occasion, seating });
    }
  };

  return (
    <div className="min-h-screen bg-[#EDEFEE]">
      {/* Header */}
      <header className="bg-[#495E57] text-white py-4 px-6 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="text-white hover:text-[#F4CE14] transition-colors"
            >
              ← Back
            </button>
            <h1 className="text-2xl font-['Markazi_Text'] tracking-wide">
              Little Lemon
            </h1>
          </div>
        </div>
      </header>

      {/* Booking Form */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-4xl font-['Markazi_Text'] text-[#495E57] mb-2">
              Reserve a Table
            </h2>
            <p className="text-gray-600 font-['Karla']">
              Book your dining experience at Little Lemon
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Date Selection */}
            <div className="space-y-3">
              <Label htmlFor="date" className="text-[#495E57] font-['Karla']">
                Select Date *
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className={`w-full justify-start text-left font-['Karla'] h-12 ${
                      !date ? 'text-gray-400' : 'text-[#333333]'
                    } ${errors.date ? 'border-red-500' : ''}`}
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    {date ? format(date, 'PPP') : 'Pick a date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => {
                      setDate(d);
                      if (d) setErrors((prev) => ({ ...prev, date: undefined }));
                    }}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.date && (
                <p className="text-red-500 text-sm font-['Karla'] mt-1" role="alert">
                  {errors.date}
                </p>
              )}
            </div>

            {/* Time Selection */}
            <div className="space-y-3">
              <Label className="text-[#495E57] font-['Karla']">
                <Clock className="inline mr-2 h-5 w-5" />
                Select Time
              </Label>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={`py-3 px-4 rounded-lg font-['Karla'] transition-all ${
                      time === slot
                        ? 'bg-[#495E57] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Number of Guests */}
            <div className="space-y-3">
              <Label className="text-[#495E57] font-['Karla']">
                <Users className="inline mr-2 h-5 w-5" />
                Number of Guests
              </Label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#495E57] transition-colors"
                >
                  −
                </button>
                <div className="flex-1 text-center">
                  <span className="text-3xl font-['Markazi_Text'] text-[#495E57]">
                    {guests}
                  </span>
                  <span className="text-gray-600 ml-2 font-['Karla']">
                    {guests === 1 ? 'guest' : 'guests'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setGuests(Math.min(12, guests + 1))}
                  className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#495E57] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Occasion (Radio Buttons) - Interactive Component 1 */}
            <div className="space-y-3">
              <Label className="text-[#495E57] font-['Karla']">Occasion</Label>
              <RadioGroup value={occasion} onValueChange={setOccasion}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-lg p-4 hover:border-[#495E57] transition-colors">
                    <RadioGroupItem value="casual" id="casual" />
                    <Label htmlFor="casual" className="cursor-pointer flex-1 font-['Karla']">
                      Casual Dining
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-lg p-4 hover:border-[#495E57] transition-colors">
                    <RadioGroupItem value="birthday" id="birthday" />
                    <Label htmlFor="birthday" className="cursor-pointer flex-1 font-['Karla']">
                      Birthday
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-lg p-4 hover:border-[#495E57] transition-colors">
                    <RadioGroupItem value="anniversary" id="anniversary" />
                    <Label htmlFor="anniversary" className="cursor-pointer flex-1 font-['Karla']">
                      Anniversary
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-lg p-4 hover:border-[#495E57] transition-colors">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business" className="cursor-pointer flex-1 font-['Karla']">
                      Business
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Seating Preference (Interactive Buttons) - Interactive Component 2 */}
            <div className="space-y-3">
              <Label className="text-[#495E57] font-['Karla']">
                Seating Preference
              </Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSeating('indoor')}
                  className={`py-4 px-6 rounded-lg font-['Karla'] transition-all ${
                    seating === 'indoor'
                      ? 'bg-[#F4CE14] text-[#333333] shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Indoor Seating
                </button>
                <button
                  type="button"
                  onClick={() => setSeating('outdoor')}
                  className={`py-4 px-6 rounded-lg font-['Karla'] transition-all ${
                    seating === 'outdoor'
                      ? 'bg-[#F4CE14] text-[#333333] shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Outdoor Seating
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full bg-[#495E57] hover:bg-[#3d4d47] text-white py-6 rounded-lg font-['Karla'] transition-all"
              >
                Confirm Reservation
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
