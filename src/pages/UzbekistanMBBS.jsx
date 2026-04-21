import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CostComparison from '../components/CostComparison';
// Asset imports
import uzbekHeroDark from '../assets/uzbekistan_hero_dark.png';
import tashkentCity from '../assets/tashkent_city.png';
import uni1 from '../assets/TASHKENT-MEDICAL-ACADEMY.webp';
import whyChoose1 from '../assets/dr_ameera.png';
import uni2 from '../assets/uni2.png';
import uni3 from '../assets/uni3.png';
import uni4 from '../assets/uni4.png';
import uni5 from '../assets/uni5.png';
import uni6 from '../assets/uni6.png';
import ctaBoy from '../assets/cta_boy.png';
import modernTashkent from '../assets/modern_tashkent_hd.png';
import light_gray_skylines_silhouette from '../assets/light_gray_skylines_silhouette_1775905075407.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const UzbekistanMBBS = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Animation for Bars - Replay on every scroll
    if (chartRef.current) {
      const bars = chartRef.current.querySelectorAll('.gsap-bar');
      bars.forEach((bar, index) => {
        gsap.fromTo(bar,
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 95%",
              toggleActions: "restart none none none", // Restart every time it enters
            },
            delay: index * 0.1
          }
        );
      });
    }

    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
      easing: 'ease-in-out',
    });
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the benefits of studying MBBS in Uzbekistan?",
      answer: "Uzbekistan offers high-quality medical education at affordable prices, NMC-recognized universities, and 100% English medium courses. Plus, it's very safe and geographically close to India (only 3 hours flight)."
    },
    {
      question: "What is the medium of instruction in Uzbekistan?",
      answer: "The complete 6-year integrated MD program (equivalent to MBBS) is taught entirely in English for international students from the first year to graduation."
    },
    {
      question: "How to apply for MBBS admission in Uzbekistan?",
      answer: "The application process is straightforward: submit your marksheets and NEET score, receive an admission letter, apply for the student visa, and prepare for departure. Bravo Groups handles the entire process for you."
    },
    {
      question: "What is the MBBS course syllabus in Uzbekistan?",
      answer: "The syllabus is closely aligned with international standards and covers all essential medical sciences, including clinical rotations in top government hospitals alongside local students."
    },
    {
      question: "What is the MBBS eligibility in Uzbekistan?",
      answer: "You need to be at least 17 years old, have 50% in PCB (40% for reserved categories), and a valid NEET qualification score for the current or previous two years."
    },
    {
      question: "How are MBBS classes conducted in Uzbekistan?",
      answer: "Classes follow a structured curriculum with a mix of lectures and practical sessions. The low student-to-teacher ratio ensures personal attention for every student."
    },
    {
      question: "Is MBBS degree from Uzbekistan recognized & valid?",
      answer: "Yes, degrees from our partner universities are recognized by NMC, WHO, and other global bodies, making you eligible to practice medicine worldwide after passing the respective licensing exams."
    },
    {
      question: "What are the hostel facilities in Uzbekistan for Indians?",
      answer: "Hostels are safe, modern, and located on-campus. They feature dedicated Indian mess facilities serving hygienic vegetarian and non-vegetarian food specifically for Indian students."
    },
    {
      question: "What is the duration of MBBS course in Uzbekistan?",
      answer: "The total duration of the medical course in Uzbekistan is 6 years, which includes both theoretical study and mandatory clinical internship rotations."
    },
    {
      question: "What are career opportunities after MBBS from Uzbekistan?",
      answer: "You can practice in India after passing NExT/FMGE, pursue PG in the USA, UK, or Germany, or work in hospital administration and academic research globally."
    }
  ];

  return (
    <div className="font-sans text-[#333] bg-white">


      {/* ── HERO SECTION ── */}
      <section
        className="relative h-[350px] bg-cover bg-center flex justify-center items-center mt-[100px] md:mt-[75px]"
        style={{ backgroundImage: `url(${uzbekHeroDark})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>
        <div className="relative z-[2] text-center" data-aos="fade-up">
          <h1 className="text-[2rem] font-bold text-white tracking-[1px]">MBBS IN UZBEKISTAN</h1>
        </div>
      </section><br></br>

      {/* ── ABOUT UZBEKISTAN ── */}
      <section className="py-[15px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">ABOUT UZBEKISTAN</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
              <p className="text-[0.95rem] leading-[1.6] text-[#555] mb-2.5">
                Uzbekistan is a country in Central Asia. It is situated in the heart of the ancient Silk Road, bridging the East and the West. Known for its stunning architecture, historical depth, and rapid modernization, it has become a central hub for higher education in the region.
              </p>
              <p className="text-[0.95rem] leading-[1.6] text-[#555] mb-2.5">
                The country is a mix of traditional heritage and modern urban landscapes. With a focus on international cooperation, Uzbekistan has significantly upgraded its medical infrastructure, making it a top choice for international students.
              </p>
              <div className="border-l-[4px] border-primary p-[20px_30px] bg-[#fdfdfd] shadow-[0_4px_15px_rgba(0,0,0,0.03)] mt-[30px]">
                <p className="text-[1.05rem] leading-[1.7] text-[#444] mb-0">
                  Uzbekistanis are also known to be the most friendly people on Earth. Your time studying in this beautiful country will be simply amazing and full of opportunities to learn and grow. The safety and hospitality of Uzbekistan make it an ideal second home for Indian students.
                </p>
              </div>
            </div>
            <div className="flex-[0.7] w-full max-w-[500px] lg:max-w-none mx-auto" data-aos="fade-up">
              <img src={tashkentCity} alt="Uzbekistan Cityscape" className="w-full lg:w-[80%] h-auto lg:h-[250px] object-cover lg:object-fill rounded mx-auto lg:mx-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON SECTION ── */}
      <section className="py-[80px] bg-[#fdfdfd] overflow-hidden border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Column: Text & Dynamic Chart */}
            <div data-aos="fade-right">
              <div className="inline-block mb-4">
                <h2 className="text-2xl font-bold text-[#0a2540] tracking-tight">
                  Why Uzbekistan is the Smartest Choice
                </h2>
                <div className="h-[4px] w-16 bg-primary-400 mt-2 rounded-full"></div>
              </div>

              <p className="py-6 text-gray-600 text-[1.05rem] leading-relaxed font-light">
                Discover how Uzbekistan offers the perfect combination of world-class medical education and the most affordable tuition fees in the world. Compare the costs and enrollment trends below.
              </p>

              {/* 1. MBBS COST COMPARISON (Now Primary) */}
              <div className="mb-4">
                <CostComparison />
              </div>

              {/* 2. ENROLLMENT INTENSITY CHART */}



            </div>

            {/* Right Column: Full Container Uzbekistan Image */}
            <div className="lg:pl-10 h-full" data-aos="fade-left">
              <div className="relative group overflow-hidden rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] h-full max-h-[750px]">
                <img
                  src={modernTashkent}
                  alt="Modern Uzbekistan"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY INDIAN STUDENTS ARE CHOOSING ── */}
      <section className="py-[15px] bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">Why Indian Students Are Choosing MBBS in Uzbekistan</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
              <p className="text-[0.95rem] leading-[1.6] text-[#555] mb-2.5">
                Forget the high capitation fees and donation-based admissions. In Uzbekistan, you get:
              </p>
              <ul className="list-none p-0 mt-2.5 text-left inline-block lg:block">
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Globally recognized medical universities approved by NMC for quality MBBS education abroad.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Medical programs are conducted entirely in English medium for international student convenience.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Complete your medical degree at highly economical tuition fees starting from ₹2.5 lakhs yearly.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Safe campus hostels providing nutritious Indian mess facilities for a home-like environment.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Receive specialized coaching and high-quality study materials for FMGE and NEXT exam success.</li>
              </ul>
              <p className="text-[0.95rem] leading-[1.6] text-[#555] mb-2.5 mt-5 font-semibold">
                You’re not just enrolling for a degree — you’re investing in a global career in medicine.
              </p>
            </div>
            <div className="flex-[0.7] w-full max-w-[500px] lg:max-w-none mx-auto" data-aos="fade-up">
              <img src={whyChoose1} alt="Why Choose Uzbekistan" className="w-full lg:w-[80%] h-auto lg:h-[250px] object-cover lg:object-fill rounded mx-auto lg:mx-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="py-[15px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">Key Features of Studying MBBS in Uzbekistan</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
              <ul className="list-none p-0 mt-2.5 text-left inline-block lg:block">
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">6 Comprehensive years including a mandatory one-year clinical internship program.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">100% English medium instruction throughout the entire six-year medical course.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Highly affordable tuition fees ranging from ₹2.5L to ₹4L per year.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Integrated specialized coaching available in all partner universities for Indian students.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Qualification in the NEET UG exam is mandatory for all Indian students.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Universities are fully recognized by WHO, NMC, and global medical bodies.</li>
              </ul>
            </div>
            <div className="flex-[0.7] w-full max-w-[500px] lg:max-w-none mx-auto" data-aos="fade-up">
              <img src={uni2} alt="Key Features" className="w-full lg:w-[80%] h-auto lg:h-[250px] object-cover lg:object-fill rounded mx-auto lg:mx-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── IS IT WORTH IT? ── */}
      <section className="py-[15px] bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">MBBS in Uzbekistan for Indian Students: Is It Worth It?</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
              <p className="text-[0.95rem] leading-[1.6] text-[#555] mb-2.5">Yes — if you’re looking for:</p>
              <ul className="list-none p-0 mt-2.5 text-left inline-block lg:block">
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Pursue your dream MBBS degree abroad without any hidden charges or donation fees.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Gain a globally accepted medical qualification valid for practice in India and worldwide.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Experience a safe, student-friendly environment bolstered by a strong Indian student community.</li>
              </ul>
              <p className="text-[0.95rem] leading-[1.6] text-[#555] mb-2.5 mt-5">
                Plus, the visa process is smooth, and most universities have dedicated Indian student cells to help you settle in.
              </p>
            </div>
            <div className="flex-[0.7] w-full max-w-[500px] lg:max-w-none mx-auto" data-aos="fade-up">
              <img src={uni3} alt="Worth It" className="w-full lg:w-[80%] h-auto lg:h-[250px] object-cover lg:object-fill rounded mx-auto lg:mx-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TUITION FEES ── */}
      <section className="py-[15px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">Tuition Fees & Living Costs (2025-26)</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
              <ul className="list-none p-0 mt-2.5 text-left inline-block lg:block">
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Tuition fees range between ₹2.5L to ₹4L annually depending on university selection.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Hostel and mess charges cost approximately ₹50K to ₹70K for a full year.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Manage monthly personal expenses including transport and food within ₹10K to ₹15K budget.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Initial one-time charges for visa, travel, and insurance average around ₹1.5L yearly.</li>
              </ul>
              <div className="border-l-[4px] border-primary p-[20px_30px] bg-[#fdfdfd] shadow-[0_4px_15px_rgba(0,0,0,0.03)] mt-[25px]">
                <p className="text-[1.05rem] leading-[1.7] text-[#444] mb-0">
                  <strong>Total yearly budget = ₹4L – ₹5.5L/year</strong>, making it one of the most affordable MBBS destinations abroad.
                </p>
              </div>
            </div>
            <div className="flex-[0.7] w-full max-w-[500px] lg:max-w-none mx-auto" data-aos="fade-up">
              <img src={uni4} alt="Fees" className="w-full lg:w-[80%] h-auto lg:h-[250px] object-cover lg:object-fill rounded mx-auto lg:mx-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── UPDATED ADMISSION PROCESS CAROUSEL - EXACT MATCH ── */}
      <section className="py-24 relative overflow-hidden bg-gray-50/20">
        {/* Full Section Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={light_gray_skylines_silhouette}
            alt=""
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>

        <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center">
          <p className="text-secondary font-extrabold uppercase tracking-[0.4em] text-[0.65rem] mb-4" data-aos="fade-up">Start Your MBBS Journey in 3 Easy Steps</p>
          <h2 className="text-1xl lg:text-[1.5rem] font-black text-[#1d1d1f] mb-12 max-w-3xl mx-auto leading-[1.05]" data-aos="fade-up">
            Start Your MBBS Journey Abroad with Our Easy 6 Step Admission Process for Students
          </h2>

          <div className="admission-swiper-container relative group" data-aos="fade-up">
            {/* Custom Navigation Buttons - Repositioned to center-sides */}
            <button className="swiper-prev-btn absolute left-[-20px] lg:left-[-60px] top-[40%] -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button className="swiper-next-btn absolute right-[-20px] lg:right-[-60px] top-[40%] -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>

            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-prev-btn',
                nextEl: '.swiper-next-btn',
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="px-4 pb-4"
            >
              {/* Step 1 */}
              <SwiperSlide>
                <div className="relative group px-4 pt-8 pb-8">
                  <div className="bg-white rounded-full aspect-square flex flex-col items-center justify-center p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 relative mx-auto max-w-[280px]">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex flex-col items-center justify-center text-white shadow-xl transition-all duration-300 z-30">
                      <div className="absolute -inset-2 rounded-full border-2 border-primary border-dashed animate-spin-slow opacity-60"></div>
                      <span className="text-[14px] font-black tracking-tighter leading-none mb-0.5">01</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Step</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1d1d1f] mb-4 leading-tight">Consultation <br />& Counseling</h3>
                    <p className="text-gray-500 text-[0.85rem] leading-relaxed max-w-[200px]">Understand the student's needs and help choose the best university and country.</p>
                  </div>
                  <div className="hidden lg:block absolute top-[50%] -right-10 -translate-y-1/2 w-16 opacity-100 z-20">
                    <svg viewBox="0 0 100 20" className="w-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"><line x1="0" y1="10" x2="80" y2="10" stroke="#2F4DFF" strokeWidth="3" strokeDasharray="8,6" /><path d="M75 4 L85 10 L75 16" fill="none" stroke="#2F4DFF" strokeWidth="3" strokeLinecap="round" /></svg>
                  </div>
                </div>
              </SwiperSlide>

              {/* Step 2 */}
              <SwiperSlide>
                <div className="relative group px-4 pt-8 pb-8">
                  <div className="bg-white rounded-full aspect-square flex flex-col items-center justify-center p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 relative mx-auto max-w-[280px]">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex flex-col items-center justify-center text-white shadow-xl transition-all duration-300 z-30">
                      <div className="absolute -inset-2 rounded-full border-2 border-primary border-dashed animate-spin-slow opacity-60"></div>
                      <span className="text-[14px] font-black tracking-tighter leading-none mb-0.5">02</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Step</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1d1d1f] mb-4 leading-tight px-4">Application <br />& Admission Assistance</h3>
                    <p className="text-gray-500 text-[0.85rem] leading-relaxed max-w-[260px]">Assist with filling out forms, submitting documents, and meeting university requirements.</p>
                  </div>
                  <div className="hidden lg:block absolute top-[50%] -right-10 -translate-y-1/2 w-16 opacity-100 z-20">
                    <svg viewBox="0 0 100 20" className="w-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"><line x1="0" y1="10" x2="80" y2="10" stroke="#2F4DFF" strokeWidth="3" strokeDasharray="8,6" /><path d="M75 4 L85 10 L75 16" fill="none" stroke="#2F4DFF" strokeWidth="3" strokeLinecap="round" /></svg>
                  </div>
                </div>
              </SwiperSlide>

              {/* Step 3 */}
              <SwiperSlide>
                <div className="relative group px-4 pt-8 pb-8">
                  <div className="bg-white rounded-full aspect-square flex flex-col items-center justify-center p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 relative mx-auto max-w-[280px]">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex flex-col items-center justify-center text-white shadow-xl transition-all duration-300 z-30">
                      <div className="absolute -inset-2 rounded-full border-2 border-primary border-dashed animate-spin-slow opacity-60"></div>
                      <span className="text-[14px] font-black tracking-tighter leading-none mb-0.5">03</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Step</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1d1d1f] mb-4 leading-tight px-4">Visa, Travel, <br />& Post-Arrival Support</h3>
                    <p className="text-gray-500 text-[0.85rem] leading-relaxed max-w-[260px]">Help with visa, travel plans, and provide support once the student arrives at university.</p>
                  </div>
                  <div className="hidden lg:block absolute top-[50%] -right-10 -translate-y-1/2 w-16 opacity-100 z-20">
                    <svg viewBox="0 0 100 20" className="w-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"><line x1="0" y1="10" x2="80" y2="10" stroke="#2F4DFF" strokeWidth="3" strokeDasharray="8,6" /><path d="M75 4 L85 10 L75 16" fill="none" stroke="#2F4DFF" strokeWidth="3" strokeLinecap="round" /></svg>
                  </div>
                </div>
              </SwiperSlide>

              {/* Step 4 */}
              <SwiperSlide>
                <div className="relative group px-4 pt-8 pb-8">
                  <div className="bg-white rounded-full aspect-square flex flex-col items-center justify-center p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 relative mx-auto max-w-[280px]">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex flex-col items-center justify-center text-white shadow-xl transition-all duration-300 z-30">
                      <div className="absolute -inset-2 rounded-full border-2 border-primary border-dashed animate-spin-slow opacity-60"></div>
                      <span className="text-[14px] font-black tracking-tighter leading-none mb-0.5">04</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Step</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1d1d1f] mb-4 leading-tight">University <br />Enrollment</h3>
                    <p className="text-gray-500 text-[0.85rem] leading-relaxed max-w-[260px]">Finalize registration with the university and begin your medical classes.</p>
                  </div>
                  <div className="hidden lg:block absolute top-[50%] -right-10 -translate-y-1/2 w-16 opacity-100 z-20">
                    <svg viewBox="0 0 100 20" className="w-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"><line x1="0" y1="10" x2="80" y2="10" stroke="#2F4DFF" strokeWidth="3" strokeDasharray="8,6" /><path d="M75 4 L85 10 L75 16" fill="none" stroke="#2F4DFF" strokeWidth="3" strokeLinecap="round" /></svg>
                  </div>
                </div>
              </SwiperSlide>

              {/* Step 5 */}
              <SwiperSlide>
                <div className="relative group px-4 pt-8 pb-8">
                  <div className="bg-white rounded-full aspect-square flex flex-col items-center justify-center p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 relative mx-auto max-w-[280px]">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex flex-col items-center justify-center text-white shadow-xl transition-all duration-300 z-30">
                      <div className="absolute -inset-2 rounded-full border-2 border-primary border-dashed animate-spin-slow opacity-60"></div>
                      <span className="text-[14px] font-black tracking-tighter leading-none mb-0.5">05</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Step</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1d1d1f] mb-4 leading-tight">Documentation <br />& Legalization</h3>
                    <p className="text-gray-500 text-[0.85rem] leading-relaxed max-w-[260px]">Processing of academic documents and getting them verified for international standards.</p>
                  </div>
                  <div className="hidden lg:block absolute top-[50%] -right-10 -translate-y-1/2 w-16 opacity-100 z-20">
                    <svg viewBox="0 0 100 20" className="w-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"><line x1="0" y1="10" x2="80" y2="10" stroke="#2F4DFF" strokeWidth="3" strokeDasharray="8,6" /><path d="M75 4 L85 10 L75 16" fill="none" stroke="#2F4DFF" strokeWidth="3" strokeLinecap="round" /></svg>
                  </div>
                </div>
              </SwiperSlide>

              {/* Step 6 */}
              <SwiperSlide>
                <div className="relative group px-4 pt-8 pb-8">
                  <div className="bg-white rounded-full aspect-square flex flex-col items-center justify-center p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-50 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 relative mx-auto max-w-[280px]">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex flex-col items-center justify-center text-white shadow-xl transition-all duration-300 z-30">
                      <div className="absolute -inset-2 rounded-full border-2 border-primary border-dashed animate-spin-slow opacity-60"></div>
                      <span className="text-[14px] font-black tracking-tighter leading-none mb-0.5">06</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Step</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1d1d1f] mb-4 leading-tight">Post-Graduation <br />Planning</h3>
                    <p className="text-gray-500 text-[0.85rem] leading-relaxed max-w-[260px]">Guiding students on licensing exams and career paths after completing their degree.</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ── */}
      <section className="py-[15px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">Eligibility Criteria</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
              <ul className="list-none p-0 mt-2.5 text-left inline-block lg:block">
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Students must be at least 17 years old by December 31st, 2025 eligibility.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Achieve minimum 50% in PCB for general and 40% for reserved category students.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Qualifying NEET score is necessary for students planning to practice medicine within India.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Possess a valid Indian passport as a primary requirement for international medical admission.</li>
              </ul>
            </div>
            <div className="flex-[0.7] w-full max-w-[500px] lg:max-w-none mx-auto" data-aos="fade-up">
              <img src={uni1} alt="Eligibility" className="w-full lg:w-[80%] h-auto lg:h-[250px] object-cover lg:object-fill rounded mx-auto lg:mx-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ── */}
      <section className="py-[15px] bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">What Documents You’ll Need</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
              <ul className="list-none p-0 mt-2.5 text-left inline-block lg:block">
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Original 10th and 12th standard academic marksheets verified by relevant educational boards.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Official NEET UG scorecard indicating the student has qualified for medical studies abroad.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Valid Indian passport with minimum eighteen months validity from the date of application.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Provide eight recent passport-size photographs taken against a plain white background.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Current medical fitness certificate including an HIV negative report from authorized clinics.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Official university admission and invitation letters processed with help from our expert team.</li>
              </ul>
            </div>
            <div className="flex-[0.7] w-full max-w-[500px] lg:max-w-none mx-auto" data-aos="fade-up">
              <img src={uni5} alt="Documents" className="w-full lg:w-[80%] h-auto lg:h-[250px] object-cover lg:object-fill rounded mx-auto lg:mx-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER ── */}
      <section className="py-[15px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">Career Opportunities After MBBS in Uzbekistan</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
              <ul className="list-none p-0 mt-2.5 text-left inline-block lg:block">
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Practice in India after clearing the <strong>NExT / FMGE</strong> exam.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Settle in the USA by appearing for the <strong>USMLE</strong>.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Prepare for <strong>PLAB</strong> and settle in the United Kingdom.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Join post-graduation programs in Uzbekistan, Russia, or Germany.</li>
                <li className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1">Work in hospital management, research, or academia globally.</li>
              </ul>
            </div>
            <div className="flex-[0.7] w-full max-w-[500px] lg:max-w-none mx-auto" data-aos="fade-up">
              <img src={uni6} alt="Career" className="w-full lg:w-[80%] h-auto lg:h-[250px] object-cover lg:object-fill rounded mx-auto lg:mx-0" />
            </div>
          </div>
        </div>
      </section><br></br>

      {/* ── FAQ SECTION ── */}
      <section className="py-[15px] bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[1.6rem] font-bold text-[#222] mb-5">FAQ's (Frequently Asked Questions)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2.5">
            {faqData.map((faq, idx) => (
              <div
                className="py-2 cursor-pointer transition-all duration-300 group"
                key={idx}
                onClick={() => toggleAccordion(idx)}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-gray-400 text-base font-medium w-[15px] text-center inline-block">{activeIndex === idx ? '−' : '+'}</span>
                  <p className={`text-base font-medium transition-colors duration-300 ${activeIndex === idx ? 'text-primary' : 'text-[#333] group-hover:text-primary'}`}>{faq.question}</p>
                </div>
                {activeIndex === idx && (
                  <div className="pl-[27px] pt-2 pb-1 animate-[fadeInDown_0.3s_ease_forwards]">
                    <p className="text-[0.95rem] leading-[1.6] text-gray-500 m-0">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section><br></br><br></br>

      {/* ── CALL TO ACTION ── */}
      <section className="py-10 pb-5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[1050px] mx-auto relative overflow-visible" data-aos="zoom-in">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#647af3] to-[#1a33cc] rounded-[20px] overflow-hidden z-[1] before:content-[''] before:absolute before:-bottom-[150px] before:-left-[80px] before:w-[450px] before:h-[450px] before:bg-white/10 before:rounded-full before:pointer-events-none after:content-[''] after:absolute after:-top-[120px] after:-right-[60px] after:w-[380px] after:h-[380px] after:bg-white/10 after:rounded-full after:pointer-events-none">
              <div className="absolute top-1/2 left-[30%] w-[150px] h-[150px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="relative z-[2] flex flex-col items-center lg:flex-row lg:items-end gap-[30px] lg:gap-0">
              <div className="flex-1 p-10 text-center lg:text-left">
                <h2 className="text-white text-[1.8rem] mb-3 font-bold leading-[1.3]">Embark on Your Medical Journey with Bravo Groups</h2>
                <p className="text-white/70 mb-[25px] text-base">Our expert team is here to guide you through every step of your admission.</p>
                <button className="bg-white text-primary border-none p-[12px_30px] text-base font-bold rounded cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:text-[#1a33cc] hover:scale-105" onClick={() => window.dispatchEvent(new CustomEvent('openAdmissionForm'))}>GET FREE COUNSELING</button>
              </div>
              <div className="flex-[0.8] relative flex items-end justify-center w-full">
                <img src={ctaBoy} alt="Medical Student" className="h-[300px] lg:h-[400px] w-auto lg:-mt-[100px] mb-0 block z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:scale-[1.02]" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default UzbekistanMBBS;
