

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Cx9atYHO.js","_app/immutable/chunks/scheduler.CWeWvrH3.js","_app/immutable/chunks/index.CyrKbYAC.js","_app/immutable/chunks/entry.CMxAG_f5.js"];
export const stylesheets = [];
export const fonts = [];
