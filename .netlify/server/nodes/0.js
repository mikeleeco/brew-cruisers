

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D64vZcgE.js","_app/immutable/chunks/scheduler.C-Huia6Z.js","_app/immutable/chunks/index.vU8Py8DW.js"];
export const stylesheets = ["_app/immutable/assets/0.UB5a0fWM.css"];
export const fonts = [];
