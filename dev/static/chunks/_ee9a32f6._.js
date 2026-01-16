(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/TaskCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TaskCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function TaskCard({ task, columnId, onDelete }) {
    _s();
    const [{ isDragging }, drag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDrag"])({
        type: 'TASK',
        item: {
            id: task.id,
            columnId
        },
        collect: {
            "TaskCard.useDrag": (monitor)=>({
                    isDragging: monitor.isDragging()
                })
        }["TaskCard.useDrag"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: drag,
        className: `bg-gray-50 p-3 rounded shadow-sm cursor-move ${isDragging ? 'opacity-50' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm",
                children: task.content
            }, void 0, false, {
                fileName: "[project]/components/TaskCard.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onDelete,
                className: "mt-2 text-red-500 hover:text-red-700 text-xs",
                children: "Delete"
            }, void 0, false, {
                fileName: "[project]/components/TaskCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TaskCard.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(TaskCard, "wuumsFp4qAni9XRJfRhQAZjuD/k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDrag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDrag"]
    ];
});
_c = TaskCard;
var _c;
__turbopack_context__.k.register(_c, "TaskCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Column.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Column
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TaskCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TaskCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Column({ column, onMoveTask, onAddTask, onDeleteTask }) {
    _s();
    const [newTaskContent, setNewTaskContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [{ isOver }, drop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDrop"])({
        accept: 'TASK',
        drop: {
            "Column.useDrop": (item)=>{
                if (item.columnId !== column.id) {
                    onMoveTask(item.id, item.columnId, column.id);
                }
            }
        }["Column.useDrop"],
        collect: {
            "Column.useDrop": (monitor)=>({
                    isOver: monitor.isOver()
                })
        }["Column.useDrop"]
    });
    const handleAddTask = ()=>{
        if (newTaskContent.trim()) {
            onAddTask(column.id, newTaskContent.trim());
            setNewTaskContent('');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: drop,
        className: `bg-white rounded-lg shadow-md p-4 w-80 min-h-96 ${isOver ? 'bg-blue-50' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold mb-4",
                children: column.title
            }, void 0, false, {
                fileName: "[project]/components/Column.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 mb-4",
                children: column.tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TaskCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        task: task,
                        columnId: column.id,
                        onDelete: ()=>onDeleteTask(task.id, column.id)
                    }, task.id, false, {
                        fileName: "[project]/components/Column.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Column.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: newTaskContent,
                        onChange: (e)=>setNewTaskContent(e.target.value),
                        placeholder: "Add a new task...",
                        className: "flex-1 px-3 py-2 border rounded",
                        onKeyPress: (e)=>e.key === 'Enter' && handleAddTask()
                    }, void 0, false, {
                        fileName: "[project]/components/Column.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddTask,
                        className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
                        children: "Add"
                    }, void 0, false, {
                        fileName: "[project]/components/Column.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Column.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Column.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(Column, "ywa1p0AMndh1vrl1lNUll6SsHV4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDrop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDrop"]
    ];
});
_c = Column;
var _c;
__turbopack_context__.k.register(_c, "Column");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Board.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Board
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Column$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Column.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const initialColumns = [
    {
        id: 'todo',
        title: 'To Do',
        tasks: [
            {
                id: '1',
                content: 'Learn React'
            },
            {
                id: '2',
                content: 'Build a kanban board'
            }
        ]
    },
    {
        id: 'in-progress',
        title: 'In Progress',
        tasks: [
            {
                id: '3',
                content: 'Write tests'
            }
        ]
    },
    {
        id: 'done',
        title: 'Done',
        tasks: [
            {
                id: '4',
                content: 'Set up project'
            }
        ]
    }
];
function Board() {
    _s();
    const [columns, setColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialColumns);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Board.useEffect": ()=>{
            const saved = localStorage.getItem('kanban-board');
            if (saved) {
                setColumns(JSON.parse(saved));
            }
        }
    }["Board.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Board.useEffect": ()=>{
            localStorage.setItem('kanban-board', JSON.stringify(columns));
        }
    }["Board.useEffect"], [
        columns
    ]);
    const moveTask = (taskId, fromColumnId, toColumnId)=>{
        setColumns((prev)=>{
            const newColumns = [
                ...prev
            ];
            const fromColumn = newColumns.find((col)=>col.id === fromColumnId);
            const toColumn = newColumns.find((col)=>col.id === toColumnId);
            const task = fromColumn?.tasks.find((t)=>t.id === taskId);
            if (fromColumn && toColumn && task) {
                fromColumn.tasks = fromColumn.tasks.filter((t)=>t.id !== taskId);
                toColumn.tasks.push(task);
            }
            return newColumns;
        });
    };
    const addTask = (columnId, content)=>{
        const newTask = {
            id: Date.now().toString(),
            content
        };
        setColumns((prev)=>prev.map((col)=>col.id === columnId ? {
                    ...col,
                    tasks: [
                        ...col.tasks,
                        newTask
                    ]
                } : col));
    };
    const deleteTask = (taskId, columnId)=>{
        setColumns((prev)=>prev.map((col)=>col.id === columnId ? {
                    ...col,
                    tasks: col.tasks.filter((t)=>t.id !== taskId)
                } : col));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-4 p-4 min-h-screen bg-gray-100",
        children: columns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Column$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                column: column,
                onMoveTask: moveTask,
                onAddTask: addTask,
                onDeleteTask: deleteTask
            }, column.id, false, {
                fileName: "[project]/components/Board.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Board.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(Board, "+DChxtypwmmUO4xnW26p1RYUihA=");
_c = Board;
var _c;
__turbopack_context__.k.register(_c, "Board");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/fast-deep-equal/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};
}),
"[project]/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsomorphicLayoutEffect",
    ()=>useIsomorphicLayoutEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]; //# sourceMappingURL=useIsomorphicLayoutEffect.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useCollector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCollector",
    ()=>useCollector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$deep$2d$equal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fast-deep-equal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
;
;
;
function useCollector(monitor, collect, onUpdate) {
    const [collected, setCollected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCollector.useState": ()=>collect(monitor)
    }["useCollector.useState"]);
    const updateCollected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCollector.useCallback[updateCollected]": ()=>{
            const nextValue = collect(monitor);
            // This needs to be a deep-equality check because some monitor-collected values
            // include XYCoord objects that may be equivalent, but do not have instance equality.
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fast$2d$deep$2d$equal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(collected, nextValue)) {
                setCollected(nextValue);
                if (onUpdate) {
                    onUpdate();
                }
            }
        }
    }["useCollector.useCallback[updateCollected]"], [
        collected,
        monitor,
        onUpdate
    ]);
    // update the collected properties after react renders.
    // Note that the "Dustbin Stress Test" fails if this is not
    // done when the component updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(updateCollected);
    return [
        collected,
        updateCollected
    ];
} //# sourceMappingURL=useCollector.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useMonitorOutput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMonitorOutput",
    ()=>useMonitorOutput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useCollector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
;
;
function useMonitorOutput(monitor, collect, onCollect) {
    const [collected, updateCollected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCollector"])(monitor, collect, onCollect);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(function subscribeToMonitorStateChange() {
        const handlerId = monitor.getHandlerId();
        if (handlerId == null) {
            return;
        }
        return monitor.subscribeToStateChange(updateCollected, {
            handlerIds: [
                handlerId
            ]
        });
    }, [
        monitor,
        updateCollected
    ]);
    return collected;
} //# sourceMappingURL=useMonitorOutput.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useCollectedProps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCollectedProps",
    ()=>useCollectedProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useMonitorOutput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useMonitorOutput.js [app-client] (ecmascript)");
;
function useCollectedProps(collector, monitor, connector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useMonitorOutput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMonitorOutput"])(monitor, collector || ({
        "useCollectedProps.useMonitorOutput": ()=>({})
    })["useCollectedProps.useMonitorOutput"], {
        "useCollectedProps.useMonitorOutput": ()=>connector.reconnect()
    }["useCollectedProps.useMonitorOutput"]);
} //# sourceMappingURL=useCollectedProps.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useOptionalFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOptionalFactory",
    ()=>useOptionalFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useOptionalFactory(arg, deps) {
    const memoDeps = [
        ...deps || []
    ];
    if (deps == null && typeof arg !== 'function') {
        memoDeps.push(arg);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useOptionalFactory.useMemo": ()=>{
            return typeof arg === 'function' ? arg() : arg;
        }
    }["useOptionalFactory.useMemo"], memoDeps);
} //# sourceMappingURL=useOptionalFactory.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrop/connectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectDropTarget",
    ()=>useConnectDropTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useConnectDropTarget(connector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useConnectDropTarget.useMemo": ()=>connector.hooks.dropTarget()
    }["useConnectDropTarget.useMemo"], [
        connector
    ]);
} //# sourceMappingURL=connectors.js.map
}),
"[project]/node_modules/@react-dnd/shallowequal/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shallowEqual",
    ()=>shallowEqual
]);
function shallowEqual(objA, objB, compare, compareContext) {
    let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (compareResult !== void 0) {
        return !!compareResult;
    }
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(let idx = 0; idx < keysA.length; idx++){
        const key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        const valueA = objA[key];
        const valueB = objB[key];
        compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
            return false;
        }
    }
    return true;
} //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/react-dnd/dist/internals/isRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isRef",
    ()=>isRef
]);
function isRef(obj) {
    return obj !== null && typeof obj === 'object' && Object.prototype.hasOwnProperty.call(obj, 'current');
} //# sourceMappingURL=isRef.js.map
}),
"[project]/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapConnectorHooks",
    ()=>wrapConnectorHooks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function throwIfCompositeComponentElement(element) {
    // Custom components can no longer be wrapped directly in React DnD 2.0
    // so that we don't need to depend on findDOMNode() from react-dom.
    if (typeof element.type === 'string') {
        return;
    }
    const displayName = element.type.displayName || element.type.name || 'the component';
    throw new Error('Only native element nodes can now be passed to React DnD connectors.' + `You can either wrap ${displayName} into a <div>, or turn it into a ` + 'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
    return (elementOrNode = null, options = null)=>{
        // When passed a node, call the hook straight away.
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(elementOrNode)) {
            const node = elementOrNode;
            hook(node, options);
            // return the node so it can be chained (e.g. when within callback refs
            // <div ref={node => connectDragSource(connectDropTarget(node))}/>
            return node;
        }
        // If passed a ReactElement, clone it and attach this function as a ref.
        // This helps us achieve a neat API where user doesn't even know that refs
        // are being used under the hood.
        const element = elementOrNode;
        throwIfCompositeComponentElement(element);
        // When no options are passed, use the hook directly
        const ref = options ? (node)=>hook(node, options) : hook;
        return cloneWithRef(element, ref);
    };
}
function wrapConnectorHooks(hooks) {
    const wrappedHooks = {};
    Object.keys(hooks).forEach((key)=>{
        const hook = hooks[key];
        // ref objects should be passed straight through without wrapping
        if (key.endsWith('Ref')) {
            wrappedHooks[key] = hooks[key];
        } else {
            const wrappedHook = wrapHookToRecognizeElement(hook);
            wrappedHooks[key] = ()=>wrappedHook;
        }
    });
    return wrappedHooks;
}
function setRef(ref, node) {
    if (typeof ref === 'function') {
        ref(node);
    } else {
        ref.current = node;
    }
}
function cloneWithRef(element, newRef) {
    const previousRef = element.ref;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs');
    if (!previousRef) {
        // When there is no ref on the element, use the new ref directly
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(element, {
            ref: newRef
        });
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(element, {
            ref: (node)=>{
                setRef(previousRef, node);
                setRef(newRef, node);
            }
        });
    }
} //# sourceMappingURL=wrapConnectorHooks.js.map
}),
"[project]/node_modules/react-dnd/dist/internals/TargetConnector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TargetConnector",
    ()=>TargetConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-dnd/shallowequal/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/internals/isRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$wrapConnectorHooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js [app-client] (ecmascript)");
;
;
;
class TargetConnector {
    get connectTarget() {
        return this.dropTarget;
    }
    reconnect() {
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
        if (didChange) {
            this.disconnectDropTarget();
        }
        const dropTarget = this.dropTarget;
        if (!this.handlerId) {
            return;
        }
        if (!dropTarget) {
            this.lastConnectedDropTarget = dropTarget;
            return;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDropTarget = dropTarget;
            this.lastConnectedDropTargetOptions = this.dropTargetOptions;
            this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
        }
    }
    receiveHandlerId(newHandlerId) {
        if (newHandlerId === this.handlerId) {
            return;
        }
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get dropTargetOptions() {
        return this.dropTargetOptionsInternal;
    }
    set dropTargetOptions(options) {
        this.dropTargetOptionsInternal = options;
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didDropTargetChange() {
        return this.lastConnectedDropTarget !== this.dropTarget;
    }
    didOptionsChange() {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
    disconnectDropTarget() {
        if (this.unsubscribeDropTarget) {
            this.unsubscribeDropTarget();
            this.unsubscribeDropTarget = undefined;
        }
    }
    get dropTarget() {
        return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
    clearDropTarget() {
        this.dropTargetRef = null;
        this.dropTargetNode = null;
    }
    constructor(backend){
        this.hooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$wrapConnectorHooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapConnectorHooks"])({
            dropTarget: (node, options)=>{
                this.clearDropTarget();
                this.dropTargetOptions = options;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRef"])(node)) {
                    this.dropTargetRef = node;
                } else {
                    this.dropTargetNode = node;
                }
                this.reconnect();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dropTargetRef = null;
        this.dropTargetOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDropTarget = null;
        this.lastConnectedDropTargetOptions = null;
        this.backend = backend;
    }
} //# sourceMappingURL=TargetConnector.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragDropManager",
    ()=>useDragDropManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/core/DndContext.js [app-client] (ecmascript)");
;
;
;
function useDragDropManager() {
    const { dragDropManager } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$core$2f$DndContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(dragDropManager != null, 'Expected drag drop context');
    return dragDropManager;
} //# sourceMappingURL=useDragDropManager.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDropTargetConnector",
    ()=>useDropTargetConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$TargetConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/internals/TargetConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
;
;
;
;
function useDropTargetConnector(options) {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    const connector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDropTargetConnector.useMemo[connector]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$TargetConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TargetConnector"](manager.getBackend())
    }["useDropTargetConnector.useMemo[connector]"], [
        manager
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useDropTargetConnector.useIsomorphicLayoutEffect": ()=>{
            connector.dropTargetOptions = options || null;
            connector.reconnect();
            return ({
                "useDropTargetConnector.useIsomorphicLayoutEffect": ()=>connector.disconnectDropTarget()
            })["useDropTargetConnector.useIsomorphicLayoutEffect"];
        }
    }["useDropTargetConnector.useIsomorphicLayoutEffect"], [
        options
    ]);
    return connector;
} //# sourceMappingURL=useDropTargetConnector.js.map
}),
"[project]/node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropTargetMonitorImpl",
    ()=>DropTargetMonitorImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
;
let isCallingCanDrop = false;
class DropTargetMonitorImpl {
    receiveHandlerId(targetId) {
        this.targetId = targetId;
    }
    getHandlerId() {
        return this.targetId;
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    canDrop() {
        // Cut out early if the target id has not been set. This should prevent errors
        // where the user has an older version of dnd-core like in
        // https://github.com/react-dnd/react-dnd/issues/1310
        if (!this.targetId) {
            return false;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');
        try {
            isCallingCanDrop = true;
            return this.internalMonitor.canDropOnTarget(this.targetId);
        } finally{
            isCallingCanDrop = false;
        }
    }
    isOver(options) {
        if (!this.targetId) {
            return false;
        }
        return this.internalMonitor.isOverTarget(this.targetId, options);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.targetId = null;
        this.internalMonitor = manager.getMonitor();
    }
} //# sourceMappingURL=DropTargetMonitorImpl.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDropTargetMonitor",
    ()=>useDropTargetMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$DropTargetMonitorImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/internals/DropTargetMonitorImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)");
;
;
;
function useDropTargetMonitor() {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDropTargetMonitor.useMemo": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$DropTargetMonitorImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropTargetMonitorImpl"](manager)
    }["useDropTargetMonitor.useMemo"], [
        manager
    ]);
} //# sourceMappingURL=useDropTargetMonitor.js.map
}),
"[project]/node_modules/react-dnd/dist/internals/registration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registerSource",
    ()=>registerSource,
    "registerTarget",
    ()=>registerTarget
]);
function registerTarget(type, target, manager) {
    const registry = manager.getRegistry();
    const targetId = registry.addTarget(type, target);
    return [
        targetId,
        ()=>registry.removeTarget(targetId)
    ];
}
function registerSource(type, source, manager) {
    const registry = manager.getRegistry();
    const sourceId = registry.addSource(type, source);
    return [
        sourceId,
        ()=>registry.removeSource(sourceId)
    ];
} //# sourceMappingURL=registration.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrop/useAccept.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAccept",
    ()=>useAccept
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function useAccept(spec) {
    const { accept } = spec;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useAccept.useMemo": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(spec.accept != null, 'accept must be defined');
            return Array.isArray(accept) ? accept : [
                accept
            ];
        }
    }["useAccept.useMemo"], [
        accept
    ]);
} //# sourceMappingURL=useAccept.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropTargetImpl",
    ()=>DropTargetImpl
]);
class DropTargetImpl {
    canDrop() {
        const spec = this.spec;
        const monitor = this.monitor;
        return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
    }
    hover() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.hover) {
            spec.hover(monitor.getItem(), monitor);
        }
    }
    drop() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.drop) {
            return spec.drop(monitor.getItem(), monitor);
        }
        return;
    }
    constructor(spec, monitor){
        this.spec = spec;
        this.monitor = monitor;
    }
} //# sourceMappingURL=DropTargetImpl.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDropTarget",
    ()=>useDropTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$DropTargetImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrop/DropTargetImpl.js [app-client] (ecmascript)");
;
;
function useDropTarget(spec, monitor) {
    const dropTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDropTarget.useMemo[dropTarget]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$DropTargetImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropTargetImpl"](spec, monitor)
    }["useDropTarget.useMemo[dropTarget]"], [
        monitor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDropTarget.useEffect": ()=>{
            dropTarget.spec = spec;
        }
    }["useDropTarget.useEffect"], [
        spec
    ]);
    return dropTarget;
} //# sourceMappingURL=useDropTarget.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRegisteredDropTarget",
    ()=>useRegisteredDropTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/internals/registration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useAccept$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrop/useAccept.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrop/useDropTarget.js [app-client] (ecmascript)");
;
;
;
;
;
function useRegisteredDropTarget(spec, monitor, connector) {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    const dropTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropTarget"])(spec, monitor);
    const accept = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useAccept$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccept"])(spec);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(function registerDropTarget() {
        const [handlerId, unregister] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerTarget"])(accept, dropTarget, manager);
        monitor.receiveHandlerId(handlerId);
        connector.receiveHandlerId(handlerId);
        return unregister;
    }, [
        manager,
        monitor,
        dropTarget,
        connector,
        accept.map({
            "useRegisteredDropTarget.useIsomorphicLayoutEffect": (a)=>a.toString()
        }["useRegisteredDropTarget.useIsomorphicLayoutEffect"]).join('|')
    ]);
} //# sourceMappingURL=useRegisteredDropTarget.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrop/useDrop.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDrop",
    ()=>useDrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollectedProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useCollectedProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useOptionalFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useOptionalFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$connectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrop/connectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTargetConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTargetMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrop/useDropTargetMonitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useRegisteredDropTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrop/useRegisteredDropTarget.js [app-client] (ecmascript)");
;
;
;
;
;
;
function useDrop(specArg, deps) {
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useOptionalFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptionalFactory"])(specArg, deps);
    const monitor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTargetMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropTargetMonitor"])();
    const connector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useDropTargetConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDropTargetConnector"])(spec.options);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$useRegisteredDropTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegisteredDropTarget"])(spec, monitor, connector);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollectedProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCollectedProps"])(spec.collect, monitor, connector),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrop$2f$connectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectDropTarget"])(connector)
    ];
} //# sourceMappingURL=useDrop.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrag/connectors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConnectDragPreview",
    ()=>useConnectDragPreview,
    "useConnectDragSource",
    ()=>useConnectDragSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useConnectDragSource(connector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useConnectDragSource.useMemo": ()=>connector.hooks.dragSource()
    }["useConnectDragSource.useMemo"], [
        connector
    ]);
}
function useConnectDragPreview(connector) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useConnectDragPreview.useMemo": ()=>connector.hooks.dragPreview()
    }["useConnectDragPreview.useMemo"], [
        connector
    ]);
} //# sourceMappingURL=connectors.js.map
}),
"[project]/node_modules/react-dnd/dist/internals/SourceConnector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SourceConnector",
    ()=>SourceConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-dnd/shallowequal/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/internals/isRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$wrapConnectorHooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/internals/wrapConnectorHooks.js [app-client] (ecmascript)");
;
;
;
class SourceConnector {
    receiveHandlerId(newHandlerId) {
        if (this.handlerId === newHandlerId) {
            return;
        }
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get connectTarget() {
        return this.dragSource;
    }
    get dragSourceOptions() {
        return this.dragSourceOptionsInternal;
    }
    set dragSourceOptions(options) {
        this.dragSourceOptionsInternal = options;
    }
    get dragPreviewOptions() {
        return this.dragPreviewOptionsInternal;
    }
    set dragPreviewOptions(options) {
        this.dragPreviewOptionsInternal = options;
    }
    reconnect() {
        const didChange = this.reconnectDragSource();
        this.reconnectDragPreview(didChange);
    }
    reconnectDragSource() {
        const dragSource = this.dragSource;
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
        if (didChange) {
            this.disconnectDragSource();
        }
        if (!this.handlerId) {
            return didChange;
        }
        if (!dragSource) {
            this.lastConnectedDragSource = dragSource;
            return didChange;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDragSource = dragSource;
            this.lastConnectedDragSourceOptions = this.dragSourceOptions;
            this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
        }
        return didChange;
    }
    reconnectDragPreview(forceDidChange = false) {
        const dragPreview = this.dragPreview;
        // if nothing has changed then don't resubscribe
        const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
        if (didChange) {
            this.disconnectDragPreview();
        }
        if (!this.handlerId) {
            return;
        }
        if (!dragPreview) {
            this.lastConnectedDragPreview = dragPreview;
            return;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDragPreview = dragPreview;
            this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
            this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
        }
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didConnectedDragSourceChange() {
        return this.lastConnectedDragSource !== this.dragSource;
    }
    didConnectedDragPreviewChange() {
        return this.lastConnectedDragPreview !== this.dragPreview;
    }
    didDragSourceOptionsChange() {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
    didDragPreviewOptionsChange() {
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$shallowequal$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
    disconnectDragSource() {
        if (this.dragSourceUnsubscribe) {
            this.dragSourceUnsubscribe();
            this.dragSourceUnsubscribe = undefined;
        }
    }
    disconnectDragPreview() {
        if (this.dragPreviewUnsubscribe) {
            this.dragPreviewUnsubscribe();
            this.dragPreviewUnsubscribe = undefined;
            this.dragPreviewNode = null;
            this.dragPreviewRef = null;
        }
    }
    get dragSource() {
        return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
    get dragPreview() {
        return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
    clearDragSource() {
        this.dragSourceNode = null;
        this.dragSourceRef = null;
    }
    clearDragPreview() {
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
    }
    constructor(backend){
        this.hooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$wrapConnectorHooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapConnectorHooks"])({
            dragSource: (node, options)=>{
                this.clearDragSource();
                this.dragSourceOptions = options || null;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRef"])(node)) {
                    this.dragSourceRef = node;
                } else {
                    this.dragSourceNode = node;
                }
                this.reconnectDragSource();
            },
            dragPreview: (node, options)=>{
                this.clearDragPreview();
                this.dragPreviewOptions = options || null;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$isRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRef"])(node)) {
                    this.dragPreviewRef = node;
                } else {
                    this.dragPreviewNode = node;
                }
                this.reconnectDragPreview();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dragSourceRef = null;
        this.dragSourceOptionsInternal = null;
        // The drag preview may either be attached via ref or connect function
        this.dragPreviewRef = null;
        this.dragPreviewOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDragSource = null;
        this.lastConnectedDragSourceOptions = null;
        this.lastConnectedDragPreview = null;
        this.lastConnectedDragPreviewOptions = null;
        this.backend = backend;
    }
} //# sourceMappingURL=SourceConnector.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragSourceConnector",
    ()=>useDragSourceConnector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$SourceConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/internals/SourceConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
;
;
;
;
function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    const connector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDragSourceConnector.useMemo[connector]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$SourceConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SourceConnector"](manager.getBackend())
    }["useDragSourceConnector.useMemo[connector]"], [
        manager
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useDragSourceConnector.useIsomorphicLayoutEffect": ()=>{
            connector.dragSourceOptions = dragSourceOptions || null;
            connector.reconnect();
            return ({
                "useDragSourceConnector.useIsomorphicLayoutEffect": ()=>connector.disconnectDragSource()
            })["useDragSourceConnector.useIsomorphicLayoutEffect"];
        }
    }["useDragSourceConnector.useIsomorphicLayoutEffect"], [
        connector,
        dragSourceOptions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useDragSourceConnector.useIsomorphicLayoutEffect": ()=>{
            connector.dragPreviewOptions = dragPreviewOptions || null;
            connector.reconnect();
            return ({
                "useDragSourceConnector.useIsomorphicLayoutEffect": ()=>connector.disconnectDragPreview()
            })["useDragSourceConnector.useIsomorphicLayoutEffect"];
        }
    }["useDragSourceConnector.useIsomorphicLayoutEffect"], [
        connector,
        dragPreviewOptions
    ]);
    return connector;
} //# sourceMappingURL=useDragSourceConnector.js.map
}),
"[project]/node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragSourceMonitorImpl",
    ()=>DragSourceMonitorImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
;
let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
    receiveHandlerId(sourceId) {
        this.sourceId = sourceId;
    }
    getHandlerId() {
        return this.sourceId;
    }
    canDrag() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
        try {
            isCallingCanDrag = true;
            return this.internalMonitor.canDragSource(this.sourceId);
        } finally{
            isCallingCanDrag = false;
        }
    }
    isDragging() {
        if (!this.sourceId) {
            return false;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
        try {
            isCallingIsDragging = true;
            return this.internalMonitor.isDraggingSource(this.sourceId);
        } finally{
            isCallingIsDragging = false;
        }
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    isDraggingSource(sourceId) {
        return this.internalMonitor.isDraggingSource(sourceId);
    }
    isOverTarget(targetId, options) {
        return this.internalMonitor.isOverTarget(targetId, options);
    }
    getTargetIds() {
        return this.internalMonitor.getTargetIds();
    }
    isSourcePublic() {
        return this.internalMonitor.isSourcePublic();
    }
    getSourceId() {
        return this.internalMonitor.getSourceId();
    }
    subscribeToOffsetChange(listener) {
        return this.internalMonitor.subscribeToOffsetChange(listener);
    }
    canDragSource(sourceId) {
        return this.internalMonitor.canDragSource(sourceId);
    }
    canDropOnTarget(targetId) {
        return this.internalMonitor.canDropOnTarget(targetId);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.sourceId = null;
        this.internalMonitor = manager.getMonitor();
    }
} //# sourceMappingURL=DragSourceMonitorImpl.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragSourceMonitor",
    ()=>useDragSourceMonitor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$DragSourceMonitorImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/internals/DragSourceMonitorImpl.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)");
;
;
;
function useDragSourceMonitor() {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDragSourceMonitor.useMemo": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$DragSourceMonitorImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragSourceMonitorImpl"](manager)
    }["useDragSourceMonitor.useMemo"], [
        manager
    ]);
} //# sourceMappingURL=useDragSourceMonitor.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DragSourceImpl",
    ()=>DragSourceImpl
]);
class DragSourceImpl {
    beginDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        let result = null;
        if (typeof spec.item === 'object') {
            result = spec.item;
        } else if (typeof spec.item === 'function') {
            result = spec.item(monitor);
        } else {
            result = {};
        }
        return result !== null && result !== void 0 ? result : null;
    }
    canDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (typeof spec.canDrag === 'boolean') {
            return spec.canDrag;
        } else if (typeof spec.canDrag === 'function') {
            return spec.canDrag(monitor);
        } else {
            return true;
        }
    }
    isDragging(globalMonitor, target) {
        const spec = this.spec;
        const monitor = this.monitor;
        const { isDragging } = spec;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
    }
    endDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        const connector = this.connector;
        const { end } = spec;
        if (end) {
            end(monitor.getItem(), monitor);
        }
        connector.reconnect();
    }
    constructor(spec, monitor, connector){
        this.spec = spec;
        this.monitor = monitor;
        this.connector = connector;
    }
} //# sourceMappingURL=DragSourceImpl.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragSource",
    ()=>useDragSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$DragSourceImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrag/DragSourceImpl.js [app-client] (ecmascript)");
;
;
function useDragSource(spec, monitor, connector) {
    const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDragSource.useMemo[handler]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$DragSourceImpl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragSourceImpl"](spec, monitor, connector)
    }["useDragSource.useMemo[handler]"], [
        monitor,
        connector
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDragSource.useEffect": ()=>{
            handler.spec = spec;
        }
    }["useDragSource.useEffect"], [
        spec
    ]);
    return handler;
} //# sourceMappingURL=useDragSource.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrag/useDragType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragType",
    ()=>useDragType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function useDragType(spec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDragType.useMemo": ()=>{
            const result = spec.type;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(result != null, 'spec.type must be defined');
            return result;
        }
    }["useDragType.useMemo"], [
        spec
    ]);
} //# sourceMappingURL=useDragType.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRegisteredDragSource",
    ()=>useRegisteredDragSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/internals/registration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDragDropManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrag/useDragSource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrag/useDragType.js [app-client] (ecmascript)");
;
;
;
;
;
function useRegisteredDragSource(spec, monitor, connector) {
    const manager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDragDropManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragDropManager"])();
    const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragSource"])(spec, monitor, connector);
    const itemType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragType"])(spec);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])(function registerDragSource() {
        if (itemType != null) {
            const [handlerId, unregister] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$internals$2f$registration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerSource"])(itemType, handler, manager);
            monitor.receiveHandlerId(handlerId);
            connector.receiveHandlerId(handlerId);
            return unregister;
        }
        return;
    }, [
        manager,
        monitor,
        connector,
        handler,
        itemType
    ]);
} //# sourceMappingURL=useRegisteredDragSource.js.map
}),
"[project]/node_modules/react-dnd/dist/hooks/useDrag/useDrag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDrag",
    ()=>useDrag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-dnd/invariant/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollectedProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useCollectedProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useOptionalFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useOptionalFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$connectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrag/connectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSourceConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceConnector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSourceMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrag/useDragSourceMonitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useRegisteredDragSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-dnd/dist/hooks/useDrag/useRegisteredDragSource.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function useDrag(specArg, deps) {
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useOptionalFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptionalFactory"])(specArg, deps);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$dnd$2f$invariant$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
    const monitor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSourceMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragSourceMonitor"])();
    const connector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useDragSourceConnector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragSourceConnector"])(spec.options, spec.previewOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$useRegisteredDragSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegisteredDragSource"])(spec, monitor, connector);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useCollectedProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCollectedProps"])(spec.collect, monitor, connector),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$connectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectDragSource"])(connector),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dnd$2f$dist$2f$hooks$2f$useDrag$2f$connectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConnectDragPreview"])(connector)
    ];
} //# sourceMappingURL=useDrag.js.map
}),
]);

//# sourceMappingURL=_ee9a32f6._.js.map