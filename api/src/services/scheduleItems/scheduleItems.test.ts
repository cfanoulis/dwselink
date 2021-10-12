import { scheduleItems, scheduleItem, createScheduleItem, updateScheduleItem, deleteScheduleItem } from './scheduleItems';
import type { StandardScenario } from './scheduleItems.scenarios';

describe('scheduleItems', () => {
	scenario('returns all scheduleItems', async (scenario: StandardScenario) => {
		const result = await scheduleItems();

		expect(result.length).toEqual(Object.keys(scenario.scheduleItem).length);
	});

	scenario('returns a single scheduleItem', async (scenario: StandardScenario) => {
		const result = await scheduleItem({ id: scenario.scheduleItem.one.id });

		expect(result).toEqual(scenario.scheduleItem.one);
	});

	scenario('creates a scheduleItem', async (scenario: StandardScenario) => {
		const result = await createScheduleItem({
			input: {
				teacherId: scenario.scheduleItem.two.teacherId,
				class: 'String',
				day: 1955529,
				start: 4833478,
				track: 'GENERAL'
			}
		});

		expect(result.teacherId).toEqual(scenario.scheduleItem.two.teacherId);
		expect(result.class).toEqual('String');
		expect(result.day).toEqual(1955529);
		expect(result.start).toEqual(4833478);
		expect(result.track).toEqual('GENERAL');
	});

	scenario('updates a scheduleItem', async (scenario: StandardScenario) => {
		const original = await scheduleItem({ id: scenario.scheduleItem.one.id });
		const result = await updateScheduleItem({
			id: original.id,
			input: { class: 'String2' }
		});

		expect(result.class).toEqual('String2');
	});

	scenario('deletes a scheduleItem', async (scenario: StandardScenario) => {
		const original = await deleteScheduleItem({
			id: scenario.scheduleItem.one.id
		});
		const result = await scheduleItem({ id: original.id });

		expect(result).toEqual(null);
	});
});
