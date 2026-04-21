import React, { useState, useEffect, useRef } from 'react';
import './AdmissionForm.css';

const AdmissionForm = ({ isOpen, onClose, universityName }) => {
    const [phase, setPhase] = useState('hidden'); // hidden | entering | visible | leaving
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        altPhone: '', // optional number
        neetMark: '',
        cutOff: '',
        university: universityName || ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [focused, setFocused] = useState(null);
    const timerRef = useRef(null);

    // ── Open / Close helpers ──
    const open = () => {
        setPhase('entering');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setPhase('visible'));
        });
    };

    const close = () => {
        if (onClose) {
            onClose();
        } else {
            setPhase('leaving');
            timerRef.current = setTimeout(() => {
                setPhase('hidden');
                setSubmitted(false);
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    address: '',
                    altPhone: '',
                    neetMark: '',
                    cutOff: '',
                    university: universityName || ''
                });
            }, 520);
        }
    };

    // ── Lifecycle ──
    useEffect(() => {
        if (isOpen !== undefined) {
            if (isOpen) open();
            else {
                setPhase('leaving');
                timerRef.current = setTimeout(() => setPhase('hidden'), 520);
            }
        }
    }, [isOpen]);

    useEffect(() => {
        if (universityName) {
            setFormData(prev => ({ ...prev, university: universityName }));
        }
    }, [universityName]);

    useEffect(() => {
        if (isOpen !== undefined) return; // If controlled, ignore global events to prevent dual-opening

        const handleTrigger = (e) => {
            setSubmitted(false);
            if (e.detail && typeof e.detail === 'string') {
                setFormData(prev => ({ ...prev, university: e.detail }));
            }
            open();
        };
        window.addEventListener('openAdmissionForm', handleTrigger);
        window.addEventListener('AdmissionForm', handleTrigger);
        return () => {
            window.removeEventListener('openAdmissionForm', handleTrigger);
            window.removeEventListener('AdmissionForm', handleTrigger);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [isOpen]);

    // ── Auto-calculation logic ──
    useEffect(() => {
        const mark = parseFloat(formData.neetMark);
        if (!isNaN(mark) && mark > 0) {
            const calculated = (mark * 100 / 720).toFixed(2);
            setFormData(prev => ({ ...prev, cutOff: calculated }));
        } else {
            setFormData(prev => ({ ...prev, cutOff: '' }));
        }
    }, [formData.neetMark]);

    // ── Form ──
    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Manual validation to ensure all fields are filled (even whitespace)
        const requiredFields = ['fullName', 'email', 'phone', 'altPhone', 'address', 'neetMark'];
        const isFormValid = requiredFields.every(field => formData[field] && formData[field].trim() !== '');

        if (!isFormValid) {
            alert('Please fill in all required fields correctly.');
            return;
        }

        const msg =
            `*New Admission Application*%0A%0A` +
            `*University:* ${formData.university || 'Not Specified'}%0A` +
            `*Name:* ${formData.fullName}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Alt Phone:* ${formData.altPhone}%0A` +
            `*Address:* ${formData.address}%0A` +
            `*NEET Mark:* ${formData.neetMark}%0A` +
            `*Calculated Cut-off:* ${formData.cutOff}%0A%0A` +
            `I would like to apply for MBBS admission at ${formData.university || 'your recommended university'}. Please guide me through the next steps.`;

        window.open(`https://wa.me/918838071494?text=${msg}`, '_blank');
        setSubmitted(true);
        setTimeout(close, 2500);
    };

    if (phase === 'hidden') return null;

    const overlayClass = `af-overlay ${phase === 'visible' ? 'af-overlay--in' : ''} ${phase === 'leaving' ? 'af-overlay--out' : ''}`;
    const boxClass = `af-box ${phase === 'visible' ? 'af-box--in' : ''} ${phase === 'leaving' ? 'af-box--out' : ''}`;

    return (
        <div className={overlayClass} onClick={(e) => e.target === e.currentTarget && close()}>
            <div className={boxClass} role="dialog" aria-modal="true" aria-label="MBBS Admission Form">

                {/* Close Button */}
                <button className="af-close" onClick={close} aria-label="Close popup" type="button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="af-content">
                    {submitted ? (
                        <div className="af-success">
                            <div className="af-success-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h2 className="af-success-title">Application Sent!</h2>
                            <p className="af-success-text">Redirecting you to WhatsApp to finalize your counseling session...</p>
                        </div>
                    ) : (
                        <>
                            <div className="af-header">
                                <h1 className="af-title">Admission Application</h1>
                                <p className="af-subtitle">Fill in your details to start your medical journey abroad.</p>
                            </div>

                            <form className="af-form" onSubmit={handleSubmit}>
                                {/* Full Name & Email */}
                                <div className="af-row">
                                    <div className={`af-field ${focused === 'fullName' ? 'af-field--focused' : ''} ${formData.fullName ? 'af-field--filled' : ''}`}>
                                        <label className="af-label" htmlFor="fullName">Full Name *</label>
                                        <input
                                            id="fullName" type="text" required placeholder="Full Name"
                                            value={formData.fullName} onChange={handleChange}
                                            onFocus={() => setFocused('fullName')} onBlur={() => setFocused(null)}
                                        />
                                    </div>
                                    <div className={`af-field ${focused === 'email' ? 'af-field--focused' : ''} ${formData.email ? 'af-field--filled' : ''}`}>
                                        <label className="af-label" htmlFor="email">Email address *</label>
                                        <input
                                            id="email" type="email" required placeholder="your@email.com"
                                            value={formData.email} onChange={handleChange}
                                            onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                                        />
                                    </div>
                                </div>

                                {/* Phone & Alt Phone */}
                                <div className="af-row">
                                    <div className={`af-field ${focused === 'phone' ? 'af-field--focused' : ''} ${formData.phone ? 'af-field--filled' : ''}`}>
                                        <label className="af-label" htmlFor="phone">Phone Number *</label>
                                        <input
                                            id="phone" type="tel" required placeholder="+91 XXXXX XXXXX"
                                            value={formData.phone} onChange={handleChange}
                                            onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                                        />
                                    </div>
                                    <div className={`af-field ${focused === 'altPhone' ? 'af-field--focused' : ''} ${formData.altPhone ? 'af-field--filled' : ''}`}>
                                        <label className="af-label" htmlFor="altPhone">Secondary Phone *</label>
                                        <input
                                            id="altPhone" type="tel" required placeholder="Secondary Phone"
                                            value={formData.altPhone} onChange={handleChange}
                                            onFocus={() => setFocused('altPhone')} onBlur={() => setFocused(null)}
                                        />
                                    </div>
                                </div>

                                {/* Address */}
                                <div className={`af-field ${focused === 'address' ? 'af-field--focused' : ''} ${formData.address ? 'af-field--filled' : ''}`}>
                                    <label className="af-label" htmlFor="address">Address *</label>
                                    <textarea
                                        id="address" required placeholder="Your full permanent address"
                                        value={formData.address} onChange={handleChange}
                                        onFocus={() => setFocused('address')} onBlur={() => setFocused(null)}
                                        rows="2"
                                    />
                                </div>

                                {/* NEET Mark & Cut-off */}
                                <div className="af-row">
                                    <div className={`af-field ${focused === 'neetMark' ? 'af-field--focused' : ''} ${formData.neetMark ? 'af-field--filled' : ''}`}>
                                        <label className="af-label" htmlFor="neetMark">NEET Mark *</label>
                                        <input
                                            id="neetMark" type="number" required placeholder="e.g. 550"
                                            value={formData.neetMark} onChange={handleChange}
                                            onFocus={() => setFocused('neetMark')} onBlur={() => setFocused(null)}
                                        />
                                    </div>
                                    <div className="af-field af-field--disabled">
                                        <label className="af-label">Auto Cut-off</label>
                                        <input
                                            type="text" readOnly placeholder="0.00"
                                            value={formData.cutOff}
                                        />
                                        <span className="af-field-hint">Mark / 300</span>
                                    </div>
                                </div>

                                <button type="submit" className="af-submit">
                                    <span>Submit Application via WhatsApp</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.17 3.27 2 2 0 0 1 3.14 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </button>

                                <p className="af-footer">Your data is safe with us. We only use it for admission guidance.</p>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;
