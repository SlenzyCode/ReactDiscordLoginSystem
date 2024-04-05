type Router = import("express").Router;

import { discord_get_user, get_user } from "./routes/user";

export default (router: Router) => {
    router.post("/get_user", get_user);
    router.post("/discord_get_user", discord_get_user);
};
