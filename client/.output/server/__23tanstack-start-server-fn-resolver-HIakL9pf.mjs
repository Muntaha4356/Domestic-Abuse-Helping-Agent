//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-HIakL9pf.js
var manifest = { "a321fe2194a921581fef2414e566f7a5282f648f08f25d41814b7f1c063e265f": {
	functionName: "sendChatMessage_createServerFn_handler",
	importer: () => import("./_ssr/sendChatMessage-bfqQGSb4.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
