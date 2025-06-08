import React, { useState } from 'react';
import { Leaf, Heart, ShoppingCart, Info, Phone, Mail, BookOpen, Clock, Users, Package, Flower2, Lightbulb, Sprout, Handshake } from 'lucide-react'; // Importing icons from lucide-react

// Main App component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Header component with navigation
  const Header = () => (
    <header className="bg-gradient-to-r from-emerald-600 to-green-800 text-white shadow-lg p-4 font-inter">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Site Title */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <Leaf className="w-8 h-8 text-emerald-200" />
          <h1 className="text-3xl font-bold tracking-tight">The Enchanted Wood</h1>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-lg">
          <NavLink name="Home" page="home" />
          <NavLink name="Gardening Tips" page="tips" />
          <NavLink name="Consultations" page="consultations" />
          <NavLink name="Shop Plants" page="shop" />
          <NavLink name="About Us" page="about" />
          <NavLink name="Contact" page="contact" />
        </nav>
      </div>
    </header>
  );

  // Reusable NavLink component
  const NavLink = ({ name, page }) => (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-4 py-2 rounded-lg transition-all duration-300
        ${currentPage === page ? 'bg-green-700 text-white shadow-inner' : 'hover:bg-green-700 hover:text-white'}
        focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-75`}
    >
      {name}
    </button>
  );

  // Home Section
  const HomeSection = () => (
    <section className="bg-gradient-to-br from-emerald-50 to-lime-100 py-16 px-4 font-inter text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-emerald-800 mb-6 leading-tight animate-fade-in-down">
          Nurturing Your Green Dreams
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-700 animate-fade-in-up">
          Welcome to The Enchanted Wood, your sanctuary for all things green. We provide expert gardening advice, personalized consultations, and a curated selection of beautiful plants to bring your garden visions to life.
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={() => setCurrentPage('tips')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center space-x-2"
          >
            <Lightbulb className="w-5 h-5" />
            <span>Gardening Tips</span>
          </button>
          <button
            onClick={() => setCurrentPage('consultations')}
            className="bg-lime-600 hover:bg-lime-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center space-x-2"
          >
            <Handshake className="w-5 h-5" />
            <span>Book a Consultation</span>
          </button>
          <button
            onClick={() => setCurrentPage('shop')}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Shop Our Plants</span>
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Sprout className="w-12 h-12 text-emerald-600" />}
            title="Expert Advice"
            description="Our seasoned gardeners share their wisdom to help your plants thrive."
          />
          <FeatureCard
            icon={<Flower2 className="w-12 h-12 text-pink-600" />}
            title="Unique Plants"
            description="Discover rare and beautiful plants, hand-selected for your garden."
          />
          <FeatureCard
            icon={<Heart className="w-12 h-12 text-red-600" />}
            title="Sustainable Practices"
            description="We champion eco-friendly methods for a healthier planet and garden."
          />
        </div>
      </div>
    </section>
  );

  // Reusable Feature Card component
  const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-emerald-700 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  // Gardening Tips Section
  const GardeningTipsSection = () => (
    <section className="bg-emerald-50 py-16 px-4 font-inter text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-emerald-800 text-center mb-12">
          <BookOpen className="inline-block w-9 h-9 mr-3 text-emerald-600" />
          Gardening Tips & Guides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tip Card 1 */}
          <TipCard
            image="https://placehold.co/600x400/D1FAE5/065F46?text=Soil+Prep"
            title="Mastering Your Soil: The Foundation of a Great Garden"
            description="Unlock the secrets to healthy soil with our comprehensive guide on testing, amending, and nurturing your garden's most vital component."
            readMoreLink="#"
          />
          {/* Tip Card 2 */}
          <TipCard
            image="https://placehold.co/600x400/ECFDF5/065F46?text=Watering"
            title="Efficient Watering Techniques for Thriving Plants"
            description="Learn how to water smarter, not harder. Discover methods that conserve water and ensure your plants get exactly what they need."
            readMoreLink="#"
          />
          {/* Tip Card 3 */}
          <TipCard
            image="https://placehold.co/600x400/D1FAE5/065F46?text=Pest+Control"
            title="Natural Pest Control: Keeping Your Garden Healthy"
            description="Say goodbye to harsh chemicals. Explore organic and natural ways to protect your plants from common pests and diseases."
            readMoreLink="#"
          />
          {/* Tip Card 4 */}
          <TipCard
            image="https://placehold.co/600x400/ECFDF5/065F46?text=Container+Garden"
            title="Container Gardening: Maximize Small Spaces"
            description="Even without a big yard, you can create a lush garden. Dive into the world of container gardening for balconies, patios, and windowsills."
            readMoreLink="#"
          />
          {/* Tip Card 5 */}
          <TipCard
            image="https://placehold.co/600x400/D1FAE5/065F46?text=Pruning"
            title="The Art of Pruning: Shaping and Enhancing Your Plants"
            description="Learn when, why, and how to prune different types of plants for better health, more blooms, and bountiful harvests."
            readMoreLink="#"
          />
          {/* Tip Card 6 */}
          <TipCard
            image="https://placehold.co/600x400/ECFDF5/065F46?text=Composting"
            title="Composting 101: Turning Waste into Garden Gold"
            description="Reduce waste and enrich your soil by starting your own compost pile. Our guide makes composting easy and rewarding."
            readMoreLink="#"
          />
        </div>
      </div>
    </section>
  );

  // Reusable Tip Card component
  const TipCard = ({ image, title, description, readMoreLink }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found'; }} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-emerald-700 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href={readMoreLink}
          className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-semibold transition-colors duration-200"
        >
          Read More
          <span className="ml-1">&#8594;</span>
        </a>
      </div>
    </div>
  );

  // Consultations Section
  const ConsultationsSection = () => (
    <section className="bg-lime-50 py-16 px-4 font-inter text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-lime-800 text-center mb-12">
          <Users className="inline-block w-9 h-9 mr-3 text-lime-600" />
          Personalized Garden Consultations
        </h2>

        <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700">
          Transform your garden with expert guidance tailored to your unique needs and space. Our consultations help you achieve your gardening dreams, no matter your experience level.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Service Card 1 */}
          <ServiceCard
            icon={<Clock className="w-12 h-12 text-lime-600" />}
            title="Initial Discovery Call (15-min, FREE)"
            description="A brief chat to understand your gardening goals and challenges. Let's see how we can help you get started on your green journey."
            details="Schedule your complimentary 15-minute call to discuss your vision."
            buttonText="Book Free Call"
            buttonAction={() => alert('Booking system integration would go here!')}
          />
          {/* Service Card 2 */}
          <ServiceCard
            icon={<Lightbulb className="w-12 h-12 text-teal-600" />}
            title="On-Site Garden Assessment & Plan"
            description="An in-depth visit to your garden to assess soil, light, existing plants, and your specific needs. We'll provide a detailed report and recommendations."
            details="Includes a written report and a personalized action plan. Starting at $150."
            buttonText="Learn More & Book"
            buttonAction={() => alert('Booking system integration would go here!')}
          />
          {/* Service Card 3 */}
          <ServiceCard
            icon={<Sprout className="w-12 h-12 text-emerald-600" />}
            title="Custom Garden Design"
            description="From concept to completion, we'll design a beautiful and functional garden tailored to your aesthetic preferences and local climate."
            details="Comprehensive designs including plant palettes, hardscaping suggestions, and seasonal interest. Pricing upon request."
            buttonText="Request Quote"
            buttonAction={() => alert('Booking system integration would go here!')}
          />
          {/* Service Card 4 */}
          <ServiceCard
            icon={<Handshake className="w-12 h-12 text-blue-600" />}
            title="Ongoing Garden Coaching"
            description="Receive personalized, hands-on guidance as you learn and grow. Perfect for new gardeners or those tackling complex projects."
            details="Flexible sessions, tailored to your pace and learning style. Hourly rates apply."
            buttonText="Enquire Now"
            buttonAction={() => alert('Booking system integration would go here!')}
          />
        </div>
        <p className="text-center text-lg text-gray-700 mt-12 max-w-2xl mx-auto">
          Ready to cultivate the garden of your dreams? Contact us today to discuss how our expert consultations can help you achieve your green goals.
        </p>
      </div>
    </section>
  );

  // Reusable Service Card component
  const ServiceCard = ({ icon, title, description, details, buttonText, buttonAction }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <p className="text-gray-500 text-xs mb-6 italic">{details}</p>
      <button
        onClick={buttonAction}
        className="bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105"
      >
        {buttonText}
      </button>
    </div>
  );

  // Shop Plants Section
  const ShopPlantsSection = () => (
    <section className="bg-teal-50 py-16 px-4 font-inter text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-teal-800 text-center mb-12">
          <ShoppingCart className="inline-block w-9 h-9 mr-3 text-teal-600" />
          Our Enchanting Plant Collection
        </h2>

        <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-700">
          Browse our carefully curated selection of healthy, vibrant plants, ready to find a new home in your garden. From popular favorites to unique finds, we have something for every green thumb.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Plant Card 1 */}
          <PlantCard
            image="https://placehold.co/400x300/E0F2F7/00796B?text=Lavender"
            name="English Lavender"
            price="$12.99"
            description="Fragrant perennial, attracts pollinators. Perfect for borders or pots."
            light="Full Sun"
            water="Low"
            hardiness="Zones 5-9"
          />
          {/* Plant Card 2 */}
          <PlantCard
            image="https://placehold.co/400x300/E8F5E9/2E7D32?text=Rosemary"
            name="Rosemary 'Arp'"
            price="$9.50"
            description="Hardy herb, excellent for cooking and fragrant landscapes."
            light="Full Sun"
            water="Low to Medium"
            hardiness="Zones 6-10"
          />
          {/* Plant Card 3 */}
          <PlantCard
            image="https://placehold.co/400x300/FFF3E0/BF360C?text=Sunflower"
            name="Mammoth Sunflower"
            price="$7.00"
            description="Iconic annual, grows tall with large, cheerful blooms. Great for seeds."
            light="Full Sun"
            water="Medium"
            hardiness="Annual"
          />
          {/* Plant Card 4 */}
          <PlantCard
            image="https://placehold.co/400x300/FBE9E7/E64A19?text=Tomato"
            name="Cherry Tomato Plant"
            price="$8.75"
            description="Productive annual, produces sweet, bite-sized tomatoes all summer."
            light="Full Sun"
            water="Medium to High"
            hardiness="Annual"
          />
          {/* Plant Card 5 */}
          <PlantCard
            image="https://placehold.co/400x300/FCE4EC/AD1457?text=Peony"
            name="Sarah Bernhardt Peony"
            price="$29.99"
            description="Classic perennial with lush, fragrant pink blooms in late spring."
            light="Full Sun to Partial Shade"
            water="Medium"
            hardiness="Zones 3-8"
          />
          {/* Plant Card 6 */}
          <PlantCard
            image="https://placehold.co/400x300/F1F8E9/33691E?text=Fern"
            name="Boston Fern"
            price="$15.00"
            description="Popular houseplant, lush green fronds, ideal for humid indoor spaces."
            light="Partial Shade"
            water="Medium to High"
            hardiness="Houseplant"
          />
        </div>
        <p className="text-center text-lg text-gray-700 mt-12 max-w-2xl mx-auto">
          Shipping available to most locations. Local pickup also available at our nursery. Check individual plant details for more information.
        </p>
      </div>
    </section>
  );

  // Reusable Plant Card component
  const PlantCard = ({ image, name, price, description, light, water, hardiness }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={image} alt={name} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/cccccc/333333?text=Image+Not+Found'; }} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-teal-700 mb-2">{name}</h3>
        <p className="text-green-700 font-semibold text-lg mb-3">{price}</p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="text-xs text-gray-500 space-y-1">
          <p><strong className="text-gray-700">Light:</strong> {light}</p>
          <p><strong className="text-gray-700">Water:</strong> {water}</p>
          <p><strong className="text-gray-700">Hardiness:</strong> {hardiness}</p>
        </div>
        <button className="mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 rounded-full shadow-md transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );

  // About Us Section
  const AboutUsSection = () => (
    <section className="bg-green-50 py-16 px-4 font-inter text-gray-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-extrabold text-green-800 text-center mb-12">
          <Info className="inline-block w-9 h-9 mr-3 text-green-600" />
          About The Enchanted Wood
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2">
            <img
              src="https://placehold.co/600x400/9AE6B4/2F855A?text=Our+Story"
              alt="Our Story at The Enchanted Wood"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found'; }}
            />
          </div>
          <div className="md:order-1">
            <h3 className="text-3xl font-bold text-green-700 mb-6">Our Journey Begins</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded by passionate horticulturists, The Enchanted Wood sprung from a simple dream: to share the magic of gardening with everyone. We believe that a thriving garden is not just a collection of plants, but a sanctuary, a source of joy, and a connection to nature's profound beauty.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://placehold.co/600x400/C6F6D5/2F855A?text=Our+Philosophy"
              alt="Our Philosophy"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found'; }}
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-green-700 mb-6">Our Philosophy</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At the heart of The Enchanted Wood is a commitment to sustainable, organic, and holistic gardening practices. We advocate for nurturing the soil, encouraging biodiversity, and choosing plants that thrive naturally in your environment. Our goal is to empower you with the knowledge and resources to create gardens that are not only beautiful but also resilient and ecologically sound.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every plant we offer is grown with care, and every piece of advice we give is rooted in years of experience and a deep love for the natural world.
            </p>
          </div>
        </div>

        <div className="text-center mt-16 p-8 bg-green-100 rounded-xl shadow-inner">
          <p className="text-2xl font-semibold text-green-800 italic">
            "Gardening adds years to your life and life to your years."
          </p>
          <p className="text-lg text-gray-600 mt-4">- Unknown</p>
        </div>
      </div>
    </section>
  );

  // Contact Section
  const ContactSection = () => (
    <section className="bg-emerald-50 py-16 px-4 font-inter text-gray-800">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-extrabold text-emerald-800 text-center mb-12">
          <Phone className="inline-block w-9 h-9 mr-3 text-emerald-600" />
          Get in Touch
        </h2>

        <p className="text-xl text-center mb-10 text-gray-700">
          Have a question about your garden, our plants, or ready to book a consultation? We'd love to hear from you!
        </p>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                placeholder="Inquiry about plants / Consultation request"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105"
              onClick={(e) => { e.preventDefault(); alert('Form submitted! We will get back to you shortly.'); }}
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row justify-around items-center text-center gap-6">
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md flex-1 min-w-[200px]">
            <Phone className="w-8 h-8 text-emerald-600 mb-3" />
            <p className="font-semibold text-lg">Phone</p>
            <p className="text-gray-600">(123) 456-7890</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md flex-1 min-w-[200px]">
            <Mail className="w-8 h-8 text-emerald-600 mb-3" />
            <p className="font-semibold text-lg">Email</p>
            <p className="text-gray-600 break-all">info@enchantedwood.com</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md flex-1 min-w-[200px]">
            <BookOpen className="w-8 h-8 text-emerald-600 mb-3" />
            <p className="font-semibold text-lg">Location</p>
            <p className="text-gray-600">
              123 Forest Lane <br/>
              Summerville, SC 29483
            </p>
          </div>
        </div>
      </div>
    </section>
  );


  // Footer component
  const Footer = () => (
    <footer className="bg-gray-800 text-gray-300 p-8 font-inter">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Leaf className="w-6 h-6 mr-2 text-emerald-300" />
            The Enchanted Wood
          </h3>
          <p className="text-sm leading-relaxed">
            Nurturing your green dreams with expert advice, personalized consultations, and a hand-picked selection of vibrant plants. Cultivating beauty, one garden at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><button onClick={() => setCurrentPage('home')} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Home</button></li>
            <li><button onClick={() => setCurrentPage('tips')} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Gardening Tips</button></li>
            <li><button onClick={() => setCurrentPage('consultations')} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Consultations</button></li>
            <li><button onClick={() => setCurrentPage('shop')} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Shop Plants</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">About Us</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">Contact</button></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
          <p className="text-sm flex items-center mb-2">
            <Phone className="w-4 h-4 mr-2 text-emerald-300" />
            (123) 456-7890
          </p>
          <p className="text-sm flex items-center mb-2">
            <Mail className="w-4 h-4 mr-2 text-emerald-300" />
            info@enchantedwood.com
          </p>
          <p className="text-sm flex items-center">
            <Info className="w-4 h-4 mr-2 text-emerald-300" />
            123 Forest Lane, Summerville, SC 29483
          </p>
          <div className="flex space-x-4 mt-4">
            {/* Dummy social media links */}
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} The Enchanted Wood. All rights reserved.
      </div>
    </footer>
  );

  // Render content based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeSection />;
      case 'tips':
        return <GardeningTipsSection />;
      case 'consultations':
        return <ConsultationsSection />;
      case 'shop':
        return <ShopPlantsSection />;
      case 'about':
        return <AboutUsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  export function GardenHome() { //added export function for Home - Not needed?
  return (
    <div className="min-h-screen flex flex-col">
      {/* Tailwind CSS CDN and Google Fonts (Inter) */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Configure Tailwind to use 'Inter' font */}
      <style>
        {`
        body { font-family: 'Inter', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fadeInDown 1s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out; }
        `}
      </style>

      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};
};

//export default App;
