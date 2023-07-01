"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const port = 8000;
const routes_1 = __importDefault(require("./routes"));
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
// Connect DB
db_1.default.connect();
// cors data
app.use((0, cors_1.default)());
// Express middleware
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json());
// Route init
(0, routes_1.default)(app);
// app listen port
app.listen(port, () => {
    console.log(`App is listening port localhost:${port}`);
});
//# sourceMappingURL=index.js.map