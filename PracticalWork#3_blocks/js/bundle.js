/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/cryptFromBinToStr.js":
/*!***************************************************************************************************************************************************!*\
  !*** ../../Lecture  #3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork #3_blocks/js/modules/cryptFromBinToStr.js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cryptFromBinaryToString)
/* harmony export */ });
function cryptFromBinaryToString(input) { 
    input = input.replaceAll(' ', '');
    let strResult = '';
    
    for (let i = 0; i < input.length - 1; i = i + 8) {
        const sBlock = input.slice(i, i + 8);
        strResult += String.fromCharCode(parseInt(sBlock, 2));
    }

    return strResult.split('').join('').trim(); 
}

/***/ }),

/***/ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/fromBinToStr.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../Lecture  #3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork #3_blocks/js/modules/fromBinToStr.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ convertfromBinaryToString)
/* harmony export */ });
/* harmony import */ var _shiftSblock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shiftSblock.js */ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/shiftSblock.js");
/* harmony import */ var _revTransPblock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./revTransPblock.js */ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/revTransPblock.js");



function convertfromBinaryToString(input) { 
    input = input.replaceAll(' ', '');
    let strResult = '';
    let orgBinArr = [];
    let pblockArr = [];
    let sblockArr = [];
    
    for (let i = 0; i < input.length - 1; i = i + 8) {
        sblockArr.push(input.slice(i, i + 8));
        const sBlock = (0,_shiftSblock_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input.slice(i, i + 8));
        pblockArr.push(sBlock);
        const result = (0,_revTransPblock_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sBlock);
        orgBinArr.push(result);
        strResult += String.fromCharCode(parseInt(result, 2));
    }

    console.log('S-blocks binary array:: ', sblockArr);
    console.log('P-blocks binary array: ', pblockArr);
    console.log('Original binary array: ', orgBinArr);

    return strResult.split('').join('').trim(); 
}

/***/ }),

/***/ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/fromStrToBin.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../Lecture  #3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork #3_blocks/js/modules/fromStrToBin.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ convertFromStringToBinary)
/* harmony export */ });
/* harmony import */ var _transPblock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transPblock.js */ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/transPblock.js");
/* harmony import */ var _shiftSblock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shiftSblock.js */ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/shiftSblock.js");



function convertFromStringToBinary(input) { 
    let binaryResult = '';
    let orgBinArr = [];
    let pblockArr = [];
    let sblockArr = [];
    
    for (const char of input) {
        const codePoint = char.codePointAt(0);
        let binaryValue = codePoint.toString(2);
        orgBinArr.push(binaryValue.padStart(8, '0'));
        binaryValue = (0,_transPblock_js__WEBPACK_IMPORTED_MODULE_0__["default"])(binaryValue.padStart(8, '0'));
        pblockArr.push(binaryValue);
        binaryValue = (0,_shiftSblock_js__WEBPACK_IMPORTED_MODULE_1__["default"])(binaryValue);
        sblockArr.push(binaryValue);
        binaryResult += binaryValue + ' ';
    }
    
    console.log('Original binary array: ', orgBinArr);
    console.log('P-blocks binary array: ', pblockArr);
    console.log('S-blocks binary array: ', sblockArr);

    return binaryResult.trim();
}

/***/ }),

/***/ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/revTransPblock.js":
/*!************************************************************************************************************************************************!*\
  !*** ../../Lecture  #3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork #3_blocks/js/modules/revTransPblock.js ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reversePermutationPblock)
/* harmony export */ });
function  reversePermutationPblock(input) {
    let strToArr = input.split('');
    let arrToStr = [];

    strToArr.forEach((el, i) => {
        if (i === 2 || i === 3 || i === 6 || i === 7) {
            arrToStr[i - 2] = strToArr[i];
        } else {
            arrToStr[i + 2] = strToArr[i];
        }
    });

    return arrToStr.join('');
}

/***/ }),

/***/ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/shiftSblock.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../Lecture  #3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork #3_blocks/js/modules/shiftSblock.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cyclicShiftOperation)
/* harmony export */ });
function cyclicShiftOperation(input) {
    let newArr = [];

    for (let i = 0; i < input.length; i = i + 4) {
        newArr.push(input.slice(i, i + 4));
    }

    return newArr.reverse().join('');
}

/***/ }),

/***/ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/transPblock.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../Lecture  #3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork #3_blocks/js/modules/transPblock.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ permutationPblock)
/* harmony export */ });
function  permutationPblock(input) {
    let strToArr = input.split('');
    let arrToStr = [];

    strToArr.forEach((el, i) => {
        if (i === 0 || i === 1 || i === 4 || i === 5) {
            arrToStr[i + 2] = strToArr[i];
        } else {
            arrToStr[i - 2] = strToArr[i];
        }
    });

    return arrToStr.join('');
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************************************************************************************************!*\
  !*** ../../Lecture  #3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork #3_blocks/js/script.js ***!
  \********************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_fromStrToBin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fromStrToBin.js */ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/fromStrToBin.js");
/* harmony import */ var _modules_fromBinToStr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fromBinToStr.js */ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/fromBinToStr.js");
/* harmony import */ var _modules_cryptFromBinToStr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cryptFromBinToStr.js */ "../../Lecture \u0000#3. Симетричне шифрування. Компоненти сучасних алгоритмів шифрування/PracticalWork\u0000#3_blocks/js/modules/cryptFromBinToStr.js");




const inputText = prompt('Please enter the data:');

const binary = (0,_modules_fromStrToBin_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputText);
console.log('inputText: ', inputText);
console.log('Entered text is encrypted: ', (0,_modules_cryptFromBinToStr_js__WEBPACK_IMPORTED_MODULE_2__["default"])(binary));
console.log('\n');

const outputText = (0,_modules_fromBinToStr_js__WEBPACK_IMPORTED_MODULE_1__["default"])(binary);
console.log('outputText: ', outputText);
console.log('\n');

console.log('inputText = outputText ? ', inputText === outputText);


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map