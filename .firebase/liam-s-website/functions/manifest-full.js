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
		client: {"start":"_app/immutable/entry/start.bb58ba24.js","app":"_app/immutable/entry/app.7202def7.js","imports":["_app/immutable/entry/start.bb58ba24.js","_app/immutable/chunks/index.0ecf0eff.js","_app/immutable/chunks/singletons.17fa4f3e.js","_app/immutable/entry/app.7202def7.js","_app/immutable/chunks/index.0ecf0eff.js"],"stylesheets":[],"fonts":[]},
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
