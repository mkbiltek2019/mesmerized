import * as Modules from '@modules';

// generate a list of all refresh functions
// for each of the module
const moduleKeys = Object.keys(Modules);
const refreshFunctions = moduleKeys.reduce((arr, m) => {
    const module = Modules[m];
    const { Actions = {} } = module;
    const refreshFn = Actions.refresh;

    refreshFn && arr.push(refreshFn);

    return arr;
}, []);

export const refreshModules = () =>
    refreshFunctions.forEach(fn => fn());
