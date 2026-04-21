import React, { useEffect } from 'react';
import AOS from 'aos';

import heroDark from '../assets/kyrgyzstan_hero_dark.png';
import bishkekCity from '../assets/bishkek_city_hd.png';
import whyChooseImg from '../assets/dr_ameera.png';
import uni6 from '../assets/uni6.png';
import ctaBoy from '../assets/cta_boy.png';

const KyrgyzstanMBBS = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true, offset: 80, easing: 'ease-out-cubic' });
    window.scrollTo(0, 0);
  }, []);


  const whyPoints = [
    { icon: '🏥', text: 'NMC & WHO approved medical universities with globally recognized degrees.' },
    { icon: '💰', text: 'No donation or capitation fee required for admission.' },
    { icon: '📝', text: 'No separate entrance test — only NEET qualification needed.' },
    { icon: '🌍', text: 'World-class education with high standard of living at affordable costs.' },
    { icon: '🍛', text: 'Indian Mess, Indian Restaurants and Indian Teachers available.' },
    { icon: '🏠', text: 'Separate hostels for Boys & Girls with top-notch security.' },
    { icon: '🔬', text: 'Latest medical technology in hospitals for practical learning.' },
    { icon: '📚', text: 'USMLE preparation opportunities & university scholarships available.' },
  ];

  const basicInfo = [
    { icon: '🏙️', label: 'Capital', value: 'Bishkek' },
    { icon: '💱', label: 'Currency', value: 'Kyrgyzstani som ≈ 0.93 INR' },
    { icon: '🗣️', label: 'Language', value: 'Turkic & English' },
    { icon: '🍽️', label: 'Indian Mess', value: 'Yes' },
    { icon: '✈️', label: 'Travel Time', value: '6–7 Hours' },
    { icon: '🌡️', label: 'Climate', value: '-8°C to 31°C' },
    { icon: '📅', label: 'Duration', value: '6 Years' },
    { icon: '🛫', label: 'Airports', value: 'Manas & Osh Int\'l' },
  ];

  const benefits = [
    { icon: '🎓', title: 'NEXT / MCI / FMGE', desc: 'Screening Test Coaching Assistance' },
    { icon: '🇺🇸', title: 'USMLE Coaching', desc: 'Prepare for US Medical Licensing' },
    { icon: '🏨', title: 'Indian Hostel', desc: 'Safe accommodation for students' },
    { icon: '🍛', title: 'Indian Mess', desc: 'Homely Indian food available' },
    { icon: '👨‍👩‍👦', title: 'Parents Stay', desc: 'Support during parent visits' },
    { icon: '⚕️', title: 'Hospital Practice', desc: 'Clinical practice in hospitals' },
  ];

  return (
    <div className="font-sans text-[#333] bg-white">


      {/* ── HERO ── */}
      <section className="relative min-h-[420px] flex items-center mt-[100px] md:mt-[75px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroDark} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent"></div>
        </div>
        <div className="relative z-[2] max-w-[1200px] mx-auto px-6 py-16" data-aos="fade-right">
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-1.5 mb-5">
            <span className="text-white/90 text-[0.8rem] font-medium tracking-wider uppercase">🇰🇬 Central Asia</span>
          </div>
          <h1 className="text-[2.5rem] lg:text-[3rem] font-black text-white leading-[1.1] mb-4 max-w-[600px]">
            Study MBBS in<br /><span className="bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">Kyrgyzstan</span>
          </h1>
          <p className="text-white/60 text-[1rem] max-w-[500px] leading-relaxed">
            Affordable world-class medical education recognized by NMC & WHO
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3" data-aos="fade-up">
              <div className="inline-block bg-primary/10 text-primary text-[0.75rem] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">About Kyrgyzstan</div>
              <p className="text-[1rem] leading-[1.8] text-[#555] mb-4">
                MBBS in Kyrgyzstan is a good choice for anyone who wants to become a doctor at affordable fees. MBBS in Kyrgyzstan is well known among the students. Kyrgyzstan is a central Asian Country. Bishkek is the Capital city of Kyrgyzstan. You can travel to Bishkek from Delhi airport. Airfare is ₹25,000–₹30,000 for the return ticket. Kyrgyzstani som is the legal currency of Kyrgyzstan (1 Kyrgyzstani som = 1.03 INR). People of Kyrgyzstan follow Russian culture.
              </p>
              <p className="text-[1rem] leading-[1.8] text-[#555] mb-4">
                All medical universities of Kyrgyzstan are approved by NMC, only local authority approval is pending. The students can choose any recognized medical college or university in Kyrgyzstan.
              </p>
              <div className="bg-gradient-to-r from-primary/5 to-transparent border-l-4 border-primary p-5 rounded-r-xl mt-6">
                <p className="text-[0.95rem] leading-[1.7] text-[#444] italic">
                  The medium of instruction is English. There are more than 5,000 Indian students who study MBBS in Kyrgyzstan. In Kyrgyzstan, you are offered a degree of MD, which is equivalent to MBBS in India.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2" data-aos="zoom-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                <img src={bishkekCity} alt="Bishkek" className="relative w-full h-[320px] object-cover rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BASIC INFO GRID ── */}
      <section className="py-14 bg-gradient-to-b from-[#f8faff] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-[1.6rem] font-black text-[#1a1a2e] mb-2">Quick Facts</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {basicInfo.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white p-5 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-400 cursor-default text-center"
                data-aos="fade-up"
                data-aos-delay={idx * 60}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">{item.label}</div>
                <div className="text-[0.9rem] font-semibold text-[#222]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY KYRGYZSTAN ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div data-aos="fade-right">
              <div className="inline-block bg-primary/10 text-primary text-[0.75rem] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">Why Kyrgyzstan?</div>
              <h2 className="text-[1.5rem] font-black text-[#1a1a2e] mb-8 leading-tight">Reasons to Choose<br />Kyrgyzstan for MBBS</h2>
              <div className="space-y-4">
                {whyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 hover:bg-primary/5 border border-transparent hover:border-primary/15 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={idx * 40}
                  >
                    <span className="text-2xl flex-shrink-0 mt-0.5">{point.icon}</span>
                    <p className="text-[0.9rem] text-[#444] leading-relaxed">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="sticky top-[120px]" data-aos="fade-left">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-tr from-blue-500/15 to-purple-500/15 rounded-3xl blur-2xl"></div>
                <img src={whyChooseImg} alt="Why Kyrgyzstan" className="relative w-full h-[400px] object-cover rounded-2xl shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ── */}
      <section className="py-16 bg-[#0f172a] text-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-block bg-white/10 text-white/80 text-[0.75rem] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4">Requirements</div>
            <h2 className="text-[1.6rem] font-black">Eligibility Criteria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-400" data-aos="fade-up" data-aos-delay="0">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-xl mb-5">📋</div>
              <h3 className="font-bold text-lg mb-4">12th Class</h3>
              <div className="space-y-3 text-white/70 text-[0.88rem]">
                <div><span className="text-white/90 font-semibold">Open:</span> 50% in PCB (150/300)</div>
                <div><span className="text-white/90 font-semibold">Reserved:</span> 40% in PCB (120/300)</div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-400" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-xl mb-5">🎯</div>
              <h3 className="font-bold text-lg mb-2">NEET (Compulsory)</h3>
              <div className="space-y-3 text-white/70 text-[0.88rem]">
                <div><span className="text-white/90 font-semibold">Open:</span> 50 Percentile – 137/720</div>
                <div><span className="text-white/90 font-semibold">Reserved:</span> 40 Percentile – 107/720</div>
                <div className="text-white/40 text-[0.75rem]">As per 2023 score</div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-400 flex flex-col items-center justify-center text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-6xl font-black bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent mb-2">17+</div>
              <div className="text-white/90 font-bold text-lg">Years Old</div>
              <div className="text-white/50 text-[0.8rem] mt-1">Minimum age requirement</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXCLUSIVE BENEFITS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-block bg-primary/10 text-primary text-[0.75rem] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4">What You Get</div>
            <h2 className="text-[1.6rem] font-black text-[#1a1a2e]">Exclusive Benefits</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-400 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={idx * 70}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{b.icon}</div>
                <h4 className="font-bold text-[0.9rem] text-[#222] mb-1">{b.title}</h4>
                <p className="text-[0.8rem] text-gray-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMIC CALENDAR ── */}
      <section className="py-16 bg-gradient-to-b from-[#f8faff] to-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-block bg-primary/10 text-primary text-[0.75rem] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">Timeline</div>
              <h2 className="text-[1.5rem] font-black text-[#1a1a2e] mb-6">Academic Calendar</h2>
              <p className="text-[0.95rem] leading-[1.8] text-[#555] mb-6">
                There will be a total of 12 semesters for 6 years (including 1 Year Internship); each semester will be for 5 months. Every year students can visit India for 45 days (Approx) during their vacation. The University exam will be conducted in the month of April and September.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['12 Semesters', '6 Years', '5 Months Each', '45 Days Vacation', 'Exams: Apr & Sep'].map((tag, idx) => (
                  <span key={idx} className="bg-[#1a1a2e] text-white text-[0.78rem] font-semibold px-4 py-2 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <img src={uni6} alt="Academic" className="w-full h-[300px] object-cover rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section className="py-14 bg-white">
        <div className="max-w-[900px] mx-auto px-6" data-aos="fade-up">
          <div className="bg-gradient-to-br from-primary/5 via-purple-50/50 to-blue-50/50 border border-primary/10 rounded-3xl p-10">
            <h2 className="text-[1.3rem] font-black text-[#1a1a2e] mb-4">Advantages of MBBS in Kyrgyzstan</h2>
            <p className="text-[0.95rem] leading-[1.8] text-[#555] mb-3">
              The universities of Kyrgyzstan provide a high standard of education at affordable fees. These universities are recognized by NMC & WHO. Most of the universities provide hostel facility for Indian students. Indian food is also easily available in Kyrgyzstan.
            </p>
            <p className="text-[0.95rem] leading-[1.8] text-[#555]">
              The best thing is that the course duration is 6 years in Kyrgyzstan. The admission process is hassle-free. So, we can say that MBBS in Kyrgyzstan is a very good option to complete MBBS at affordable fees.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 pb-5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[1050px] mx-auto relative overflow-visible" data-aos="zoom-in">
            <div className="absolute inset-0 bg-gradient-to-br from-[#647af3] to-[#1a33cc] rounded-[20px] overflow-hidden z-[1] before:content-[''] before:absolute before:-bottom-[150px] before:-left-[80px] before:w-[450px] before:h-[450px] before:bg-white/10 before:rounded-full before:pointer-events-none after:content-[''] after:absolute after:-top-[120px] after:-right-[60px] after:w-[380px] after:h-[380px] after:bg-white/10 after:rounded-full after:pointer-events-none">
              <div className="absolute top-1/2 left-[30%] w-[150px] h-[150px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <div className="relative z-[2] flex flex-col items-center lg:flex-row lg:items-end gap-[30px] lg:gap-0">
              <div className="flex-1 p-10 text-center lg:text-left">
                <h2 className="text-white text-[1.8rem] mb-3 font-bold leading-[1.3]">Start Your Journey to Kyrgyzstan with Bravo Groups</h2>
                <p className="text-white/70 mb-[25px] text-base">We provide 100% assistance for your MBBS admission and visa processing.</p>
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

export default KyrgyzstanMBBS;
