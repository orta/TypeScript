//// [operationsAvailableOnPromisedType.ts]
async function fn(
    a: number,
    b: Promise<number>,
    c: Promise<string[]>,
    d: Promise<{ prop: string }>,
    e: Promise<() => void>,
    f: Promise<() => void> | (() => void),
    g: Promise<{ new(): any }>
) {
    // All errors
    a | b;
    b | a;
    a + b;
    a > b;
    b++;
    --b;
    a === b;
    [...c];
    for (const s of c) {
        fn(b, b, c, d, e, f, g);
        d.prop;
    }
    for await (const s of c) {}
    e();
    f();
    new g();
    b();
}


//// [operationsAvailableOnPromisedType.js]
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function fn(
a,
    b,
    c,
    d,
    e,
    f,
    g
) {
    var c_1, c_1_1;
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {var _i, c_2, s, s, e_1_1;
        return __generator(this, function (_b) {switch (_b.label) {case 0:
                    // All errors
                    a | b;
                    b | a;
                    a + b;
                    a > b;
                    b++;
                    --b;
                    a === b;
                    __spreadArrays(c);
                    for (_i = 0, c_2 = c; _i < c_2.length; _i++) {
                        s = c_2[_i];
                        fn(b, b, c, d, e, f, g);
                        d.prop;
                    }
                    _b.label = 1;
                case 1:_b.trys.push([1, 6, 7, 12]);
                    c_1 = __asyncValues(c);
                    _b.label = 2;
                case 2: return [4 /*yield*/, c_1.next()];
                case 3:if (!(c_1_1 = _b.sent(), !c_1_1.done)) return [3 /*break*/, 5];
                    s = c_1_1.value;
                    _b.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:_b.trys.push([7, , 10, 11]);
                    if (!(c_1_1 && !c_1_1.done && (_a = c_1["return"]))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(c_1)];
                case 8:_b.sent();
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    e();
                    f();
                    new g();
                    b();
                    return [2 /*return*/];
            }
        });
    });
}
