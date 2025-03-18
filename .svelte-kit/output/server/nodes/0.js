

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8tTKjBYT.js","_app/immutable/chunks/scheduler.CySefv5k.js","_app/immutable/chunks/index.Db313SwB.js"];
export const stylesheets = ["_app/immutable/assets/0.C_2YVXYT.css"];
export const fonts = [];
