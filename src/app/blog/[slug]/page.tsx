'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}> = {
  'downtown-bonita-springs-guide': {
    title: 'Living Local: A Guide to Downtown Bonita Springs',
    excerpt: 'From hidden coffee shops to the best riverside walking paths, explore the vibrant culture that surrounds Bella Apartments just steps from your front door.',
    image: '/images/downtown.jpg',
    category: 'Neighborhood',
    date: 'June 12, 2025',
    readTime: '4 min read',
    content: `Downtown Bonita Springs isn't just a place to live—it's a lifestyle. Unlike many Florida communities that sprawl endlessly, downtown Bonita offers something increasingly rare: a walkable, vibrant neighborhood with authentic character.

**Morning Rituals**

Start your day at one of the local coffee shops within walking distance of Bella. Whether you prefer a quiet corner for remote work or a quick espresso on the go, you'll find your spot. The baristas know the regulars, and you'll soon become one of them.

**Riverside Living**

The Imperial River winds through downtown, offering peaceful walking paths shaded by ancient oaks. Kayakers paddle past, egrets fish from the banks, and the sunset views are simply unmatched. It's the kind of scene that reminds you why you moved to Florida in the first place.

**Local Favorites**

From farm-to-table restaurants to hidden gems serving the best Cuban sandwiches you've ever tasted, the dining scene here punches well above its weight. Friday nights bring live music to the outdoor patios, and weekend farmers markets fill the streets with fresh produce and artisan goods.

**Community Spirit**

Perhaps what sets downtown Bonita apart most is the sense of community. Neighbors wave hello, shop owners remember your name, and seasonal festivals bring everyone together. It's small-town charm with all the amenities of a modern city just minutes away.`,
  },
  'modern-minimalist-interiors': {
    title: 'Defining Your Space: Modern Minimalist Interiors',
    excerpt: 'Our open-concept floor plans are the perfect canvas. Discover how to utilize natural light and organic textures to create a serene sanctuary in your new home.',
    image: '/images/teak.jpg',
    category: 'Design',
    date: 'May 28, 2025',
    readTime: '3 min read',
    content: `At Bella, we've designed each residence as a blank canvas for your personal style. Our open-concept floor plans, abundant natural light, and premium finishes provide the perfect foundation for modern minimalist living.

**Embrace Natural Light**

Large windows flood each apartment with Florida sunshine. Instead of fighting it with heavy curtains, embrace it. Sheer linens diffuse harsh afternoon light while maintaining that airy, open feeling that makes minimalist spaces sing.

**Organic Textures**

Balance clean lines with warmth through organic materials. A teak coffee table, woven baskets for storage, or a single statement plant can transform a space from cold to inviting. The key is intentionality—every piece should earn its place.

**The Art of Editing**

Minimalism isn't about having nothing; it's about having only what matters. Start by removing everything from a room, then add back only what brings function or joy. You'll be surprised how little you actually need.

**Quality Over Quantity**

Invest in fewer, better pieces. A well-made sofa, a timeless dining table, a comfortable bed—these foundational pieces will serve you for years. Let the architecture and natural light do the heavy lifting.`,
  },
  'local-coffee-guide': {
    title: 'Pour & Explore: The Local Coffee Guide',
    excerpt: "Whether you need a quiet corner for remote work or a quick morning espresso, we've curated the ultimate list of artisanal roasters within walking distance.",
    image: '/images/coffee.jpg',
    category: 'Lifestyle',
    date: 'May 15, 2025',
    readTime: '2 min read',
    content: `Living at Bella means having some of Southwest Florida's best coffee just steps from your door. We've done the research (it was a tough job) to bring you this definitive guide to local roasters and cafés.

**For the Early Risers**

Nothing beats that first cup of the day. Several spots open before 7 AM, serving perfectly pulled espresso to fuel your morning. Look for places with outdoor seating to enjoy the cooler morning air before the Florida heat sets in.

**Remote Work Headquarters**

Need reliable WiFi and comfortable seating for a productive work session? We've identified the spots with the best combination of atmosphere, connectivity, and coffee quality. Pro tip: the mid-morning lull is the best time to grab a table.

**Weekend Vibes**

Saturday and Sunday mornings call for a more leisurely pace. Find a spot with local pastries, maybe a mimosa option, and settle in with a book or a friend. The best cafés here understand that weekend coffee is as much about the experience as the caffeine.

**Our Top Picks**

While we won't play favorites (okay, we have favorites), we encourage you to explore and find your own perfect spot. The beauty of downtown Bonita is having options—each with its own character and devoted following.`,
  },
  'sunset-sessions-live-music': {
    title: 'Sunset Sessions: Live Music on the Lawn',
    excerpt: 'Join us every Thursday evening this spring for acoustic performances by local artists. Bring a blanket, enjoy the breeze, and connect with your neighbors.',
    image: '/images/music.webp',
    category: 'Events',
    date: 'April 22, 2025',
    readTime: '5 min read',
    content: `There's something magical about live music as the sun sets over Southwest Florida. This spring, we're bringing that magic to Bella with our Sunset Sessions series.

**Every Thursday, 6-8 PM**

As the workweek winds down, join your neighbors on the lawn for acoustic performances by talented local artists. It's the perfect way to transition from work mode to weekend mode.

**What to Bring**

Pack a blanket, grab your favorite beverage, and maybe some snacks to share. We'll provide the music, the view, and the good vibes. Some residents bring lawn chairs; others prefer to spread out on the grass. There's no wrong way to enjoy the evening.

**Featured Artists**

We're featuring a rotation of local musicians spanning genres from folk to jazz to coastal rock. Each week brings something different, keeping the series fresh and giving you a chance to discover new favorites.

**Community Connection**

More than the music, Sunset Sessions is about building community. It's a chance to meet your neighbors, catch up with friends, and feel connected to the place you call home. In our increasingly digital world, there's something irreplaceable about gathering together in person.

**Mark Your Calendar**

The series runs every Thursday through the spring season. Check your email for the monthly lineup and any weather-related updates. We can't wait to see you there.`,
  },
};

export default function BlogDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];
  const currentYear = new Date().getFullYear();

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-playfair text-slate-900 mb-4">Post not found</h1>
          <Link href="/blog" className="text-[#5b7a99] hover:underline">
            ← Back to Bonita Springs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header currentPage="blog" />

      <main>
        {/* Hero Image */}
        <section className="relative h-[50vh] min-h-[400px] bg-slate-900">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
        </section>

        {/* Article Content */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#5b7a99] hover:text-[#4a6580] mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Bonita Springs
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-4 text-xs text-slate-500 font-medium tracking-wide uppercase">
              <span className="bg-[#5b7a99]/10 text-[#5b7a99] px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair text-slate-900 tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-10 border-l-2 border-[#5b7a99] pl-4">
              {post.excerpt}
            </p>

            {/* Content */}
            <div className="prose prose-slate max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-xl font-playfair text-slate-900 mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="text-slate-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-4">Share this article</p>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#5b7a99] hover:text-[#5b7a99] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#5b7a99] hover:text-[#5b7a99] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#5b7a99] hover:text-[#5b7a99] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 font-playfair mb-4 tracking-tight">
              Ready to make Bella home?
            </h2>
            <p className="text-base text-slate-600 font-light mb-10">
              Schedule a private tour and experience the Bella lifestyle firsthand.
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
              <Link href="/floorplans" className="text-slate-500 hover:text-[#5b7a99]">Apartments</Link>
              <Link href="/amenities" className="text-slate-500 hover:text-[#5b7a99]">Amenities</Link>
              <Link href="/gallery" className="text-slate-500 hover:text-[#5b7a99]">Gallery</Link>
              <Link href="/blog" className="text-[#5b7a99]">Bonita Springs</Link>
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
