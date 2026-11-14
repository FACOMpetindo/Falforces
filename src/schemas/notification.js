const mongoose = require("mongoose")

const guildSchema = mongoose.Schema(
	{
		_id: { type: String, required: true },
		name: { type: String, required: true },
		color: { type: String, default: "#C12127" },
		data: { type: mongoose.Schema.Types.Mixed, required: true },
		notificationTimes: { type: [{ timestamp: Number, sent: Boolean }], default: [] },
	},
	{
		versionKey: false,
		timestamps: true,
	},
)

module.exports = mongoose.model("notifications", guildSchema)
