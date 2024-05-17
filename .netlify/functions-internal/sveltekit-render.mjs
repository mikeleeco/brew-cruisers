import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/Folder/.DS_Store","img/Folder/Brew1-01.png","img/Folder/Brew1-02.png","img/Folder/Brew1-03.png","img/Folder/Brew1-04.png","img/Folder/Brew1-05.png","img/Folder/Brew1-06.png","img/Folder/Brew1-07.png","img/Folder/Brew1-08.png","img/Folder/Brew1-09.png","img/logo.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.B9uvSAo2.js","app":"_app/immutable/entry/app.IV-P40y5.js","imports":["_app/immutable/entry/start.B9uvSAo2.js","_app/immutable/chunks/entry.3XsNXwZj.js","_app/immutable/chunks/scheduler.C-Huia6Z.js","_app/immutable/entry/app.IV-P40y5.js","_app/immutable/chunks/scheduler.C-Huia6Z.js","_app/immutable/chunks/index.vU8Py8DW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(app)/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/next-ride",
				pattern: /^\/next-ride\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/schedule",
				pattern: /^\/schedule\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
