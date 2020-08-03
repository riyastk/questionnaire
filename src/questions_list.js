export default {
	total_questions: 6,
	previous_text: 'Previous',
	next_text: 'Next',
	submit_button: 'Next',
	questionsList: [
		{
			id: 1,
			server_key: 'color',
			question_type: 'single',
			answer_type: 'image_small',
			mandatory: true,
			row_size: 6,
			question: 'What color do you like your juice to be?',
			question_hint: '',
			why_answer: 'Knowing your favorite juice color helps us match juice styles and varieties that you might like.',
			answers: [
				{
					answer: 'Pale Straw',
					url: require('./assets/smoothie1.svg'),
					server_value: '2',
					color_code: '#FCFA5A',
					is_selected: false,
					ga_event_label: 'colorPaleStraw'
				},
				{
					answer: 'Straw',
					url: require('./assets/smoothie1.svg'),
					server_value: '3',
					color_code: '#F3F409',
					is_selected: false,
					ga_event_label: 'colorStraw'
				},
				{
					answer: 'Pale Gold',
					url: require('./assets/smoothie1.svg'),
					server_value: '4',
					color_code: '#EBD000',
					is_selected: false,
					ga_event_label: 'colorPaleGold'
				},
				{
					answer: 'Deep Gold',
					url: require('./assets/smoothie1.svg'),
					server_value: '6',
					color_code: '#C9B800',
					is_selected: false,
					ga_event_label: 'colorDeepGold'
				},
				{
					answer: 'Pale Amber',
					url: require('./assets/smoothie1.svg'),
					server_value: '9',
					color_code: '#B3A132',
					is_selected: false,
					ga_event_label: 'colorPaleAmber'
				},
				{
					answer: 'Medium Amber',
					url: require('./assets/smoothie1.svg'),
					server_value: '12',
					color_code: '#AF742F',
					is_selected: false,
					ga_event_label: 'colorMediumAmber'
				},
				{
					answer: 'Deep Amber',
					url: require('./assets/smoothie1.svg'),
					server_value: '15',
					color_code: '#965F2B',
					is_selected: false,
					ga_event_label: 'colorDeepAmber'
				},
				{
					answer: 'Amber Brown',
					url: require('./assets/smoothie1.svg'),
					server_value: '18',
					color_code: '#634021',
					is_selected: false,
					ga_event_label: 'colorAmberBrown'
				},
				{
					answer: 'Brown',
					url: require('./assets/smoothie1.svg'),
					server_value: '21',
					color_code: '#634021',
					is_selected: false,
					ga_event_label: 'colorBrown'
				},
				{
					answer: 'Ruby Brown',
					url: require('./assets/smoothie1.svg'),
					server_value: '24',
					color_code: '#3B2521',
					is_selected: false,
					ga_event_label: 'colorRubyBrown'
				},
				{
					answer: 'Deep Brown',
					url: require('./assets/smoothie1.svg'),
					server_value: '30',
					color_code: '#231C1C',
					is_selected: false,
					ga_event_label: 'colorDeepBrown'
				},
				{
					answer: 'Black',
					url: require('./assets/smoothie1.svg'),
					server_value: '40',
					color_code: '#1A1515',
					is_selected: false,
					ga_event_label: 'colorBlack'
				},
			],
		},
		{
			id: 2,
			server_key: 'bitterness',
			question_type: 'rating',
			answer_type: 'text',
			mandatory: true,
			row_size: 6,
			question: 'What is the bitterness level you enjoy?',
			left_answer_hint: 'Low',
			right_answer_hint: 'Extreme',
			right_answer_icon: require('./assets/coffee-cup.svg'),
			left_answer_icon: require('./assets/honey.svg'),
			left_description: 'I don’t like bitterness.',
			right_description: 'I love bitter taste. I drink juice for its bitterness.',
			range_min: 0,
			range_max: 100,
			why_answer: 'As you know, juices highly vary by taste. Your answer helps us understand your taste profile.',
		},
		{
			id: 3,
			server_key: 'flavor_aroma1',
			question_type: 'single',
			answer_type: 'text_image',
			max_choice: 3,
			min_choice: 1,
			mandatory: true,
			row_size: 4,
			question: 'What juice flavor/aroma do you prefer?',
			// question_hint: 'You can choose upto 3',
			answers: [
				{
					answer: 'Sugary',
					icon: require('./assets/sugary.svg'),
					url: require('./assets/sugary.svg'),
					server_value: '3',
					is_selected: false,
					ga_event_label: 'flavorSugary'
				},
				{
					answer: 'Malty & Maillard',
					icon: require('./assets/malt.svg'),
					url: require('./assets/malt.svg'),
					server_value: '2',
					is_selected: false,
					ga_event_label: 'flavorMalty'
				},
				{
					answer: 'Herbal',
					icon: require('./assets/herbal.svg'),
					url: require('./assets/herbal.svg'),
					server_value: '1',
					is_selected: false,
					ga_event_label: 'flavorHerbal'
				},
				{
					answer: 'Aged',
					icon: require('./assets/pine-tree.svg'),
					url: require('./assets/pine-tree.svg'),
					server_value: '4',
					is_selected: false,
					ga_event_label: 'flavorAged'
				},
				{
					answer: 'Floral',
					icon: require('./assets/orchid.svg'),
					url: require('./assets/orchid.svg'),
					server_value: '5',
					is_selected: false,
					ga_event_label: 'flavorFloral'
				},
				{
					answer: 'Fruity',
					icon: require('./assets/strawberry.svg'),
					url: require('./assets/strawberry.svg'),
					server_value: '0',
					is_selected: false,
					ga_event_label: 'flavorFruity'
				},
				{
					answer: 'Spicy',
					icon: require('./assets/spicy.svg'),
					url: require('./assets/spicy.svg'),
					server_value: '6',
					is_selected: false,
					ga_event_label: 'flavorSpicy'
				},
			],
			why_answer: 'We want to help you pick your next new juice with the flavor and aroma you love.',
		},
		{
			id: 4,
			server_key: 'languages_spoken',
			question_type: 'numeric',
			mandatory: true,
			question: 'How many languages do you speak?',
			question_hint: null,
			why_answer: 'Your travel experience gives us an idea of your international juice exploration possibilities. Tell us about your travel.',
		},
		{
			id: 5,
			server_key: 'cei3',
			question_type: 'single',
			answer_type: 'text',
			row_size: 3,
			mandatory: true,
			question: 'How well does the below statement represent you?',
			question_hint: '“I am at my best when doing something that is complex or challenging”',
			answers: [
				{
					answer: 'Strongly disagree',
					icon: null,
					server_value: '1',
					is_selected: false,
				},
				{
					answer: 'Disagree',
					icon: null,
					server_value: '2',
					is_selected: false,
				},
				{
					answer: 'Neither agree nor disagree',
					icon: null,
					server_value: '3',
					is_selected: false,
				},
				{
					answer: 'Agree',
					icon: null,
					server_value: '4',
					is_selected: false,
				},
				{
					answer: 'Strongly agree',
					icon: null,
					server_value: '5',
					is_selected: false,
				},
			],
			why_answer: 'Telling us a little bit about yourself, helps us pick juices for you just like your friend. Let’s be juice buddies!',
		},
		{
			id: 6,
			server_key: 'cei9',
			question_type: 'single',
			answer_type: 'text',
			row_size: 3,
			mandatory: true,
			question: 'How well does the below statement represent you?',
			question_hint: '“I am the kind of person who embraces unfamiliar people, events, and places.”',
			answers: [
				{
					answer: 'Strongly disagree',
					icon: null,
					server_value: '1',
					is_selected: false,
				},
				{
					answer: 'Disagree',
					icon: null,
					server_value: '2',
					is_selected: false,
				},
				{
					answer: 'Neither agree nor disagree',
					icon: null,
					server_value: '3',
					is_selected: false,
				},
				{
					answer: 'Agree',
					icon: null,
					server_value: '4',
					is_selected: false,
				},
				{
					answer: 'Strongly agree',
					icon: null,
					server_value: '5',
					is_selected: false,
				},
			],
			why_answer: 'Telling us a little bit about yourself, helps us pick juices for you just like your friend. Let’s be juice buddies!',
		},
	],
}