export const TOGGLE_SETTING = 'TOGGLE_SETTING';
export const CHANGE_SETTING = 'CHANGE_SETTING';



export function changeSetting(name, value) {
    return { type: CHANGE_SETTING, name, value };
}

export function toggleSetting(name) {
    return { type: TOGGLE_SETTING, name };
}