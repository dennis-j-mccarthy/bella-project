'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';

const floorplans = [
  { unit: '201', beds: 2, baths: 2, sqft: 1100, floor: 2, balcony: true, ada: false, image: '/images/201.png.webp' },
  { unit: '202', beds: 2, baths: 2, sqft: 950, floor: 2, balcony: true, ada: true, image: '/images/202.png.webp' },
  { unit: '203', beds: 2, baths: 2, sqft: 980, floor: 2, balcony: true, ada: false, image: '/images/203.png.webp' },
  { unit: '204', beds: 2, baths: 2, sqft: 1100, floor: 2, balcony: true, ada: false, image: '/images/204.png.webp' },
  { unit: '205', beds: 2, baths: 2, sqft: 1000, floor: 2, balcony: true, ada: false, image: '/images/205,206,207.png.webp' },
  { unit: '206', beds: 2, baths: 2, sqft: 1000, floor: 2, balcony: true, ada: false, image: '/images/205,206,207.png.webp' },
  { unit: '207', beds: 2, baths: 2, sqft: 1000, floor: 2, balcony: true, ada: false, image: '/images/205,206,207.png.webp' },
  { unit: '301', beds: 2, baths: 2, sqft: 1100, floor: 3, balcony: true, ada: false, image: '/images/301.png.webp' },
  { unit: '302', beds: 2, baths: 2, sqft: 1000, floor: 3, balcony: true, ada: true, image: '/images/302.png.webp' },
  { unit: '303', beds: 2, baths: 2, sqft: 1000, floor: 3, balcony: true, ada: false, image: '/images/303.png.webp' },
  { unit: '304', beds: 2, baths: 2, sqft: 1100, floor: 3, balcony: true, ada: false, image: '/images/304.png.webp' },
  { unit: '305', beds: 2, baths: 2, sqft: 1000, floor: 3, balcony: true, ada: false, image: '/images/305,306,307.png.webp' },
  { unit: '306', beds: 2, baths: 2, sqft: 1000, floor: 3, balcony: true, ada: false, image: '/images/305,306,307.png.webp' },
  { unit: '307', beds: 2, baths: 2, sqft: 1000, floor: 3, balcony: true, ada: false, image: '/images/305,306,307.png.webp' },
  { unit: '401', beds: 2, baths: 2, sqft: 1100, floor: 4, balcony: true, ada: false, image: '/images/201.png.webp' },
  { unit: '402', beds: 2, baths: 2, sqft: 1000, floor: 4, balcony: true, ada: false, image: '/images/205,206,207.png.webp' },
];

export default function Floorplans() {
  const currentYear = new Date().getFullYear();
  const [filter, setFilter] = useState<'all' | '1br' | '2br'>('all');

  const filteredPlans = floorplans.filter((plan) => {
    if (filter === 'all') return true;
    if (filter === '1br') return plan.beds === 1;
    if (filter === '2br') return plan.beds === 2;
    return true;
  });

  const getFloorColor = (floor: number) => {
    switch (floor) {
      case 2: return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 3: return 'bg-sky-50 text-sky-700 border-sky-100';
      case 4: return 'bg-indigo-50 text-indigo-700 border-indigo-100';
      default: return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header currentPage="apartments" />

      <main className="flex-1 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-3xl">
                <p className="text-[11px] uppercase font-medium text-[#5b7a99] tracking-[0.22em]">
                  Floorplans
                </p>
                <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-slate-900 font-playfair">
                  Light-filled homes, thoughtfully sized.
                </h1>
                <p className="mt-2 text-sm text-slate-700">
                  1BR starting at $2,250 – 2BR starting at $2,350
                </p>
                <p className="mt-4 text-sm text-slate-600 max-w-xl">
                  Browse all sixteen residences at Bella—from efficient studios to expanded
                  two-bedrooms with balconies. Every layout is optimized for natural light,
                  storage, and everyday luxury living.
                </p>
              </div>

              <div className="w-full max-w-sm lg:w-auto flex flex-col gap-3 text-xs text-slate-600">
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-slate-500">
                      Current Availability
                    </span>
                    <span className="text-sm text-slate-900">Studios – 2 BR + Den</span>
                  </div>
                  <span className="text-[11px] text-slate-500">Updated daily</span>
                </div>
                <p className="text-xs text-slate-500">
                  Availability changes frequently. Share your ideal move-in date and we'll
                  tailor options within minutes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex flex-1 items-center justify-center rounded-full bg-[#5b7a99] text-white px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#4a6580] transition-colors">
                    Book a Showing
                  </button>
                  <button className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99] bg-white transition-colors">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-wrap gap-2 sm:gap-3 text-[11px]">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1.5 rounded-full font-medium tracking-[0.18em] transition-colors ${
                    filter === 'all'
                      ? 'bg-[#5b7a99] text-white'
                      : 'border border-slate-300 bg-white text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99]'
                  }`}
                >
                  All Homes ({floorplans.length})
                </button>
                <button
                  onClick={() => setFilter('1br')}
                  className={`px-3 py-1.5 rounded-full font-medium tracking-[0.18em] transition-colors ${
                    filter === '1br'
                      ? 'bg-[#5b7a99] text-white'
                      : 'border border-slate-300 bg-white text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99]'
                  }`}
                >
                  1 Bedroom
                </button>
                <button
                  onClick={() => setFilter('2br')}
                  className={`px-3 py-1.5 rounded-full font-medium tracking-[0.18em] transition-colors ${
                    filter === '2br'
                      ? 'bg-[#5b7a99] text-white'
                      : 'border border-slate-300 bg-white text-slate-700 hover:border-[#5b7a99] hover:text-[#5b7a99]'
                  }`}
                >
                  2 Bedroom
                </button>
              </div>

              <div className="flex flex-wrap gap-3 items-center text-[11px] text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="uppercase tracking-[0.18em]">Approx. Sq Ft</span>
                  <span className="px-3 py-1 rounded-full border border-slate-300 bg-white text-slate-700">
                    900 – 1,100
                  </span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-slate-400"></span>
                  <span>Pet-friendly • Parking available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floorplan Cards */}
        <section className="py-10 sm:py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
              {filteredPlans.map((plan) => (
                <article
                  key={plan.unit}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#5b7a99] via-slate-400 to-[#5b7a99]/60 opacity-80"></div>

                  <div className="relative bg-slate-50/80">
                    <img
                      src={plan.image}
                      alt={`Residence ${plan.unit} floorplan`}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="px-5 sm:px-6 pb-4 sm:pb-5 relative">
                    <div className="absolute inset-x-5 sm:inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                    <div className="flex items-start justify-between gap-2 text-xs text-slate-700 pt-3">
                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] tracking-[0.18em] uppercase text-slate-900 font-medium">
                          {plan.unit}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {plan.beds} Bed • {plan.baths} Bath • Approx. {plan.sqft.toLocaleString()} sq ft
                          {plan.balcony && ' • Outdoor balcony'}
                          {plan.ada && ' • ADA accessible'}
                        </span>
                      </div>
                      <div className="text-right flex flex-col items-end gap-1">
                        <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] tracking-[0.16em] uppercase ${getFloorColor(plan.floor)}`}>
                          {plan.floor === 2 ? '2nd' : plan.floor === 3 ? '3rd' : '4th'} floor
                        </span>
                      </div>
                    </div>

                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                      Experience modern urban living in this spacious {plan.sqft.toLocaleString()} square foot
                      {plan.beds === 1 ? ' one-bedroom' : ' two-bedroom'}, {plan.baths === 1 ? 'one-bathroom' : 'two-bathroom'} apartment
                      on the {plan.floor === 2 ? '2nd' : plan.floor === 3 ? '3rd' : '4th'} floor.
                      Features include open-concept living, large windows, in-unit washer/dryer,
                      quartz countertops, and stainless steel appliances.
                    </p>

                    <button className="mt-4 inline-flex items-center text-[11px] font-medium tracking-[0.18em] uppercase text-[#5b7a99] hover:text-[#4a6580] transition-colors">
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-slate-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 font-playfair mb-4 tracking-tight">
              Find your perfect home at Bella.
            </h2>
            <p className="text-base text-slate-600 font-light mb-10">
              Schedule a private tour to see our residences in person.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#5b7a99] text-white px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#4a6580] transition-all shadow-sm">
                Schedule a Tour
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-600 hover:border-[#5b7a99] hover:text-[#5b7a99] bg-white transition-all">
                View Availability
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <img
              src="/images/bella-logo-final.png"
              alt="Bella Apartments logo"
              className="h-8 w-auto"
            />
            <nav className="flex flex-wrap items-center gap-5 text-[11px] font-normal tracking-[0.18em] uppercase">
              <Link href="/" className="text-slate-500 hover:text-[#5b7a99]">Home</Link>
              <Link href="/floorplans" className="text-[#5b7a99]">Apartments</Link>
              <Link href="/amenities" className="text-slate-500 hover:text-[#5b7a99]">Amenities</Link>
              <Link href="/gallery" className="text-slate-500 hover:text-[#5b7a99]">Gallery</Link>
              <Link href="/blog" className="text-slate-500 hover:text-[#5b7a99]">Bonita Springs</Link>
              <button className="px-4 py-2 rounded-full bg-[#5b7a99] text-white font-medium hover:bg-[#4a6580]">
                Book a Showing
              </button>
            </nav>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <p className="text-[11px] text-slate-500">© {currentYear} Bella Apartments. All rights reserved.</p>
            <div className="flex gap-4 text-[11px] text-slate-500">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Fair Housing</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
