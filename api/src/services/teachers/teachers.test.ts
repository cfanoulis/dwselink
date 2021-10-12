import { teachers, teacher, createTeacher, updateTeacher, deleteTeacher } from './teachers';
import type { StandardScenario } from './teachers.scenarios';

describe('teachers', () => {
	scenario('returns all teachers', async (scenario: StandardScenario) => {
		const result = await teachers();

		expect(result.length).toEqual(Object.keys(scenario.teacher).length);
	});

	scenario('returns a single teacher', async (scenario: StandardScenario) => {
		const result = await teacher({ id: scenario.teacher.one.id });

		expect(result).toEqual(scenario.teacher.one);
	});

	scenario('creates a teacher', async () => {
		const result = await createTeacher({
			input: { name: 'String', schname: 'String' }
		});

		expect(result.name).toEqual('String');
		expect(result.schname).toEqual('String');
	});

	scenario('updates a teacher', async (scenario: StandardScenario) => {
		const original = await teacher({ id: scenario.teacher.one.id });
		const result = await updateTeacher({
			id: original.id,
			input: { name: 'String2' }
		});

		expect(result.name).toEqual('String2');
	});

	scenario('deletes a teacher', async (scenario: StandardScenario) => {
		const original = await deleteTeacher({ id: scenario.teacher.one.id });
		const result = await teacher({ id: original.id });

		expect(result).toEqual(null);
	});
});
