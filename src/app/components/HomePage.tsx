import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/ImageWithFallback';

interface HomePageProps {
  onBookTable: () => void;
}

export function HomePage({ onBookTable }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-['Markazi_Text'] text-[#495E57] tracking-wide">
            Little Lemon
          </h1>
          <nav className="flex gap-6 font-['Karla']">
            <a href="#home" className="text-[#495E57] hover:text-[#F4CE14] transition-colors">
              Home
            </a>
            <a href="#about" className="text-[#495E57] hover:text-[#F4CE14] transition-colors">
              About
            </a>
            <a href="#menu" className="text-[#495E57] hover:text-[#F4CE14] transition-colors">
              Menu
            </a>
            <button
              onClick={onBookTable}
              className="text-[#495E57] hover:text-[#F4CE14] transition-colors"
            >
              Reservations
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#495E57] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-6xl font-['Markazi_Text'] text-[#F4CE14] mb-2">
              Little Lemon
            </h2>
            <p className="text-3xl font-['Markazi_Text'] mb-6">Chicago</p>
            <p className="text-lg font-['Karla'] mb-8 leading-relaxed">
              We are a family-owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
            <Button
              onClick={onBookTable}
              className="bg-[#F4CE14] hover:bg-[#d4b612] text-[#333333] px-8 py-6 rounded-lg font-['Karla'] transition-all shadow-lg"
            >
              Reserve a Table
            </Button>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758561087076-e647b2e2485a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTAzOTA0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Little Lemon restaurant interior"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section id="menu" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl font-['Markazi_Text'] text-[#495E57]">
              This Week's Specials
            </h2>
            <Button
              onClick={onBookTable}
              className="bg-[#F4CE14] hover:bg-[#d4b612] text-[#333333] px-6 py-3 rounded-lg font-['Karla']"
            >
              Online Menu
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Special Card 1 */}
            <div className="bg-[#EDEFEE] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748522696308-6e59759fed9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwZm9vZCUyMGRpc2hlc3xlbnwxfHx8fDE3NjkwMzkwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Greek Salad"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-['Markazi_Text'] text-[#333333]">
                    Greek Salad
                  </h3>
                  <span className="text-[#EE9972] font-['Karla']">$12.99</span>
                </div>
                <p className="text-[#495E57] font-['Karla'] mb-4">
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <button className="text-[#495E57] font-['Karla'] hover:text-[#F4CE14] transition-colors">
                  Order for delivery →
                </button>
              </div>
            </div>

            {/* Special Card 2 */}
            <div className="bg-[#EDEFEE] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761925280217-ab1323e40d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGxlbW9uJTIwY2l0cnVzfGVufDF8fHx8MTc2OTAzOTA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Lemon Dessert"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-['Markazi_Text'] text-[#333333]">
                    Lemon Dessert
                  </h3>
                  <span className="text-[#EE9972] font-['Karla']">$5.00</span>
                </div>
                <p className="text-[#495E57] font-['Karla'] mb-4">
                  This comes straight from grandma's recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <button className="text-[#495E57] font-['Karla'] hover:text-[#F4CE14] transition-colors">
                  Order for delivery →
                </button>
              </div>
            </div>

            {/* Special Card 3 */}
            <div className="bg-[#EDEFEE] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651209315802-12190ccfee26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGFibGUlMjBkaW5pbmd8ZW58MXx8fHwxNzY5MDM5MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bruchetta"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-['Markazi_Text'] text-[#333333]">
                    Bruchetta
                  </h3>
                  <span className="text-[#EE9972] font-['Karla']">$7.99</span>
                </div>
                <p className="text-[#495E57] font-['Karla'] mb-4">
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
                <button className="text-[#495E57] font-['Karla'] hover:text-[#F4CE14] transition-colors">
                  Order for delivery →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-[#EDEFEE]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-['Markazi_Text'] text-[#495E57] mb-4">
                About Little Lemon
              </h2>
              <p className="text-lg font-['Karla'] text-[#495E57] mb-6 leading-relaxed">
                Little Lemon is a charming neighborhood bistro that serves simple
                food and classic cocktails in a lively but casual environment. The
                restaurant features a locally-sourced menu with daily specials.
              </p>
              <p className="text-lg font-['Karla'] text-[#495E57] leading-relaxed">
                Our chefs bring decades of experience crafting authentic
                Mediterranean cuisine with a contemporary twist.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758561087076-e647b2e2485a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTAzOTA0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Little Lemon chefs"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#495E57] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-['Markazi_Text'] text-[#F4CE14] mb-4">
              Little Lemon
            </h3>
            <p className="font-['Karla'] text-sm">
              123 Main Street<br />
              Chicago, IL 60601<br />
              (312) 555-0100
            </p>
          </div>
          <div>
            <h4 className="font-['Karla'] mb-4">Navigation</h4>
            <ul className="space-y-2 font-['Karla'] text-sm">
              <li><a href="#home" className="hover:text-[#F4CE14] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#F4CE14] transition-colors">About</a></li>
              <li><a href="#menu" className="hover:text-[#F4CE14] transition-colors">Menu</a></li>
              <li>
                <button onClick={onBookTable} className="hover:text-[#F4CE14] transition-colors">
                  Reservations
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Karla'] mb-4">Hours</h4>
            <ul className="space-y-2 font-['Karla'] text-sm">
              <li>Mon-Thu: 5:00 PM - 10:00 PM</li>
              <li>Fri-Sat: 5:00 PM - 11:00 PM</li>
              <li>Sun: 4:00 PM - 9:00 PM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Karla'] mb-4">Connect</h4>
            <ul className="space-y-2 font-['Karla'] text-sm">
              <li><a href="#" className="hover:text-[#F4CE14] transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-[#F4CE14] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#F4CE14] transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-600 text-center font-['Karla'] text-sm">
          © 2026 Little Lemon. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
