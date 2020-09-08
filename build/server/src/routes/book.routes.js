"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _book = _interopRequireDefault(require("../controllers/book.controller"));

var router = (0, _express.Router)();
router.get("/", _book["default"].getAllBooks);
router.post("/", _book["default"].addBook);
router.get("/:id", _book["default"].getABook);
router.put("/:id", _book["default"].updatedBook);
router["delete"]("/:id", _book["default"].deleteBook);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=book.routes.js.map