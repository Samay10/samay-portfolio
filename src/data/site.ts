export const site = {
	name: 'Samay Deepak Ashar',
	shortName: 'Samay Ashar',
	title: 'Software Engineer · Distributed Systems',
	tagline: 'Software engineer designing scalable distributed systems.',
	intro: [
		'Hey, thanks for stopping by!',
		'I’m a software engineer drawn to the craft of systems that scale. Distributed backends, high-throughput services, cloud infrastructure that stays calm under pressure: the quiet architecture behind software that just works.',
		'Somewhere in that work, intelligence shows up too. Models, automation, data in motion. Not as a side quest, but as part of how modern systems think, adapt, and keep moving.',
		'If you’re into building things that last, shipping with care, or talking shop about systems, you’re in the right place. Pull up a chair.',
	],
	location: 'Remote · India / USA',
	email: 'sam10ashar@gmail.com',
	phone: '+91 7984111649',
	links: {
		linkedin: 'https://linkedin.com/in/samayashar',
		github: 'https://github.com/samayashar',
		x: 'https://x.com/theprodigyguy',
		email: 'mailto:sam10ashar@gmail.com',
	},
	nav: [
		{ label: 'Work', href: '#work' },
		{ label: 'Startup', href: '#startup' },
		{ label: 'Open-Source', href: '#open-source' },
		{ label: 'Skills', href: '#skills' },
		{ label: 'Blog', href: '#blog' },
	],
} as const;

export const experience = [
	{
		company: 'Turing, Mercor, Handshake AI, Snorkel',
		role: 'Software Engineer, Agentic AI',
		location: 'Remote (USA)',
		period: 'Oct 2025 – Present',
		highlights: [
			'Designed robust validation for large-scale agentic training datasets, keeping accuracy and structure steady across research programs at scale.',
			'Structured 435+ JSON, Python, and Docker tasks under shared schemas so multi-format data stayed clean, consistent, and production-ready.',
			'Raised dataset accuracy by 45% and cut validation cycles by 35% while keeping pipelines aligned with evolving model research objectives.',
		],
	},
	{
		company: 'Launchpad',
		role: 'Data Scientist',
		location: 'Remote (USA)',
		period: 'Apr 2025 – Jun 2025',
		highlights: [
			'Built Gemini-powered automation to parse financial documents and pull live data across 15 APIs for a busy cross-functional delivery team.',
			'Cut processing time by 35% and manual extraction by 55%, replacing brittle weekly workflows that once consumed more than eighty team hours.',
			'Lifted data precision from about 75% to 92% through Dockerized deployment and clearer, more reliable end-to-end collection pipelines.',
		],
	},
	{
		company: 'SchedMad Private Limited',
		role: 'Software Development Engineer (AI)',
		location: 'Vadodara, India',
		period: 'Jul 2024 – Nov 2024',
		highlights: [
			'Shipped a Laravel WhatsApp chatbot with containerized deployment to move customer support beyond slow, overloaded manual shift queues.',
			'Tuned twelve key database queries and connected the WhatsApp Business API for steadier throughput as product traffic continued to grow.',
			'Scaled support to 450+ interactions per shift with 96% delivery and brought average response latency down to roughly four seconds flat.',
		],
	},
] as const;

export const projects = [
	{
		title: 'Hero-GPT — minimalist GPT built from scratch',
		href: 'https://github.com/Samay10/hero-gpt',
	},
	{
		title: 'GPT-style tokenizer with byte-level BPE',
		href: 'https://github.com/Samay10/gpt-tokenizer',
	},
	{
		title: 'High-throughput distributed message queue',
		href: 'https://github.com/Samay10/DB-Message-System',
	},
	{
		title: 'Portfolio optimizer with Modern Portfolio Theory',
		href: 'https://github.com/Samay10/PortfoliX',
	},
	{
		title: 'Credit score prediction ML pipeline',
		href: 'https://github.com/Samay10/CreditGuard',
	},
	{
		title: 'Voice assistant for everyday automation',
		href: 'https://github.com/Samay10/JARVIS',
	},
] as const;

export const startup = {
	belief:
		'I believe that a startup is born from a really good project that you’ve developed over the years. It can be a college project, your research or an exciting opportunity that you have seen coming. When this project is loved by customers, it becomes a startup.',
	introducing: 'Introducing mine: Prodigy',
	description:
		'Prodigy is an AI workforce infrastructure that provides on-demand employees based on a team’s workload and requirements. We have built our own agentic workspace and scrum environment where human and AI employees work together as part of the same team.',
	highlights: [
		{
			before: 'Product in Beta: reach out on ',
			email: 'prodigy.sam10@gmail.com',
			after: ' for testing.',
		},
		{
			text: 'Received $175k in infra from Y Combinator and Startup Foundry.',
		},
	],
	href: 'https://www.prodigy.org.in',
} as const;

export const openSource = {
	belief:
		'The key to learning is sharing. I am an active contributor to strong open-source repositories of Google and OpenClaw. I also own over 28 essential projects ranging from AI, distributed systems and HFT frameworks.',
	githubUser: 'Samay10',
	filters: ['All', 'Google', 'OpenClaw'] as const,
	fallback: [
		{
			title: 'Fix Ollama API compatibility for newer versions',
			number: '#443',
			org: 'Google',
			repo: 'langextract',
			status: 'Merged',
			href: 'https://github.com/google/langextract/pull/443',
		},
		{
			title: 'Resolve model SecretRefs for usage collection',
			number: '#150192',
			org: 'OpenClaw',
			repo: 'openclaw',
			status: 'Open',
			href: 'https://github.com/openclaw/openclaw/pull/150192',
		},
		{
			title: 'Admit ask_user answers for CLI-runner transcripts',
			number: '#150122',
			org: 'OpenClaw',
			repo: 'openclaw',
			status: 'Open',
			href: 'https://github.com/openclaw/openclaw/pull/150122',
		},
		{
			title: 'Warn and clear residual App Translocation quarantine',
			number: '#150111',
			org: 'OpenClaw',
			repo: 'openclaw',
			status: 'Open',
			href: 'https://github.com/openclaw/openclaw/pull/150111',
		},
		{
			title: 'Offer Use current model after verified onboarding',
			number: '#149109',
			org: 'OpenClaw',
			repo: 'openclaw',
			status: 'Open',
			href: 'https://github.com/openclaw/openclaw/pull/149109',
		},
	],
} as const;

export const blog = {
	summary:
		"Sharing notes on technical and non-technical concepts I'm learning along the way.",
	// Point this at your GitHub Pages blog when it’s live
	href: 'https://samayashar.github.io',
	cta: 'Visit the blog',
} as const;

export const skills = [
	{
		label: 'Languages',
		items: ['Java', 'Python', 'C++', 'JavaScript', 'SQL', 'Rust'],
	},
	{
		label: 'Backend',
		items: [
			'Spring Boot',
			'REST',
			'Microservices',
			'gRPC',
			'RabbitMQ',
			'Kafka',
			'Redis',
		],
	},
	{
		label: 'Frontend',
		items: ['React', 'Node.js', 'Express', 'Tailwind'],
	},
	{
		label: 'Cloud & DevOps',
		items: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
	},
	{
		label: 'Databases',
		items: [
			'MySQL',
			'PostgreSQL',
			'MongoDB',
			'DynamoDB',
			'Elasticsearch',
			'Cassandra',
		],
	},
] as const;

export const education = {
	school: 'Dhirubhai Ambani University',
	degree: 'B.Tech in Information and Communication Technology',
	location: 'Gandhinagar, India',
	period: '2020 – 2024',
} as const;

export const about = {
	paragraphs: [
		'I’m a software engineer who designs scalable distributed systems — and applies AI when it strengthens the product. I care about clear architecture, measurable outcomes, and software that holds up under real load.',
		'Outside of work, I contribute to open source, stay sharp on algorithms (1,400+ LeetCode problems), and enjoy building systems where performance and simplicity meet.',
	],
	notes: [
		'Open source contributor (Google, OpenClaw)',
		'Research: AI-driven fraud detection (92% accuracy, 96% privacy compliance)',
		'3rd place — RepoReboot (iFest 2021) for JARVIS',
		'10+ certifications from Anthropic, IBM, Stanford, Google Cloud, Hugging Face, NVIDIA',
	],
} as const;
