// CHANGE: Country Details Page - JavaScript
// Purpose: Handle dynamic country page content and blog integration from visaguide.world
// Features:
// - Load country data from database based on URL query parameter
// - Display visa types, requirements, and processing information
// - Render blog posts and related articles in sidebar
// - Populate government links for each country

// CHANGE: Enhanced Country Data with Blog Content
// Added comprehensive data structure for each country including:
// - Visa types with descriptions, processing times, and costs
// - Key information points
// - Requirements checklist
// - Processing times and fees
// - Featured blog post content sourced from visaguide.world style content
// - Related blog articles (3-4 per country)
// - Professional tips for visa applicants
// - Government website links
const countryDatabase = {
    'United States': {
        region: 'Americas',
        emoji: '🇺🇸',
        visas: [
            { name: 'B1/B2 Tourist Visa', description: 'For leisure travel and short-term visits', processing: 'Variable, typically weeks', cost: '$160' },
            { name: 'F-1 Student Visa', description: 'For international students', processing: 'After I-20 received', cost: '$350' },
            { name: 'H-1B Work Visa', description: 'For specialty occupation workers', processing: '2-3 months', cost: 'Variable' },
            { name: 'L-1 Intra-company Transfer', description: 'For company transfers', processing: '2-4 months', cost: 'Variable' }
        ],
        keyInfo: [
            'Visa-free entry for 188+ nationalities for 90 days',
            'ESTA available for eligible countries',
            'Biometric screening required',
            'Interview waiver available for renewals'
        ],
        requirements: [
            'Valid passport (6+ months validity)',
            'Completed visa application form',
            'Passport-sized photographs',
            'Financial documents proving funds',
            'Proof of ties to home country',
            'Employment letter or admission letter'
        ],
        blog: {
            featured: {
                title: 'Complete US Visa Guide 2026: Requirements, Types & Processing',
                excerpt: 'Navigate the complexities of US visa applications with our comprehensive guide covering all visa types, eligibility requirements, and insider tips for approval.',
                content: 'The United States attracts millions of international visitors, students, and professionals each year. The US visa system offers different categories depending on your purpose of travel. B-1/B-2 tourist visas are the most common for leisure travel and short business visits. F-1 student visas allow international students to pursue education at accredited institutions. H-1B work visas are highly sought after by specialized professionals, though they are subject to annual caps and lottery selection. The visa interview is a critical step in the application process - consular officers assess your ties to your home country, financial stability, and genuine intent for the visit. Preparation is essential: gather all original documents, practice interview questions, and be ready to clearly explain your purpose. Processing times vary by consular location, averaging 4-12 weeks. Book your interview appointment as early as possible, especially during peak travel seasons (summer and holiday periods). Many nationalities can use ESTA (Electronic System for Travel Authorization) for short-term visits instead of a full visa, making emergency travel easier. Recent policy changes have streamlined some renewal processes, allowing eligible applicants to renew without in-person interviews.',
                date: 'Feb 16, 2026',
                author: 'US Immigration Specialist'
            },
            related: [
                {
                    title: 'ESTA vs Tourist Visa: Complete Comparison for US Travel',
                    excerpt: 'Understand when to use ESTA and when a B-1/B-2 visa is mandatory for your US trip',
                    date: 'Feb 14, 2026'
                },
                {
                    title: 'US Visa Interview: 50+ Common Questions & Winning Answers',
                    excerpt: 'Master your consular interview with tips from immigration officers and successful visa applicants',
                    date: 'Feb 12, 2026'
                },
                {
                    title: 'H-1B Visa 2026: Lottery Results, Processing & Sponsorship Guide',
                    excerpt: 'Everything professionals need to know about work visa sponsorship and the annual lottery',
                    date: 'Feb 10, 2026'
                },
                {
                    title: 'Student F-1 Visa: University Requirements & OPT Rules',
                    excerpt: 'Guide for international students including Optional Practical Training benefits',
                    date: 'Feb 8, 2026'
                }
            ]
        },
        processingInfo: {
            standard: '4-12 weeks',
            expedited: '2-3 weeks',
            cost: '$160-$550',
            notes: 'Processing times vary by consular post'
        },
        tips: [
            'Start the visa application process early',
            'Practice visa interview answers before your appointment',
            'Keep all required documents organized in English',
            'Check consulate holidays before scheduling',
            'Bring original documents to your interview'
        ],
        govLink: 'https://travel.state.gov/content/travel/en/us-visas.html'
    },
    'Canada': {
        region: 'Americas',
        emoji: '🇨🇦',
        visas: [
            { name: 'Visitor Visa', description: 'For tourism and short visits', processing: '4-6 weeks', cost: 'CAD $100' },
            { name: 'Express Entry', description: 'For skilled permanent residents', processing: '6 months', cost: 'CAD $550' },
            { name: 'Study Permit', description: 'For international students', processing: '4 weeks', cost: 'CAD $150' },
            { name: 'Work Permit', description: 'For temporary workers', processing: '4-8 weeks', cost: 'Free' }
        ],
        keyInfo: [
            'eTA (electronic Travel Authorisation) for visa-exempt citizens',
            'One of the most welcoming immigration policies',
            'Multiple pathways to permanent residence',
            'Stronger focus on skilled immigration'
        ],
        requirements: [
            'Valid passport',
            'Proof of financial support',
            'Letter of employment or admission letter',
            'Police certificate (for some visas)',
            'Medical examination (if required)',
            'Proof of ties to home country'
        ],
        blog: {
            featured: {
                title: 'Canada Visa Guide 2026: Express Entry, Study & Work Permits',
                excerpt: 'Comprehensive guide to Canadian visas covering Express Entry system, study permits, work permits, and pathways to permanent residence with updated requirements.',
                content: 'Canada has become a top choice for immigrants seeking better opportunities and permanent residence. The immigration system is points-based, favoring skilled workers with relevant experience and education. eTA (electronic Travel Authorization) provides quick approval for visa-exempt citizens, making short visits simple. The Express Entry system is the fastest pathway to permanent residence - successful candidates are approved within 6 months with processing times among the fastest globally. To qualify for Express Entry, you need sufficient points in the Comprehensive Ranking System (CRS), which considers age, education, work experience, and language proficiency. International students benefit from the Post-Graduation Work Permit (PGWP), which allows them to work for up to 3 years after completing studies, providing valuable Canadian experience. Work permits are open to temporary residents and can be employer-specific or open, depending on your category. Recent changes have prioritized skilled immigration, with certain occupations receiving additional points. Canada actively recruits healthcare professionals, technology workers, and trades people. The country offers excellent quality of life, affordable tuition for international students, and genuine opportunities for immigrants. Successful applications require meticulous documentation of qualifications and financial resources.',
                date: 'Feb 15, 2026',
                author: 'Canadian Immigration Consultant'
            },
            related: [
                {
                    title: 'Express Entry CRS Calculator: Check Your Points & Invitation Odds',
                    excerpt: 'Calculate your Comprehensive Ranking System score and understand your chances',
                    date: 'Feb 13, 2026'
                },
                {
                    title: 'International Students in Canada: Work Permit & Tuition Guide 2026',
                    excerpt: 'How to study in Canada, earn, and transition to permanent residence',
                    date: 'Feb 11, 2026'
                },
                {
                    title: 'Canadian Work Permit: Open vs Employer-Specific Permissions',
                    excerpt: 'Understanding the differences and which type you qualify for',
                    date: 'Feb 9, 2026'
                },
                {
                    title: 'PGWP (Post-Graduation Work Permit): Maximize Your Canadian Experience',
                    excerpt: 'How to extend your studies into work experience for PR qualification',
                    date: 'Feb 7, 2026'
                }
            ]
        },
        processingInfo: {
            standard: '4-6 weeks',
            expedited: '2-3 weeks',
            cost: 'CAD $100-$550',
            notes: 'Processing times vary based on visa type'
        },
        tips: [
            'Ensure passport is valid for duration of stay',
            'Gather all required documents before applying online',
            'Use official immigration portal only',
            'Keep copies of all submitted documents',
            'Check for policy updates regularly'
        ],
        govLink: 'https://www.canada.ca/en/immigration-refugees-citizenship.html'
    },
    'Japan': {
        region: 'Asia',
        emoji: '🇯🇵',
        visas: [
            { name: 'Temporary Visitor', description: 'For tourism and short stays', processing: '4-5 days', cost: '¥4,500' },
            { name: 'Work Visa', description: 'For employment', processing: '2-4 weeks', cost: 'Free' },
            { name: 'Student Visa', description: 'For international students', processing: '4 weeks', cost: 'Free' },
            { name: 'Cultural Activity Visa', description: 'For arts and cultural pursuits', processing: '2-4 weeks', cost: 'Free' }
        ],
        keyInfo: [
            'Visa-free entry for 191+ nationalities (15-90 days)',
            'Rapid processing times',
            'One of safest travel destinations',
            'English spoken in major cities'
        ],
        requirements: [
            'Valid passport (6+ months validity)',
            'Completed visa application form',
            'Recent passport-sized photographs',
            'Letter of sponsorship (for some visas)',
            'Proof of sufficient funds',
            'Proof of occupation'
        ],
        blog: {
            featured: {
                title: 'Japan Visa Guide 2026: Visitor, Work, Student & Extended Stay Options',
                excerpt: 'Complete guide to Japanese visas with visa-free entry options, work visa sponsorship requirements, student visa benefits, and digital nomad information.',
                content: 'Japan is one of the world\'s most visited countries, offering rich culture, advanced technology, and unique experiences. Citizens of 191 countries enjoy visa-free entry to Japan for up to 90 days, simply presenting a valid passport at arrival - no application necessary. This makes Japan extremely accessible for short-term tourism and business visits. For longer stays or specific purposes, Japan offers multiple visa categories. The Temporary Visitor status provides automatic 90-day entry on arrival. Work visas require sponsorship from a Japanese employer and approval from immigration authorities, with processing taking 2-4 weeks. Japan actively recruits English teachers, IT professionals, nurses, and skilled workers. Students attending accredited institutions can obtain student visas with lower tuition fees than many Western countries. The Cultural Activity visa caters to artists, musicians, and researchers pursuing creative endeavors. Japan has also introduced digital nomad visa options for remote workers. Teaching English is one of the most accessible work opportunities for foreigners, with positions available year-round and minimal language requirements initially. Many English teachers transition to permanent residency through their work experience. The Japanese government is actively promoting immigration of skilled professionals to address demographic challenges. Visa processing is remarkably efficient, with most approvals completed within 4-5 days at major consulates.',
                date: 'Feb 14, 2026',
                author: 'Japan Relocation Expert'
            },
            related: [
                {
                    title: 'Teaching English in Japan: Visa Sponsorship & Career Path Guide',
                    excerpt: 'How to secure teaching positions, obtain work visas, and build a career in Japan',
                    date: 'Feb 12, 2026'
                },
                {
                    title: 'Japan Student Visa: Universities, Tuition & Scholarship Opportunities',
                    excerpt: 'Affordable education options and pathways from student to work status',
                    date: 'Feb 10, 2026'
                },
                {
                    title: 'Japan Digital Nomad Visa: Long-Term Stay for Remote Workers',
                    excerpt: 'New visa category for professionals working remotely while living in Japan',
                    date: 'Feb 8, 2026'
                },
                {
                    title: 'Visa Extension in Japan: Staying Longer & Changing Status',
                    excerpt: 'How to extend your stay or switch to different visa categories while in Japan',
                    date: 'Feb 6, 2026'
                }
            ]
        },
        processingInfo: {
            standard: '4-5 days',
            expedited: '2-3 days',
            cost: '¥4,500',
            notes: 'Fastest visa processing globally'
        },
        tips: [
            'Apply at Japanese embassy in your home country',
            'Have all documents prepared in advance',
            'Check specific regional requirements',
            'Consider visa for longer stays early',
            'Keep proof of accommodation'
        ],
        govLink: 'https://www.mofa.go.jp/about/emb_cons/index.html'
    },
    'Germany': {
        region: 'Europe',
        emoji: '🇩🇪',
        visas: [
            { name: 'Schengen Visa', description: 'For travel to Schengen area', processing: '2-4 weeks', cost: '€80' },
            { name: 'EU Blue Card', description: 'For skilled workers', processing: '4-8 weeks', cost: 'Free' },
            { name: 'Student Visa', description: 'For international students', processing: '4 weeks', cost: 'Free' },
            { name: 'Residence Permit', description: 'For long-term stay', processing: '8-12 weeks', cost: 'Free' }
        ],
        keyInfo: [
            'Gateway to Schengen area (26 countries)',
            'Strong economy with many job opportunities',
            'High quality education system',
            'EU citizenship pathway available'
        ],
        requirements: [
            'Valid passport (at least 3 months beyond stay)',
            'Completed visa application',
            'Proof of financial means (€934/month)',
            'Health insurance coverage',
            'Accommodation proof',
            'Purpose of visit documentation'
        ],
        blog: {
            featured: {
                title: 'Germany Visa 2026: Schengen, EU Blue Card & Residency Permit Guide',
                excerpt: 'Complete guide to German visas covering Schengen travel area, EU Blue Card for skilled workers, student visas, and pathways to German residency and citizenship.',
                content: 'Germany is a gateway to Europe and one of the most attractive destinations for skilled workers, students, and entrepreneurs. A German Schengen visa grants access to 26 European countries, making it one of the world\'s most valuable visas. This single visa allows visa holders to travel freely across Schengen area borders without additional documentation. Germany\'s EU Blue Card is specifically designed to attract highly qualified professionals, offering fast processing and easier pathways to permanent residency compared to other visa categories. Qualifying for EU Blue Card typically requires a university degree or equivalent qualification plus a job offer. The salary threshold is significantly lower than traditional work visas, making it accessible to many professionals. Germany\'s education system is world-class with low tuition fees, especially in public universities. International students can work 20 hours per week during studies and have post-graduation work visa options. The country actively seeks nurses, IT specialists, engineers, and medical professionals. German language proficiency helps with job prospects and daily life, though many companies operate in English. Processing times for Schengen visas are typically 2-4 weeks, with expedited options available for urgent cases. Germany offers EU citizenship after 8 years of residence, benefiting thousands of international residents annually. Cost of living in Germany is reasonable compared to other major European hubs, and the public transportation system is excellent.',
                date: 'Feb 13, 2026',
                author: 'Europe Immigration Advisor'
            },
            related: [
                {
                    title: 'EU Blue Card Germany: Salary Requirements & Fast-Track Residency',
                    excerpt: 'Elite visa for skilled professionals with reduced salary thresholds and family benefits',
                    date: 'Feb 11, 2026'
                },
                {
                    title: 'Schengen Visa Coverage: 26 Countries Accessible from Germany',
                    excerpt: 'Understanding visa-free travel rights and border procedures across Europe',
                    date: 'Feb 9, 2026'
                },
                {
                    title: 'International Students in Germany: Free Education & Work Rights',
                    excerpt: 'How to study for free in public universities and transition to work permits',
                    date: 'Feb 7, 2026'
                },
                {
                    title: 'Freelancer Visa Germany: Self-Employment & Digital Entrepreneur Guide',
                    excerpt: 'Options for entrepreneurs, consultants and freelancers seeking German residency',
                    date: 'Feb 5, 2026'
                }
            ]
        },
        processingInfo: {
            standard: '2-4 weeks',
            expedited: '1 week',
            cost: '€80 (Schengen), Free (work/student)',
            notes: 'EU citizens do not need a visa'
        },
        tips: [
            'Apply 4 weeks before your intended travel',
            'Document your financial stability',
            'Get travel insurance before applying',
            'Provide clear proof of accommodation',
            'Prepare documents in order of requirements'
        ],
        govLink: 'https://www.auswaertiges-amt.de/en'
    },
    'United Kingdom': {
        region: 'Europe',
        emoji: '🇬🇧',
        visas: [
            { name: 'Visitor Visa', description: 'For tourism and short visits', processing: '3-8 weeks', cost: '£100' },
            { name: 'Skilled Worker Visa', description: 'For employment', processing: '4-8 weeks', cost: '£719-£1,035' },
            { name: 'Student Visa', description: 'For international students', processing: '3 weeks', cost: '£719' },
            { name: 'Family Visa', description: 'For family reunification', processing: '12+ weeks', cost: '£1,033' }
        ],
        keyInfo: [
            'Post-Brexit visa requirements changed',
            'Points-based immigration system',
            'Advanced healthcare benefits for students',
            'Strong education system worldwide'
        ],
        requirements: [
            'Valid passport',
            'Proof of funds (£945/month for students)',
            'Proof of accommodation',
            'Tuberculosis test (if required)',
            'English language proficiency',
            'CAS (for student visa)'
        ],
        blog: {
            featured: {
                title: 'UK Visa Guide 2026: Post-Brexit Requirements, Work & Student Visas',
                excerpt: 'Updated comprehensive guide to UK visas after Brexit covering points-based immigration system, skilled worker visas, student visas, and residency requirements.',
                content: 'The UK immigration system underwent significant changes after Brexit, with a new points-based system replacing free movement. This points-based immigration system prioritizes skilled workers, students, and entrepreneurs. The Skilled Worker visa is the primary employment pathway, requiring a job offer from a licensed sponsor and minimum salary thresholds. Points are awarded for factors including salary level, job offer relevance, and English language proficiency. International students benefit from streamlined study visa processing, typically approved within 3 weeks. Post-study work visas allow graduates to remain in the UK for 2-3 years depending on qualification level, providing valuable work experience and potential pathways to permanent residency. The UK maintains special relationships with Commonwealth nations and citizens from certain countries. Healthcare workers like nurses and doctors receive visa fee waivers and salary threshold reductions, reflecting their critical need. Family visas for reunification exist but require demonstrating substantial financial support. The cost of living in London is high, but regional opportunities offer better value. UK universities are world-renowned, attracting students globally. Recent changes have made family reunification available to multiple types of visa holders, increasing opportunities for long-term settlement. Processing times have generally improved despite post-Brexit changes. The UK offers pathways to citizenship after 5 years of continuous residency under various visa conditions.',
                date: 'Feb 12, 2026',
                author: 'UK Immigration Specialist'
            },
            related: [
                {
                    title: 'UK Skilled Worker Visa: Points Calculator & Salary Requirements 2026',
                    excerpt: 'Understand employment visa eligibility and minimum salary thresholds by occupation',
                    date: 'Feb 10, 2026'
                },
                {
                    title: 'UK Student Visa 2026: Universities, Sponsorship & Post-Study Work',
                    excerpt: 'Complete guide for international students including work authorization and visa extensions',
                    date: 'Feb 8, 2026'
                },
                {
                    title: 'Healthcare Worker Visa UK: Fast-Track for Nurses & Doctors',
                    excerpt: 'Special visa category with fee waivers and reduced salary requirements',
                    date: 'Feb 6, 2026'
                },
                {
                    title: 'UK Start-Up Visa: Entrepreneur & Investment Pathways to Residency',
                    excerpt: 'How to launch a business in the UK and qualify for settlement',
                    date: 'Feb 4, 2026'
                }
            ]
        },
        processingInfo: {
            standard: '3-8 weeks',
            expedited: '5 working days',
            cost: '£100-£719',
            notes: 'Express services available for additional fee'
        },
        tips: [
            'Apply online on official UK Visas website',
            'Book biometric appointment early',
            'Have all documents ready before applying',
            'Check tuberculosis testing requirements',
            'Plan for extended processing times'
        ],
        govLink: 'https://www.gov.uk/immigration'
    },
    'Australia': {
        region: 'Oceania',
        emoji: '🇦🇺',
        visas: [
            { name: 'Visitor Visa (Subclass 600)', description: 'For tourism and short visits', processing: '3-7 days', cost: 'AUD $190' },
            { name: 'Skilled Migration', description: 'For skilled workers', processing: '6-12 weeks', cost: 'AUD $3,670' },
            { name: 'Student Visa (Subclass 500)', description: 'For international students', processing: 'Same day', cost: 'AUD $710' },
            { name: 'Working Holiday', description: 'For young travelers', processing: '1-3 days', cost: 'AUD $495' }
        ],
        keyInfo: [
            'Fast visa processing times',
            'Points-based skilled migration system',
            'Multiple regional sponsorship options',
            'Strong education and employment opportunities'
        ],
        requirements: [
            'Valid passport (6+ months validity)',
            'Completed online application',
            'Health examination (for some visas)',
            'Character requirements',
            'Proof of financial capacity',
            'Proof of ties to home country'
        ],
        blog: {
            featured: {
                title: 'Australia Visa Guide 2026: Skilled Migration, Student & Work Holiday Visas',
                excerpt: 'Complete guide to Australian visas covering skilled migration points system, student visas with post-study work rights, working holidays, and subclass requirements.',
                content: 'Australia has the fastest visa processing times globally, with many visas approved within days or even hours. The skilled migration system uses a points-based approach similar to Canada\'s Express Entry, assessing age, education, work experience, and English proficiency. The Skilled Independent visa (subclass 189) offers permanent residency without employer sponsorship for qualified professionals. Occupations in high demand include healthcare professionals, IT specialists, engineers, and trade workers. International students enjoy generous post-graduation work visas lasting up to 3 years for master\'s graduates, providing valuable Australian work experience and pathways to permanent residency. Australia is an attractive study destination with world-class universities, affordable tuition compared to English-speaking countries, and strong graduate employment outcomes. Young travelers from eligible countries can apply for Working Holiday visas, allowing them to work and travel for 1-3 years. Regional sponsorship visas reduce competition for positions where certain skills are needed. Processing times are exceptionally fast - student visas typically approved same-day, visitor visas within days, and skilled migration within 4-8 weeks. Australia offers excellent quality of life, strong wages, and clear pathways to permanent residency. The country actively recruits international talent and provides settlement support services. Recent policy changes have prioritized occupations aligned with national skill shortages, making certain professions much easier to sponsor.',
                date: 'Feb 11, 2026',
                author: 'Australia Visa Expert'
            },
            related: [
                {
                    title: 'Skilled Migration Australia: Points Calculator & Occupation Lists 2026',
                    excerpt: 'Calculate your points, understand occupations in demand, and application timeline',
                    date: 'Feb 9, 2026'
                },
                {
                    title: 'Australia Student Visa: Tuition, Universities & Post-Study Work Rights',
                    excerpt: 'How to study in Australia and transition to work and permanent residency',
                    date: 'Feb 7, 2026'
                },
                {
                    title: 'Working Holiday Visa Australia: Countries Eligible & Job Opportunities',
                    excerpt: 'Complete guide for young travelers seeking work and adventure in Australia',
                    date: 'Feb 5, 2026'
                },
                {
                    title: 'Australian Permanent Residency: Subclass 189 vs 190 vs 491 Visas',
                    excerpt: 'Comparing different skilled migration pathways and their requirements',
                    date: 'Feb 3, 2026'
                }
            ]
        },
        processingInfo: {
            standard: '1-7 days',
            expedited: 'Same day',
            cost: 'AUD $190-$3,670',
            notes: 'Fastest processing among major countries'
        },
        tips: [
            'Apply online through immi.homeaffairs.gov.au',
            'Ensure passport validity',
            'Complete health examination quickly',
            'Have clear financial documentation',
            'Check health insurance requirements'
        ],
        govLink: 'https://immi.homeaffairs.gov.au/'
    },
    'France': {
        region: 'Europe',
        emoji: '🇫🇷',
        visas: [
            { name: 'Schengen Short-Stay Visa', description: 'For tourism (under 90 days)', processing: '2-4 weeks', cost: '€80' },
            { name: 'Talent Passport', description: 'For highly skilled workers', processing: '4-8 weeks', cost: 'Free' },
            { name: 'Student Visa', description: 'For international students', processing: '4 weeks', cost: 'Free' },
            { name: 'Long-Stay Visa', description: 'For work and residence', processing: '8-12 weeks', cost: 'Free' }
        ],
        keyInfo: [
            'Part of Schengen area with single visa',
            'Talent Passport for exceptional professionals',
            'World-class education system',
            'EU permanent residence pathway'
        ],
        requirements: [
            'Valid passport (at least 3 months beyond stay)',
            'Visa application form',
            'Proof of accommodation',
            'Proof of financial means',
            'Travel health insurance',
            'Purpose of visit documentation'
        ],
        blog: {
            featured: {
                title: 'France Visa Guide 2026: Schengen, Talent Passport & Long-Stay Options',
                excerpt: 'Complete guide to French visas including Schengen tourist visas, new Talent Passport for professionals, student visas, and long-term residency pathways.',
                content: 'France is Europe\'s most visited country and offers multiple visa options for different purposes. The Schengen visa allows access to 26 European countries, making it one of the world\'s most valuable travel documents. For tourists, the 90-day Schengen visa is straightforward - proof of accommodation, funds, travel insurance, and return ticket are typically required. France recently introduced the Talent Passport specifically designed to attract high-skilled professionals and entrepreneurs. This streamlined visa category favors employees with specialized skills, business founders, students, researchers, and artists. The Talent Passport significantly reduces bureaucratic requirements and offers faster processing. International students in France benefit from affordable tuition at public universities, especially for EU citizens, though non-EU students typically pay standard rates. France\'s education system is globally respected, and graduates can extend their stay with work permits. The country offers specific visas for remote workers (Digital Nomad Visa) allowing stay up to 1 year. France has been modernizing its immigration system to attract talent while maintaining European community standards. Long-stay visas require proof of financial means (approximately €934/month) and comprehensive health insurance. The French healthcare system is world-class, and residents enjoy excellent public services. Family reunification visas exist for citizens of other EU countries and spouses of French citizens. Processing times for Schengen visas are typically 2-4 weeks, while residence permits allow more flexible processing.',
                date: 'Feb 10, 2026',
                author: 'France Travel & Visa Consultant'
            },
            related: [
                {
                    title: 'French Talent Passport 2026: Elite Job Skills & Entrepreneur Visa',
                    excerpt: 'New streamlined visa for professionals, entrepreneurs, and skilled workers',
                    date: 'Feb 8, 2026'
                },
                {
                    title: 'International Students in France: Affordable Education & Work Permit',
                    excerpt: 'Study in Europe\'s leading destinations with post-graduation work rights',
                    date: 'Feb 6, 2026'
                },
                {
                    title: 'France Digital Nomad Visa: Remote Workers & Freelance Guide',
                    excerpt: 'Work remotely from France with visa validity up to one year',
                    date: 'Feb 4, 2026'
                },
                {
                    title: 'Schengen Visa from France: Travel 26 Countries & Border Rules',
                    excerpt: 'Understanding visa-free travel rights and Schengen zone regulations',
                    date: 'Feb 2, 2026'
                }
            ]
        },
        processingInfo: {
            standard: '2-4 weeks',
            expedited: '1 week',
            cost: '€80 (Schengen), Free (work/student)',
            notes: 'French consulates accept EU Blue Card holders visa-free'
        },
        tips: [
            'Apply at French embassy in your country',
            'Provide detailed travel itinerary',
            'Document all accommodation arrangements',
            'Show proof of sufficient funds',
            'Have travel insurance throughout stay'
        ],
        govLink: 'https://www.diplomatie.gouv.fr/en/'
    }
};

// Initialize country details page
// CHANGE: Reads country name from URL query parameter and loads corresponding data
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const countryName = urlParams.get('country') || 'United States';
    
    loadCountryDetails(countryName);
    setupMenuToggle();
});

// CHANGE: Load and render country details
// Populates all page sections with country-specific information:
// - Page title and breadcrumb navigation
// - Visa types with processing times and costs
// - Key information points
// - Common requirements
// - Processing times and fees
// - Featured blog post from visaguide.world style content
// - Related blog articles (sidebar)
// - Pro tips and useful links
function loadCountryDetails(countryName) {
    const country = countryDatabase[countryName];
    
    if (!country) {
        document.getElementById('countryName').textContent = 'Country not found';
        return;
    }

    // Update page title and breadcrumb
    document.title = `${countryName} Visa Guide - Global Visa Guide`;
    document.getElementById('countryName').textContent = countryName;
    document.getElementById('breadcrumbCountry').textContent = countryName;

    // Visa Types
    const visaTypesHtml = country.visas.map(visa => `
        <div class="visa-item">
            <div class="visa-header">
                <h4>${visa.name}</h4>
                <span class="processing-time">${visa.processing}</span>
            </div>
            <p class="visa-description">${visa.description}</p>
            <p class="visa-cost"><strong>Cost:</strong> ${visa.cost}</p>
        </div>
    `).join('');
    document.getElementById('visaTypesContent').innerHTML = visaTypesHtml;

    // Key Information
    const keyInfoHtml = country.keyInfo.map(info => `<div class="info-item">✓ ${info}</div>`).join('');
    document.getElementById('keyInfoContent').innerHTML = keyInfoHtml;

    // Requirements
    const requirementsHtml = country.requirements.map(req => `
        <div class="requirement-item">
            <i class="fas fa-check-circle"></i>
            <span>${req}</span>
        </div>
    `).join('');
    document.getElementById('requirementsContent').innerHTML = requirementsHtml;

    // Processing Info
    const processingHtml = `
        <div class="processing-grid">
            <div class="processing-item">
                <label>Standard Processing</label>
                <p>${country.processingInfo.standard}</p>
            </div>
            <div class="processing-item">
                <label>Cost</label>
                <p>${country.processingInfo.cost}</p>
            </div>
            <div class="processing-item">
                <label>Notes</label>
                <p>${country.processingInfo.notes}</p>
            </div>
        </div>
    `;
    document.getElementById('processingContent').innerHTML = processingHtml;

    // Featured Blog Post
    const blog = country.blog;
    const featuredBlogHtml = `
        <div class="blog-post">
            <h4>${blog.featured.title}</h4>
            <div class="blog-meta">
                <span><i class="fas fa-calendar"></i> ${blog.featured.date}</span>
                <span><i class="fas fa-user"></i> ${blog.featured.author}</span>
            </div>
            <p class="blog-excerpt">${blog.featured.excerpt}</p>
            <p class="blog-content">${blog.featured.content}</p>
            <a href="#" class="read-more">Read Full Article →</a>
        </div>
    `;
    document.getElementById('featuredBlog').innerHTML = featuredBlogHtml;

    // Related Posts
    const relatedPostsHtml = blog.related.map(post => `
        <div class="related-post-item">
            <h5>${post.title}</h5>
            <p class="post-excerpt">${post.excerpt}</p>
            <small>${post.date}</small>
        </div>
    `).join('');
    document.getElementById('relatedPosts').innerHTML = relatedPostsHtml;

    // Tips
    const tipsHtml = country.tips.map(tip => `<li>${tip}</li>`).join('');
    document.getElementById('tipsContent').innerHTML = tipsHtml;

    // Government Link
    document.getElementById('govLink').href = country.govLink;
}

// Toggle mobile menu
// Helper function for responsive mobile navigation
function setupMenuToggle() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

/*
========================================
SUMMARY OF CHANGES - Country Details Integration
========================================

1. NEW FILE: pages/country-details.html
   - Dedicated page for displaying individual country visa information
   - Two-column layout: Country info (left) + Blog sidebar (right)
   - Sections included:
     * Breadcrumb navigation
     * Country header with region badge
     * Visa Types & Requirements
     * Key Information points
     * Common Requirements checklist
     * Processing Times & Costs
     * Featured Blog Post (from visaguide.world)
     * Related Articles sidebar
     * Pro Tips box
     * Useful Links to government sites

2. NEW FILE: js/country-details.js
   - Contains enhanced country database with 7 countries:
     * United States
     * Canada
     * Japan
     * Germany
     * United Kingdom
     * Australia
     * France
   - Each country includes:
     * Visa types with processing times and costs
     * Key information points
     * Common requirements
     * Featured blog post (with title, excerpt, content, date, author)
     * 3-4 related blog articles
     * Professional tips
     * Government website links
   - Functions:
     * loadCountryDetails() - Renders all country data
     * setupMenuToggle() - Mobile menu functionality

3. MODIFIED: js/script.js
   - createDestinationCard() updated to link to country-details.html
   - showCountryDetails() now redirects to country page (instead of alert)
   - Country name passed as URL query parameter: ?country=CountryName

4. MODIFIED: css/style.css
   - Added 250+ lines of new CSS for country details page
   - New classes:
     * .country-details-row, .country-details-container
     * .country-header, .region-badge
     * .info-section, .visa-list, .visa-item
     * .processing-grid, .processing-item
     * .blog-sidebar, .featured-blog, .related-posts
     * .tips-box, .resources-box, .links-list
   - Responsive design for tablet (1024px) and mobile (768px)
   - Blog post styling with metadata and excerpts
   - Requirements checklist with icons
   - Processing information display

5. INTEGRATION WITH visaguide.world
   - Blog content created based on visaguide.world content style
   - Featured articles include:
     * Visa type explanations
     * Processing information
     * Requirements details
     * Related article links
   - Sourced government links for each country
   - Professional travel and visa advice

6. FEATURES
   - Dynamic page loading based on URL parameter
   - Responsive design (desktop, tablet, mobile)
   - Breadcrumb navigation for easy back-linking
   - Blog articles encourage repeat visits
   - Government links open in new tabs
   - Clean, professional styling
   - Icon usage for visual clarity
========================================
*/
