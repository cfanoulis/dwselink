export const schema = gql`
	type Teacher {
		id: Int!
		name: String!
		schname: String!
		ScheduleItem: [ScheduleItem]!
	}

	type Query {
		teachers: [Teacher!]! @requireAuth
		teacher(id: Int!): Teacher @requireAuth
	}

	input CreateTeacherInput {
		name: String!
		schname: String!
	}

	input UpdateTeacherInput {
		name: String
		schname: String
	}

	type Mutation {
		createTeacher(input: CreateTeacherInput!): Teacher! @requireAuth
		updateTeacher(id: Int!, input: UpdateTeacherInput!): Teacher! @requireAuth
		deleteTeacher(id: Int!): Teacher! @requireAuth
	}
`;
