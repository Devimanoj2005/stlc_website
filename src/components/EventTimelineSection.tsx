"use client";

import React from "react";

interface TimelineEvent {
  time: string;
  name: string;
  tag: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

interface DaySchedule {
  day: string;
  label: string;
  events: TimelineEvent[];
}

const schedule: DaySchedule[] = [
  {
    day: "DAY ONE",
    label: "Day 1",
    events: [
      {
        time: "8:30 - 10:00 AM",
        name: "Registration",
        tag: "Check-in",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        ),
      },
      {
        time: "10:00 - 11:30 AM",
        name: "Inauguration Ceremony",
        tag: "Opening",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        ),
      },
      {
        time: "11:30 AM",
        name: "Photo Session",
        tag: "Memories",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
      },
      {
        time: "11:45 AM - 12:45 PM",
        name: "YP Session",
        tag: "Panel",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
      },
      {
        time: "12:45 PM",
        name: "Lunch",
        tag: "Break",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        time: "1:45 - 3:15 PM",
        name: "HR Session",
        tag: "Career",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        time: "3:15 PM",
        name: "Tea Break",
        tag: "Refreshment",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        time: "4:00 - 6:00 PM",
        name: "Games",
        tag: "Team Activity",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        ),
      },
      {
        time: "6:00 - 7:00 PM",
        name: "Networking Time",
        tag: "Connect",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        ),
      },
      {
        time: "7:00 - 8:30 PM",
        name: "Cultural Night",
        tag: "Celebration",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        ),
      },
      {
        time: "8:30 PM",
        name: "Dinner",
        tag: "Dining",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
      },
    ],
  },
  {
    day: "DAY TWO",
    label: "Day 2",
    events: [
      {
        time: "8:00 AM",
        name: "Breakfast",
        tag: "Morning",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
      },
      {
        time: "9:00 AM - 12:30 PM",
        name: "Workshops",
        tag: "Hands-on",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
      },
      {
        time: "12:30 PM",
        name: "Lunch",
        tag: "Break",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        time: "1:30 - 2:30 PM",
        name: "Project Expo",
        tag: "Flagship",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
      },
      {
        time: "2:30 - 3:00 PM",
        name: "Icebreaking Session",
        tag: "Interactive",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364" />
          </svg>
        ),
      },
      {
        time: "3:00 - 4:00 PM",
        name: "Valedictory Ceremony",
        tag: "Closing",
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        ),
      },
    ],
  },
];

export default function EventTimelineSection() {
  return (
    <section id="timeline" className="w-full bg-[#2B1408] py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8C5A8]/15 text-[#E8C5A8] border border-[#E8C5A8]/20 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4">
              <span>04 • EVENT SCHEDULE</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#FAF6F0] tracking-tight uppercase leading-tight">
              Event Schedule
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#E8C5A8]/70 max-w-2xl">
              Two days packed with learning, workshops, networking, and celebration.
            </p>
          </div>
          <div className="font-mono text-xs font-bold text-[#E8C5A8]/40">
            [ 2-DAY RESIDENTIAL ]
          </div>
        </div>

        {/* Day Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {schedule.map((day) => (
            <div
              key={day.day}
              className="bg-[#3E1C0D] rounded-3xl p-4 sm:p-6 md:p-8 border border-[#E8C5A8]/10"
            >
              {/* Day Header */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 rounded-2xl bg-[#B85D2A] flex items-center justify-center">
                  <span className="font-heading font-black text-white text-xs">
                    {day.label === "Day 1" ? "D1" : "D2"}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-black text-[#FAF6F0] text-lg tracking-tight uppercase">
                    {day.day}
                  </p>
                  <p className="text-[#E8C5A8]/50 text-xs font-mono">
                    SYNORA &apos;26
                  </p>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="flex flex-col gap-0">
                {day.events.map((event, idx) => (
                  <div key={event.name} className="flex gap-2 sm:gap-3">
                    {/* Left: time label */}
                    <div className="w-20 sm:w-28 shrink-0 pt-1 text-right">
                      <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-[#E8C5A8]/70 block leading-tight">
                        {event.time}
                      </span>
                    </div>

                    {/* Center: dot + line */}
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full border-2 shrink-0 mt-1 ${event.highlight ? "bg-[#E8C5A8] border-[#E8C5A8]" : "bg-[#B85D2A] border-[#B85D2A]"}`} />
                      {idx < day.events.length - 1 && (
                        <div className="w-px flex-1 bg-[#E8C5A8]/10 my-1 min-h-[1.75rem]" />
                      )}
                    </div>

                    {/* Right: event card */}
                    <div className={`flex-1 min-w-0 mb-3.5 sm:mb-4 rounded-2xl px-3 sm:px-3.5 py-2.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2.5 ${event.highlight ? "bg-[#E8C5A8] text-[#2B1408]" : "bg-[#2B1408]/60 text-[#FAF6F0]"}`}>
                      <div className="flex items-center gap-2 min-w-0">
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0 ${event.highlight ? "bg-[#2B1408] text-[#E8C5A8]" : "bg-[#B85D2A]/20 text-[#E8C5A8]"}`}>
                          {event.icon}
                        </div>
                        <span className="font-heading font-black text-xs sm:text-[13px] tracking-tight uppercase leading-snug">
                          {event.name}
                        </span>
                      </div>
                      <span className={`self-start sm:self-auto text-[9px] font-black uppercase px-2 py-0.5 rounded-full whitespace-nowrap ${event.highlight ? "bg-[#2B1408] text-[#E8C5A8]" : "bg-[#E8C5A8]/10 text-[#E8C5A8]/70"}`}>
                        {event.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
