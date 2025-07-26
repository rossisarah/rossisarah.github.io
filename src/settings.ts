export const profile = {
	fullName: 'Sarah Rossi',
	title: 'PhD Candidate in Theoretical and Experimental Linguistics',
	institute: '',
	author_name: 'Sarah Rossi', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Theoretical syntax', description: 'Morphosyntax of imperatives, exploring the hypothesis that they are radically reduced structures ● Analysis of expletive vs. standard negation.', field: 'Theoretical Syntax' },
		{ title: 'Language Acquisition', description: 'Development of L1 grammar investigated through corpus studies and computational approaches ● Acquisition in Children vs. Learning in Machines.', field: 'Language Acquisition' },
		{ title: 'Interfaces with Semantics and Pragmatics', description: 'Interpretation of imperatives ● Non-canonical uses of imperative clauses ● Expressive language in expletive negation clauses.', field: 'Interfaces' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'sarah.rossi@iusspavia.it',
	linkedin: '<a href="https://www.linkedin.com/in/sarah-rossi-b22260341" target="_blank">',
	x: '',
	github: '',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?hl=it&authuser=1&user=PKbZLGsAAAAJ',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://rossisarah.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'lofi', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'black', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/' // Repository name starting with /
}

export const seo = {
	default_title: 'Sarah Rossi',
	default_description: 'PhD Candidate in Theoretical and Experimental Linguistics at IUSS Pavia. Working on the syntax and acquisition of imperative clauses and negation.',
	default_image: '/images/profilepic.jpeg',
}
