"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const middleware_1 = require("./middleware");
const express_1 = __importDefault(require("express"));
class App {
    constructor(app = (0, express_1.default)(), router = new middleware_1.MiddleWare(app)) {
        this.app = app;
        this.router = router;
        this.setMiddlewares();
    }
    getApp() {
        return this.app;
    }
    setMiddlewares() {
        return this.router;
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map