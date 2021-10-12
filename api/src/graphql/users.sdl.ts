export const schema = gql`
	type User {
		id: Int!
		loginhash: String!
		firstName: String!
		lastName: String!
		alati: String!
		track: Classtype!
	}

	enum Classtype {
		GENERAL
		STEM
		HUMANITIES
	}

	type Query {
		users: [User!]! @requireAuth
	}

	input CreateUserInput {
		loginhash: String!
		firstName: String!
		lastName: String!
		alati: String!
		track: Classtype!
	}

	input UpdateUserInput {
		loginhash: String
		firstName: String
		lastName: String
		alati: String
		track: Classtype
	}
`;
