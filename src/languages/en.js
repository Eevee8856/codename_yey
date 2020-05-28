module.exports = {
	langName: "en",

	cantUseCommandInDM: `> :x: You cannot use this command in DM.`,
	clickHere: "(click here)",
	daysAgo: days => `(${days} days ago)`,
	commandUsage: function (prefix, command) {
		return `> Usage: \`${prefix}${command.name} ${this[command.usage]}\``;
	},
	botDontHavePerms: perm => `I don't have "${perm}" permission to do this.`,
	userIsOwner: "This user is a server owner.",
	roleHigher: "This user's role is higher than my role.",
	somethingWentWrong: "Something went wrong. Try again later.",
	dontHavePerms: ":x: You don't have permissions to use this command.",
	missingPermission: perm => `Missing permission: \`${perm}\``,
	errorInCommand: cmd => `:x: Error in command \`${cmd}\`:`,

	basicGroup: "Basic",
	devGroup: "Dev",
	moderationGroup: "Moderation",
	settingsGroup: "Settings",
	utilityGroup: "Utility",

	avatarDescription: "Gets your or someone's avatar.",
	avatarUsage: "[user: id, tag or mention]",
	avatarUser: user => `${user.tag}'s avatar:`,

	helpDescription: "Shows information about bot commands.",
	helpUsage: "[command]",
	helpCommandDoesntExist: cmd => `Command **${cmd}** does not exist.`,
	helpCommandDoesntExistDesc: prefix => `Type ${prefix}help for list of commands.`,
	helpCommandEmbedTitle: cmd => `Help for command \`${cmd}\`:`,
	helpCommandUsage: "Usage:",
	helpTitle: "Bot commands:",

	inviteDescription: "Bot invite link and support server invite.",
	inviteBotInvite: "Bot invite link:",
	inviteSupportServer: "codename_yey server:",

	pingDescription: "Shows the bot latency.",
	pingMeasuring: "Measuring...",
	pingBotLatency: latency => `Bot latency is ${latency} ms.`,
	pingWebSocketLatency: latency => `WebSocket latency is ${latency} ms.`,

	serverDescription: "Shows info about server.",
	serverOwner: "Owner:",
	serverRegion: "Region:",
	serverMembers: "Members:",
	serverMembersTotal: "total",
	serverMembersBots: "bots",
	serverMembersOnline: "online",
	serverMembersIdle: "idle",
	serverMembersDND: "DND",
	serverMembersOffline: "offline",
	serverChannels: "Channels:",
	serverChannelsCategories: "categories",
	serverChannelsText: "text",
	serverChannelsVoice: "voice",
	serverTotalRoles: "Roles:",
	serverCreatedAt: "Created at:",

	statusDescription: "Shows the bot status.",
	statusTitle: "Bot status",
	statusUptime: "Uptime:",
	statusServers: "Servers:",
	statusUsers: "Users:",
	statusPlatform: "Platform:",
	statusVersions: "Versions:",

	userDescription: "Shows info about you or about provided user.",
	userUsage: "[user: id, tag or mention]",
	userStatus: "Status:",
	userRegisteredAt: "Registered at:",
	userJoinedAt: "Joined at:",
	userRoles: "Roles:",
	userBot: "Bot?",
	userBotDefine: bot => bot ? "Yes" : "No",
	userCustomStatus: "Custom status:",
	userWatching: "Watching:",
	userListening: "Listening to:",
	userStreaming: "Streaming:",
	userPlaying: "Playing:",

	evalDescription: "Evaluates the JavaScript code.",
	evalUsage: "<code>",

	reloadDescription: "Reloads the command.",
	reloadUsage: "<command>",
	reloadCmdDoesntExist: command => `> :x: Command \`${command}\` doesn't exist.`,
	
	setgameDescription: "Sets the bot's playing/watching/listening status.",
	setgameUsage: "[-w, --watching] [-l, --listening] <text>",

	updateDescription: "Just git pull.",
	updateSuccess: ":white_check_mark: Successfully updated.",

	banDescription: "Bans the provided user.\nThis command requires the \"Ban members\" permission.",
	banUsage: "<user> [reason]",
	banSuccess: user => `${user.tag} has been banned`,
	reason: reason => `Reason: ${reason || "none"}`,
	cantBanYourself: `> :x: You can't ban yourself.`,
	cantBanBot: `> :x: You can't ban a bot.`,
	banFail: ":x: Ban failed.",

	hackbanDescription: "Hackbans the provided user.\nThis command requires the \"Ban members\" permission.",
	hackbanUsage: "<userID> [reason]",
	hackbanSuccess: id => `:white_check_mark: User with ID \`${id}\` has been successfully hackbanned.`,
	hackbanFail: ":x: Hackban failed.",
	
	kickDescription: "Kicks the provided user.\nThis command requires the \"Kick members\" permission.",
	kickUsage: "<user> [reason]",
	cantKickYourself: "> :x: You can't kick youself.",
	cantKickBot: "> :x: You can't kick a bot.",
	kickSuccess: user => `${user.tag} has been kicked`,
	kickFail: ":x: Kick failed.",

	muteDescription: "Mutes the provided user.\nAllowed time settings: Ns, Nm, Nh, Nd, where N is a number.\nThis command requires the \"Kick members\" permission.",
	muteUsage: "<user> [time] [reason]",
	cantMuteYourself: "> :x: You can't mute yourself.",
	cantMuteBot: "> :x: You can't mute a bot.",
	userAlreadyMuted: "> :x: This user is already muted.",
	muteSuccess: user => `${user.tag} has been muted`,
	canUnmuteSuggestion: prefix => `You can unmute the user by typing ${prefix}unmute <user>.`,
	muteFail: ":x: Mute failed.",

	purgeDescription: "Deletes the specified amount of messages.\nThis command requires the \"Manage messages\" permission.",
	purgeUsage: "<amount>",
	amountIsNaN: "> :x: Amount is not a number.",
	notLessThan1Msg: "> :x: Not less than 1 message.",
	notMoreThan100Msgs: "> :x: Not more than 100 messages.",
	purgeSuccess: amount => `:white_check_mark: Successfully deleted ${amount} messages.`,
	msgWillBeDeleted: "This message will be automatically deleted in 5 seconds.",
	purgeFailed: ":x: Purge failed.",

	unmuteDescription: "Unmutes the provided user.\nThis command requires the \"Kick members\" permission.",
	unmuteUsage: "<user>",
	userNotMuted: "> :x: This user is not muted.",
	unmuteSuccess: user => `${user.tag} has been unmuted`,
	unmuteFail: ":x: Unmute failed.",

	warnDescription: "Warns the provided user. Also lets you to show your or other user's warns or delete them (if you have \"Kick members\" permission).",
	warnUsage: "[-l, --list [user]] [-d, --delete <warnID>] <user> [reason]",
	totalWarns: number => `Total warns: ${number}`,
	invalidID: "> :x: Invalid warn ID.",
	warnOnAnotherServer: "> :x: This warn is located on another server.",
	warnDeleteSuccess: id => `> :white_check_mark: Deleted warn with ID ${id}`,
	cantWarnYourself: "> :x: You can't warn yourself.",
	cantWarnBot: "> :x: You can't warn a bot.",
	cantWarnAdmin: "> :x: You can't warn the administrator.",
	warnSuccess: user => `${user.tag} has been warned`,
	warnID: id => `Warn ID: ${id}`,

	autoroleDescription: "Lets you to enable or disable the autorole.\nRequires \"Manage server\" permission.",
	autoroleUsage: "[role: id, name or mention or \"disable\" to disable]",
	autorole: "Autorole",
	autoroleEnabled: role => `Autorole is enabled for role **${role}**.`,
	autoroleDisabled: "Autorole is disabled.",
	autoroleTip: prefix => `You can enable or change the autorole by typing ${prefix}autorole [role], or type ${prefix}autorole disable to disable.`,
	autoroleDisableSuccess: "> :white_check_mark: Autorole has been disabled.",
	autoroleSuccess: role => `> :white_check_mark: Successfully set autorole to **"${role}"**.`,
	invalidRoleID: "> :x: Invalid role name or ID.",

	modlogsDescription: "Lets you to manage the modlogs channel.\nRequires \"Manage server\" permission.",
	modlogsUsage: "[channel: mention or id]",
	modlogs: "Modlogs",
	modlogsEnabled: channel => `Modlogs are enabled in channel ${channel}.`,
	modlogsDisabled: "Modlogs are disabled.",
	modlogsTip: prefix => `Type ${prefix}modlogs [channel] if you want to enable or change the modlogs channel, or type ${prefix}modlogs disable to disable it.`,
	modlogsDisableSuccess: "> :white_check_mark: Modlogs have been disabled.",
	modlogsSuccess: channel => `> :white_check_mark: Successfully enabled modlogs in channel **\"${channel}\"**.`,
	invalidChannel: "> :x: Invalid channel provided.",
	modlogsDontHavePerms: ":x: I don't have permissions to send messages in this channel.",
	modlogsDontHavePermsDesc: "Please give me \"Send messages\" and \"Embed links\" permissions in this channel, then try again.",

	_8ballDescription: "A magic 8 ball.",
	_8ballUsage: "<question>",
	magicballAnswer: ":8ball: The magic ball's answer is:",
	yourQuestion: "Your question:",

	pollDescription: "Creates a reaction poll (up to 10 answers).",
	pollUsage: "<question> <answers>",
	noAnswers: "> :warning: There must be at least 1 answer in the poll.",
	pollNotMoreThan10Answers: "> :x: Not more than 10 answers.",
	startedBy: user => `Started by ${user.tag}`,

	qrDescription: "Generates a QR code from your text.",
	qrUsage: "<text>",
	generationTime: time => `Took ${time} ms.`,

	sayDescription: "Says your text in embed.",
	sayUsage: "<text>",

	udDescription: "Searches the word definition in Urban Dictionary.",
	udUsage: "<word>",
	wordNotFound: ":x: Word not found.",
	cantShowDefinition: ":x: I can't show this definition here.",
	linkToDefinition: link => `But there is a link to this definition: [(click here)](${link})`,
	example: "Example:",
	author: author => `Author: ${author}`,

	languageDescription: "Changes the language.",
	languageUsage: "[language]",
	availableLanguages: "Available languages:",
	yourLanguage: "Your language:",
	languagesTip: prefix => `You can change the language by typing ${prefix}language [language]`,
	langDoesntExist: "> :x: This language doesn't exist.",
	langSuccess: name => `> :white_check_mark: Your language has been changed to \`${name}\`.`,
};
