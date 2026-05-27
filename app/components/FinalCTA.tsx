"use client";

import { Calendar as CalendarIcon, Clock, ChevronRight, CheckCircle2, User, Mail, FileText, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Generate next 10 business days starting from tomorrow
const getNextBusinessDays = () => {
  const days = [];
  const current = new Date();
  while (days.length < 10) {
    current.setDate(current.getDate() + 1);
    const dayOfWeek = current.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sundays (0) and Saturdays (6)
      days.push(new Date(current));
    }
  }
  return days;
};

const defaultTimeSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];

export default function FinalCTA() {
  const [step, setStep] = useState(1); // 1: Date & Time, 2: Details, 3: Success
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });

  const businessDays = getNextBusinessDays();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleNextStep = () => {
    if (selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const handleBackStep = () => {
    setStep(1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { name: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: "", email: "", project: "" });
    setErrors({ name: "", email: "" });
  };

  return (
    <section
      id="book"
      className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-black dark:to-[#080808] border-t border-slate-100 dark:border-neutral-900/60 overflow-hidden"
    >
      {/* Anchor for old pricing links */}
      <div id="pricing" className="absolute top-0 left-0" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-cyan-500/2 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Headline & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] font-sans">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#00C2CB] to-[#0073CF] bg-clip-text text-transparent">
              accelerate your roadmap?
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-500 dark:text-neutral-400 max-w-xl mx-auto font-medium">
            Book a free 30-minute discovery call. We&apos;ll map out your product roadmap and show you exactly how we can help.
          </p>
        </motion.div>

        {/* Scheduler Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white dark:bg-[#0f0f0f] border border-slate-100 dark:border-neutral-900/80 rounded-3xl shadow-xl dark:shadow-none p-6 md:p-10 max-w-2xl mx-auto min-h-[480px] flex flex-col justify-between"
        >
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Date & Time Picker */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col flex-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-cyan-500/10 flex items-center justify-center text-[#0073CF] dark:text-[#00C2CB]">
                    <CalendarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Select Date & Time</h3>
                    <p className="text-xs text-slate-400 dark:text-neutral-500">Pick a convenient weekday for our Google Meet call</p>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="mb-6">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500 block mb-3">
                    Available Dates
                  </label>
                  <div className="flex gap-2.5 overflow-x-auto pb-3 snap-x scrollbar-thin">
                    {businessDays.map((day) => {
                      const isSelected = selectedDate && selectedDate.toDateString() === day.toDateString();
                      const weekday = day.toLocaleDateString("en-US", { weekday: "short" });
                      const dateNum = day.getDate();
                      const month = day.toLocaleDateString("en-US", { month: "short" });

                      return (
                        <button
                          key={day.toISOString()}
                          onClick={() => handleDateSelect(day)}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border min-w-[70px] snap-center cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "border-[#00C2CB] bg-cyan-500/5 text-[#00C2CB] dark:bg-[#00C2CB]/10 shadow-sm"
                              : "border-slate-100 dark:border-neutral-900 bg-slate-50/50 dark:bg-[#141414] text-slate-600 dark:text-neutral-400 hover:border-slate-300 dark:hover:border-neutral-800"
                          }`}
                        >
                          <span className="text-[10px] uppercase font-bold tracking-wider opacity-65">{weekday}</span>
                          <span className="text-lg font-black my-0.5">{dateNum}</span>
                          <span className="text-[9px] uppercase font-bold tracking-wider opacity-65">{month}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slot Selection */}
                <div className="flex-1 mb-8">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500 block mb-3">
                    Available Slots {selectedDate && `for ${selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`}
                  </label>
                  
                  {selectedDate ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {defaultTimeSlots.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border text-xs font-bold cursor-pointer transition-all duration-200 ${
                              isSelected
                                ? "border-[#0073CF] bg-blue-500/5 text-[#0073CF] dark:bg-blue-500/10 shadow-sm"
                                : "border-slate-100 dark:border-neutral-900 bg-slate-50/50 dark:bg-[#141414] text-slate-700 dark:text-neutral-300 hover:border-slate-300 dark:hover:border-neutral-800"
                            }`}
                          >
                            <Clock className="w-3.5 h-3.5 opacity-65" />
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 border border-dashed border-slate-200 dark:border-neutral-800 rounded-2xl bg-slate-50/20 dark:bg-[#121212]">
                      <CalendarIcon className="w-8 h-8 text-slate-300 dark:text-neutral-700 mb-2" />
                      <span className="text-xs text-slate-400 dark:text-neutral-500">Please choose a date first to see available slots</span>
                    </div>
                  )}
                </div>

                {/* Action button */}
                <button
                  onClick={handleNextStep}
                  disabled={!selectedDate || !selectedTime}
                  className={`w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-md ${
                    selectedDate && selectedTime
                      ? "bg-gradient-to-r from-[#00C2CB] to-[#0073CF] hover:from-[#00b0b8] hover:to-[#0063b3] text-white hover:-translate-y-0.5"
                      : "bg-slate-100 dark:bg-neutral-800 text-slate-400 dark:text-neutral-600 cursor-not-allowed"
                  }`}
                >
                  Continue to Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* STEP 2: Details Form */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col flex-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <button
                    onClick={handleBackStep}
                    className="p-2 rounded-lg border border-slate-100 dark:border-neutral-900 bg-slate-50 dark:bg-[#141414] text-slate-600 hover:text-slate-900 dark:text-neutral-400 dark:hover:text-white cursor-pointer hover:border-slate-300 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Enter Your Details</h3>
                    <p className="text-xs text-slate-400 dark:text-neutral-500">
                      Intro call scheduled for <span className="font-semibold text-[#00C2CB]">{selectedTime}</span> on <span className="font-semibold text-[#0073CF]">{selectedDate && formatDate(selectedDate)}</span>
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4 mb-6">
                  {/* Name field */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500 block mb-1.5">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-neutral-600" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-[#141414] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#00C2CB] transition-all ${
                          errors.name ? "border-rose-500/50" : "border-slate-100 dark:border-neutral-900"
                        }`}
                      />
                    </div>
                    {errors.name && <span className="text-[10px] text-rose-500 font-semibold mt-1 block pl-1">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500 block mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-neutral-600" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 dark:bg-[#141414] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#00C2CB] transition-all ${
                          errors.email ? "border-rose-500/50" : "border-slate-100 dark:border-neutral-900"
                        }`}
                      />
                    </div>
                    {errors.email && <span className="text-[10px] text-rose-500 font-semibold mt-1 block pl-1">{errors.email}</span>}
                  </div>

                  {/* Project details */}
                  <div className="flex-1 flex flex-col">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500 block mb-1.5">
                      Tell us about your project (Optional)
                    </label>
                    <div className="relative flex-1 min-h-[100px]">
                      <FileText className="absolute left-3.5 top-4 w-4 h-4 text-slate-400 dark:text-neutral-600" />
                      <textarea
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        placeholder="What are you building? E.g., mobile app, SaaS platform, AI agent orchestration..."
                        className="w-full h-full pl-10 pr-4 py-3 rounded-xl border border-slate-100 dark:border-neutral-900 bg-slate-50/50 dark:bg-[#141414] text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#00C2CB] resize-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 mt-2 bg-[#0073CF] hover:bg-[#005fa3] text-white rounded-xl text-sm font-bold shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                  >
                    Confirm Booking
                  </button>
                </form>
              </motion.div>
            )}

            {/* STEP 3: Success state */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex flex-col items-center justify-center flex-1 text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-500 flex items-center justify-center mb-6 border border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                  Call Booked Successfully! 🎉
                </h3>
                <p className="text-sm text-slate-500 dark:text-neutral-400 max-w-md mb-8">
                  Thank you, <span className="font-semibold text-slate-800 dark:text-neutral-200">{formData.name}</span>. We have scheduled your 30-minute discovery call and sent a Google Meet invite to <span className="font-semibold text-slate-800 dark:text-neutral-200">{formData.email}</span>.
                </p>

                {/* Schedule Summary Card */}
                <div className="w-full bg-slate-50 dark:bg-[#141414] border border-slate-100 dark:border-neutral-900/60 rounded-2xl p-5 mb-8 text-left max-w-sm">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-neutral-500 block mb-2">
                    Discovery Session Details
                  </span>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-neutral-300 font-bold mb-2">
                    <CalendarIcon className="w-4 h-4 text-[#0073CF]" />
                    <span className="text-xs">{selectedDate && formatDate(selectedDate)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-neutral-300 font-bold">
                    <Clock className="w-4 h-4 text-[#00C2CB]" />
                    <span className="text-xs">{selectedTime} (30 mins)</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-full border border-slate-200 dark:border-neutral-800 text-xs font-bold text-slate-600 dark:text-neutral-400 hover:text-slate-800 dark:hover:text-white hover:border-slate-300 dark:hover:border-neutral-700 transition-all cursor-pointer"
                >
                  Book Another Call
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
