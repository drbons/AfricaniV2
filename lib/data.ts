export type Post = {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  images: string[];
  city: string;
  state: string;
  category?: string;
  likes: number;
  comments: any[];
  shares: number;
  createdAt: string;
  updatedAt: string;
  isPinned: boolean;
  isBusinessPromotion: boolean;
  businessId?: string;
};

export type Business = {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  hoursOfOperation: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    snapchat?: string;
    tiktok?: string;
  };
  rating: 'silver' | 'gold' | 'platinum';
  ratingScore: number;
  reviewCount: number;
  images: string[];
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
  reviews?: any[];
};

export type State = {
  name: string;
  abbreviation: string;
  cities: string[];
};

export const STATES: State[] = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
    cities: ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville']
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
    cities: ['Anchorage', 'Fairbanks', 'Juneau', 'Sitka']
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
    cities: ['Phoenix', 'Tucson', 'Mesa', 'Chandler']
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
    cities: ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale']
  },
  {
    name: 'California',
    abbreviation: 'CA',
    cities: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento']
  },
  // More states would be added here
];

export const CATEGORIES = [
  'Restaurants',
  'Real Estate',
  'Medical Professionals',
  'Education',
  'Retail',
  'Services',
  'Entertainment',
  'Technology',
  'Construction',
  'Transportation',
  'Beauty',
  'For Sale'
];

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'John Doe',
    userAvatar: 'https://picsum.photos/id/1/200',
    content: 'Just opened my new restaurant in downtown Birmingham! Come check us out for authentic African cuisine.',
    images: ['https://picsum.photos/id/292/800/600', 'https://picsum.photos/id/431/800/600'],
    city: 'Birmingham',
    state: 'AL',
    likes: 24,
    comments: [
      {
        userId: 'user1',
        userName: 'John Doe',
        userAvatar: 'https://picsum.photos/id/1/200',
        content: 'Great to hear about your new restaurant!',
        createdAt: '2023-05-15T14:35:00Z'
      }
    ],
    shares: 3,
    createdAt: '2023-05-15T14:30:00Z',
    updatedAt: '2023-05-15T14:30:00Z',
    isPinned: true,
    isBusinessPromotion: true,
    businessId: 'business1'
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'Jane Smith',
    userAvatar: 'https://picsum.photos/id/2/200',
    content: 'Looking for recommendations for a good general contractor in Phoenix. Any suggestions?',
    images: [],
    city: 'Phoenix',
    state: 'AZ',
    likes: 8,
    comments: [],
    shares: 0,
    createdAt: '2023-05-16T09:45:00Z',
    updatedAt: '2023-05-16T09:45:00Z',
    isPinned: false,
    isBusinessPromotion: false
  },
  {
    id: '3',
    userId: 'user3',
    userName: 'Robert Johnson',
    userAvatar: 'https://picsum.photos/id/3/200',
    content: 'Our medical practice is now accepting new patients! We specialize in family medicine and pediatrics.',
    images: ['https://picsum.photos/id/870/800/600'],
    city: 'Los Angeles',
    state: 'CA',
    likes: 45,
    comments: [
      {
        userId: 'user3',
        userName: 'Robert Johnson',
        userAvatar: 'https://picsum.photos/id/3/200',
        content: 'Thank you for choosing our clinic!',
        createdAt: '2023-05-14T11:25:00Z'
      }
    ],
    shares: 15,
    createdAt: '2023-05-14T11:20:00Z',
    updatedAt: '2023-05-14T11:20:00Z',
    isPinned: true,
    isBusinessPromotion: true,
    businessId: 'business3'
  },
  {
    id: '4',
    userId: 'user4',
    userName: 'Sarah Williams',
    userAvatar: 'https://picsum.photos/id/4/200',
    content: 'Community cleanup event this weekend at Central Park. Everyone is welcome to join!',
    images: ['https://picsum.photos/id/110/800/600'],
    city: 'New York',
    state: 'NY',
    likes: 67,
    comments: [],
    shares: 31,
    createdAt: '2023-05-13T16:15:00Z',
    updatedAt: '2023-05-13T16:15:00Z',
    isPinned: false,
    isBusinessPromotion: false
  },
  {
    id: '5',
    userId: 'user5',
    userName: 'Michael Brown',
    userAvatar: 'https://picsum.photos/id/5/200',
    content: 'Grand opening of our new real estate office! Special promotions for first-time home buyers.',
    images: ['https://picsum.photos/id/164/800/600', 'https://picsum.photos/id/188/800/600'],
    city: 'Miami',
    state: 'FL',
    likes: 32,
    comments: [],
    shares: 7,
    createdAt: '2023-05-12T13:40:00Z',
    updatedAt: '2023-05-12T13:40:00Z',
    isPinned: true,
    isBusinessPromotion: true,
    businessId: 'business5'
  },
  {
    id: '6',
    userId: 'user6',
    userName: 'Emily Davis',
    userAvatar: 'https://picsum.photos/id/6/200',
    content: 'Anyone know of good scholarship opportunities for college students studying engineering?',
    images: [],
    city: 'Chicago',
    state: 'IL',
    likes: 19,
    comments: [],
    shares: 5,
    createdAt: '2023-05-11T10:25:00Z',
    updatedAt: '2023-05-11T10:25:00Z',
    isPinned: false,
    isBusinessPromotion: false
  },
  {
    id: '7',
    userId: 'user7',
    userName: 'David Wilson',
    userAvatar: 'https://picsum.photos/id/7/200',
    content: 'Our restaurant is offering a special discount for the next two weeks! 20% off on all main courses.',
    images: ['https://picsum.photos/id/225/800/600'],
    city: 'Houston',
    state: 'TX',
    likes: 53,
    comments: [
      {
        userId: 'user7',
        userName: 'David Wilson',
        userAvatar: 'https://picsum.photos/id/7/200',
        content: 'Thank you for your support!',
        createdAt: '2023-05-10T18:55:00Z'
      }
    ],
    shares: 22,
    createdAt: '2023-05-10T18:50:00Z',
    updatedAt: '2023-05-10T18:50:00Z',
    isPinned: true,
    isBusinessPromotion: true,
    businessId: 'business7'
  },
  {
    id: '8',
    userId: 'user8',
    userName: 'Lisa Martinez',
    userAvatar: 'https://picsum.photos/id/8/200',
    content: 'Looking for recommendations for a good dentist in the Seattle area. Any suggestions?',
    images: [],
    city: 'Seattle',
    state: 'WA',
    likes: 12,
    comments: [],
    shares: 2,
    createdAt: '2023-05-09T15:35:00Z',
    updatedAt: '2023-05-09T15:35:00Z',
    isPinned: false,
    isBusinessPromotion: false
  },
  {
    id: '9',
    userId: 'user9',
    userName: 'James Taylor',
    userAvatar: 'https://picsum.photos/id/9/200',
    content: 'Our technology firm is hiring software developers! Great opportunity for recent graduates.',
    images: ['https://picsum.photos/id/48/800/600'],
    city: 'San Francisco',
    state: 'CA',
    likes: 41,
    comments: [],
    shares: 19,
    createdAt: '2023-05-08T12:10:00Z',
    updatedAt: '2023-05-08T12:10:00Z',
    isPinned: true,
    isBusinessPromotion: true,
    businessId: 'business9'
  },
  {
    id: '10',
    userId: 'user10',
    userName: 'Jennifer Anderson',
    userAvatar: 'https://picsum.photos/id/10/200',
    content: 'Community event: Free health checkups this Saturday at the community center. Spread the word!',
    images: ['https://picsum.photos/id/433/800/600'],
    city: 'Denver',
    state: 'CO',
    likes: 76,
    comments: [],
    shares: 45,
    createdAt: '2023-05-07T09:05:00Z',
    updatedAt: '2023-05-07T09:05:00Z',
    isPinned: false,
    isBusinessPromotion: false
  }
];

export const MOCK_BUSINESSES: Business[] = [
  {
    id: 'business1',
    name: 'African Delights Restaurant',
    category: 'Restaurants',
    description: 'Authentic African cuisine in the heart of Birmingham. We offer a variety of dishes from different African countries.',
    address: '123 Main St, Birmingham, AL 35203',
    city: 'Birmingham',
    state: 'AL',
    phone: '(205) 555-1234',
    email: 'info@africandelights.com',
    hoursOfOperation: 'Mon-Sat: 11AM-10PM, Sun: 12PM-8PM',
    socialMedia: {
      facebook: 'africandelights',
      instagram: 'african_delights',
      twitter: 'africandelights'
    },
    rating: 'gold',
    ratingScore: 4.5,
    reviewCount: 127,
    images: ['https://picsum.photos/id/292/800/600', 'https://picsum.photos/id/431/800/600'],
    isPinned: true,
    createdAt: '2023-05-15T14:30:00Z',
    updatedAt: '2023-05-15T14:30:00Z',
    reviews: []
  },
  {
    id: 'business2',
    name: 'Phoenix Construction Services',
    category: 'Construction',
    description: 'Professional construction services for residential and commercial projects in Phoenix and surrounding areas.',
    address: '456 Oak Ave, Phoenix, AZ 85004',
    city: 'Phoenix',
    state: 'AZ',
    phone: '(602) 555-5678',
    email: 'contact@phoenixconstruction.com',
    hoursOfOperation: 'Mon-Fri: 8AM-5PM',
    socialMedia: {
      facebook: 'phoenixconstruction',
      instagram: 'phoenix_construction'
    },
    rating: 'platinum',
    ratingScore: 4.8,
    reviewCount: 215,
    images: ['https://picsum.photos/id/175/800/600', 'https://picsum.photos/id/176/800/600'],
    isPinned: false,
    createdAt: '2023-05-15T14:30:00Z',
    updatedAt: '2023-05-15T14:30:00Z',
    reviews: []
  },
  {
    id: 'business3',
    name: 'Family Health Clinic',
    category: 'Medical Professionals',
    description: 'Comprehensive healthcare services for the whole family. Specializing in family medicine and pediatrics.',
    address: '789 Elm Blvd, Los Angeles, CA 90001',
    city: 'Los Angeles',
    state: 'CA',
    phone: '(213) 555-9012',
    email: 'appointments@familyhealthclinic.com',
    hoursOfOperation: 'Mon-Fri: 9AM-6PM, Sat: 9AM-1PM',
    socialMedia: {
      facebook: 'familyhealthclinic',
      twitter: 'familyhealth'
    },
    rating: 'platinum',
    ratingScore: 4.9,
    reviewCount: 342,
    images: ['https://picsum.photos/id/870/800/600'],
    isPinned: true,
    createdAt: '2023-05-14T11:20:00Z',
    updatedAt: '2023-05-14T11:20:00Z',
    reviews: []
  },
  {
    id: 'business4',
    name: 'New York Real Estate Group',
    category: 'Real Estate',
    description: 'Premier real estate services in New York City. Helping clients buy, sell, and rent properties.',
    address: '101 Broadway, New York, NY 10007',
    city: 'New York',
    state: 'NY',
    phone: '(212) 555-3456',
    email: 'info@nyrealestate.com',
    hoursOfOperation: 'Mon-Fri: 9AM-7PM, Sat-Sun: 10AM-4PM',
    socialMedia: {
      facebook: 'nyrealestate',
      instagram: 'ny_realestate',
      twitter: 'nyrealestate'
    },
    rating: 'gold',
    ratingScore: 4.6,
    reviewCount: 189,
    images: ['https://picsum.photos/id/164/800/600', 'https://picsum.photos/id/188/800/600'],
    isPinned: false,
    createdAt: '2023-05-12T13:40:00Z',
    updatedAt: '2023-05-12T13:40:00Z',
    reviews: []
  },
  {
    id: 'business5',
    name: 'Miami Property Solutions',
    category: 'Real Estate',
    description: 'Full-service real estate agency specializing in Miami properties. Serving clients for over 20 years.',
    address: '202 Palm Dr, Miami, FL 33101',
    city: 'Miami',
    state: 'FL',
    phone: '(305) 555-7890',
    email: 'contact@miamiproperty.com',
    hoursOfOperation: 'Mon-Fri: 8:30AM-6:30PM, Sat: 10AM-3PM',
    socialMedia: {
      facebook: 'miamiproperty',
      instagram: 'miami_property',
      twitter: 'miamiproperty'
    },
    rating: 'platinum',
    ratingScore: 4.8,
    reviewCount: 276,
    images: ['https://picsum.photos/id/164/800/600', 'https://picsum.photos/id/188/800/600'],
    isPinned: true,
    createdAt: '2023-05-12T13:40:00Z',
    updatedAt: '2023-05-12T13:40:00Z',
    reviews: []
  },
  {
    id: 'business6',
    name: 'Chicago Engineering Academy',
    category: 'Education',
    description: 'Leading engineering education institution offering various programs and scholarships for aspiring engineers.',
    address: '303 Michigan Ave, Chicago, IL 60601',
    city: 'Chicago',
    state: 'IL',
    phone: '(312) 555-2345',
    email: 'admissions@chicagoengineering.edu',
    hoursOfOperation: 'Mon-Fri: 8AM-5PM',
    socialMedia: {
      facebook: 'chicagoengineering',
      instagram: 'chicago_engineering',
      twitter: 'chicagoeng'
    },
    rating: 'gold',
    ratingScore: 4.5,
    reviewCount: 152,
    images: ['https://picsum.photos/id/20/800/600'],
    isPinned: false,
    createdAt: '2023-05-11T10:25:00Z',
    updatedAt: '2023-05-11T10:25:00Z',
    reviews: []
  },
  {
    id: 'business7',
    name: 'Texas BBQ House',
    category: 'Restaurants',
    description: 'Authentic Texas BBQ with a fusion of African flavors. Family-owned restaurant serving Houston for 15 years.',
    address: '404 Rodeo Rd, Houston, TX 77001',
    city: 'Houston',
    state: 'TX',
    phone: '(713) 555-6789',
    email: 'info@texasbbqhouse.com',
    hoursOfOperation: 'Tue-Sun: 11AM-9PM',
    socialMedia: {
      facebook: 'texasbbqhouse',
      instagram: 'texas_bbq',
      twitter: 'texasbbq'
    },
    rating: 'gold',
    ratingScore: 4.7,
    reviewCount: 312,
    images: ['https://picsum.photos/id/225/800/600'],
    isPinned: true,
    createdAt: '2023-05-10T18:50:00Z',
    updatedAt: '2023-05-10T18:50:00Z',
    reviews: []
  },
  {
    id: 'business8',
    name: 'Seattle Dental Care',
    category: 'Medical Professionals',
    description: 'Comprehensive dental services for the whole family. Specializing in general, cosmetic, and pediatric dentistry.',
    address: '505 Pine St, Seattle, WA 98101',
    city: 'Seattle',
    state: 'WA',
    phone: '(206) 555-0123',
    email: 'appointments@seattledentalcare.com',
    hoursOfOperation: 'Mon-Thu: 8AM-5PM, Fri: 8AM-2PM',
    socialMedia: {
      facebook: 'seattledentalcare',
      instagram: 'seattle_dental'
    },
    rating: 'silver',
    ratingScore: 4.3,
    reviewCount: 98,
    images: ['https://picsum.photos/id/287/800/600'],
    isPinned: false,
    createdAt: '2023-05-09T15:35:00Z',
    updatedAt: '2023-05-09T15:35:00Z',
    reviews: []
  },
  {
    id: 'business9',
    name: 'Bay Area Tech Solutions',
    category: 'Technology',
    description: 'Innovative technology solutions for businesses and startups. Specializing in software development and IT consulting.',
    address: '606 Market St, San Francisco, CA 94105',
    city: 'San Francisco',
    state: 'CA',
    phone: '(415) 555-4567',
    email: 'info@bayareatechsolutions.com',
    hoursOfOperation: 'Mon-Fri: 9AM-6PM',
    socialMedia: {
      facebook: 'bayareatech',
      instagram: 'bayarea_tech',
      twitter: 'bayareatech'
    },
    rating: 'platinum',
    ratingScore: 4.9,
    reviewCount: 187,
    images: ['https://picsum.photos/id/48/800/600'],
    isPinned: true,
    createdAt: '2023-05-08T12:10:00Z',
    updatedAt: '2023-05-08T12:10:00Z',
    reviews: []
  },
  {
    id: 'business10',
    name: 'Denver Community Health Center',
    category: 'Medical Professionals',
    description: 'Non-profit health center providing affordable healthcare services to the Denver community.',
    address: '707 Colorado Blvd, Denver, CO 80206',
    city: 'Denver',
    state: 'CO',
    phone: '(303) 555-8901',
    email: 'contact@denverhealth.org',
    hoursOfOperation: 'Mon-Fri: 8AM-8PM, Sat: 9AM-3PM',
    socialMedia: {
      facebook: 'denverhealth',
      twitter: 'denver_health'
    },
    rating: 'gold',
    ratingScore: 4.6,
    reviewCount: 231,
    images: ['https://picsum.photos/id/433/800/600'],
    isPinned: false,
    createdAt: '2023-05-07T09:05:00Z',
    updatedAt: '2023-05-07T09:05:00Z',
    reviews: []
  },
  {
    id: 'business11',
    name: 'Sahara Real Estate Group',
    category: 'Real Estate',
    description: 'Premier real estate agency specializing in luxury properties and investment opportunities in Atlanta.',
    address: '789 Peachtree St, Atlanta, GA 30308',
    city: 'Atlanta',
    state: 'GA',
    phone: '(404) 555-7890',
    email: 'info@sahararealestate.com',
    hoursOfOperation: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
    socialMedia: {
      facebook: 'sahararealestate',
      instagram: 'sahara_realestate',
      twitter: 'sahararealestate'
    },
    rating: 'platinum',
    ratingScore: 4.9,
    reviewCount: 178,
    images: ['https://picsum.photos/id/164/800/600', 'https://picsum.photos/id/188/800/600'],
    isPinned: true,
    createdAt: '2023-06-10T10:15:00Z',
    updatedAt: '2023-06-10T10:15:00Z',
    reviews: []
  },
  {
    id: 'business12',
    name: 'Dr. Amara Health Clinic',
    category: 'Medical Professionals',
    description: 'Comprehensive healthcare services provided by experienced African medical professionals.',
    address: '567 Health Blvd, Chicago, IL 60601',
    city: 'Chicago',
    state: 'IL',
    phone: '(312) 555-4321',
    email: 'appointments@dramaraclinic.com',
    hoursOfOperation: 'Mon-Fri: 8AM-7PM, Sat: 9AM-2PM',
    socialMedia: {
      facebook: 'dramaraclinic',
      instagram: 'dr_amara_clinic'
    },
    rating: 'gold',
    ratingScore: 4.7,
    reviewCount: 203,
    images: ['https://picsum.photos/id/287/800/600', 'https://picsum.photos/id/288/800/600'],
    isPinned: false,
    createdAt: '2023-06-15T09:30:00Z',
    updatedAt: '2023-06-15T09:30:00Z',
    reviews: []
  },
  {
    id: 'business13',
    name: 'Nile Academy',
    category: 'Education',
    description: 'Private school offering quality education with an African-centered curriculum for K-12 students.',
    address: '123 Education Lane, Houston, TX 77001',
    city: 'Houston',
    state: 'TX',
    phone: '(713) 555-8765',
    email: 'admissions@nileacademy.edu',
    hoursOfOperation: 'Mon-Fri: 7:30AM-4:30PM',
    socialMedia: {
      facebook: 'nileacademy',
      instagram: 'nile_academy',
      twitter: 'nileacademy'
    },
    rating: 'platinum',
    ratingScore: 4.8,
    reviewCount: 156,
    images: ['https://picsum.photos/id/20/800/600', 'https://picsum.photos/id/21/800/600'],
    isPinned: true,
    createdAt: '2023-07-01T11:45:00Z',
    updatedAt: '2023-07-01T11:45:00Z',
    reviews: []
  },
  {
    id: 'business14',
    name: 'Savanna Boutique',
    category: 'Retail',
    description: 'Upscale boutique featuring African-inspired fashion, accessories, and home decor.',
    address: '456 Fashion Ave, New York, NY 10018',
    city: 'New York',
    state: 'NY',
    phone: '(212) 555-9876',
    email: 'shop@savannaboutique.com',
    hoursOfOperation: 'Mon-Sat: 10AM-8PM, Sun: 12PM-6PM',
    socialMedia: {
      facebook: 'savannaboutique',
      instagram: 'savanna_boutique',
      twitter: 'savannaboutique'
    },
    rating: 'gold',
    ratingScore: 4.6,
    reviewCount: 189,
    images: ['https://picsum.photos/id/96/800/600', 'https://picsum.photos/id/119/800/600'],
    isPinned: false,
    createdAt: '2023-07-15T13:20:00Z',
    updatedAt: '2023-07-15T13:20:00Z',
    reviews: []
  },
  {
    id: 'business15',
    name: 'Serengeti Cleaning Services',
    category: 'Services',
    description: 'Professional cleaning services for residential and commercial properties with eco-friendly products.',
    address: '789 Service Rd, Miami, FL 33101',
    city: 'Miami',
    state: 'FL',
    phone: '(305) 555-2345',
    email: 'info@serengeticleaning.com',
    hoursOfOperation: 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM',
    socialMedia: {
      facebook: 'serengeticleaning',
      instagram: 'serengeti_cleaning'
    },
    rating: 'silver',
    ratingScore: 4.3,
    reviewCount: 112,
    images: ['https://picsum.photos/id/180/800/600', 'https://picsum.photos/id/182/800/600'],
    isPinned: false,
    createdAt: '2023-08-05T10:10:00Z',
    updatedAt: '2023-08-05T10:10:00Z',
    reviews: []
  },
  {
    id: 'business16',
    name: 'Sahel Entertainment Group',
    category: 'Entertainment',
    description: 'Event planning and entertainment services specializing in African cultural events and performances.',
    address: '123 Entertainment Blvd, Los Angeles, CA 90001',
    city: 'Los Angeles',
    state: 'CA',
    phone: '(213) 555-3456',
    email: 'events@sahelentertainment.com',
    hoursOfOperation: 'Mon-Fri: 10AM-7PM',
    socialMedia: {
      facebook: 'sahelentertainment',
      instagram: 'sahel_entertainment',
      twitter: 'sahelent'
    },
    rating: 'platinum',
    ratingScore: 4.9,
    reviewCount: 201,
    images: ['https://picsum.photos/id/243/800/600', 'https://picsum.photos/id/244/800/600'],
    isPinned: true,
    createdAt: '2023-08-20T15:30:00Z',
    updatedAt: '2023-08-20T15:30:00Z',
    reviews: []
  },
  {
    id: 'business17',
    name: 'Timbuktu Tech Solutions',
    category: 'Technology',
    description: 'Innovative technology solutions for businesses, including web development, app development, and IT consulting.',
    address: '456 Tech Park, Seattle, WA 98101',
    city: 'Seattle',
    state: 'WA',
    phone: '(206) 555-4567',
    email: 'info@timbuktutech.com',
    hoursOfOperation: 'Mon-Fri: 9AM-6PM',
    socialMedia: {
      facebook: 'timbuktutech',
      instagram: 'timbuktu_tech',
      twitter: 'timbuktutech'
    },
    rating: 'gold',
    ratingScore: 4.7,
    reviewCount: 167,
    images: ['https://picsum.photos/id/48/800/600', 'https://picsum.photos/id/60/800/600'],
    isPinned: false,
    createdAt: '2023-09-10T09:45:00Z',
    updatedAt: '2023-09-10T09:45:00Z',
    reviews: []
  },
  {
    id: 'business18',
    name: 'Nairobi Transportation Services',
    category: 'Transportation',
    description: 'Reliable transportation services including airport transfers, corporate transportation, and special events.',
    address: '789 Transit Way, Dallas, TX 75201',
    city: 'Dallas',
    state: 'TX',
    phone: '(214) 555-5678',
    email: 'bookings@nairobits.com',
    hoursOfOperation: '24/7',
    socialMedia: {
      facebook: 'nairobits',
      instagram: 'nairobi_ts'
    },
    rating: 'silver',
    ratingScore: 4.4,
    reviewCount: 143,
    images: ['https://picsum.photos/id/133/800/600', 'https://picsum.photos/id/136/800/600'],
    isPinned: false,
    createdAt: '2023-09-25T12:15:00Z',
    updatedAt: '2023-09-25T12:15:00Z',
    reviews: []
  },
  {
    id: 'business19',
    name: 'Zulu Beauty Salon',
    category: 'Beauty',
    description: 'Full-service beauty salon specializing in African hair styling, braiding, and natural hair care.',
    address: '123 Beauty Lane, Atlanta, GA 30309',
    city: 'Atlanta',
    state: 'GA',
    phone: '(404) 555-6789',
    email: 'appointments@zulubeauty.com',
    hoursOfOperation: 'Tue-Sat: 9AM-7PM, Sun: 11AM-5PM',
    socialMedia: {
      facebook: 'zulubeauty',
      instagram: 'zulu_beauty',
      twitter: 'zulubeauty'
    },
    rating: 'gold',
    ratingScore: 4.6,
    reviewCount: 198,
    images: ['https://picsum.photos/id/64/800/600', 'https://picsum.photos/id/65/800/600'],
    isPinned: true,
    createdAt: '2023-10-05T11:30:00Z',
    updatedAt: '2023-10-05T11:30:00Z',
    reviews: []
  },
  {
    id: 'business20',
    name: 'Sahara Marketplace',
    category: 'For Sale',
    description: 'Online marketplace for African goods, crafts, and products from various African countries.',
    address: 'Online Only',
    city: 'San Francisco',
    state: 'CA',
    phone: '(415) 555-7890',
    email: 'sales@saharamarketplace.com',
    hoursOfOperation: 'Online 24/7, Customer Service: Mon-Fri 9AM-5PM',
    socialMedia: {
      facebook: 'saharamarketplace',
      instagram: 'sahara_marketplace',
      twitter: 'saharamarket'
    },
    rating: 'platinum',
    ratingScore: 4.8,
    reviewCount: 215,
    images: ['https://picsum.photos/id/26/800/600', 'https://picsum.photos/id/27/800/600'],
    isPinned: false,
    createdAt: '2023-10-20T14:45:00Z',
    updatedAt: '2023-10-20T14:45:00Z',
    reviews: []
  }
];

export const NEARBY_ADDRESSES = [
  '2761 FM 78 Unit C, 1 mi away',
  '2765 FM 78 Unit A, 1.2 mi away',
  '2770 FM 78, 1.3 mi away',
  '2780 FM 78 Suite 101, 1.5 mi away',
  '2790 FM 78, 1.7 mi away',
  '2800 FM 78 Unit D, 1.9 mi away',
  '2810 FM 78, 2.1 mi away',
  '2820 FM 78 Suite 200, 2.3 mi away',
  '2830 FM 78, 2.5 mi away',
  '2840 FM 78 Unit B, 2.7 mi away'
];