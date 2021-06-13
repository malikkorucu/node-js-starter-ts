"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const express_1 = tslib_1.__importDefault(require("express"));
const routing_controllers_1 = require("routing-controllers");
const UserController_1 = require("./controllers/UserController");
const app = routing_controllers_1.createExpressServer({
    routePrefix: '/api',
    controllers: [UserController_1.UserController],
});
app.use(express_1.default.json());
app.listen(3000, () => {
    console.log('server started');
});
//# sourceMappingURL=index.js.map