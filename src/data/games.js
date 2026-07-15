import fungeImg from '../assets/funge.png';

export const commercialGames = [
    {
        id: "funge",
        title: "Funge",
        description: {
            zh: "一款基于简化版神秘编程语言（Esolang）Befunge 的极简编程解谜游戏。学习其独特的规则，运行你的代码，征服那些烧脑的逻辑挑战。",
            en: "A minimalist programming puzzle game based on a simplified version of the esoteric programming language (Esolang) Befunge. Learn its unique rules, execute your code, and conquer those brain-burning logic challenges."
        },
        tags: {
            zh: ["解谜", "编程", "极简", "逻辑"],
            en: ["Puzzle", "Programming", "Minimalist", "Logic"]
        },
        image: fungeImg,
        links: [
            { platform: "Steam", url: "https://store.steampowered.com/search/?publisher=NoodleStorm" },
            { platform: "Itch.io", url: "https://noodle-storm.itch.io/" }
        ]
    }
    // 添加新的商业游戏只需在这里复制大括号内容
];

export const jamGames = [
    {
        id: "battleship",
        title: "BattleShip",
        description: {
            zh: "CiGA 2026 PMPS 站点冠军作品。",
            en: "CiGA 2026 PMPS Station Champion."
        },
        url: "https://noodle-storm.itch.io/battleship"
    },
    {
        id: "lightfold",
        title: "Lightfold",
        description: {
            zh: "光与推箱子机制结合的解谜游戏 —— MicroJam056 GameMaker引擎第二名。",
            en: "Light and Sokoban puzzle game - 2nd best GameMaker entry in MicroJam056."
        },
        url: "https://noodle-storm.itch.io/lightfold"
    },
    {
        id: "linverse",
        title: "Linverse",
        description: {
            zh: "MicroJam054 GameMaker引擎第二名。",
            en: "2nd best GameMaker entry in MicroJam054."
        },
        url: "https://noodle-storm.itch.io/linverse"
    },
    {
        id: "sokobloom",
        title: "Sokobloom",
        description: {
            zh: "B1T Jam-2 玩法维度第 12 名。",
            en: "#12 at Gameplay of B1T Jam-2."
        },
        url: "https://noodle-storm.itch.io/sokobloom"
    },
    {
        id: "keyboardcollector",
        title: "KeyboardCollector",
        description: {
            zh: "Ludum Dare 58 主题维度第 7 名。",
            en: "#7 at Theme in Ludum Dare 58."
        },
        url: "https://noodle-storm.itch.io/keyboardcollector"
    },
    {
        id: "isolatedcursor",
        title: "Isolated \"->\"",
        description: {
            zh: "为 Micro Jam 053 制作的推箱子实验作品。",
            en: "A sokoban game for Micro Jam 053."
        },
        url: "https://noodle-storm.itch.io/isolatedcursor"
    }
];
