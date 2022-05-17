"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
var database_1 = __importDefault(require("../database"));
var config_1 = __importDefault(require("../config"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var hash = function (password) {
    var salt = parseInt(config_1.default.salt, 10);
    return bcrypt_1.default.hashSync("".concat(password).concat(config_1.default.pepper), salt);
};
var users = /** @class */ (function () {
    function users() {
    }
    users.prototype.getall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        conn = database_1.default.connect();
                        sql = 'select id,name,telephone,address,email,payment_method_id from users';
                        return [4 /*yield*/, conn];
                    case 1:
                        result = (_a.sent()).query(sql);
                        return [4 /*yield*/, conn];
                    case 2:
                        //close the connection
                        (_a.sent()).release;
                        return [4 /*yield*/, result];
                    case 3: 
                    //return the result
                    return [2 /*return*/, (_a.sent()).rows];
                    case 4:
                        error_1 = _a.sent();
                        throw new Error("An error occurred ".concat(error_1));
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    users.prototype.create = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        conn = database_1.default.connect();
                        sql = "INSERT INTO users (name,telephone,address,email,payment_method_id,password) Values($1,$2,$3,$4,$5,$6) Returning\n             id,name,telephone,address,email,payment_method_id";
                        return [4 /*yield*/, conn];
                    case 1:
                        result = (_a.sent()).query(sql, [u.name, u.telephone, u.address, u.email, u.payment_method_id, hash(u.password)]);
                        return [4 /*yield*/, conn];
                    case 2:
                        //close the connection
                        (_a.sent()).release;
                        return [4 /*yield*/, result];
                    case 3: 
                    //return the result
                    return [2 /*return*/, (_a.sent()).rows[0]];
                    case 4:
                        error_2 = _a.sent();
                        throw new Error("An error occurred ".concat(error_2));
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    users.prototype.getone = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        conn = database_1.default.connect();
                        sql = "select id,name,telephone,address,email,payment_method_id from users where id=($1)";
                        return [4 /*yield*/, conn];
                    case 1:
                        result = (_a.sent()).query(sql, [id]);
                        return [4 /*yield*/, conn];
                    case 2:
                        //close the connection
                        (_a.sent()).release;
                        return [4 /*yield*/, result];
                    case 3: 
                    //return the result
                    return [2 /*return*/, (_a.sent()).rows[0]];
                    case 4:
                        error_3 = _a.sent();
                        throw new Error("An error occurred ".concat(error_3));
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    users.prototype.updateuser = function (u) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        conn = database_1.default.connect();
                        sql = "update users set name=$2,telephone=$3,address=$4,email=$5,payment_method_id=$6,password=$7 where id=($1) Returning\n             id,name,telephone,address,email,payment_method_id ";
                        return [4 /*yield*/, conn];
                    case 1:
                        result = (_a.sent()).query(sql, [u.id, u.name, u.telephone, u.address, u.email, u.payment_method_id, hash(u.password)]);
                        return [4 /*yield*/, conn];
                    case 2:
                        //close the connection
                        (_a.sent()).release;
                        return [4 /*yield*/, result];
                    case 3: 
                    //return the result
                    return [2 /*return*/, (_a.sent()).rows[0]];
                    case 4:
                        error_4 = _a.sent();
                        throw new Error("An error occurred ".concat(error_4));
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    users.prototype.deleteone = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, sql, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        conn = database_1.default.connect();
                        sql = "delete from users where id=($1)";
                        return [4 /*yield*/, conn];
                    case 1:
                        result = (_a.sent()).query(sql, [id]);
                        return [4 /*yield*/, conn];
                    case 2:
                        //close the connection
                        (_a.sent()).release;
                        return [4 /*yield*/, result];
                    case 3: 
                    //return the result
                    return [2 /*return*/, (_a.sent()).rows[0]];
                    case 4:
                        error_5 = _a.sent();
                        throw new Error("An error occurred ".concat(error_5));
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    users.prototype.authentication = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, hash_1, isPasswordValid, userInfo, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = 'select password from users where email=$1';
                        return [4 /*yield*/, connection.query(sql, [email])];
                    case 2:
                        result = _a.sent();
                        console.log(result.rows.length);
                        if (!result.rows.length) return [3 /*break*/, 4];
                        console.log(password);
                        hash_1 = result.rows[0].password;
                        console.log(hash_1);
                        isPasswordValid = bcrypt_1.default.compareSync("".concat(password).concat(config_1.default.pepper), hash_1);
                        console.log(isPasswordValid);
                        if (!isPasswordValid) return [3 /*break*/, 4];
                        return [4 /*yield*/, connection.query('select id,name,telephone,address,email,payment_method_id from users where email=($1)', [email])];
                    case 3:
                        userInfo = _a.sent();
                        console.log(userInfo.rows[0]);
                        return [2 /*return*/, userInfo.rows[0]];
                    case 4:
                        connection.release();
                        return [2 /*return*/, null];
                    case 5:
                        error_6 = _a.sent();
                        throw new Error("");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return users;
}());
exports.users = users;
