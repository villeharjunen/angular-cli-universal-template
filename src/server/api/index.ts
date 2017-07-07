import { api } from "./api";

export class API {

    constructor(private app) {
        new api(app);
    }

}
