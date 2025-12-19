# Image Directory Structure

Organize your local images in the following folders:

## `/floorplans/`
Floorplan diagrams for each unit:
- `201.png`, `202.png`, `203.png`, `204.png`
- `205-206-207.png` (shared layout)
- `301.png`, `302.png`, `303.png`, `304.png`
- `305-306-307.png` (shared layout)
- `401.png`, `402.png`

## `/blog/`
Blog post featured images:
- `downtown-guide.jpg` - Downtown Bonita Springs guide
- `minimalist-living.jpg` - Interior design article
- `coffee.jpg` - Local coffee guide
- `music.jpg` - Sunset sessions/events

## `/gallery/`
Photo gallery images organized by category:
- `interior-1.jpg` through `interior-5.jpg`
- `amenity-1.jpg` through `amenity-4.jpg`
- `exterior-1.jpg` through `exterior-3.jpg`

## `/hero/`
Large hero/banner images:
- `home-hero.jpg` - Homepage hero
- `amenities-hero.jpg` - Amenities page hero
- `apartments-hero.jpg` - Apartments carousel images

## `/amenities/`
Amenity-specific photos:
- `pool.jpg` - Pool area
- `fitness.jpg` - Fitness center
- `lounge.jpg` - Resident lounge
- `courtyard.jpg` - Courtyard/outdoor spaces

---

## Usage in Next.js

Reference images from `/public/images/` like this:

```jsx
<img src="/images/floorplans/201.png" alt="Unit 201 floorplan" />
```

Or with Next.js Image component:

```jsx
import Image from 'next/image';

<Image 
  src="/images/gallery/interior-1.jpg" 
  alt="Modern living room"
  width={800}
  height={600}
/>
```
