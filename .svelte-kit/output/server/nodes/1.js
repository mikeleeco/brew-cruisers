

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.B8LbyUuZ.js","_app/immutable/chunks/scheduler.C-Huia6Z.js","_app/immutable/chunks/index.vU8Py8DW.js","_app/immutable/chunks/entry.Q7SEi8qI.js"];
export const stylesheets = [];
export const fonts = [];
