import {createHashHistory} from "history";

const history = createHashHistory();

export function redirect(path: string) {
    if (history.location.pathname !== path)
        history.push(path);
}

export default history;