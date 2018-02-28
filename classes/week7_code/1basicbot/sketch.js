// This will be our software
// Using the Twit node package
// https://github.com/ttezel/twit
var Twit = require('twit');

// Pulling all my twitter account info from another file
var config = require('./config.js');

// Making a Twit object for connection to the API
var T = new Twit(config);

// Start once
tweeter();

// Once every N milliseconds
setInterval(tweeter, 60*5*1000);

// Here is the bot!
function tweeter() {

  // This is a random number bot
//program code should go here

thing = ["turtle","robot","monkey","wolf","teacher","CD",
   "Christmas ornament",
   "acorn",
   "apple",
   "bag",
   "bag of cotton balls",
   "bag of popcorn",
   "bag of rubber bands",
   "ball of yarn",
   "balloon",
   "banana",
   "bananas",
   "bandana",
   "bangle bracelet",
   "bar of soap",
   "baseball",
   "baseball bat",
   "baseball hat",
   "basketball",
   "beaded bracelet",
   "beaded necklace",
   "bed",
   "beef",
   "bell",
   "belt",
   "blouse",
   "blowdryer",
   "bonesaw",
   "book",
   "book of jokes",
   "book of matches",
   "bookmark",
   "boom box",
   "bottle",
   "bottle cap",
   "bottle of glue",
   "bottle of honey",
   "bottle of ink",
   "bottle of lotion",
   "bottle of nail polish",
   "bottle of oil",
   "bottle of paint",
   "bottle of perfume",
   "bottle of pills",
   "bottle of soda",
   "bottle of sunscreen",
   "bottle of syrup",
   "bottle of water",
   "bouquet of flowers",
   "bow",
   "bow tie",
   "bowl",
   "box",
   "box of Q-tips",
   "box of baking soda",
   "box of chalk",
   "box of chocolates",
   "box of crayons",
   "box of markers",
   "box of tissues",
   "bracelet",
   "bread",
   "broccoli",
   "brush",
   "buckle",
   "butter knife",
   "button",
   "camera",
   "can of beans",
   "can of chili",
   "can of peas",
   "can of whipped cream",
   "candle",
   "candlestick",
   "candy bar",
   "candy cane",
   "candy wrapper",
   "canteen",
   "canvas",
   "car",
   "card",
   "carrot",
   "carrots",
   "cars",
   "carton of ice cream",
   "cat",
   "catalogue",
   "cell phone",
   "cellphone",
   "cement stone",
   "chain",
   "chair",
   "chalk",
   "chapter book",
   "check book",
   "chenille stick",
   "chicken",
   "children's book",
   "chocolate",
   "class ring",
   "clay pot",
   "clock",
   "clothes",
   "clothes pin",
   "coffee mug",
   "coffee pot",
   "comb",
   "comic book",
   "computer",
   "conditioner",
   "container of pudding",
   "cookie jar",
   "cookie tin",
   "cork",
   "couch",
   "cow",
   "cowboy hat",
   "craft book",
   "credit card",
   "crow",
   "crowbar",
   "cucumber",
   "cup",
   "dagger",
   "deodorant",
   "desk",
   "dictionary",
   "dog",
   "dolphin",
   "domino set",
   "door",
   "dove",
   "drawer",
   "drill press",
   "egg",
   "egg beater",
   "egg timer",
   "empty bottle",
   "empty jar",
   "empty tin can",
   "eraser",
   "extension cord",
   "eye liner",
   "face wash",
   "fake flowers",
   "feather",
   "feather duster",
   "few batteries",
   "fish",
   "fishing hook",
   "flag",
   "flashlight",
   "floor",
   "flowers",
   "flyswatter",
   "food",
   "football",
   "fork",
   "fridge",
   "frying pan",
   "game CD",
   "game cartridge",
   "garden spade",
   "giraffe",
   "glass",
   "glasses",
   "glow stick",
   "grid paper",
   "grocery list",
   "hair brush",
   "hair clip",
   "hair pin",
   "hair ribbon",
   "hair tie",
   "hammer",
   "hamster",
   "hand bag",
   "hand fan",
   "hand mirror",
   "handbasket",
   "handful of change",
   "handheld game system",
   "hanger",
   "harmonica",
   "helmet",
   "house",
   "ice cream stick",
   "ice cube",
   "ice pick",
   "incense holder",
   "ipod",
   "ipod charger",
   "jar of jam",
   "jar of peanut butter",
   "jar of pickles",
   "jigsaw puzzle",
   "key",
   "key chain",
   "keyboard",
   "keychain",
   "keys",
   "kitchen knife",
   "knife",
   "lace",
   "ladle",
   "lamp",
   "lamp shade",
   "laser pointer",
   "leg warmers",
   "lemon",
   "letter opener",
   "light",
   "light bulb",
   "lighter",
   "lime",
   "lion",
   "lip gloss",
   "locket",
   "lotion",
   "magazine",
   "magnet",
   "magnifying glass",
   "map",
   "marble",
   "martini glass",
   "matchbook",
   "microphone",
   "milk",
   "miniature portrait",
   "mirror",
   "mobile phone",
   "model car",
   "money",
   "monitor",
   "mop",
   "mouse pad",
   "mp3 player",
   "multitool",
   "music CD",
   "nail",
   "nail clippers",
   "nail filer",
   "necktie",
   "needle",
   "notebook",
   "notepad",
   "novel",
   "ocarina",
   "orange",
   "outlet",
   "pack of cards",
   "package of crisp and crunchy edibles",
   "package of glitter",
   "packet of seeds",
   "pail",
   "paint brush",
   "paintbrush",
   "pair of binoculars",
   "pair of dice",
   "pair of earrings",
   "pair of glasses",
   "pair of handcuffs",
   "pair of knitting needles",
   "pair of rubber gloves",
   "pair of safety goggles",
   "pair of scissors",
   "pair of socks",
   "pair of sunglasses",
   "pair of tongs",
   "pair of water goggles",
   "panda",
   "pants",
   "paper",
   "paperclip",
   "pasta strainer",
   "pearl necklace",
   "pen",
   "pencil",
   "pencil holder",
   "pepper shaker",
   "perfume",
   "phone",
   "photo album",
   "picture frame",
   "piece of gum",
   "pillow",
   "pinecone",
   "plastic fork",
   "plate",
   "plush bear",
   "plush cat",
   "plush dinosaur",
   "plush dog",
   "plush frog",
   "plush octopus",
   "plush pony",
   "plush rabbit",
   "plush unicorn",
   "pocketknife",
   "pocketwatch",
   "pool stick",
   "pop can",
   "postage stamp",
   "puddle",
   "purse",
   "purse/bag",
   "quartz crystal",
   "quilt",
   "rabbit",
   "radio",
   "rat",
   "remote",
   "rhino",
   "ring",
   "rock",
   "roll of duct tape",
   "roll of gauze",
   "roll of masking tape",
   "roll of stickers",
   "roll of toilet paper",
   "rolling pin",
   "rope",
   "rubber band",
   "rubber duck",
   "rubber stamp",
   "rug",
   "rusty nail",
   "safety pin",
   "sailboat",
   "salt shaker",
   "sand paper",
   "sandal",
   "sandglass",
   "scallop shell",
   "scarf",
   "scotch tape",
   "screw",
   "screwdriver",
   "seat belt",
   "shampoo",
   "shark",
   "sharpie",
   "shawl",
   "sheep",
   "sheet of paper",
   "shirt",
   "shirt button",
   "shoe lace",
   "shoes",
   "shopping bag",
   "shovel",
   "sidewalk",
   "sketch pad",
   "slipper",
   "small pouch",
   "snail shell",
   "snowglobe",
   "soap",
   "soccer ball",
   "socks",
   "sofa",
   "spatula",
   "speakers",
   "spectacles",
   "spice bottle",
   "sponge",
   "spool of ribbon",
   "spool of string",
   "spool of thread",
   "spool of wire",
   "spoon",
   "spring",
   "squirrel",
   "squirt gun",
   "statuette",
   "steak knife",
   "stick",
   "stick of incense",
   "sticker book",
   "sticky note",
   "stockings",
   "stop sign",
   "straw",
   "street lights",
   "sun glasses",
   "sword",
   "table",
   "tea cup",
   "tea pot",
   "teddies",
   "television",
   "tennis ball",
   "tennis racket",
   "thermometer",
   "thimble",
   "thread",
   "tiger",
   "tire swing",
   "tissue box",
   "toe ring",
   "toilet",
   "toilet paper tube",
   "tomato",
   "tooth pick",
   "toothbrush",
   "toothpaste",
   "toothpick",
   "towel",
   "toy boat",
   "toy car",
   "toy plane",
   "toy robot",
   "toy soldier",
   "toy top",
   "trash bag",
   "tree",
   "trucks",
   "tube of lip balm",
   "tube of lipstick",
   "turtle",
   "tv",
   "tweezers",
   "twister",
   "umbrella",
   "vase",
   "video games",
   "wallet",
   "washcloth",
   "washing machine",
   "watch",
   "water",
   "water bottle",
   "wedding ring",
   "whale",
   "whip",
   "whistle",
   "white out",
   "window",
   "wine glass",
   "wireless control",
   "wishbone",
   "wooden spoon",
   "word search",
   "wrench",
   "wristwatch",
   "zebra",
   "zipper",
"kid","boy","bot","Frodo","Parking Meter"
];

learning = ["do your taxes","cure cancer","invest in low-cost safe diversified mutual funds","cook Ma Po Tofu","write my code for me","write a tweet",
"accept",
	"add",
	"admire",
	"admit",
	"advise",
	"afford",
	"agree",
	"alert",
	"allow",
	"amuse",
	"analyse",
	"announce",
	"annoy",
	"answer",
	"apologise",
	"appear",
	"applaud",
	"appreciate",
	"approve",
	"argue",
	"arrange",
	"arrest",
	"arrive",
	"ask",
	"attach",
	"attack",
	"attempt",
	"attend",
	"attract",
	"avoid",
	"back",
	"bake",
	"balance",
	"ban",
	"bang",
	"bare",
	"bat",
	"bathe",
	"battle",
	"beam",
	"beg",
	"behave",
	"belong",
	"bleach",
	"bless",
	"blind",
	"blink",
	"blot",
	"blush",
	"boast",
	"boil",
	"bolt",
	"bomb",
	"book",
	"bore",
	"borrow",
	"bounce",
	"bow",
	"box",
	"brake",
	"branch",
	"breathe",
	"bruise",
	"brush",
	"bubble",
	"bump",
	"burn",
	"bury",
	"buzz",
	"calculate",
	"call",
	"camp",
	"care",
	"carry",
	"carve",
	"cause",
	"challenge",
	"change",
	"charge",
	"chase",
	"cheat",
	"check",
	"cheer",
	"chew",
	"choke",
	"chop",
	"claim",
	"clap",
	"clean",
	"clear",
	"clip",
	"close",
	"coach",
	"coil",
	"collect",
	"colour",
	"comb",
	"command",
	"communicate",
	"compare",
	"compete",
	"complain",
	"complete",
	"concentrate",
	"concern",
	"confess",
	"confuse",
	"connect",
	"consider",
	"consist",
	"contain",
	"continue",
	"copy",
	"correct",
	"cough",
	"count",
	"cover",
	"crack",
	"crash",
	"crawl",
	"cross",
	"crush",
	"cry",
	"cure",
	"curl",
	"curve",
	"cycle",
	"dam",
	"damage",
	"dance",
	"dare",
	"decay",
	"deceive",
	"decide",
	"decorate",
	"delay",
	"delight",
	"deliver",
	"depend",
	"describe",
	"desert",
	"deserve",
	"destroy",
	"detect",
	"develop",
	"disagree",
	"disappear",
	"disapprove",
	"disarm",
	"discover",
	"dislike",
	"divide",
	"double",
	"doubt",
	"drag",
	"drain",
	"dream",
	"dress",
	"drip",
	"drop",
	"drown",
	"drum",
	"dry",
	"dust",
	"earn",
	"educate",
	"embarrass",
	"employ",
	"empty",
	"encourage",
	"end",
	"enjoy",
	"enter",
	"entertain",
	"escape",
	"examine",
	"excite",
	"excuse",
	"exercise",
	"exist",
	"expand",
	"expect",
	"explain",
	"explode",
	"extend",
	"face",
	"fade",
	"fail",
	"fancy",
	"fasten",
	"fax",
	"fear",
	"fence",
	"fetch",
	"file",
	"fill",
	"film",
	"fire",
	"fit",
	"fix",
	"flap",
	"flash",
	"float",
	"flood",
	"flow",
	"flower",
	"fold",
	"follow",
	"fool",
	"force",
	"form",
	"found",
	"frame",
	"frighten",
	"fry",
	"gather",
	"gaze",
	"glow",
	"glue",
	"grab",
	"grate",
	"grease",
	"greet",
	"grin",
	"grip",
	"groan",
	"guarantee",
	"guard",
	"guess",
	"guide",
	"hammer",
	"hand",
	"handle",
	"hang",
	"happen",
	"harass",
	"harm",
	"hate",
	"haunt",
	"head",
	"heal",
	"heap",
	"heat",
	"help",
	"hook",
	"hop",
	"hope",
	"hover",
	"hug",
	"hum",
	"hunt",
	"hurry",
	"identify",
	"ignore",
	"imagine",
	"impress",
	"improve",
	"include",
	"increase",
	"influence",
	"inform",
	"inject",
	"injure",
	"instruct",
	"intend",
	"interest",
	"interfere",
	"interrupt",
	"introduce",
	"invent",
	"invite",
	"irritate",
	"itch",
	"jail",
	"jam",
	"jog",
	"join",
	"joke",
	"judge",
	"juggle",
	"jump",
	"kick",
	"kill",
	"kiss",
	"kneel",
	"knit",
	"knock",
	"knot",
	"label",
	"land",
	"last",
	"laugh",
	"launch",
	"learn",
	"level",
	"license",
	"lick",
	"lie",
	"lighten",
	"like",
	"list",
	"listen",
	"live",
	"load",
	"lock",
	"long",
	"look",
	"love",
	"man",
	"manage",
	"march",
	"mark",
	"marry",
	"match",
	"mate",
	"matter",
	"measure",
	"meddle",
	"melt",
	"memorise",
	"mend",
	"mess up",
	"milk",
	"mine",
	"miss",
	"mix",
	"moan",
	"moor",
	"mourn",
	"move",
	"muddle",
	"mug",
	"multiply",
	"murder",
	"nail",
	"name",
	"need",
	"nest",
	"nod",
	"note",
	"notice",
	"number",
	"obey",
	"object",
	"observe",
	"obtain",
	"occur",
	"offend",
	"offer",
	"open",
	"order",
	"overflow",
	"owe",
	"own",
	"pack",
	"paddle",
	"paint",
	"park",
	"part",
	"pass",
	"paste",
	"pat",
	"pause",
	"peck",
	"pedal",
	"peel",
	"peep",
	"perform",
	"permit",
	"phone",
	"pick",
	"pinch",
	"pine",
	"place",
	"plan",
	"plant",
	"play",
	"please",
	"plug",
	"point",
	"poke",
	"polish",
	"pop",
	"possess",
	"post",
	"pour",
	"practise",
	"pray",
	"preach",
	"precede",
	"prefer",
	"prepare",
	"present",
	"preserve",
	"press",
	"pretend",
	"prevent",
	"prick",
	"print",
	"produce",
	"program",
	"promise",
	"protect",
	"provide",
	"pull",
	"pump",
	"punch",
	"puncture",
	"punish",
	"push",
	"question",
	"queue",
	"race",
	"radiate",
	"rain",
	"raise",
	"reach",
	"realise",
	"receive",
	"recognise",
	"record",
	"reduce",
	"reflect",
	"refuse",
	"regret",
	"reign",
	"reject",
	"rejoice",
	"relax",
	"release",
	"rely",
	"remain",
	"remember",
	"remind",
	"remove",
	"repair",
	"repeat",
	"replace",
	"reply",
	"report",
	"reproduce",
	"request",
	"rescue",
	"retire",
	"return",
	"rhyme",
	"rinse",
	"risk",
	"rob",
	"rock",
	"roll",
	"rot",
	"rub",
	"ruin",
	"rule",
	"rush",
	"sack",
	"sail",
	"satisfy",
	"save",
	"saw",
	"scare",
	"scatter",
	"scold",
	"scorch",
	"scrape",
	"scratch",
	"scream",
	"screw",
	"scribble",
	"scrub",
	"seal",
	"search",
	"separate",
	"serve",
	"settle",
	"shade",
	"share",
	"shave",
	"shelter",
	"shiver",
	"shock",
	"shop",
	"shrug",
	"sigh",
	"sign",
	"signal",
	"sin",
	"sip",
	"ski",
	"skip",
	"slap",
	"slip",
	"slow",
	"smash",
	"smell",
	"smile",
	"smoke",
	"snatch",
	"sneeze",
	"sniff",
	"snore",
	"snow",
	"soak",
	"soothe",
	"sound",
	"spare",
	"spark",
	"sparkle",
	"spell",
	"spill",
	"spoil",
	"spot",
	"spray",
	"sprout",
	"squash",
	"squeak",
	"squeal",
	"squeeze",
	"stain",
	"stamp",
	"stare",
	"start",
	"stay",
	"steer",
	"step",
	"stir",
	"stitch",
	"stop",
	"store",
	"strap",
	"strengthen",
	"stretch",
	"strip",
	"stroke",
	"stuff",
	"subtract",
	"succeed",
	"suck",
	"suffer",
	"suggest",
	"suit",
	"supply"
];

var tweet = "You cannot teach a "+thing[Math.floor((Math.random() * thing.length))]+" to "+learning[Math.floor((Math.random() * learning.length))];
  //var tweet = 'Here\'s a random number between 0 and 100: ' + Math.floor(Math.random()*100);




  // Post that tweet!
  T.post('statuses/update', { status: tweet }, tweeted);

  // Callback for when the tweet is sent
  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
      //console.log(response);
    }
  };

}