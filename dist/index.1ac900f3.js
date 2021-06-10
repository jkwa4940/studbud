// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j6uLn":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "aa9dba8ca27d5955";
module.bundle.HMR_BUNDLE_ID = "7c4255091ac900f3"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6H5SI":[function(require,module,exports) {
var global = arguments[3];
(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && undefined;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                }
                var p = n[i] = {
                    exports: {
                    }
                };
                e[i][0].call(p.exports, function(r1) {
                    var n1 = e[i][1][r1];
                    return o(n1 || r1);
                }, p, p.exports, r, e, n, t);
            }
            return n[i].exports;
        }
        for(var u = "function" == typeof require && undefined, i = 0; i < t.length; i++)o(t[i]);
        return o;
    }
    return r;
})()({
    1: [
        function(require, module, exports) {
            /**
 * jKanban
 * Vanilla Javascript plugin for manage kanban boards
 *
 * @site: http://www.riccardotartaglia.it/jkanban/
 * @author: Riccardo Tartaglia
 */ //Require dragula
            var dragula = require('dragula');
            (function() {
                this.jKanban = function() {
                    var self = this;
                    var __DEFAULT_ITEM_HANDLE_OPTIONS = {
                        enabled: false
                    };
                    var __DEFAULT_ITEM_ADD_OPTIONS = {
                        enabled: false
                    };
                    this._disallowedItemProperties = [
                        'id',
                        'title',
                        'click',
                        'context',
                        'drag',
                        'dragend',
                        'drop',
                        'order'
                    ];
                    this.element = '';
                    this.container = '';
                    this.boardContainer = [];
                    this.handlers = [];
                    this.dragula = dragula;
                    this.drake = '';
                    this.drakeBoard = '';
                    this.itemAddOptions = __DEFAULT_ITEM_ADD_OPTIONS;
                    this.itemHandleOptions = __DEFAULT_ITEM_HANDLE_OPTIONS;
                    var defaults = {
                        element: '',
                        gutter: '15px',
                        widthBoard: '250px',
                        responsive: '700',
                        responsivePercentage: false,
                        boards: [],
                        dragBoards: true,
                        dragItems: true,
                        itemAddOptions: __DEFAULT_ITEM_ADD_OPTIONS,
                        itemHandleOptions: __DEFAULT_ITEM_HANDLE_OPTIONS,
                        dragEl: function(el, source) {
                        },
                        dragendEl: function(el) {
                        },
                        dropEl: function(el, target, source, sibling) {
                        },
                        dragBoard: function(el, source) {
                        },
                        dragendBoard: function(el) {
                        },
                        dropBoard: function(el, target, source, sibling) {
                        },
                        click: function(el) {
                        },
                        context: function(el, e) {
                        },
                        buttonClick: function(el, boardId) {
                        }
                    };
                    if (arguments[0] && typeof arguments[0] === 'object') this.options = __extendDefaults(defaults, arguments[0]);
                    this.__getCanMove = function(handle) {
                        if (!self.options.itemHandleOptions.enabled) return !!self.options.dragItems;
                        if (self.options.itemHandleOptions.handleClass) return handle.classList.contains(self.options.itemHandleOptions.handleClass);
                        return handle.classList.contains('item_handle');
                    };
                    this.init = function() {
                        //set initial boards
                        __setBoard();
                        //set drag with dragula
                        if (window.innerWidth > self.options.responsive) {
                            //Init Drag Board
                            self.drakeBoard = self.dragula([
                                self.container
                            ], {
                                moves: function(el, source, handle, sibling) {
                                    if (!self.options.dragBoards) return false;
                                    return handle.classList.contains('kanban-board-header') || handle.classList.contains('kanban-title-board');
                                },
                                accepts: function(el, target, source, sibling) {
                                    return target.classList.contains('kanban-container');
                                },
                                revertOnSpill: true,
                                direction: 'horizontal'
                            }).on('drag', function(el, source) {
                                el.classList.add('is-moving');
                                self.options.dragBoard(el, source);
                                if (typeof el.dragfn === 'function') el.dragfn(el, source);
                            }).on('dragend', function(el) {
                                __updateBoardsOrder();
                                el.classList.remove('is-moving');
                                self.options.dragendBoard(el);
                                if (typeof el.dragendfn === 'function') el.dragendfn(el);
                            }).on('drop', function(el, target, source, sibling) {
                                el.classList.remove('is-moving');
                                self.options.dropBoard(el, target, source, sibling);
                                if (typeof el.dropfn === 'function') el.dropfn(el, target, source, sibling);
                            });
                            //Init Drag Item
                            self.drake = self.dragula(self.boardContainer, {
                                moves: function(el, source, handle, sibling) {
                                    return self.__getCanMove(handle);
                                },
                                revertOnSpill: true
                            }).on('cancel', function(el, container, source) {
                                self.enableAllBoards();
                            }).on('drag', function(el, source) {
                                var elClass = el.getAttribute('class');
                                if (elClass !== '' && elClass.indexOf('not-draggable') > -1) {
                                    self.drake.cancel(true);
                                    return;
                                }
                                el.classList.add('is-moving');
                                self.options.dragEl(el, source);
                                var boardJSON = __findBoardJSON(source.parentNode.dataset.id);
                                if (boardJSON.dragTo !== undefined) self.options.boards.map(function(board) {
                                    if (boardJSON.dragTo.indexOf(board.id) === -1 && board.id !== source.parentNode.dataset.id) self.findBoard(board.id).classList.add('disabled-board');
                                });
                                if (el !== null && typeof el.dragfn === 'function') el.dragfn(el, source);
                            }).on('dragend', function(el) {
                                self.options.dragendEl(el);
                                if (el !== null && typeof el.dragendfn === 'function') el.dragendfn(el);
                            }).on('drop', function(el, target, source, sibling) {
                                self.enableAllBoards();
                                var boardJSON = __findBoardJSON(source.parentNode.dataset.id);
                                if (boardJSON.dragTo !== undefined) {
                                    if (boardJSON.dragTo.indexOf(target.parentNode.dataset.id) === -1 && target.parentNode.dataset.id !== source.parentNode.dataset.id) self.drake.cancel(true);
                                }
                                if (el !== null) {
                                    var result = self.options.dropEl(el, target, source, sibling);
                                    if (result === false) self.drake.cancel(true);
                                    el.classList.remove('is-moving');
                                    if (typeof el.dropfn === 'function') el.dropfn(el, target, source, sibling);
                                }
                            });
                        }
                    };
                    this.enableAllBoards = function() {
                        var allB = document.querySelectorAll('.kanban-board');
                        if (allB.length > 0 && allB !== undefined) for(var i = 0; i < allB.length; i++)allB[i].classList.remove('disabled-board');
                    };
                    this.addElement = function(boardID, element) {
                        var board = self.element.querySelector('[data-id="' + boardID + '"] .kanban-drag');
                        var nodeItem = document.createElement('div');
                        nodeItem.classList.add('kanban-item');
                        if (typeof element.id !== 'undefined' && element.id !== '') nodeItem.setAttribute('data-eid', element.id);
                        if (element.class && Array.isArray(element.class)) element.class.forEach(function(cl) {
                            nodeItem.classList.add(cl);
                        });
                        nodeItem.innerHTML = __buildItemCard(element);
                        //add function
                        nodeItem.clickfn = element.click;
                        nodeItem.contextfn = element.context;
                        nodeItem.dragfn = element.drag;
                        nodeItem.dragendfn = element.dragend;
                        nodeItem.dropfn = element.drop;
                        __appendCustomProperties(nodeItem, element);
                        __onclickHandler(nodeItem);
                        __onContextHandler(nodeItem);
                        if (self.options.itemHandleOptions.enabled) nodeItem.style.cursor = 'default';
                        board.appendChild(nodeItem);
                        return self;
                    };
                    this.addForm = function(boardID, formItem) {
                        var board = self.element.querySelector('[data-id="' + boardID + '"] .kanban-drag');
                        var _attribute = formItem.getAttribute('class');
                        formItem.setAttribute('class', _attribute + ' not-draggable');
                        board.appendChild(formItem);
                        return self;
                    };
                    this.addBoards = function(boards, isInit) {
                        if (self.options.responsivePercentage) {
                            self.container.style.width = '100%';
                            self.options.gutter = '1%';
                            if (window.innerWidth > self.options.responsive) var boardWidth = (100 - boards.length * 2) / boards.length;
                            else var boardWidth = 100 - boards.length * 2;
                        } else var boardWidth = self.options.widthBoard;
                        var addButton = self.options.itemAddOptions.enabled;
                        var buttonContent = self.options.itemAddOptions.content;
                        var buttonClass = self.options.itemAddOptions.class;
                        var buttonFooter = self.options.itemAddOptions.footer;
                        //for on all the boards
                        for(var boardkey in boards){
                            // single board
                            var board = boards[boardkey];
                            if (!isInit) self.options.boards.push(board);
                            if (!self.options.responsivePercentage) {
                                //add width to container
                                if (self.container.style.width === '') self.container.style.width = parseInt(boardWidth) + parseInt(self.options.gutter) * 2 + 'px';
                                else self.container.style.width = parseInt(self.container.style.width) + parseInt(boardWidth) + parseInt(self.options.gutter) * 2 + 'px';
                            }
                            //create node
                            var boardNode = document.createElement('div');
                            boardNode.dataset.id = board.id;
                            boardNode.dataset.order = self.container.childNodes.length + 1;
                            boardNode.classList.add('kanban-board');
                            //set style
                            if (self.options.responsivePercentage) boardNode.style.width = boardWidth + '%';
                            else boardNode.style.width = boardWidth;
                            boardNode.style.marginLeft = self.options.gutter;
                            boardNode.style.marginRight = self.options.gutter;
                            // header board
                            var headerBoard = document.createElement('header');
                            if (board.class !== '' && board.class !== undefined) var allClasses = board.class.split(',');
                            else allClasses = [];
                            headerBoard.classList.add('kanban-board-header');
                            allClasses.map(function(value) {
                                // Remove empty spaces
                                value = value.replace(/^[ ]+/g, '');
                                headerBoard.classList.add(value);
                            });
                            headerBoard.innerHTML = '<div class="kanban-title-board">' + board.title + '</div>';
                            //content board
                            var contentBoard = document.createElement('main');
                            contentBoard.classList.add('kanban-drag');
                            if (board.bodyClass !== '' && board.bodyClass !== undefined) var bodyClasses = board.bodyClass.split(',');
                            else bodyClasses = [];
                            bodyClasses.map(function(value) {
                                contentBoard.classList.add(value);
                            });
                            //add drag to array for dragula
                            self.boardContainer.push(contentBoard);
                            for(var itemkey in board.item){
                                //create item
                                var itemKanban = board.item[itemkey];
                                var nodeItem = document.createElement('div');
                                nodeItem.classList.add('kanban-item');
                                if (itemKanban.id) nodeItem.dataset.eid = itemKanban.id;
                                if (itemKanban.class && Array.isArray(itemKanban.class)) itemKanban.class.forEach(function(cl) {
                                    nodeItem.classList.add(cl);
                                });
                                nodeItem.innerHTML = __buildItemCard(itemKanban);
                                //add function
                                nodeItem.clickfn = itemKanban.click;
                                nodeItem.contextfn = itemKanban.context;
                                nodeItem.dragfn = itemKanban.drag;
                                nodeItem.dragendfn = itemKanban.dragend;
                                nodeItem.dropfn = itemKanban.drop;
                                __appendCustomProperties(nodeItem, itemKanban);
                                //add click handler of item
                                __onclickHandler(nodeItem);
                                __onContextHandler(nodeItem);
                                if (self.options.itemHandleOptions.enabled) nodeItem.style.cursor = 'default';
                                contentBoard.appendChild(nodeItem);
                            }
                            //footer board
                            var footerBoard = document.createElement('footer');
                            // if add button is true, add button to the board
                            if (addButton) {
                                var btn = document.createElement('BUTTON');
                                var t = document.createTextNode(buttonContent ? buttonContent : '+');
                                btn.setAttribute('class', buttonClass ? buttonClass : 'kanban-title-button btn btn-default btn-xs');
                                btn.appendChild(t);
                                //var buttonHtml = '<button class="kanban-title-button btn btn-default btn-xs">'+buttonContent+'</button>'
                                if (buttonFooter) footerBoard.appendChild(btn);
                                else headerBoard.appendChild(btn);
                                __onButtonClickHandler(btn, board.id);
                            }
                            //board assembly
                            boardNode.appendChild(headerBoard);
                            boardNode.appendChild(contentBoard);
                            boardNode.appendChild(footerBoard);
                            //board add
                            self.container.appendChild(boardNode);
                        }
                        return self;
                    };
                    this.findBoard = function(id) {
                        var el = self.element.querySelector('[data-id="' + id + '"]');
                        return el;
                    };
                    this.getParentBoardID = function(el) {
                        if (typeof el === 'string') el = self.element.querySelector('[data-eid="' + el + '"]');
                        if (el === null) return null;
                        return el.parentNode.parentNode.dataset.id;
                    };
                    this.moveElement = function(targetBoardID, elementID, element) {
                        if (targetBoardID === this.getParentBoardID(elementID)) return;
                        this.removeElement(elementID);
                        return this.addElement(targetBoardID, element);
                    };
                    this.replaceElement = function(el, element) {
                        var nodeItem = el;
                        if (typeof nodeItem === 'string') nodeItem = self.element.querySelector('[data-eid="' + el + '"]');
                        nodeItem.innerHTML = __buildItemCard(element);
                        // add function
                        nodeItem.clickfn = element.click;
                        nodeItem.contextfn = element.context;
                        nodeItem.dragfn = element.drag;
                        nodeItem.dragendfn = element.dragend;
                        nodeItem.dropfn = element.drop;
                        __appendCustomProperties(nodeItem, element);
                        __onclickHandler(nodeItem);
                        __onContextHandler(nodeItem);
                        return self;
                    };
                    this.findElement = function(id) {
                        var el = self.element.querySelector('[data-eid="' + id + '"]');
                        return el;
                    };
                    this.getBoardElements = function(id) {
                        var board = self.element.querySelector('[data-id="' + id + '"] .kanban-drag');
                        return board.childNodes;
                    };
                    this.removeElement = function(el) {
                        if (typeof el === 'string') el = self.element.querySelector('[data-eid="' + el + '"]');
                        if (el !== null) {
                            //fallback for IE
                            if (typeof el.remove == 'function') el.remove();
                            else el.parentNode.removeChild(el);
                        }
                        return self;
                    };
                    this.removeBoard = function(board) {
                        var boardElement = null;
                        if (typeof board === 'string') boardElement = self.element.querySelector('[data-id="' + board + '"]');
                        if (boardElement !== null) {
                            //fallback for IE
                            if (typeof boardElement.remove == 'function') boardElement.remove();
                            else boardElement.parentNode.removeChild(boardElement);
                        }
                        // remove thboard in options.boards
                        for(var i = 0; i < self.options.boards.length; i++)if (self.options.boards[i].id === board) {
                            self.options.boards.splice(i, 1);
                            break;
                        }
                        return self;
                    };
                    // board button on click function
                    this.onButtonClick = function(el) {
                    };
                    //PRIVATE FUNCTION
                    function __extendDefaults(source, properties) {
                        var property;
                        for(property in properties)if (properties.hasOwnProperty(property)) source[property] = properties[property];
                        return source;
                    }
                    function __setBoard() {
                        self.element = document.querySelector(self.options.element);
                        //create container
                        var boardContainer = document.createElement('div');
                        boardContainer.classList.add('kanban-container');
                        self.container = boardContainer;
                        //add boards
                        if (document.querySelector(self.options.element).dataset.hasOwnProperty('board')) {
                            url = document.querySelector(self.options.element).dataset.board;
                            window.fetch(url, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }).then((response)=>{
                                // log response text
                                response.json().then(function(data) {
                                    self.options.boards = data;
                                    self.addBoards(self.options.boards, true);
                                });
                            }).catch((error)=>{
                                console.log('Error: ', error);
                            });
                        } else self.addBoards(self.options.boards, true);
                        //appends to container
                        self.element.appendChild(self.container);
                    }
                    function __onclickHandler(nodeItem, clickfn) {
                        nodeItem.addEventListener('click', function(e) {
                            e.preventDefault();
                            self.options.click(this);
                            if (typeof this.clickfn === 'function') this.clickfn(this);
                        });
                    }
                    function __onContextHandler(nodeItem, contextfn) {
                        if (nodeItem.addEventListener) nodeItem.addEventListener('contextmenu', function(e) {
                            e.preventDefault();
                            self.options.context(this, e);
                            if (typeof this.contextfn === 'function') this.contextfn(this, e);
                        }, false);
                        else nodeItem.attachEvent('oncontextmenu', function() {
                            self.options.context(this);
                            if (typeof this.contextfn === 'function') this.contextfn(this);
                            window.event.returnValue = false;
                        });
                    }
                    function __onButtonClickHandler(nodeItem, boardId) {
                        nodeItem.addEventListener('click', function(e) {
                            e.preventDefault();
                            self.options.buttonClick(this, boardId);
                        // if(typeof(this.clickfn) === 'function')
                        //     this.clickfn(this);
                        });
                    }
                    function __findBoardJSON(id) {
                        var el = [];
                        self.options.boards.map(function(board) {
                            if (board.id === id) return el.push(board);
                        });
                        return el[0];
                    }
                    function __appendCustomProperties(element, parentObject) {
                        for(var propertyName in parentObject){
                            if (self._disallowedItemProperties.indexOf(propertyName) > -1) continue;
                            element.setAttribute('data-' + propertyName, parentObject[propertyName]);
                        }
                    }
                    function __updateBoardsOrder() {
                        var index = 1;
                        for(var i = 0; i < self.container.childNodes.length; i++)self.container.childNodes[i].dataset.order = index++;
                    }
                    function __buildItemTitle(title) {
                        var result = title;
                        if (self.options.itemHandleOptions.enabled) {
                            if ((self.options.itemHandleOptions.customHandler || undefined) === undefined) {
                                var customCssHandler = self.options.itemHandleOptions.customCssHandler;
                                var customCssIconHandler = self.options.itemHandleOptions.customCssIconHandler;
                                if ((customCssHandler || undefined) === undefined) customCssHandler = 'drag_handler';
                                if ((customCssIconHandler || undefined) === undefined) customCssIconHandler = customCssHandler + '_icon';
                                result = '<div class=\'item_handle ' + customCssHandler + '\'><i class=\'item_handle ' + customCssIconHandler + '\'></i></div><div>' + result + '</div>';
                            } else result = self.options.itemHandleOptions.customHandler.replace('%s', result);
                        }
                        return result;
                    }
                    function __buildItemCard(item) {
                        var result = 'title' in item ? item.title : '';
                        if (self.options.itemHandleOptions.enabled) {
                            if ((self.options.itemHandleOptions.customHandler || undefined) === undefined) {
                                var customCssHandler = self.options.itemHandleOptions.customCssHandler;
                                var customCssIconHandler = self.options.itemHandleOptions.customCssIconHandler;
                                var customItemLayout = self.options.itemHandleOptions.customItemLayout;
                                if ((customCssHandler || undefined) === undefined) customCssHandler = 'drag_handler';
                                if ((customCssIconHandler || undefined) === undefined) customCssIconHandler = customCssHandler + '_icon';
                                if ((customItemLayout || undefined) === undefined) customItemLayout = '';
                                result = '<div class=\'item_handle ' + customCssHandler + '\'><i class=\'item_handle ' + customCssIconHandler + '\'></i></div><div>' + result + '</div>';
                            } else {
                                result = '<div> ' + self.options.itemHandleOptions.customHandler.replace(/%([^%]+)%/g, (match, key)=>{
                                    return item[key] !== undefined ? item[key] : '';
                                }) + ' </div>';
                                return result;
                            }
                        }
                        return result;
                    }
                    //init plugin
                    this.init();
                };
            })();
        },
        {
            "dragula": 9
        }
    ],
    2: [
        function(require, module, exports) {
            module.exports = function atoa(a, n) {
                return Array.prototype.slice.call(a, n);
            };
        },
        {
        }
    ],
    3: [
        function(require, module, exports) {
            'use strict';
            var ticky = require('ticky');
            module.exports = function debounce(fn, args, ctx) {
                if (!fn) return;
                ticky(function run() {
                    fn.apply(ctx || null, args || []);
                });
            };
        },
        {
            "ticky": 11
        }
    ],
    4: [
        function(require, module, exports) {
            'use strict';
            var atoa = require('atoa');
            var debounce = require('./debounce');
            module.exports = function emitter(thing, options) {
                var opts = options || {
                };
                var evt = {
                };
                if (thing === undefined) thing = {
                };
                thing.on = function(type, fn) {
                    if (!evt[type]) evt[type] = [
                        fn
                    ];
                    else evt[type].push(fn);
                    return thing;
                };
                thing.once = function(type, fn) {
                    fn._once = true; // thing.off(fn) still works!
                    thing.on(type, fn);
                    return thing;
                };
                thing.off = function(type, fn) {
                    var c = arguments.length;
                    if (c === 1) delete evt[type];
                    else if (c === 0) evt = {
                    };
                    else {
                        var et = evt[type];
                        if (!et) return thing;
                        et.splice(et.indexOf(fn), 1);
                    }
                    return thing;
                };
                thing.emit = function() {
                    var args = atoa(arguments);
                    return thing.emitterSnapshot(args.shift()).apply(this, args);
                };
                thing.emitterSnapshot = function(type) {
                    var et = (evt[type] || []).slice(0);
                    return function() {
                        var args = atoa(arguments);
                        var ctx = this || thing;
                        if (type === 'error' && opts.throws !== false && !et.length) throw args.length === 1 ? args[0] : args;
                        et.forEach(function emitter1(listen) {
                            if (opts.async) debounce(listen, args, ctx);
                            else listen.apply(ctx, args);
                            if (listen._once) thing.off(type, listen);
                        });
                        return thing;
                    };
                };
                return thing;
            };
        },
        {
            "./debounce": 3,
            "atoa": 2
        }
    ],
    5: [
        function(require, module, exports) {
            (function(global1) {
                (function() {
                    var customEvent = require('custom-event');
                    var eventmap = require('./eventmap');
                    var doc = global1.document;
                    var addEvent = addEventEasy;
                    var removeEvent = removeEventEasy;
                    var hardCache = [];
                    if (!global1.addEventListener) {
                        addEvent = addEventHard;
                        removeEvent = removeEventHard;
                    }
                    module.exports = {
                        add: addEvent,
                        remove: removeEvent,
                        fabricate: fabricateEvent
                    };
                    function addEventEasy(el, type, fn, capturing) {
                        return el.addEventListener(type, fn, capturing);
                    }
                    function addEventHard(el, type, fn) {
                        return el.attachEvent('on' + type, wrap(el, type, fn));
                    }
                    function removeEventEasy(el, type, fn, capturing) {
                        return el.removeEventListener(type, fn, capturing);
                    }
                    function removeEventHard(el, type, fn) {
                        var listener = unwrap(el, type, fn);
                        if (listener) return el.detachEvent('on' + type, listener);
                    }
                    function fabricateEvent(el, type, model) {
                        var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
                        if (el.dispatchEvent) el.dispatchEvent(e);
                        else el.fireEvent('on' + type, e);
                        function makeClassicEvent() {
                            var e1;
                            if (doc.createEvent) {
                                e1 = doc.createEvent('Event');
                                e1.initEvent(type, true, true);
                            } else if (doc.createEventObject) e1 = doc.createEventObject();
                            return e1;
                        }
                        function makeCustomEvent() {
                            return new customEvent(type, {
                                detail: model
                            });
                        }
                    }
                    function wrapperFactory(el, type, fn) {
                        return function wrapper(originalEvent) {
                            var e = originalEvent || global1.event;
                            e.target = e.target || e.srcElement;
                            e.preventDefault = e.preventDefault || function preventDefault() {
                                e.returnValue = false;
                            };
                            e.stopPropagation = e.stopPropagation || function stopPropagation() {
                                e.cancelBubble = true;
                            };
                            e.which = e.which || e.keyCode;
                            fn.call(el, e);
                        };
                    }
                    function wrap(el, type, fn) {
                        var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
                        hardCache.push({
                            wrapper: wrapper,
                            element: el,
                            type: type,
                            fn: fn
                        });
                        return wrapper;
                    }
                    function unwrap(el, type, fn) {
                        var i = find(el, type, fn);
                        if (i) {
                            var wrapper = hardCache[i].wrapper;
                            hardCache.splice(i, 1); // free up a tad of memory
                            return wrapper;
                        }
                    }
                    function find(el, type, fn) {
                        var i, item;
                        for(i = 0; i < hardCache.length; i++){
                            item = hardCache[i];
                            if (item.element === el && item.type === type && item.fn === fn) return i;
                        }
                    }
                }).call(this);
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
            });
        },
        {
            "./eventmap": 6,
            "custom-event": 7
        }
    ],
    6: [
        function(require, module, exports) {
            (function(global1) {
                (function() {
                    var eventmap = [];
                    var eventname = '';
                    var ron = /^on/;
                    for(eventname in global1)if (ron.test(eventname)) eventmap.push(eventname.slice(2));
                    module.exports = eventmap;
                }).call(this);
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
            });
        },
        {
        }
    ],
    7: [
        function(require, module, exports) {
            (function(global1) {
                (function() {
                    var NativeCustomEvent = global1.CustomEvent;
                    function useNative() {
                        try {
                            var p = new NativeCustomEvent('cat', {
                                detail: {
                                    foo: 'bar'
                                }
                            });
                            return 'cat' === p.type && 'bar' === p.detail.foo;
                        } catch (e) {
                        }
                        return false;
                    }
                    /**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */ module.exports = useNative() ? NativeCustomEvent : // IE >= 9
                    'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent1(type, params) {
                        var e = document.createEvent('CustomEvent');
                        if (params) e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
                        else e.initCustomEvent(type, false, false, void 0);
                        return e;
                    } : // IE <= 8
                    function CustomEvent2(type, params) {
                        var e = document.createEventObject();
                        e.type = type;
                        if (params) {
                            e.bubbles = Boolean(params.bubbles);
                            e.cancelable = Boolean(params.cancelable);
                            e.detail = params.detail;
                        } else {
                            e.bubbles = false;
                            e.cancelable = false;
                            e.detail = void 0;
                        }
                        return e;
                    };
                }).call(this);
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
            });
        },
        {
        }
    ],
    8: [
        function(require, module, exports) {
            'use strict';
            var cache = {
            };
            var start = '(?:^|\\s)';
            var end = '(?:\\s|$)';
            function lookupClass(className) {
                var cached = cache[className];
                if (cached) cached.lastIndex = 0;
                else cache[className] = cached = new RegExp(start + className + end, 'g');
                return cached;
            }
            function addClass(el, className) {
                var current = el.className;
                if (!current.length) el.className = className;
                else if (!lookupClass(className).test(current)) el.className += ' ' + className;
            }
            function rmClass(el, className) {
                el.className = el.className.replace(lookupClass(className), ' ').trim();
            }
            module.exports = {
                add: addClass,
                rm: rmClass
            };
        },
        {
        }
    ],
    9: [
        function(require, module, exports) {
            (function(global1) {
                (function() {
                    var emitter = require('contra/emitter');
                    var crossvent = require('crossvent');
                    var classes = require('./classes');
                    var doc = document;
                    var documentElement = doc.documentElement;
                    function dragula(initialContainers, options) {
                        var len = arguments.length;
                        if (len === 1 && Array.isArray(initialContainers) === false) {
                            options = initialContainers;
                            initialContainers = [];
                        }
                        var _mirror; // mirror image
                        var _source; // source container
                        var _item; // item being dragged
                        var _offsetX; // reference x
                        var _offsetY; // reference y
                        var _moveX; // reference move x
                        var _moveY; // reference move y
                        var _initialSibling; // reference sibling when grabbed
                        var _currentSibling; // reference sibling now
                        var _copy; // item used for copying
                        var _renderTimer; // timer for setTimeout renderMirrorImage
                        var _lastDropTarget = null; // last container item was over
                        var _grabbed; // holds mousedown context until first mousemove
                        var o = options || {
                        };
                        if (o.moves === void 0) o.moves = always;
                        if (o.accepts === void 0) o.accepts = always;
                        if (o.invalid === void 0) o.invalid = invalidTarget;
                        if (o.containers === void 0) o.containers = initialContainers || [];
                        if (o.isContainer === void 0) o.isContainer = never;
                        if (o.copy === void 0) o.copy = false;
                        if (o.copySortSource === void 0) o.copySortSource = false;
                        if (o.revertOnSpill === void 0) o.revertOnSpill = false;
                        if (o.removeOnSpill === void 0) o.removeOnSpill = false;
                        if (o.direction === void 0) o.direction = 'vertical';
                        if (o.ignoreInputTextSelection === void 0) o.ignoreInputTextSelection = true;
                        if (o.mirrorContainer === void 0) o.mirrorContainer = doc.body;
                        var drake = emitter({
                            containers: o.containers,
                            start: manualStart,
                            end: end,
                            cancel: cancel,
                            remove: remove,
                            destroy: destroy,
                            canMove: canMove,
                            dragging: false
                        });
                        if (o.removeOnSpill === true) drake.on('over', spillOver).on('out', spillOut);
                        events();
                        function isContainer(el) {
                            return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
                        }
                        function events(remove) {
                            var op = remove ? 'remove' : 'add';
                            touchy(documentElement, op, 'mousedown', grab);
                            touchy(documentElement, op, 'mouseup', release);
                        }
                        function eventualMovements(remove) {
                            var op = remove ? 'remove' : 'add';
                            touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
                        }
                        function movements(remove) {
                            var op = remove ? 'remove' : 'add';
                            crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
                            crossvent[op](documentElement, 'click', preventGrabbed);
                        }
                        function destroy() {
                            events(true);
                            release({
                            });
                        }
                        function preventGrabbed(e) {
                            if (_grabbed) {
                                e.preventDefault();
                            }
                        }
                        function grab(e) {
                            _moveX = e.clientX;
                            _moveY = e.clientY;
                            var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
                            if (ignore) {
                                return; // we only care about honest-to-god left clicks and touch events
                            }
                            var item = e.target;
                            var context = canStart(item);
                            if (!context) {
                                return;
                            }
                            _grabbed = context;
                            eventualMovements();
                            if (e.type === 'mousedown') {
                                if (isInput(item)) {
                                    item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
                                } else {
                                    e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
                                }
                            }
                        }
                        function startBecauseMouseMoved(e) {
                            if (!_grabbed) {
                                return;
                            }
                            if (whichMouseButton(e) === 0) {
                                release({
                                });
                                return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
                            }
                            // truthy check fixes #239, equality fixes #207, fixes #501
                            if (e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0) && e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0)) {
                                return;
                            }
                            if (o.ignoreInputTextSelection) {
                                var clientX = getCoord('clientX', e) || 0;
                                var clientY = getCoord('clientY', e) || 0;
                                var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
                                if (isInput(elementBehindCursor)) {
                                    return;
                                }
                            }
                            var grabbed = _grabbed; // call to end() unsets _grabbed
                            eventualMovements(true);
                            movements();
                            end();
                            start(grabbed);
                            var offset = getOffset(_item);
                            _offsetX = getCoord('pageX', e) - offset.left;
                            _offsetY = getCoord('pageY', e) - offset.top;
                            classes.add(_copy || _item, 'gu-transit');
                            renderMirrorImage();
                            drag(e);
                        }
                        function canStart(item) {
                            if (drake.dragging && _mirror) {
                                return;
                            }
                            if (isContainer(item)) {
                                return; // don't drag container itself
                            }
                            var handle = item;
                            while(getParent(item) && isContainer(getParent(item)) === false){
                                if (o.invalid(item, handle)) {
                                    return;
                                }
                                item = getParent(item); // drag target should be a top element
                                if (!item) {
                                    return;
                                }
                            }
                            var source = getParent(item);
                            if (!source) {
                                return;
                            }
                            if (o.invalid(item, handle)) {
                                return;
                            }
                            var movable = o.moves(item, source, handle, nextEl(item));
                            if (!movable) {
                                return;
                            }
                            return {
                                item: item,
                                source: source
                            };
                        }
                        function canMove(item) {
                            return !!canStart(item);
                        }
                        function manualStart(item) {
                            var context = canStart(item);
                            if (context) {
                                start(context);
                            }
                        }
                        function start(context) {
                            if (isCopy(context.item, context.source)) {
                                _copy = context.item.cloneNode(true);
                                drake.emit('cloned', _copy, context.item, 'copy');
                            }
                            _source = context.source;
                            _item = context.item;
                            _initialSibling = _currentSibling = nextEl(context.item);
                            drake.dragging = true;
                            drake.emit('drag', _item, _source);
                        }
                        function invalidTarget() {
                            return false;
                        }
                        function end() {
                            if (!drake.dragging) {
                                return;
                            }
                            var item = _copy || _item;
                            drop(item, getParent(item));
                        }
                        function ungrab() {
                            _grabbed = false;
                            eventualMovements(true);
                            movements(true);
                        }
                        function release(e) {
                            ungrab();
                            if (!drake.dragging) {
                                return;
                            }
                            var item = _copy || _item;
                            var clientX = getCoord('clientX', e) || 0;
                            var clientY = getCoord('clientY', e) || 0;
                            var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
                            var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
                            if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
                                drop(item, dropTarget);
                            } else if (o.removeOnSpill) {
                                remove();
                            } else {
                                cancel();
                            }
                        }
                        function drop(item, target) {
                            var parent = getParent(item);
                            if (_copy && o.copySortSource && target === _source) {
                                parent.removeChild(_item);
                            }
                            if (isInitialPlacement(target)) {
                                drake.emit('cancel', item, _source, _source);
                            } else {
                                drake.emit('drop', item, target, _source, _currentSibling);
                            }
                            cleanup();
                        }
                        function remove() {
                            if (!drake.dragging) {
                                return;
                            }
                            var item = _copy || _item;
                            var parent = getParent(item);
                            if (parent) {
                                parent.removeChild(item);
                            }
                            drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
                            cleanup();
                        }
                        function cancel(revert) {
                            if (!drake.dragging) {
                                return;
                            }
                            var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
                            var item = _copy || _item;
                            var parent = getParent(item);
                            var initial = isInitialPlacement(parent);
                            if (initial === false && reverts) {
                                if (_copy) {
                                    if (parent) {
                                        parent.removeChild(_copy);
                                    }
                                } else {
                                    _source.insertBefore(item, _initialSibling);
                                }
                            }
                            if (initial || reverts) {
                                drake.emit('cancel', item, _source, _source);
                            } else {
                                drake.emit('drop', item, parent, _source, _currentSibling);
                            }
                            cleanup();
                        }
                        function cleanup() {
                            var item = _copy || _item;
                            ungrab();
                            removeMirrorImage();
                            if (item) {
                                classes.rm(item, 'gu-transit');
                            }
                            if (_renderTimer) {
                                clearTimeout(_renderTimer);
                            }
                            drake.dragging = false;
                            if (_lastDropTarget) {
                                drake.emit('out', item, _lastDropTarget, _source);
                            }
                            drake.emit('dragend', item);
                            _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
                        }
                        function isInitialPlacement(target, s) {
                            var sibling;
                            if (s !== void 0) {
                                sibling = s;
                            } else if (_mirror) {
                                sibling = _currentSibling;
                            } else {
                                sibling = nextEl(_copy || _item);
                            }
                            return target === _source && sibling === _initialSibling;
                        }
                        function findDropTarget(elementBehindCursor, clientX, clientY) {
                            var target = elementBehindCursor;
                            while(target && !accepted()){
                                target = getParent(target);
                            }
                            return target;
                            function accepted() {
                                var droppable = isContainer(target);
                                if (droppable === false) {
                                    return false;
                                }
                                var immediate = getImmediateChild(target, elementBehindCursor);
                                var reference = getReference(target, immediate, clientX, clientY);
                                var initial = isInitialPlacement(target, reference);
                                if (initial) {
                                    return true; // should always be able to drop it right back where it was
                                }
                                return o.accepts(_item, target, _source, reference);
                            }
                        }
                        function drag(e) {
                            if (!_mirror) {
                                return;
                            }
                            e.preventDefault();
                            var clientX = getCoord('clientX', e) || 0;
                            var clientY = getCoord('clientY', e) || 0;
                            var x = clientX - _offsetX;
                            var y = clientY - _offsetY;
                            _mirror.style.left = x + 'px';
                            _mirror.style.top = y + 'px';
                            var item = _copy || _item;
                            var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
                            var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
                            var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
                            if (changed || dropTarget === null) {
                                out();
                                _lastDropTarget = dropTarget;
                                over();
                            }
                            var parent = getParent(item);
                            if (dropTarget === _source && _copy && !o.copySortSource) {
                                if (parent) {
                                    parent.removeChild(item);
                                }
                                return;
                            }
                            var reference;
                            var immediate = getImmediateChild(dropTarget, elementBehindCursor);
                            if (immediate !== null) {
                                reference = getReference(dropTarget, immediate, clientX, clientY);
                            } else if (o.revertOnSpill === true && !_copy) {
                                reference = _initialSibling;
                                dropTarget = _source;
                            } else {
                                if (_copy && parent) {
                                    parent.removeChild(item);
                                }
                                return;
                            }
                            if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
                                _currentSibling = reference;
                                dropTarget.insertBefore(item, reference);
                                drake.emit('shadow', item, dropTarget, _source);
                            }
                            function moved(type) {
                                drake.emit(type, item, _lastDropTarget, _source);
                            }
                            function over() {
                                if (changed) {
                                    moved('over');
                                }
                            }
                            function out() {
                                if (_lastDropTarget) {
                                    moved('out');
                                }
                            }
                        }
                        function spillOver(el) {
                            classes.rm(el, 'gu-hide');
                        }
                        function spillOut(el) {
                            if (drake.dragging) {
                                classes.add(el, 'gu-hide');
                            }
                        }
                        function renderMirrorImage() {
                            if (_mirror) {
                                return;
                            }
                            var rect = _item.getBoundingClientRect();
                            _mirror = _item.cloneNode(true);
                            _mirror.style.width = getRectWidth(rect) + 'px';
                            _mirror.style.height = getRectHeight(rect) + 'px';
                            classes.rm(_mirror, 'gu-transit');
                            classes.add(_mirror, 'gu-mirror');
                            o.mirrorContainer.appendChild(_mirror);
                            touchy(documentElement, 'add', 'mousemove', drag);
                            classes.add(o.mirrorContainer, 'gu-unselectable');
                            drake.emit('cloned', _mirror, _item, 'mirror');
                        }
                        function removeMirrorImage() {
                            if (_mirror) {
                                classes.rm(o.mirrorContainer, 'gu-unselectable');
                                touchy(documentElement, 'remove', 'mousemove', drag);
                                getParent(_mirror).removeChild(_mirror);
                                _mirror = null;
                            }
                        }
                        function getImmediateChild(dropTarget, target) {
                            var immediate = target;
                            while(immediate !== dropTarget && getParent(immediate) !== dropTarget){
                                immediate = getParent(immediate);
                            }
                            if (immediate === documentElement) {
                                return null;
                            }
                            return immediate;
                        }
                        function getReference(dropTarget, target, x, y) {
                            var horizontal = o.direction === 'horizontal';
                            var reference = target !== dropTarget ? inside() : outside();
                            return reference;
                            function outside() {
                                var len1 = dropTarget.children.length;
                                var i;
                                var el;
                                var rect;
                                for(i = 0; i < len1; i++){
                                    el = dropTarget.children[i];
                                    rect = el.getBoundingClientRect();
                                    if (horizontal && rect.left + rect.width / 2 > x) {
                                        return el;
                                    }
                                    if (!horizontal && rect.top + rect.height / 2 > y) {
                                        return el;
                                    }
                                }
                                return null;
                            }
                            function inside() {
                                var rect = target.getBoundingClientRect();
                                if (horizontal) {
                                    return resolve(x > rect.left + getRectWidth(rect) / 2);
                                }
                                return resolve(y > rect.top + getRectHeight(rect) / 2);
                            }
                            function resolve(after) {
                                return after ? nextEl(target) : target;
                            }
                        }
                        function isCopy(item, container) {
                            return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
                        }
                        return drake;
                    }
                    function touchy(el, op, type, fn) {
                        var touch = {
                            mouseup: 'touchend',
                            mousedown: 'touchstart',
                            mousemove: 'touchmove'
                        };
                        var pointers = {
                            mouseup: 'pointerup',
                            mousedown: 'pointerdown',
                            mousemove: 'pointermove'
                        };
                        var microsoft = {
                            mouseup: 'MSPointerUp',
                            mousedown: 'MSPointerDown',
                            mousemove: 'MSPointerMove'
                        };
                        if (global1.navigator.pointerEnabled) crossvent[op](el, pointers[type], fn);
                        else if (global1.navigator.msPointerEnabled) crossvent[op](el, microsoft[type], fn);
                        else {
                            crossvent[op](el, touch[type], fn);
                            crossvent[op](el, type, fn);
                        }
                    }
                    function whichMouseButton(e) {
                        if (e.touches !== void 0) return e.touches.length;
                        if (e.which !== void 0 && e.which !== 0) return e.which;
                         // see https://github.com/bevacqua/dragula/issues/261
                        if (e.buttons !== void 0) return e.buttons;
                        var button = e.button;
                        if (button !== void 0) return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                    }
                    function getOffset(el) {
                        var rect = el.getBoundingClientRect();
                        return {
                            left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
                            top: rect.top + getScroll('scrollTop', 'pageYOffset')
                        };
                    }
                    function getScroll(scrollProp, offsetProp) {
                        if (typeof global1[offsetProp] !== 'undefined') return global1[offsetProp];
                        if (documentElement.clientHeight) return documentElement[scrollProp];
                        return doc.body[scrollProp];
                    }
                    function getElementBehindPoint(point, x, y) {
                        point = point || {
                        };
                        var state = point.className || '';
                        var el;
                        point.className += ' gu-hide';
                        el = doc.elementFromPoint(x, y);
                        point.className = state;
                        return el;
                    }
                    function never() {
                        return false;
                    }
                    function always() {
                        return true;
                    }
                    function getRectWidth(rect) {
                        return rect.width || rect.right - rect.left;
                    }
                    function getRectHeight(rect) {
                        return rect.height || rect.bottom - rect.top;
                    }
                    function getParent(el) {
                        return el.parentNode === doc ? null : el.parentNode;
                    }
                    function isInput(el) {
                        return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
                    }
                    function isEditable(el) {
                        if (!el) return false;
                         // no parents were editable
                        if (el.contentEditable === 'false') return false;
                         // stop the lookup
                        if (el.contentEditable === 'true') return true;
                         // found a contentEditable element in the chain
                        return isEditable(getParent(el)); // contentEditable is set to 'inherit'
                    }
                    function nextEl(el) {
                        function manually() {
                            var sibling = el;
                            do {
                                sibling = sibling.nextSibling;
                            }while (sibling && sibling.nodeType !== 1)
                            return sibling;
                        }
                        return el.nextElementSibling || manually();
                    }
                    function getEventHost(e) {
                        // on touchend event, we have to use `e.changedTouches`
                        // see http://stackoverflow.com/questions/7192563/touchend-event-properties
                        // see https://github.com/bevacqua/dragula/issues/34
                        if (e.targetTouches && e.targetTouches.length) return e.targetTouches[0];
                        if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0];
                        return e;
                    }
                    function getCoord(coord, e) {
                        var host = getEventHost(e);
                        var missMap = {
                            pageX: 'clientX',
                            pageY: 'clientY'
                        };
                        if (coord in missMap && !(coord in host) && missMap[coord] in host) coord = missMap[coord];
                        return host[coord];
                    }
                    module.exports = dragula;
                }).call(this);
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {
            });
        },
        {
            "./classes": 8,
            "contra/emitter": 4,
            "crossvent": 5
        }
    ],
    10: [
        function(require, module, exports) {
            // shim for using process in browser
            var process = module.exports = {
            };
            // cached from whatever global is present so that test runners that stub it
            // don't break things.  But we need to wrap it in a try catch in case it is
            // wrapped in strict mode code which doesn't define any globals.  It's inside a
            // function because try/catches deoptimize in certain engines.
            var cachedSetTimeout;
            var cachedClearTimeout;
            function defaultSetTimout() {
                throw new Error('setTimeout has not been defined');
            }
            function defaultClearTimeout() {
                throw new Error('clearTimeout has not been defined');
            }
            (function() {
                try {
                    if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
                    else cachedSetTimeout = defaultSetTimout;
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
                    else cachedClearTimeout = defaultClearTimeout;
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            })();
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
                return setTimeout(fun, 0);
                // if setTimeout wasn't available but was latter defined
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e1) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
                return clearTimeout(marker);
                // if clearTimeout wasn't available but was latter defined
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                        return cachedClearTimeout.call(null, marker);
                    } catch (e1) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;
            function cleanUpNextTick() {
                if (!draining || !currentQueue) return;
                draining = false;
                if (currentQueue.length) queue = currentQueue.concat(queue);
                else queueIndex = -1;
                if (queue.length) drainQueue();
            }
            function drainQueue() {
                if (draining) return;
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while(len){
                    currentQueue = queue;
                    queue = [];
                    while((++queueIndex) < len)if (currentQueue) currentQueue[queueIndex].run();
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }
            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) runTimeout(drainQueue);
            };
            // v8 likes predictible objects
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            process.title = 'browser';
            process.browser = true;
            process.env = {
            };
            process.argv = [];
            process.version = ''; // empty string to avoid regexp issues
            process.versions = {
            };
            function noop() {
            }
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;
            process.listeners = function(name) {
                return [];
            };
            process.binding = function(name) {
                throw new Error('process.binding is not supported');
            };
            process.cwd = function() {
                return '/';
            };
            process.chdir = function(dir) {
                throw new Error('process.chdir is not supported');
            };
            process.umask = function() {
                return 0;
            };
        },
        {
        }
    ],
    11: [
        function(require, module, exports) {
            (function(setImmediate) {
                (function() {
                    var si = typeof setImmediate === 'function', tick;
                    if (si) tick = function(fn) {
                        setImmediate(fn);
                    };
                    else tick = function(fn) {
                        setTimeout(fn, 0);
                    };
                    module.exports = tick;
                }).call(this);
            }).call(this, require("timers").setImmediate);
        },
        {
            "timers": 12
        }
    ],
    12: [
        function(require, module, exports) {
            (function(setImmediate, clearImmediate) {
                (function() {
                    var nextTick = require('process/browser.js').nextTick;
                    var apply = Function.prototype.apply;
                    var slice = Array.prototype.slice;
                    var immediateIds = {
                    };
                    var nextImmediateId = 0;
                    // DOM APIs, for completeness
                    exports.setTimeout = function() {
                        return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
                    };
                    exports.setInterval = function() {
                        return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
                    };
                    exports.clearTimeout = exports.clearInterval = function(timeout) {
                        timeout.close();
                    };
                    function Timeout(id, clearFn) {
                        this._id = id;
                        this._clearFn = clearFn;
                    }
                    Timeout.prototype.unref = Timeout.prototype.ref = function() {
                    };
                    Timeout.prototype.close = function() {
                        this._clearFn.call(window, this._id);
                    };
                    // Does not start the time, just sets up the members needed.
                    exports.enroll = function(item, msecs) {
                        clearTimeout(item._idleTimeoutId);
                        item._idleTimeout = msecs;
                    };
                    exports.unenroll = function(item) {
                        clearTimeout(item._idleTimeoutId);
                        item._idleTimeout = -1;
                    };
                    exports._unrefActive = exports.active = function(item) {
                        clearTimeout(item._idleTimeoutId);
                        var msecs = item._idleTimeout;
                        if (msecs >= 0) item._idleTimeoutId = setTimeout(function onTimeout() {
                            if (item._onTimeout) item._onTimeout();
                        }, msecs);
                    };
                    // That's not how node.js implements it but the exposed api is the same.
                    exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
                        var id = nextImmediateId++;
                        var args = arguments.length < 2 ? false : slice.call(arguments, 1);
                        immediateIds[id] = true;
                        nextTick(function onNextTick() {
                            if (immediateIds[id]) {
                                // fn.call() is faster so we optimize for the common use-case
                                // @see http://jsperf.com/call-apply-segu
                                if (args) fn.apply(null, args);
                                else fn.call(null);
                                // Prevent ids from leaking
                                exports.clearImmediate(id);
                            }
                        });
                        return id;
                    };
                    exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
                        delete immediateIds[id];
                    };
                }).call(this);
            }).call(this, require("timers").setImmediate, require("timers").clearImmediate);
        },
        {
            "process/browser.js": 10,
            "timers": 12
        }
    ]
}, {
}, [
    1
]);

},{}]},["j6uLn","6H5SI"], "6H5SI", "parcelRequirea564")

//# sourceMappingURL=index.1ac900f3.js.map
