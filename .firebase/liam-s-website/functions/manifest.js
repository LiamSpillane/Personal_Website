export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.5a1fff7a.js","app":"_app/immutable/entry/app.30f08102.js","imports":["_app/immutable/entry/start.5a1fff7a.js","_app/immutable/chunks/index.0ecf0eff.js","_app/immutable/chunks/singletons.911458e3.js","_app/immutable/entry/app.30f08102.js","_app/immutable/chunks/index.0ecf0eff.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
