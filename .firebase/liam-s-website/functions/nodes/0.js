

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2dad20df.js","_app/immutable/chunks/index.0ecf0eff.js"];
export const stylesheets = [];
export const fonts = [];
