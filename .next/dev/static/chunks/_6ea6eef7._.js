(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$kayron013$2b$lexorank$40$2$2e$0$2e$0$2f$node_modules$2f40$kayron013$2f$lexorank$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@kayron013+lexorank@2.0.0/node_modules/@kayron013/lexorank/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$0$2e$2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.0.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$0$2e$2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/status-utils.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStatusById",
    ()=>getStatusById,
    "renderStatusIcon",
    ()=>renderStatusIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$status$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/status.tsx [app-client] (ecmascript)");
;
;
function renderStatusIcon(statusId) {
    const selectedItem = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$status$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["status"].find((item)=>item.id === statusId);
    if (selectedItem) {
        const Icon = selectedItem.icon;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
            fileName: "[project]/lib/status-utils.tsx",
            lineNumber: 8,
            columnNumber: 14
        }, this);
    }
    return null;
}
function getStatusById(statusId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$status$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["status"].find((item)=>item.id === statusId);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-mobile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.4_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MOBILE_BREAKPOINT = 1024;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$4_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useIsMobile.useEffect": ()=>{
            const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
            const onChange = {
                "useIsMobile.useEffect.onChange": ()=>{
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                }
            }["useIsMobile.useEffect.onChange"];
            mql.addEventListener('change', onChange);
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            return ({
                "useIsMobile.useEffect": ()=>mql.removeEventListener('change', onChange)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return !!isMobile;
}
_s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/issues-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIssuesStore",
    ()=>useIssuesStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/issues.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
;
const useIssuesStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // Initial state
        issues: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["issues"].sort((a, b)=>b.rank.localeCompare(a.rank)),
        issuesByStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupIssuesByStatus"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["issues"]),
        isLoading: false,
        error: null,
        //
        getAllIssues: ()=>get().issues,
        // Actions
        addIssue: (issue)=>{
            try {
                set({
                    isLoading: true,
                    error: null
                });
                set((state)=>{
                    const newIssues = [
                        ...state.issues,
                        issue
                    ];
                    return {
                        issues: newIssues,
                        issuesByStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupIssuesByStatus"])(newIssues),
                        isLoading: false,
                        error: null
                    };
                });
            } catch (error) {
                set({
                    isLoading: false,
                    error: error instanceof Error ? error : new Error('Failed to add issue')
                });
            }
        },
        updateIssue: (id, updatedIssue)=>{
            try {
                set({
                    isLoading: true,
                    error: null
                });
                set((state)=>{
                    const newIssues = state.issues.map((issue)=>issue.id === id ? {
                            ...issue,
                            ...updatedIssue
                        } : issue);
                    return {
                        issues: newIssues,
                        issuesByStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupIssuesByStatus"])(newIssues),
                        isLoading: false,
                        error: null
                    };
                });
            } catch (error) {
                set({
                    isLoading: false,
                    error: error instanceof Error ? error : new Error('Failed to update issue')
                });
            }
        },
        deleteIssue: (id)=>{
            try {
                set({
                    isLoading: true,
                    error: null
                });
                set((state)=>{
                    const newIssues = state.issues.filter((issue)=>issue.id !== id);
                    return {
                        issues: newIssues,
                        issuesByStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupIssuesByStatus"])(newIssues),
                        isLoading: false,
                        error: null
                    };
                });
            } catch (error) {
                set({
                    isLoading: false,
                    error: error instanceof Error ? error : new Error('Failed to delete issue')
                });
            }
        },
        // Filters
        filterByStatus: (statusId)=>{
            return get().issues.filter((issue)=>issue.status.id === statusId);
        },
        filterByPriority: (priorityId)=>{
            return get().issues.filter((issue)=>issue.priority.id === priorityId);
        },
        filterByAssignee: (userId)=>{
            if (userId === null) {
                return get().issues.filter((issue)=>issue.assignee === null);
            }
            return get().issues.filter((issue)=>issue.assignee?.id === userId);
        },
        filterByLabel: (labelId)=>{
            return get().issues.filter((issue)=>issue.labels.some((label)=>label.id === labelId));
        },
        filterByProject: (projectId)=>{
            return get().issues.filter((issue)=>issue.project?.id === projectId);
        },
        searchIssues: (query)=>{
            const lowerCaseQuery = query.toLowerCase();
            return get().issues.filter((issue)=>issue.title.toLowerCase().includes(lowerCaseQuery) || issue.identifier.toLowerCase().includes(lowerCaseQuery));
        },
        filterIssues: (filters)=>{
            let filteredIssues = get().issues;
            // Filter by status
            if (filters.status && filters.status.length > 0) {
                filteredIssues = filteredIssues.filter((issue)=>filters.status.includes(issue.status.id));
            }
            // Filter by assignee
            if (filters.assignee && filters.assignee.length > 0) {
                filteredIssues = filteredIssues.filter((issue)=>{
                    if (filters.assignee.includes('unassigned')) {
                        // If 'unassigned' is selected and the issue has no assignee
                        if (issue.assignee === null) {
                            return true;
                        }
                    }
                    // Check if the issue's assignee is in the selected assignees
                    return issue.assignee && filters.assignee.includes(issue.assignee.id);
                });
            }
            // Filter by priority
            if (filters.priority && filters.priority.length > 0) {
                filteredIssues = filteredIssues.filter((issue)=>filters.priority.includes(issue.priority.id));
            }
            // Filter by labels
            if (filters.labels && filters.labels.length > 0) {
                filteredIssues = filteredIssues.filter((issue)=>issue.labels.some((label)=>filters.labels.includes(label.id)));
            }
            // Filter by project
            if (filters.project && filters.project.length > 0) {
                filteredIssues = filteredIssues.filter((issue)=>issue.project && filters.project.includes(issue.project.id));
            }
            return filteredIssues;
        },
        // Status management
        updateIssueStatus: (issueId, newStatus)=>{
            get().updateIssue(issueId, {
                status: newStatus
            });
        },
        // Priority management
        updateIssuePriority: (issueId, newPriority)=>{
            get().updateIssue(issueId, {
                priority: newPriority
            });
        },
        // Assignee management
        updateIssueAssignee: (issueId, newAssignee)=>{
            get().updateIssue(issueId, {
                assignee: newAssignee
            });
        },
        // Labels management
        addIssueLabel: (issueId, label)=>{
            const issue = get().getIssueById(issueId);
            if (issue) {
                const updatedLabels = [
                    ...issue.labels,
                    label
                ];
                get().updateIssue(issueId, {
                    labels: updatedLabels
                });
            }
        },
        removeIssueLabel: (issueId, labelId)=>{
            const issue = get().getIssueById(issueId);
            if (issue) {
                const updatedLabels = issue.labels.filter((label)=>label.id !== labelId);
                get().updateIssue(issueId, {
                    labels: updatedLabels
                });
            }
        },
        // Project management
        updateIssueProject: (issueId, newProject)=>{
            get().updateIssue(issueId, {
                project: newProject
            });
        },
        // Utility functions
        getIssueById: (id)=>{
            return get().issues.find((issue)=>issue.id === id);
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/create-issue-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateIssueStore",
    ()=>useCreateIssueStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useCreateIssueStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        // Initial state
        isOpen: false,
        defaultStatus: null,
        // Actions
        openModal: (status)=>set({
                isOpen: true,
                defaultStatus: status || null
            }),
        closeModal: ()=>set({
                isOpen: false
            }),
        setDefaultStatus: (status)=>set({
                defaultStatus: status
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/preferences-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePreferencesStore",
    ()=>usePreferencesStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const defaultNotificationPreferences = {
    emailNotifications: true,
    pushNotifications: true,
    issueAssigned: true,
    issueMentioned: true,
    issueStatusChanged: false,
    issueDueDateReminder: true,
    projectUpdates: false,
    teamUpdates: true
};
const defaultKeyboardShortcuts = {
    commandPalette: 'cmd+k',
    createIssue: 'c',
    search: '/',
    goToInbox: 'g+i',
    goToIssues: 'g+i',
    goToTeams: 'g+t',
    goToProjects: 'g+p',
    goToMembers: 'g+m',
    goToSettings: 'g+s'
};
const defaultDisplayPreferences = {
    displayFullNames: false,
    usePointerCursors: false,
    fontSize: 'default',
    firstDayOfWeek: 'sunday'
};
const defaultThemePreferences = {
    interfaceTheme: 'dark',
    translucentUI: true
};
const defaultBehaviorPreferences = {
    defaultHomeView: 'active-issues',
    developerPreview: false,
    openInDesktopApp: false,
    autoAssignToSelf: false,
    onGitBranchCopyMoveToInProgress: false,
    onGitBranchCopyAssignToSelf: false,
    openLinksInNewWindow: true,
    doubleClickToEdit: false
};
const defaultEducationalPreferences = {
    disableKeyboardShortcutHints: false
};
const defaultPreferences = {
    theme: 'system',
    notifications: defaultNotificationPreferences,
    keyboardShortcuts: defaultKeyboardShortcuts,
    language: 'en',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    dateFormat: 'MMM dd, yyyy',
    timeFormat: '12h',
    display: defaultDisplayPreferences,
    themePreferences: defaultThemePreferences,
    behavior: defaultBehaviorPreferences,
    educational: defaultEducationalPreferences
};
const usePreferencesStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        preferences: defaultPreferences,
        updateTheme: (theme)=>set((state)=>({
                    preferences: {
                        ...state.preferences,
                        theme
                    }
                })),
        updateNotifications: (notifications)=>set((state)=>({
                    preferences: {
                        ...state.preferences,
                        notifications: {
                            ...state.preferences.notifications,
                            ...notifications
                        }
                    }
                })),
        updateKeyboardShortcuts: (shortcuts)=>set((state)=>({
                    preferences: {
                        ...state.preferences,
                        keyboardShortcuts: {
                            ...state.preferences.keyboardShortcuts,
                            ...shortcuts
                        }
                    }
                })),
        updateDisplay: (display)=>set((state)=>({
                    preferences: {
                        ...state.preferences,
                        display: {
                            ...state.preferences.display,
                            ...display
                        }
                    }
                })),
        updateThemePreferences: (themePrefs)=>set((state)=>({
                    preferences: {
                        ...state.preferences,
                        themePreferences: {
                            ...state.preferences.themePreferences,
                            ...themePrefs
                        }
                    }
                })),
        updateBehavior: (behavior)=>set((state)=>({
                    preferences: {
                        ...state.preferences,
                        behavior: {
                            ...state.preferences.behavior,
                            ...behavior
                        }
                    }
                })),
        updateEducational: (educational)=>set((state)=>({
                    preferences: {
                        ...state.preferences,
                        educational: {
                            ...state.preferences.educational,
                            ...educational
                        }
                    }
                })),
        updatePreference: (key, value)=>set((state)=>({
                    preferences: {
                        ...state.preferences,
                        [key]: value
                    }
                })),
        resetPreferences: ()=>set({
                preferences: defaultPreferences
            })
    }), {
    name: 'user-preferences-storage',
    partialize: (state)=>({
            preferences: state.preferences
        }),
    merge: (persistedState, currentState)=>{
        if (persistedState && typeof persistedState === 'object' && 'preferences' in persistedState) {
            return {
                ...currentState,
                preferences: {
                    ...defaultPreferences,
                    ...persistedState.preferences,
                    // Ensure nested objects are merged properly
                    display: {
                        ...defaultPreferences.display,
                        ...persistedState.preferences?.display || {}
                    },
                    themePreferences: {
                        ...defaultPreferences.themePreferences,
                        ...persistedState.preferences?.themePreferences || {}
                    },
                    behavior: {
                        ...defaultPreferences.behavior,
                        ...persistedState.preferences?.behavior || {}
                    },
                    educational: {
                        ...defaultPreferences.educational,
                        ...persistedState.preferences?.educational || {}
                    },
                    notifications: {
                        ...defaultPreferences.notifications,
                        ...persistedState.preferences?.notifications || {}
                    },
                    keyboardShortcuts: {
                        ...defaultPreferences.keyboardShortcuts,
                        ...persistedState.preferences?.keyboardShortcuts || {}
                    }
                }
            };
        }
        return currentState;
    }
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/view-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useViewStore",
    ()=>useViewStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useViewStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        viewType: 'list',
        setViewType: (viewType)=>set({
                viewType
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/filter-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFilterStore",
    ()=>useFilterStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useFilterStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // Initial state
        filters: {
            status: [],
            assignee: [],
            priority: [],
            labels: [],
            project: []
        },
        // Actions
        setFilter: (type, ids)=>{
            set((state)=>({
                    filters: {
                        ...state.filters,
                        [type]: ids
                    }
                }));
        },
        toggleFilter: (type, id)=>{
            set((state)=>{
                const currentFilters = state.filters[type];
                const newFilters = currentFilters.includes(id) ? currentFilters.filter((item)=>item !== id) : [
                    ...currentFilters,
                    id
                ];
                return {
                    filters: {
                        ...state.filters,
                        [type]: newFilters
                    }
                };
            });
        },
        clearFilters: ()=>{
            set({
                filters: {
                    status: [],
                    assignee: [],
                    priority: [],
                    labels: [],
                    project: []
                }
            });
        },
        clearFilterType: (type)=>{
            set((state)=>({
                    filters: {
                        ...state.filters,
                        [type]: []
                    }
                }));
        },
        // Utility
        hasActiveFilters: ()=>{
            const { filters } = get();
            return Object.values(filters).some((filterArray)=>filterArray.length > 0);
        },
        getActiveFiltersCount: ()=>{
            const { filters } = get();
            return Object.values(filters).reduce((acc, curr)=>acc + curr.length, 0);
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/current-user-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrentUserStore",
    ()=>useCurrentUserStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/users.ts [app-client] (ecmascript)");
;
;
;
const useCurrentUserStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        // Default to second user (ashdeep) to match screenshot
        currentUser: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["users"][1],
        setCurrentUser: (user)=>set({
                currentUser: user
            })
    }), {
    name: 'current-user-storage'
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/store/search-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSearchStore",
    ()=>useSearchStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useSearchStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        searchQuery: '',
        recentSearches: [],
        setSearchQuery: (query)=>set({
                searchQuery: query
            }),
        addRecentSearch: (query)=>set((state)=>{
                if (!query.trim() || state.recentSearches.includes(query)) {
                    return state;
                }
                const newSearches = [
                    query,
                    ...state.recentSearches
                ].slice(0, 5);
                return {
                    recentSearches: newSearches
                };
            }),
        clearRecentSearches: ()=>set({
                recentSearches: []
            }),
        resetSearch: ()=>set({
                searchQuery: ''
            })
    }), {
    name: 'search-storage',
    partialize: (state)=>({
            recentSearches: state.recentSearches
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_6ea6eef7._.js.map