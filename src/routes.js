import MainMenu from "./pages/MainMenu";
import Highscore from "./pages/Highscore";
import Game from "./pages/Game";

export default {
    root: "MainMenu",
    routes: [
        {
            path: "MainMenu",
            component: MainMenu,
        },
        {
            path: "Game",
            component: Game,
        },
        {
            path: "Highscore",
            component: Highscore,
        },
    ],
};