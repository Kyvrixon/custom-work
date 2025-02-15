import { ActivityType } from "discord.js";
import Logger from "../../utils/logger.js";

const event = {
	enabled: true,

	name: "ready",
	once: true,
	async init(client) {
		Logger.info("Bot", "Ready!");

		client.user.setPresence({
			activities: [
				{
					name: "I'm bored",
					type: ActivityType.Custom
				}
			],
			status: 'dnd',
		})

	},
};
export default event;
