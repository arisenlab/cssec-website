import { cdn_url } from "../utils/constants";

const esports = [
    {
        id: "dota2",
        name: "DOTA 2",
        stream_link: "https://www.youtube.com/watch?v=csecZi0XQJE",
        logo: `${cdn_url}/esports/dota2-logo.png`,
        logoDimensions: [25, 25],
    },
    {
        id: "valorant",
        name: "Valorant",
        stream_link: "https://www.youtube.com/watch?v=GTcM3qCeup0",
        logo: `${cdn_url}/esports/valorant-logo.png`,
        logoDimensions: [25, 25],
    },
    {
        id: "lol",
        name: "League of Legends",
        stream_link: "https://www.youtube.com/watch?v=cpMjxfl6_o4&t=44s",
        logo: `${cdn_url}/esports/lol-logo.png`,
        logoDimensions: [25, 25],
    },
    {
        id: "ml",
        name: "Mobile Legends",
        stream_link: "https://www.youtube.com/watch?v=UwtO5MzNk9M",
        logo: `${cdn_url}/esports/ml-logo.png`,
        logoDimensions: [40, 25],
    },
];

export default esports;
