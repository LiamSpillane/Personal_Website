

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0ece7507.js","_app/immutable/chunks/index.0ecf0eff.js","_app/immutable/chunks/singletons.911458e3.js"];
export const stylesheets = [];
export const fonts = [];