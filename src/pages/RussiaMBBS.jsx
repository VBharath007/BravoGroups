import React, { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/Navbar';

// Placeholder images — replace with Russia-specific images when available
import heroDark from '../assets/uzbekistan_hero_dark.png';
import moscowCity from '../assets/modern_tashkent_hd.png';
import uni1 from '../assets/TASHKENT-MEDICAL-ACADEMY.webp';
import whyChooseImg from '../assets/dr_ameera.png';
import uni2 from '../assets/uni2.png';
import uni6 from '../assets/uni6.png';
import ctaBoy from '../assets/cta_boy.png';

const RussiaMBBS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 120,
      easing: 'ease-in-out',
    });
    window.scrollTo(0, 0);
  }, []);

  const whyPoints = [
    'The medical universities in Russia are NMC (National Medical Council) & WHO (World Health Organization) approved.',
    'To study in Russia there is no need to pay any donation or capitation fee.',
    'No separate entrance test will be conducted by the university.',
    'The standard of living is very high in Russia.',
    'Every year students will get a vacation for 45 days (Approx).',
    'Students do not require to appear for IELTS/TOEFL to take admission in Russia.',
    'Indian Food & Indian Restaurants are also available in Russia.',
    'Tuition Fee is affordable in Russia.',
    'Most of the hospitals of Russia use the latest technology so students will get the opportunity to learn new technology.',
    'There are some universities in Russia which provide scholarships for students.',
  ];

  const basicInfo = [
    { label: 'Country Name', value: 'Russia' },
    { label: 'Capital', value: 'Moscow' },
    { label: 'Currency', value: '1 Russian Rouble ≈ 0.90 INR (May Change)' },
    { label: 'Language', value: 'Russian and English' },
    { label: 'Indian Restaurants', value: 'Available' },
    { label: 'Indian Mess', value: 'No' },
    { label: 'Travel Time', value: '10–15 Hours' },
    { label: 'Climate', value: '-5°C – 25°C' },
    { label: 'Course Duration', value: '6 Years' },
    { label: 'International Airport', value: 'Domodedovo Moscow Airport' },
  ];

  const exclusiveBenefits = [
    'Screening Test (NEXT) / MCI / FMGE Coaching Assistance',
    'USMLE Coaching Assistance',
    'Indian Hostel',
    'Practice In Hospital',
  ];

  return (
    <div className="font-sans text-[#333] bg-white">


      {/* ── HERO SECTION ── */}
      <section
        className="relative h-[350px] bg-cover bg-center flex justify-center items-center mt-[100px] md:mt-[75px]"
        style={{ backgroundImage: `url(${heroDark})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>
        <div className="relative z-[2] text-center" data-aos="fade-up">
          <h1 className="text-[2rem] font-bold text-white tracking-[1px] uppercase">Study MBBS in Russia</h1>
        </div>
      </section><br />

      {/* ── INTRODUCTION ── */}
      <section className="py-[15px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-[30px]">
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">Study MBBS in Russia</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
              <p className="text-[0.95rem] leading-[1.6] text-[#555] mb-2.5">
                Due to low budget, MBBS in Russia is very popular among all Indian students. In Russia, students can complete their education at affordable fees. Currently, more than 6,000 Indian students are enrolled in various medical universities in the Russian federation. Moscow is the capital of Russia. There are 11 time zones in Russia. The legal currency of Russia is Russian Rouble (1 Russian Rouble equals 1.15 Indian Rupee).
              </p>
              <p className="text-[0.95rem] leading-[1.6] text-[#555] mb-2.5">
                There are many recognized universities in Russia. The students can choose any university from recognised universities. In Russia, you will be offered a degree of MD, which is equivalent to MBBS in India.
              </p>
              <div className="border-l-[4px] border-primary p-[20px_30px] bg-[#fdfdfd] shadow-[0_4px_15px_rgba(0,0,0,0.03)] mt-[20px]">
                <p className="text-[1.05rem] leading-[1.7] text-[#444] mb-0">
                  In Russia, most universities teach the first three years in English medium while simultaneously teaching the Russian language. From the fourth year onwards, students are expected to study in the Russian language. Students can complete their education at a low cost in Russia.
                </p>
              </div>
            </div>
            <div className="flex-[0.7] w-full max-w-[500px] lg:max-w-none mx-auto" data-aos="fade-up">
              <img src={moscowCity} alt="Moscow, Russia" className="w-full lg:w-[80%] h-auto lg:h-[280px] object-cover rounded mx-auto lg:mx-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BASIC INFORMATION ── */}
      <section className="py-[40px] bg-[#fdfdfd]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-[1.4rem] font-bold text-[#222] uppercase tracking-[1px]">Basic Information about Russia</h2>
            <div className="w-[50px] h-[3px] bg-primary mt-3 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {basicInfo.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <h4 className="text-primary font-bold text-[0.8rem] uppercase tracking-wide mb-2">{item.label}</h4>
                <p className="text-[#444] text-[0.9rem] leading-[1.5]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY RUSSIA ── */}
      <section className="py-[15px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-[30px]">
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">Why Russia?</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
              <ul className="list-none p-0 mt-2.5 text-left inline-block lg:block">
                {whyPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="relative pl-[25px] mb-2 text-[0.95rem] text-[#444] leading-[1.5] before:content-['•'] before:absolute before:left-0 before:text-[#333] before:font-black before:text-[1.5rem] before:-top-1"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-[0.7] w-full max-w-[500px] lg:max-w-none mx-auto mt-6 lg:mt-0" data-aos="fade-up">
              <img src={whyChooseImg} alt="Why Choose Russia" className="w-full lg:w-[80%] h-auto lg:h-[300px] object-cover rounded mx-auto lg:mx-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY CRITERIA ── */}
      <section className="py-[30px] bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-[30px]">
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">Eligibility Criteria</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 text-left">
                {/* 12th Class */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-primary text-[0.9rem] mb-3 uppercase tracking-wide">12th Class Eligibility</h4>
                  <div className="mb-3">
                    <p className="text-[0.85rem] font-semibold text-[#333]">Open Category:</p>
                    <p className="text-[0.85rem] text-[#555]">50% in PCB (Physics/Chemistry/Biology)</p>
                    <p className="text-[0.85rem] text-[#555]">Marks: 150/300</p>
                  </div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-[#333]">Reserved Category:</p>
                    <p className="text-[0.85rem] text-[#555]">40% in PCB (Physics/Chemistry/Biology)</p>
                    <p className="text-[0.85rem] text-[#555]">Marks: 120/300</p>
                  </div>
                </div>

                {/* NEET */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-primary text-[0.9rem] mb-3 uppercase tracking-wide">NEET Eligibility</h4>
                  <p className="text-[0.8rem] font-semibold text-[#e55] mb-2">Eligibility Compulsory</p>
                  <div className="mb-3">
                    <p className="text-[0.85rem] font-semibold text-[#333]">Open Category:</p>
                    <p className="text-[0.85rem] text-[#555]">50 Percentile – 117/720</p>
                    <p className="text-[0.75rem] text-gray-400">(As per 2022 score)</p>
                  </div>
                  <div>
                    <p className="text-[0.85rem] font-semibold text-[#333]">Reserved Category:</p>
                    <p className="text-[0.85rem] text-[#555]">40 Percentile – 93/720</p>
                    <p className="text-[0.75rem] text-gray-400">(As per 2022 score)</p>
                  </div>
                </div>

                {/* Age */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
                  <div className="text-5xl font-black text-primary mb-2">17</div>
                  <h4 className="font-bold text-[#333] text-[0.9rem] uppercase tracking-wide">Minimum Age</h4>
                  <p className="text-[0.85rem] text-[#555] mt-1">Years old at the time of admission</p>
                </div>
              </div>
            </div>
            <div className="flex-[0.6] w-full max-w-[400px] lg:max-w-none mx-auto mt-6 lg:mt-10" data-aos="fade-up">
              <img src={uni1} alt="Eligibility" className="w-full lg:w-[85%] h-auto lg:h-[260px] object-cover rounded mx-auto lg:mx-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── EXCLUSIVE BENEFITS ── */}
      <section className="py-[30px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-[30px]">
            <div className="flex-[0.7] w-full max-w-[500px] lg:max-w-none mx-auto" data-aos="fade-up">
              <img src={uni2} alt="Exclusive Benefits" className="w-full lg:w-[85%] h-auto lg:h-[260px] object-cover rounded mx-auto lg:mx-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" />
            </div>
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">Exclusive Benefits</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
              <ul className="list-none p-0 mt-2.5 text-left inline-block lg:block">
                {exclusiveBenefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="relative pl-[25px] mb-3 text-[0.95rem] text-[#444] leading-[1.5] before:content-['✓'] before:absolute before:left-0 before:text-primary before:font-black"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACADEMIC CALENDAR ── */}
      <section className="py-[30px] bg-[#f9f9f9]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-[30px]">
            <div className="flex-[1.3] text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px]">Academic Calendar</h2>
              <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
              <div className="border-l-[4px] border-primary p-[20px_30px] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.03)]">
                <p className="text-[0.95rem] leading-[1.8] text-[#444] mb-0">
                  Students have to give <strong>12 exams in 6 years</strong>. There will be a total of <strong>12 semesters in 6 years</strong>; each semester will be for <strong>5 months</strong>. Every year students will get a vacation of <strong>45 days (Approx)</strong>.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-5 justify-center lg:justify-start">
                <span className="bg-primary text-white text-[0.8rem] font-semibold px-4 py-2 rounded-full">12 Exams</span>
                <span className="bg-primary text-white text-[0.8rem] font-semibold px-4 py-2 rounded-full">12 Semesters</span>
                <span className="bg-primary text-white text-[0.8rem] font-semibold px-4 py-2 rounded-full">6 Years Total</span>
                <span className="bg-primary text-white text-[0.8rem] font-semibold px-4 py-2 rounded-full">5 Months / Semester</span>
                <span className="bg-primary text-white text-[0.8rem] font-semibold px-4 py-2 rounded-full">45 Days Vacation</span>
              </div>
            </div>
            <div className="flex-[0.7] w-full max-w-[500px] lg:max-w-none mx-auto mt-6 lg:mt-0" data-aos="fade-up">
              <img src={uni6} alt="Academic Calendar" className="w-full lg:w-[85%] h-auto lg:h-[260px] object-cover rounded mx-auto lg:mx-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section className="py-[30px] bg-white">
        <div className="max-w-[1200px] mx-auto px-6" data-aos="fade-up">
          <h2 className="text-[1.4rem] lg:text-[1rem] font-bold text-[#222] mb-3 uppercase tracking-[1px] text-center lg:text-left">Advantages of MBBS in Russia</h2>
          <div className="w-[50px] h-[3px] bg-primary mb-[15px] mx-auto lg:mx-0"></div>
          <p className="text-[0.95rem] leading-[1.6] text-[#555]">
            The universities of Russia provide a high standard of education at affordable fees. These universities are recognized by NMC & WHO. Most of the universities provide hostel facility for Indian students.
          </p>
        </div>
      </section><br />

      {/* ── CALL TO ACTION ── */}
      <section className="py-10 pb-5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[1050px] mx-auto relative overflow-visible" data-aos="zoom-in">
            <div className="absolute inset-0 bg-gradient-to-br from-[#647af3] to-[#1a33cc] rounded-[20px] overflow-hidden z-[1] before:content-[''] before:absolute before:-bottom-[150px] before:-left-[80px] before:w-[450px] before:h-[450px] before:bg-white/10 before:rounded-full before:pointer-events-none after:content-[''] after:absolute after:-top-[120px] after:-right-[60px] after:w-[380px] after:h-[380px] after:bg-white/10 after:rounded-full after:pointer-events-none">
              <div className="absolute top-1/2 left-[30%] w-[150px] h-[150px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="relative z-[2] flex flex-col items-center lg:flex-row lg:items-end gap-[30px] lg:gap-0">
              <div className="flex-1 p-10 text-center lg:text-left">
                <h2 className="text-white text-[1.8rem] mb-3 font-bold leading-[1.3]">Start Your Journey to Russia with Bravo Groups</h2>
                <p className="text-white/70 mb-[25px] text-base">We provide 100% assistance for your MBBS admission and visa processing.</p>
                <button
                  className="bg-white text-primary border-none p-[12px_30px] text-base font-bold rounded cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:text-[#1a33cc] hover:scale-105"
                  onClick={() => window.dispatchEvent(new CustomEvent('openAdmissionForm'))}
                >
                  GET FREE COUNSELING
                </button>
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

export default RussiaMBBS;
