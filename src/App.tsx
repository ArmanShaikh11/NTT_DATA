// import emailjs from 'emailjs-com';
// import { Building, Calendar, CheckCircle, Clock, Facebook, Linkedin, Mail, MapPin, Menu, Phone, Target, Twitter, User, Users, X, Zap } from 'lucide-react';
// import React, { useEffect, useState } from 'react';

// function App() {
//   // State from both versions combined
//   const [activeSection, setActiveSection] = useState('home');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     company: '',
//     jobTitle: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   // Dark mode state and logic
//   const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

//   // Effect to handle dark mode toggling and persistence
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [isDarkMode]);

//   // Effect to handle scroll-based UI changes
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
      
//       const sections = ['home', 'registration', 'about'];
//       const scrollPosition = window.scrollY + 100;
      
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const serviceID = "service_8ev50kf";
//       const templateID = 'template_7w512bd';
//       const userID = 'QO7deN4L2UmJC90dc';

//       await emailjs.send(serviceID, templateID, formData, userID);
//       setIsSubmitted(true);
//       console.log('Email sent:', formData);
//     } catch (error) {
//       alert('Failed to send registration. Please try again.');
//       console.error('EmailJS error:', error);
//     }
//   };

//   const Navigation = () => (
//     <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg dark:bg-white/95' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center space-x-2">
//             <img 
//               src="../NTT_Data_Logo.png" 
//               alt="NTT DATA Logo" 
//               className="h-6 w-40"
//             />
//           </div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             {['home', 'registration', 'about'].map((section) => (
//               <button
//                 key={section}
//                 onClick={() => scrollToSection(section)}
//                 className={`transition-colors duration-200 capitalize relative ${
//                   activeSection === section 
//                     ? 'text-red-400' 
//                     : 'text-white dark:text-gray-800 hover:text-red-400 dark:hover:text-red-500'
//                 }`}
//               >
//                 {section === 'about' ? 'About Us' : section}
//                 {activeSection === section && (
//                   <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-400"></div>
//                 )}
//               </button>
//             ))}
//              <button
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//                 className="p-2 rounded-full bg-gray-700/50 dark:bg-gray-200/50 text-white dark:text-gray-800 hover:bg-gray-600/50 dark:hover:bg-gray-300/50 transition-colors"
//                 aria-label="Toggle theme"
//              >
//                 {isDarkMode ? '🌞' : '🌙'}
//              </button>
//           </div>

//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden text-white dark:text-gray-900 hover:text-red-400 transition-colors"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden bg-gray-900/95 dark:bg-white/95 backdrop-blur-md">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               {['home', 'registration', 'about'].map((section) => (
//                 <button
//                   key={section}
//                   onClick={() => scrollToSection(section)}
//                   className="block px-3 py-2 text-white dark:text-gray-900 hover:text-red-400 transition-colors w-full text-left capitalize rounded-md"
//                 >
//                   {section === 'about' ? 'About Us' : section}
//                 </button>
//               ))}
//                <button
//                   onClick={() => setIsDarkMode(!isDarkMode)}
//                   className="block px-3 py-2 rounded-md bg-gray-700/50 dark:bg-gray-200/50 text-white dark:text-gray-800 hover:bg-gray-600/50 dark:hover:bg-gray-300/50 transition w-full text-left"
//                 >
//                   {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
//                 </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );

//   return (
//     <div className="bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-800 font-sans transition-colors duration-300">
//       <Navigation />
      
//       {/* Home Section */}
//       <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url('/F1_Car.png')` }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 dark:from-white/40 dark:via-white/20 dark:to-white/70" />
        
//         <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//           <div className="animate-fade-in-up">
//             <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white dark:text-gray-900 mb-6 leading-tight tracking-tight">
//               CIO CONNECT
//             </h1>
//             <div className="w-32 h-1 bg-red-600 mx-auto mb-8 rounded-full"></div>
//             <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light text-red-400 dark:text-red-600 mb-8 tracking-wide">
//               Racing to the Future
//             </h2>
//             <p className="text-xl sm:text-2xl text-gray-300 dark:text-gray-700 mb-6 font-light italic">
//               A Year of Partnership, A Future of Possibilities
//             </p>
//             <p className="text-lg text-gray-400 dark:text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//               Join industry leaders and technology visionaries for an exclusive evening of networking, 
//               innovation, and strategic insights that will accelerate your digital transformation journey 
//               into the future of enterprise technology.
//             </p>
            
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
//               <div className="flex items-center justify-center bg-black/40 dark:bg-white/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20 dark:border-red-400/20">
//                 <Calendar className="w-6 h-6 mr-3 text-red-400 dark:text-red-500" />
//                 <div className="text-left">
//                   <div className="text-sm text-gray-400 dark:text-gray-600">Date</div>
//                   <div className="font-semibold text-white dark:text-gray-900">7th Nov, 2025</div>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center bg-black/40 dark:bg-white/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20 dark:border-red-400/20">
//                 <Clock className="w-6 h-6 mr-3 text-red-400 dark:text-red-500" />
//                 <div className="text-left">
//                   <div className="text-sm text-gray-400 dark:text-gray-600">Time</div>
//                   <div className="font-semibold text-white dark:text-gray-900">10:00 AM</div>
//                 </div>
//               </div>
//               <div className="flex items-center justify-center bg-black/40 dark:bg-white/50 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20 dark:border-red-400/20">
//                 <MapPin className="w-6 h-6 mr-3 text-red-400 dark:text-red-500" />
//                 <div className="text-left">
//                   <div className="text-sm text-gray-400 dark:text-gray-600">Venue</div>
//                   <div className="font-semibold text-white dark:text-gray-900">Madras International Circuit, Mumbai, India</div>
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={() => scrollToSection('registration')}
//               className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-red-600/25"
//             >
//               Register Now
//             </button>
//           </div>
//         </div>

//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/30 dark:border-gray-800/30 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white/60 dark:bg-gray-800/60 rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </section>

//       {/* Registration Section */}
//       <section id="registration" className="relative min-h-screen py-20 overflow-hidden">
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
//           style={{ backgroundImage: `url('/F1_Car.png')`, filter: 'blur(2px)' }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-gray-900/90 to-black/90 dark:from-red-200/20 dark:via-gray-100/90 dark:to-white/90" />
        
//         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-white dark:text-gray-900 mb-6">
//               Secure Your Spot
//             </h2>
//             <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
//             <p className="text-xl text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
//               Join the most influential CIOs and technology leaders for an evening that will shape the future of digital innovation.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             {/* Event Details Card */}
//             <div className="bg-black/60 dark:bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-red-600/20 dark:border-gray-300">
//               <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-6 flex items-center">
//                 <Calendar className="w-6 h-6 mr-3 text-red-400 dark:text-red-500" />
//                 Event Details
//               </h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-red-600/20 dark:bg-red-500/10 rounded-lg flex items-center justify-center">
//                     <Calendar className="w-6 h-6 text-red-400 dark:text-red-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-white dark:text-gray-900">Date</h4>
//                     <p className="text-gray-300 dark:text-gray-700">Friday, 7th Nov, 2025</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-red-600/20 dark:bg-red-500/10 rounded-lg flex items-center justify-center">
//                     <Clock className="w-6 h-6 text-red-400 dark:text-red-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-white dark:text-gray-900">Time</h4>
//                     <p className="text-gray-300 dark:text-gray-700">10:00 AM Onwards</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-red-600/20 dark:bg-red-500/10 rounded-lg flex items-center justify-center">
//                     <MapPin className="w-6 h-6 text-red-400 dark:text-red-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-white dark:text-gray-900">Venue</h4>
//                     <p className="text-gray-300 dark:text-gray-700">Madras International Circuit</p>
//                     <p className="text-gray-400 dark:text-gray-600 text-sm"> Mumbai, India</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Registration Form */}
//             <div className="bg-black/60 dark:bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-red-600/20 dark:border-gray-300">
//               {!isSubmitted ? (
//                 <>
//                   <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-6 flex items-center">
//                     <User className="w-6 h-6 mr-3 text-red-400 dark:text-red-500" />
//                     Registration Form
//                   </h3>
                  
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     {['fullName', 'email', 'company', 'jobTitle'].map((field) => (
//                       <div key={field}>
//                         <label className="block text-sm font-medium text-gray-300 dark:text-gray-600 mb-2 capitalize">
//                           {field.replace(/([A-Z])/g, ' $1').trim()} *
//                         </label>
//                         <input
//                           type={field === 'email' ? 'email' : 'text'}
//                           name={field}
//                           value={formData[field as keyof typeof formData]}
//                           onChange={handleInputChange}
//                           required
//                           className="w-full px-4 py-3 bg-gray-800/50 dark:bg-gray-100 border border-gray-600 dark:border-gray-400 rounded-lg text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-red-400 dark:focus:border-red-500 focus:ring-1 focus:ring-red-400 dark:focus:ring-red-500 transition-colors"
//                           placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
//                         />
//                       </div>
//                     ))}
                    
//                     <button
//                       type="submit"
//                       className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
//                     >
//                       Complete Registration
//                     </button>
//                   </form>
//                 </>
//               ) : (
//                 <div className="text-center py-8">
//                   <CheckCircle className="w-16 h-16 text-green-400 dark:text-green-500 mx-auto mb-4" />
//                   <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-4">Registration Successful!</h3>
//                   <p className="text-gray-300 dark:text-gray-600 mb-6">
//                     Thank you for registering. You'll receive a confirmation email shortly with event details and access information.
//                   </p>
//                   <button
//                     onClick={() => setIsSubmitted(false)}
//                     className="text-red-400 hover:text-red-300 dark:text-red-500 dark:hover:text-red-400 transition-colors"
//                   >
//                     Register Another Attendee
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section id="about" className="relative py-20 overflow-hidden">
//         <div 
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
//             style={{ backgroundImage: `url('/F1_Car.png')`, filter: 'blur(3px)' }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 dark:from-white dark:via-blue-200/20 dark:to-white" />
        
//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-white dark:text-gray-900 mb-6">
//               About CIO CONNECT
//             </h2>
//             <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
//             <p className="text-xl text-gray-300 dark:text-gray-700 max-w-3xl mx-auto">
//               Where technology leadership meets innovation, and partnerships drive the future of digital transformation.
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//             <div>
//               <h3 className="text-3xl font-bold text-white dark:text-gray-900 mb-6">Our Purpose</h3>
//               <p className="text-lg text-gray-300 dark:text-gray-700 mb-6 leading-relaxed">
//                 CIO CONNECT is more than an event—it's a catalyst for transformation. We bring together 
//                 the most influential technology leaders to share insights, forge partnerships, and 
//                 accelerate the digital future of enterprise technology.
//               </p>
//               <p className="text-lg text-gray-300 dark:text-gray-700 mb-8 leading-relaxed">
//                 In an era where technology moves at the speed of light, staying ahead requires more than 
//                 just keeping up—it demands collaboration, innovation, and strategic vision.
//               </p>
              
//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div className="flex items-start space-x-3">
//                   <div className="w-8 h-8 bg-blue-600/20 dark:bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Users className="w-5 h-5 text-blue-400 dark:text-blue-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-white dark:text-gray-900 mb-1">Networking</h4>
//                     <p className="text-gray-400 dark:text-gray-600 text-sm">Connect with industry leaders and peers</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-3">
//                   <div className="w-8 h-8 bg-blue-600/20 dark:bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Target className="w-5 h-5 text-blue-400 dark:text-blue-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-white dark:text-gray-900 mb-1">Collaboration</h4>
//                     <p className="text-gray-400 dark:text-gray-600 text-sm">Build strategic partnerships for growth</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-black/40 dark:bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-blue-600/20 dark:border-blue-300">
//               <blockquote className="text-xl text-gray-300 dark:text-gray-700 italic mb-6 leading-relaxed">
//                 "Join us for an evening of networking and shared vision, where technology leaders 
//                 come together to shape the future of digital innovation and drive meaningful change 
//                 across industries."
//               </blockquote>
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
//                   <Building className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-white dark:text-gray-900">NTT DATA Leadership</div>
//                   <div className="text-gray-400 dark:text-gray-600 text-sm">Technology Innovation Team</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8 text-center">
//               {[
//                 { icon: Users, title: 'Trust', text: 'Building lasting relationships through transparency and reliability' },
//                 { icon: Target, title: 'Collaboration', text: 'Working together to achieve extraordinary outcomes' },
//                 { icon: Zap, title: 'Innovation', text: 'Pioneering solutions that transform industries' },
//                 { icon: Building, title: 'Technology', text: 'Leveraging cutting-edge solutions for business growth' }
//               ].map((item, index) => {
//                 const Icon = item.icon;
//                 return (
//                   <div key={index} className="bg-black/40 dark:bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 dark:border-gray-300">
//                     <Icon className="w-12 h-12 text-blue-400 dark:text-blue-500 mx-auto mb-4" />
//                     <h4 className="text-xl font-bold text-white dark:text-gray-900 mb-2">{item.title}</h4>
//                     <p className="text-gray-400 dark:text-gray-600">{item.text}</p>
//                   </div>
//                 );
//               })}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative bg-black/90 dark:bg-gray-100 py-12 border-t border-gray-800 dark:border-gray-200">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-6">
//                 <span className="text-2xl font-bold text-white dark:text-gray-900">NTT DATA</span>
//               </div>
//               <p className="text-gray-400 dark:text-gray-600 mb-6 leading-relaxed">
//                 Trusted global innovator of business and technology services, 
//                 driving digital transformation for a connected future.
//               </p>
//               <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold text-white dark:text-gray-900 mb-4">Contact Information</h4>
//               <div className="space-y-3">
//                 <div className="flex items-center space-x-3">
//                   <Mail className="w-5 h-5 text-red-400 dark:text-red-500" />
//                   <span className="text-gray-300 dark:text-gray-700">cioconnect@theaddressevents.com</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Phone className="w-5 h-5 text-red-400 dark:text-red-500" />
//                   <span className="text-gray-300 dark:text-gray-700">+91 22 6178 9999</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <MapPin className="w-5 h-5 text-red-400 dark:text-red-500" />
//                   <span className="text-gray-300 dark:text-gray-700">Mumbai, India</span>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold text-white dark:text-gray-900 mb-4">Follow Us</h4>
//               <div className="flex space-x-4 mb-6">
//                 <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-200 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group">
//                   <Linkedin className="w-5 h-5 text-white group-hover:text-white" />
//                 </a>
//                 <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-200 hover:bg-blue-400 dark:hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors group">
//                   <Twitter className="w-5 h-5 text-white group-hover:text-white" />
//                 </a>
//                 <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-200 hover:bg-blue-800 dark:hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors group">
//                   <Facebook className="w-5 h-5 text-white group-hover:text-white" />
//                 </a>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 dark:border-gray-200 pt-8 mt-8 text-center">
//             <p className="text-gray-400 dark:text-gray-600">
//               © 2025 NTT DATA Corporation. All rights reserved. | 
//               <span className="text-red-400 dark:text-red-500 ml-1">CIO CONNECT - Racing to the Future</span>
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;


import emailjs from 'emailjs-com';
import { Building, Calendar, CheckCircle, Clock, Facebook, Linkedin, Mail, MapPin, Menu, Phone, Target, Twitter, User, Users, X, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function App() {
  // State from both versions combined
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    jobTitle: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Dark mode state and logic
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  // Effect to handle dark mode toggling and persistence
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Effect to handle scroll-based UI changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'registration', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const serviceID = "service_8ev50kf";
      const templateID = 'template_7w512bd';
      const userID = 'QO7deN4L2UmJC90dc';

      setIsSubmitted(true);
      console.log("Registration saved:", formData);
    } catch (error) {
      alert("Failed to send registration. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const Navigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg dark:bg-white/95' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="../NTT_Data_Logo.png" 
              alt="NTT DATA Logo" 
              className="h-6 w-40"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'registration', 'about'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`transition-colors duration-200 capitalize relative ${
                  activeSection === section 
                    ? 'text-red-400' 
                    : 'text-white dark:text-gray-800 hover:text-red-400 dark:hover:text-red-500'
                }`}
              >
                {section === "about" ? "About Us" : section}
                {activeSection === section && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-400"></div>
                )}
              </button>
            ))}
             <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full bg-gray-700/50 dark:bg-gray-200/50 text-white dark:text-gray-800 hover:bg-gray-600/50 dark:hover:bg-gray-300/50 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? '🌞' : '🌙'}
              </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white dark:text-gray-900 hover:text-red-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 dark:bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'registration', 'about'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-white dark:text-gray-900 hover:text-red-400 transition-colors w-full text-left capitalize rounded-md"
                >
                  {section === "about" ? "About Us" : section}
                </button>
              ))}
               <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="block px-3 py-2 rounded-md bg-gray-700/50 dark:bg-gray-200/50 text-white dark:text-gray-800 hover:bg-gray-600/50 dark:hover:bg-gray-300/50 transition w-full text-left"
                >
                  {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  return (
    <div className="bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-800 font-sans transition-colors duration-300">
      <Navigation />

      {/* Home Section */}
      <section
        id="home"
        className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/F1_Car.png')` }}
        />
        {/* Adjusted dark mode opacity for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 dark:from-white/70 dark:via-white/50 dark:to-white/90" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-20">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white dark:text-gray-900 mb-6 leading-tight tracking-tight">
              CIO CONNECT
            </h1>
            <div className="w-32 h-1 bg-red-600 mx-auto mb-8 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light text-red-400 dark:text-red-600 mb-8 tracking-wide">
              Racing to the Future
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 dark:text-gray-700 mb-6 font-light italic">
              A Year of Partnership, A Future of Possibilities
            </p>
            <p className="text-lg text-gray-400 dark:text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join industry leaders and technology visionaries for an exclusive evening of networking, 
              innovation, and strategic insights that will accelerate your digital transformation journey 
              into the future of enterprise technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
              <div className="flex items-center justify-center bg-black/40 dark:bg-white/80 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20 dark:border-red-400/20">
                <Calendar className="w-6 h-6 mr-3 text-red-400 dark:text-red-500" />
                <div className="text-left">
                  <div className="text-sm text-gray-400 dark:text-gray-600">Date</div>
                  <div className="font-semibold text-white dark:text-gray-900">7th Nov, 2025</div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-black/40 dark:bg-white/80 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20 dark:border-red-400/20">
                <Clock className="w-6 h-6 mr-3 text-red-400 dark:text-red-500" />
                <div className="text-left">
                  <div className="text-sm text-gray-400 dark:text-gray-600">Time</div>
                  <div className="font-semibold text-white dark:text-gray-900">10:00 AM</div>
                </div>
              </div>
              <div className="flex items-center justify-center bg-black/40 dark:bg-white/80 backdrop-blur-sm px-6 py-4 rounded-lg border border-red-600/20 dark:border-red-400/20">
                <MapPin className="w-6 h-6 mr-3 text-red-400 dark:text-red-500" />
                <div className="text-left">
                  <div className="text-sm text-gray-400 dark:text-gray-600">Venue</div>
                  <div className="font-semibold text-white dark:text-gray-900">Madras International Circuit, Mumbai, India</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("registration")}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-red-600/25"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="relative min-h-screen py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
          style={{ backgroundImage: `url('/F1_Car.png')`, filter: 'blur(2px)' }}
        />
        {/* Adjusted dark mode opacity for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-gray-900/90 to-black/90 dark:from-red-200/40 dark:via-gray-100/95 dark:to-white/95" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white dark:text-gray-900 mb-6">
              Secure Your Spot
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
              Join the most influential CIOs and technology leaders for an evening that will shape the future of digital innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Event Details Card */}
            {/* Adjusted dark mode background opacity */}
            <div className="bg-black/60 dark:bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-red-600/20 dark:border-gray-300">
              <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-red-400 dark:text-red-500" />
                Event Details
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 dark:bg-red-500/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-red-400 dark:text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white dark:text-gray-900">Date</h4>
                    <p className="text-gray-300 dark:text-gray-700">Friday, 7th Nov, 2025</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 dark:bg-red-500/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-red-400 dark:text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white dark:text-gray-900">Time</h4>
                    <p className="text-gray-300 dark:text-gray-700">10:00 AM Onwards</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 dark:bg-red-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-400 dark:text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white dark:text-gray-900">Venue</h4>
                    <p className="text-gray-300 dark:text-gray-700">Madras International Circuit</p>
                    <p className="text-gray-400 dark:text-gray-600 text-sm"> Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            {/* Adjusted dark mode background opacity */}
            <div className="bg-black/60 dark:bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-red-600/20 dark:border-gray-300">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-6 flex items-center">
                    <User className="w-6 h-6 mr-3 text-red-400 dark:text-red-500" />
                    Registration Form
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {['fullName', 'email', 'company', 'jobTitle'].map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-300 dark:text-gray-600 mb-2 capitalize">
                          {field.replace(/([A-Z])/g, ' $1').trim()} *
                        </label>
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          name={field}
                          value={formData[field as keyof typeof formData]}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 dark:bg-gray-200 border border-gray-600 dark:border-gray-400 rounded-lg text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-red-400 dark:focus:border-red-500 focus:ring-1 focus:ring-red-400 dark:focus:ring-red-500 transition-colors"
                          placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                        />
                      </div>
                    ))}
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                        isLoading
                          ? "opacity-70 cursor-not-allowed hover:scale-100"
                          : ""
                      }`}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        "Complete Registration"
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-400 dark:text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-4">Registration Successful!</h3>
                  <p className="text-gray-300 dark:text-gray-600 mb-6">
                    Thank you for registering. You'll receive a confirmation email shortly with event details and access information.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-red-400 hover:text-red-300 dark:text-red-500 dark:hover:text-red-400 transition-colors"
                  >
                    Register Another Attendee
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative py-20 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: `url('/F1_Car.png')`, filter: 'blur(3px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 dark:from-white dark:via-blue-200/20 dark:to-white" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white dark:text-gray-900 mb-6">
              About CIO CONNECT
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 dark:text-gray-700 max-w-3xl mx-auto">
              Where technology leadership meets innovation, and partnerships drive the future of digital transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white dark:text-gray-900 mb-6">Our Purpose</h3>
              <p className="text-lg text-gray-300 dark:text-gray-700 mb-6 leading-relaxed">
                CIO CONNECT is more than an event—it's a catalyst for transformation. We bring together 
                the most influential technology leaders to share insights, forge partnerships, and 
                accelerate the digital future of enterprise technology.
              </p>
              <p className="text-lg text-gray-300 dark:text-gray-700 mb-8 leading-relaxed">
                In an era where technology moves at the speed of light, staying ahead requires more than 
                just keeping up—it demands collaboration, innovation, and strategic vision.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600/20 dark:bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-blue-400 dark:text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white dark:text-gray-900 mb-1">Networking</h4>
                    <p className="text-gray-400 dark:text-gray-600 text-sm">Connect with industry leaders and peers</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600/20 dark:bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-blue-400 dark:text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white dark:text-gray-900 mb-1">Collaboration</h4>
                    <p className="text-gray-400 dark:text-gray-600 text-sm">Build strategic partnerships for growth</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/40 dark:bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-blue-600/20 dark:border-blue-300">
              <blockquote className="text-xl text-gray-300 dark:text-gray-700 italic mb-6 leading-relaxed">
                "Join us for an evening of networking and shared vision, where technology leaders 
                come together to shape the future of digital innovation and drive meaningful change 
                across industries."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white dark:text-gray-900">NTT DATA Leadership</div>
                  <div className="text-gray-400 dark:text-gray-600 text-sm">Technology Innovation Team</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Users, title: 'Trust', text: 'Building lasting relationships through transparency and reliability' },
                { icon: Target, title: 'Collaboration', text: 'Working together to achieve extraordinary outcomes' },
                { icon: Zap, title: 'Innovation', text: 'Pioneering solutions that transform industries' },
                { icon: Building, title: 'Technology', text: 'Leveraging cutting-edge solutions for business growth' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-black/40 dark:bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 dark:border-gray-300">
                    <Icon className="w-12 h-12 text-blue-400 dark:text-blue-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white dark:text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-400 dark:text-gray-600">{item.text}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/90 dark:bg-gray-100 py-12 border-t border-gray-800 dark:border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl font-bold text-white dark:text-gray-900">NTT DATA</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Trusted global innovator of business and technology services,
              <p className="text-gray-400 dark:text-gray-600 mb-6 leading-relaxed">
                Trusted global innovator of business and technology services, 
                driving digital transformation for a connected future.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white dark:text-gray-900 mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-400 dark:text-red-500" />
                  <span className="text-gray-300 dark:text-gray-700">cioconnect@theaddressevents.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-400 dark:text-red-500" />
                  <span className="text-gray-300 dark:text-gray-700">+91 22 6178 9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-400 dark:text-red-500" />
                  <span className="text-gray-300 dark:text-gray-700">Mumbai, India</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white dark:text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-200 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors group">
                  <Linkedin className="w-5 h-5 text-white group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-200 hover:bg-blue-400 dark:hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors group">
                  <Twitter className="w-5 h-5 text-white group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-200 hover:bg-blue-800 dark:hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors group">
                  <Facebook className="w-5 h-5 text-white group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-200 pt-8 mt-8 text-center">
            <p className="text-gray-400 dark:text-gray-600">
              © 2025 NTT DATA Corporation. All rights reserved. | 
              <span className="text-red-400 dark:text-red-500 ml-1">CIO CONNECT - Racing to the Future</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;