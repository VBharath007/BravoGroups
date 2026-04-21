"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import logo from '../assets/bgremovedlogo-small.webp';

// Total 44 frames as requested
const FRAME_COUNT = 44;
const AUTO_SPEED = 0.8; // px per frame at 60fps
const RESUME_DELAY = 2200; // ms

export default function FrameInjection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // State for preloading
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  // Scroll tracking parameters
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress (0 to 1) to frame index (0 to 43)
  const currentFrame = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Timed Fade Map
  const opacity0 = useTransform(scrollYProgress, [0, 0.05, 0.15], [1, 1, 0]);
  const y0 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const opacity25 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
  const y25 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [50, 0, -50]);

  const opacity60 = useTransform(scrollYProgress, [0.45, 0.60, 0.70], [0, 1, 0]);
  const y60 = useTransform(scrollYProgress, [0.45, 0.60, 0.70], [50, 0, -50]);

  const opacity90 = useTransform(scrollYProgress, [0.80, 0.90, 1], [0, 1, 1]);
  const y90 = useTransform(scrollYProgress, [0.80, 0.90, 1], [50, 0, 0]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    const handleLoad = () => {
      loaded++;
      setLoadedCount(loaded);
    };

    const handleError = (idx: string) => {
      console.warn(`Frame ${idx} failed to load`);
      loaded++;
      setLoadedCount(loaded);
    };

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const fileIndex = String(i + 1).padStart(3, '0');
      img.src = `/frameinjection/video_in_${fileIndex}.png`;

      img.onload = handleLoad;
      img.onerror = () => handleError(fileIndex);
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // ── Autoplay engine ──
  useEffect(() => {
    if (loadedCount < FRAME_COUNT) return;
    if (!containerRef.current) return;

    const container = containerRef.current;
    const sectionTop = container.offsetTop;
    const sectionH = container.scrollHeight;
    const vh = window.innerHeight;
    const maxScroll = sectionH - vh;

    let autoPlaying = true;
    let autoPos = 0;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;

    let rafId = 0;
    const tick = () => {
      if (autoPlaying && autoPos < maxScroll) {
        autoPos = Math.min(autoPos + AUTO_SPEED, maxScroll);
        window.scrollTo({ top: sectionTop + autoPos, behavior: "instant" } as any);
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onScroll = () => {
      const scrolled = window.scrollY - sectionTop;
      autoPos = Math.min(Math.max(scrolled, 0), maxScroll);

      autoPlaying = false;
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { autoPlaying = true; }, RESUME_DELAY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimer) clearTimeout(resumeTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [loadedCount]);

  useEffect(() => {
    if (loadedCount < FRAME_COUNT) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const frameIndex = Math.min(Math.max(Math.round(currentFrame.get() || 0), 0), FRAME_COUNT - 1);
      const image = images[frameIndex];

      if (image && image.complete && image.naturalWidth !== 0) {
        const dpi = window.devicePixelRatio || 1;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if (canvas.width !== windowWidth * dpi || canvas.height !== windowHeight * dpi) {
          canvas.width = windowWidth * dpi;
          canvas.height = windowHeight * dpi;
          ctx.scale(dpi, dpi);
        }

        const hRatio = windowWidth / image.width;
        const vRatio = windowHeight / image.height;
        const ratio = Math.min(hRatio, vRatio);

        const centerShift_x = (windowWidth - image.width * ratio) / 2;
        const centerShift_y = (windowHeight - image.height * ratio) / 2;

        ctx.clearRect(0, 0, windowWidth, windowHeight);
        ctx.drawImage(
          image,
          0, 0, image.width, image.height,
          centerShift_x, centerShift_y, image.width * ratio, image.height * ratio
        );
      }
    };

    const unsubscribe = currentFrame.on("change", () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    });

    render();

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [loadedCount, images, currentFrame]);

  const progressPercent = Math.round((loadedCount / FRAME_COUNT) * 100);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#ECECEC] font-sans">

      {loadedCount < FRAME_COUNT && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#04080F] pointer-events-none">
          <img
            src={logo}
            alt="Bravo Groups"
            className="w-32 h-32 object-contain mb-8"
          />
          <div className="w-64 h-[1px] bg-gray-700 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="mt-6 text-[11px] tracking-widest text-gray-400 font-medium">LOADING • {progressPercent}%</p>
        </div>
      )}

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        {loadedCount === FRAME_COUNT && (
          <>
            <motion.div
              style={{ opacity: opacity0, y: y0 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center pb-48 pointer-events-none text-gray-900"
            >
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-2">Bravo Groups</h2>
              <p className="text-xl md:text-2xl font-light tracking-tight text-gray-500">Empowering Medical Dreams</p>
            </motion.div>

            <motion.div
              style={{ opacity: opacity25, y: y25 }}
              className="absolute inset-y-0 left-0 w-full md:w-1/2 flex flex-col items-start justify-center pl-8 md:pl-24 pointer-events-none text-gray-900"
            >
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-2">Our Mission</h2>
              <p className="text-lg md:text-xl font-light tracking-tight text-gray-500">Transparent, ethical counseling.</p>
            </motion.div>

            <motion.div
              style={{ opacity: opacity60, y: y60 }}
              className="absolute inset-y-0 right-0 w-full md:w-1/2 flex flex-col items-end justify-center pr-8 md:pr-24 text-right pointer-events-none text-gray-900"
            >
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-2">Our Vision</h2>
              <p className="text-lg md:text-xl font-light tracking-tight text-gray-500">Borderless medical future.</p>
            </motion.div>

            <motion.div
              style={{ opacity: opacity90, y: y90 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center mt-64 pointer-events-none text-gray-900"
            >
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-2">Study Abroad</h2>
              <p className="text-xl md:text-2xl font-light tracking-tight text-gray-500">Trusted by 100s of students.</p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}