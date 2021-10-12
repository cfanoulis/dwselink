export const schema = gql`
	type ScheduleItem {
		id: Int!
		teacher: Teacher!
		teacherId: Int!
		class: String!
		day: Int!
		start: Int!
		track: Classtype!
	}

	enum Classtype {
		GENERAL
		STEM
		HUMANITIES
	}

	type Query {
		scheduleItems: [ScheduleItem!]! @requireAuth
		scheduleItem(id: Int!): ScheduleItem @requireAuth
	}

	input CreateScheduleItemInput {
		teacherId: Int!
		class: String!
		day: Int!
		start: Int!
		track: Classtype!
	}

	input UpdateScheduleItemInput {
		teacherId: Int
		class: String
		day: Int
		start: Int
		track: Classtype
	}

	type Mutation {
		createScheduleItem(input: CreateScheduleItemInput!): ScheduleItem! @requireAuth
		updateScheduleItem(id: Int!, input: UpdateScheduleItemInput!): ScheduleItem! @requireAuth
		deleteScheduleItem(id: Int!): ScheduleItem! @requireAuth
	}
`;
