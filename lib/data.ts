import type { Service, Project, Review, PricingRow, DiagnosticProblem, FAQItem } from './types';

export const PHONE = '0115 000 0000';
export const PHONE_TEL = 'tel:01150000000';
export const EMAIL = 'hello@northcrestroofing.co.uk';
export const WHATSAPP = 'https://wa.me/441150000000';
export const ADDRESS = '12 Example Street, Nottingham NG1 1AA';

export const services: Service[] = [
  {
    id: 'repairs',
    title: 'Roof Repairs',
    fromPrice: 'From £85',
    timescale: 'Same day to 3 days',
    description: 'Tile replacement, ridge repointing, felt repair and leak tracing.',
    includes: [
      'Full roof inspection and leak trace',
      'Tile and slate replacement (Marley and Russell stock)',
      'Ridge and hip repointing with weatherproof mortar',
      'Felt and underlay repair or patch',
    ],
    icon: 'repair',
  },
  {
    id: 'reroof',
    title: 'Re-roofs',
    fromPrice: 'From £3,500',
    timescale: '3 to 7 days',
    description: 'Full strip and replacement with breathable membrane, new battens and a choice of tiles or slate.',
    includes: [
      'Complete strip of existing roof covering',
      'Breathable roofing membrane fitted',
      'New treated timber battens installed',
      'Marley concrete tiles, clay or Welsh slate to choice',
      'Dry-fix ridge system, 10 year workmanship guarantee',
    ],
    icon: 'reroof',
  },
  {
    id: 'flat',
    title: 'Flat Roofs (EPDM)',
    fromPrice: 'From £1,200',
    timescale: '1 to 3 days',
    description: 'Old felt removed and replaced with Firestone EPDM rubber. 20 year material warranty.',
    includes: [
      'Full removal of existing covering and decking if required',
      'Firestone EPDM bonded membrane installed',
      'New aluminium edge trim and outlets',
      'Drainage fall corrected where needed',
      '20 year Firestone manufacturer material warranty',
    ],
    icon: 'flat',
  },
  {
    id: 'chimney',
    title: 'Chimney Repairs',
    fromPrice: 'From £120',
    timescale: 'Half day to 2 days',
    description: 'Repointing, lead flashing, pot replacement and chimney cowls.',
    includes: [
      'Full chimney inspection from scaffold or ladder',
      'Joint repointing with weather-resistant lime mortar',
      'Code 4 lead step and back flashing replacement',
      'Chimney pot re-bedding or replacement',
      'Cowl fitting to prevent downdraught and bird nesting',
    ],
    icon: 'chimney',
  },
  {
    id: 'gutter',
    title: 'Guttering and Fascias',
    fromPrice: 'From £65',
    timescale: 'Half day to 2 days',
    description: 'Clearing, realignment, joint sealing and full uPVC replacement.',
    includes: [
      'Full gutter clear of debris and moss',
      'Realignment and re-screwing of sagging sections',
      'Joint resealing and stop-end replacement',
      'Downpipe unblocking and rodding',
      'Full uPVC replacement in white, black or anthracite',
    ],
    icon: 'gutter',
  },
  {
    id: 'emergency',
    title: 'Storm and Emergency',
    fromPrice: '£150 callout',
    timescale: 'Same day',
    description: 'Emergency attendance, temporary weatherproofing and insurance documentation.',
    includes: [
      'Same day emergency attendance where possible',
      'Temporary weatherproofing with heavy-duty tarpaulin or repair',
      'Full photographic record of all damage',
      'Written damage report for insurance claims',
      'Permanent repair plan and written quote provided on site',
    ],
    icon: 'emergency',
  },
];

export const projects: Project[] = [
  {
    id: 'west-bridgford-storm',
    title: 'Storm damage repair',
    location: 'West Bridgford',
    type: 'Emergency Repair',
    typeBadge: 'emergency',
    description: '26 dislodged tiles replaced and underfelt repaired in a same day emergency visit.',
    detail: '26 tiles replaced, same day visit',
    beforeImage: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?w=900&q=80&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop',
    beforeAlt: 'Roof with storm damage and missing tiles',
    afterAlt: 'Repaired roof with new matching clay tiles',
  },
  {
    id: 'beeston-flat',
    title: 'Flat roof renewal',
    location: 'Beeston',
    type: 'Flat Roof EPDM',
    typeBadge: 'flat',
    description: 'Ageing felt replaced with EPDM rubber. New edge trims and drainage fall corrected.',
    detail: 'Full EPDM replacement, 20yr warranty',
    beforeImage: 'https://images.unsplash.com/photo-1545259742-35ea3e8d3f27?w=900&q=80&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=80&fit=crop',
    beforeAlt: 'Old flat roof with worn felt and ponding water',
    afterAlt: 'New EPDM flat roof with clean edge trims and correct drainage fall',
  },
  {
    id: 'arnold-reroof',
    title: 'Full re-roof',
    location: 'Arnold',
    type: 'Full Re-roof',
    typeBadge: 'reroof',
    description: 'Breathable membrane, new battens and tiles with dry ridge system. Completed in 4 days.',
    detail: 'Completed in 4 days, 10yr guarantee',
    beforeImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80&fit=crop',
    beforeAlt: 'House with ageing worn roof prior to full replacement',
    afterAlt: 'House with new tile re-roof and dry ridge system completed',
  },
  {
    id: 'hucknall-chimney',
    title: 'Lead flashing and chimney',
    location: 'Hucknall',
    type: 'Chimney Repair',
    typeBadge: 'chimney',
    description: 'Persistent loft damp resolved by repointing chimney joints and replacing all step flashing.',
    detail: 'Code 4 lead flashing, loft dry within days',
    beforeImage: 'https://images.unsplash.com/photo-1574348893564-c74e3cd3bdb5?w=900&q=80&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?w=900&q=80&fit=crop',
    beforeAlt: 'Chimney with crumbling mortar and deteriorated lead flashing',
    afterAlt: 'Repointed chimney with new Code 4 lead step flashing',
  },
];

export const reviews: Review[] = [
  {
    id: 'featured',
    text: 'We called in the morning for a leak and had someone out the same day. He was on the roof within an hour, found the problem, texted us a photo, and had it sealed before lunch. Clear advice and no pressure at any point.',
    name: 'Mark T.',
    area: 'Beeston',
    rating: 5,
    projectType: 'Emergency Repair',
    badge: 'emergency',
    featured: true,
  },
  {
    id: 'r2',
    text: 'Quoted on a Monday, scaffolding up Wednesday, done by Friday. The team was tidy, polite, and left the garden cleaner than they found it. The written guarantee gave us real peace of mind.',
    name: 'Sarah M.',
    area: 'Arnold',
    rating: 5,
    projectType: 'Full Re-roof',
    badge: 'reroof',
  },
  {
    id: 'r3',
    text: 'Had three quotes for the flat roof garage. Northcrest were not the cheapest but they were the only ones who explained what EPDM actually is and why it lasts longer. Four months on and not a drop of water.',
    name: 'James R.',
    area: 'West Bridgford',
    rating: 5,
    projectType: 'Flat Roof EPDM',
    badge: 'flat',
  },
  {
    id: 'r4',
    text: 'The chimney had been causing a damp patch on the breast wall for two winters. Fixed in half a day. Wish I had called sooner rather than painting over it twice.',
    name: 'Patricia L.',
    area: 'Hucknall',
    rating: 5,
    projectType: 'Chimney Repair',
    badge: 'chimney',
  },
  {
    id: 'r5',
    text: 'Gutters were overflowing at the back of the house every time it rained. Cleared, realigned, and two sections replaced. Job done in under two hours and fairly priced.',
    name: 'David K.',
    area: 'Mapperley',
    rating: 5,
    projectType: 'Guttering',
    badge: 'gutter',
  },
  {
    id: 'r6',
    text: 'Storm took out several tiles on a Saturday night. Rang the emergency number at 7am Sunday and they were there by midday. Temporary fix held perfectly until the proper repair three days later.',
    name: 'Helen C.',
    area: 'Carlton',
    rating: 5,
    projectType: 'Emergency Repair',
    badge: 'emergency',
  },
];

export const pricing: PricingRow[] = [
  { job: 'Emergency callout and temporary fix', from: 'From £150' },
  { job: 'Tile replacement (1 to 5 tiles)', from: 'From £85' },
  { job: 'Ridge tile re-bedding (per metre)', from: 'From £55' },
  { job: 'Valley gutter repair', from: 'From £180' },
  { job: 'Flat roof patch repair', from: 'From £350' },
  { job: 'Full flat roof EPDM (garage)', from: 'From £1,200' },
  { job: 'Full flat roof EPDM (extension)', from: 'From £2,000' },
  { job: 'Chimney repointing', from: 'From £120' },
  { job: 'Lead flashing replacement', from: 'From £250' },
  { job: 'Guttering clearing', from: 'From £65' },
  { job: 'Full guttering replacement (semi)', from: 'From £450' },
  { job: 'Full re-roof (semi-detached)', from: 'From £3,500' },
  { job: 'Full re-roof (detached)', from: 'From £5,500' },
];

export const coverageAreas = [
  'Nottingham City',
  'West Bridgford',
  'Beeston',
  'Arnold',
  'Carlton',
  'Hucknall',
  'Mapperley',
  'Sherwood',
  'Wollaton',
  'Long Eaton',
  'Ruddington',
  'Gedling',
  'Radcliffe on Trent',
  'Stapleford',
];

export const faqs: FAQItem[] = [
  {
    question: 'How quickly can you respond to a leak?',
    answer: 'For active leaks and storm damage, we target same day attendance. If we cannot get there immediately, we will talk you through temporary measures on the phone to contain the damage until we arrive. Most emergency calls in the Nottingham area are attended within 2 to 4 hours.',
  },
  {
    question: 'Do you provide free quotes?',
    answer: 'Yes. Every inspection and quote is free with no obligation. For smaller jobs we can often quote over the phone from a photo. For larger work, we visit the property, get on the roof, and give you a written quote with a full breakdown.',
  },
  {
    question: 'Are you insured?',
    answer: 'Yes. We carry public liability insurance for all domestic roofing work. We are happy to provide proof of insurance before any work starts if you or your mortgage lender requires it.',
  },
  {
    question: 'Do you provide guarantees?',
    answer: 'All workmanship carries a written guarantee. The duration depends on the job: repairs typically carry a 12 month guarantee, re-roofs up to 10 years on workmanship, and EPDM flat roofing comes with a 20 year material warranty from the manufacturer.',
  },
  {
    question: 'What materials do you use?',
    answer: 'We use Marley and Russell concrete and clay tiles, Welsh and Spanish natural slate, Firestone EPDM for flat roofs, and Code 4 lead for all flashing work. We will always recommend the most suitable material for your roof type, budget, and local planning requirements.',
  },
  {
    question: 'How do I know if I need repair or replacement?',
    answer: 'We inspect first and explain both options honestly. If a repair is practical and will last, that is always our first recommendation. We will never recommend a full re-roof when patching the problem is the smarter option. If replacement is genuinely needed, we will show you why.',
  },
  {
    question: 'Do you help with insurance claims?',
    answer: 'Yes. We photograph all storm damage, provide detailed written reports, and give your insurer the documentation they need. Many of our emergency clients claim successfully with our supporting evidence.',
  },
  {
    question: 'What happens if it rains during work?',
    answer: 'We weatherproof at the end of every working day. Your roof is never left exposed overnight. For full re-roofs, we work in sections so the majority of your roof is always protected, even mid-project.',
  },
];

export const diagnosticProblems: DiagnosticProblem[] = [
  {
    id: 'leak',
    label: 'Leak or water ingress',
    icon: 'leak',
    followUp: {
      question: 'Where is the water?',
      options: ['Ceiling stain or drip', 'Loft is wet', 'Around a window or skylight', 'Near the chimney', 'Not sure'],
    },
    result: {
      urgency: 'red',
      urgencyText: 'Act now. Contain the water and call us.',
      doNow: 'Place a bucket under the drip. If water is near electrics, turn off the mains at the consumer unit and call immediately.',
      whatWeDo: 'Emergency leak trace, temporary weatherproofing same day, then a permanent repair scheduled within the week.',
      typicalCost: 'Emergency repair from £150. Permanent fix depends on the source.',
    },
  },
  {
    id: 'tiles',
    label: 'Missing or slipped tiles',
    icon: 'tile',
    followUp: {
      question: 'How many tiles are affected?',
      options: ['1 to 3 tiles', 'A larger patch', 'Ridge tiles along the top', 'Not sure, I can see damage from the ground'],
    },
    result: {
      urgency: 'orange',
      urgencyText: 'Book soon. Exposed felt or timber lets water in during the next rainfall.',
      doNow: 'Do not attempt to go on the roof. If tiles are on the ground, move them safely and note the area.',
      whatWeDo: 'Ladder inspection, match and replace tiles, repoint or re-bed if needed.',
      typicalCost: 'From £85 for 1 to 3 tile replacements. Ridge tiles from £250.',
    },
  },
  {
    id: 'flat',
    label: 'Flat roof problem',
    icon: 'flat',
    followUp: {
      question: 'What are you seeing?',
      options: ['Visible cracks or splits', 'Ponding water after rain', 'Blistering or bubbling', 'Leak into the room below'],
    },
    result: {
      urgency: 'orange',
      urgencyText: 'Get it assessed soon. Small flat roof issues escalate quickly.',
      doNow: 'Do not walk on the roof. If there is a leak, contain it with towels or a bowl and move valuables.',
      whatWeDo: 'Full flat roof inspection, patch repair or EPDM renewal depending on extent of damage.',
      typicalCost: 'Patch repairs from £350. Full EPDM flat roof from £1,200 for a garage.',
    },
  },
  {
    id: 'chimney',
    label: 'Chimney issue',
    icon: 'chimney',
    followUp: {
      question: 'What is the problem?',
      options: ['Damp patch on the chimney breast wall', 'Crumbling mortar or loose bricks', 'Lead flashing lifted or missing', 'Chimney pot loose or damaged'],
    },
    result: {
      urgency: 'orange',
      urgencyText: 'Book an inspection. Chimney problems worsen through winter.',
      doNow: 'If the pot is visibly loose and could fall, keep clear of the area below and call us.',
      whatWeDo: 'Chimney inspection from ladder or scaffold, repointing, flashing replacement or pot re-bedding as needed.',
      typicalCost: 'Repointing from £120. Lead flashing replacement from £250.',
    },
  },
  {
    id: 'gutter',
    label: 'Guttering or drainage',
    icon: 'gutter',
    followUp: {
      question: 'What is happening?',
      options: ['Overflowing in rain', 'Sagging or pulling away', 'Leaking at joints', 'Blocked or slow draining', 'Fascia board damaged'],
    },
    result: {
      urgency: 'green',
      urgencyText: 'Not urgent, but worth sorting before it causes wall damp.',
      doNow: 'Clear any visible debris from the gutter opening if you can safely reach it from a ladder.',
      whatWeDo: 'Gutter inspection, clear and flush, realignment, joint resealing or full replacement where needed.',
      typicalCost: 'Clearing from £65. Full replacement (semi-detached) from £450.',
    },
  },
  {
    id: 'storm',
    label: 'Storm damage',
    icon: 'storm',
    result: {
      urgency: 'red',
      urgencyText: 'This is urgent. Call now.',
      doNow: 'Stay indoors. Do not attempt to cover damage yourself. If water is entering the property, isolate electrics in the affected area.',
      whatWeDo: 'Emergency attendance, temporary weatherproofing, insurance documentation and photos, then permanent repair.',
      typicalCost: 'Emergency callout from £150. We document everything for your insurance claim.',
    },
  },
];
