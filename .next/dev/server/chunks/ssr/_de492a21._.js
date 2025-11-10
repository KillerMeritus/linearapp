module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$kayron013$2b$lexorank$40$2$2e$0$2e$0$2f$node_modules$2f40$kayron013$2f$lexorank$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@kayron013+lexorank@2.0.0/node_modules/@kayron013/lexorank/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$0$2e$2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.0.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$0$2e$2$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
;
}),
"[project]/lib/status-utils.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStatusById",
    ()=>getStatusById,
    "renderStatusIcon",
    ()=>renderStatusIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$4_react$2d$_c05f8d3cee69fa33aa1cfa0872022df0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.4_react-_c05f8d3cee69fa33aa1cfa0872022df0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$status$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/status.tsx [app-ssr] (ecmascript)");
;
;
function renderStatusIcon(statusId) {
    const selectedItem = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$status$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["status"].find((item)=>item.id === statusId);
    if (selectedItem) {
        const Icon = selectedItem.icon;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$4_react$2d$_c05f8d3cee69fa33aa1cfa0872022df0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
            fileName: "[project]/lib/status-utils.tsx",
            lineNumber: 8,
            columnNumber: 14
        }, this);
    }
    return null;
}
function getStatusById(statusId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$status$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["status"].find((item)=>item.id === statusId);
}
}),
"[project]/hooks/use-mobile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$4_react$2d$_c05f8d3cee69fa33aa1cfa0872022df0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.2-canary.4_react-_c05f8d3cee69fa33aa1cfa0872022df0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const MOBILE_BREAKPOINT = 1024;
function useIsMobile() {
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$4_react$2d$_c05f8d3cee69fa33aa1cfa0872022df0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$2$2d$canary$2e$4_react$2d$_c05f8d3cee69fa33aa1cfa0872022df0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = ()=>{
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener('change', onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return ()=>mql.removeEventListener('change', onChange);
    }, []);
    return !!isMobile;
}
}),
"[project]/store/issues-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIssuesStore",
    ()=>useIssuesStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/issues.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
;
const useIssuesStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // Initial state
        issues: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["issues"].sort((a, b)=>b.rank.localeCompare(a.rank)),
        issuesByStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupIssuesByStatus"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["issues"]),
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
                        issuesByStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupIssuesByStatus"])(newIssues),
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
                        issuesByStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupIssuesByStatus"])(newIssues),
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
                        issuesByStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$issues$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupIssuesByStatus"])(newIssues),
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
}),
"[project]/store/create-issue-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateIssueStore",
    ()=>useCreateIssueStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useCreateIssueStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
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
}),
"[project]/store/projects-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useProjectsStore",
    ()=>useProjectsStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$status$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/status.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$priorities$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/priorities.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/users.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$labels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/labels.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.476.0_react@19.0.0/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/uuid@11.1.0/node_modules/uuid/dist/esm/v4.js [app-ssr] (ecmascript) <export default as v4>");
;
;
;
;
;
;
;
;
const useProjectsStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        projects: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((p)=>({
                ...p,
                archived: p.archived ?? false
            })),
        // Queries
        getAllProjects: ()=>get().projects,
        getProjectsByWorkspace: (workspaceId)=>{
            return get().projects.filter((p)=>(p.workspaceId === undefined || p.workspaceId === workspaceId) && !p.archived);
        },
        getProjectById: (id)=>get().projects.find((p)=>p.id === id),
        // Mutations
        createProject: ({ name, workspaceId, description, priorityId, leadId, startDate, targetDate, memberIds, labelIds, milestones })=>{
            const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            const members = (memberIds ?? []).map((uid)=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["users"].find((u)=>u.id === uid)).filter(Boolean);
            const labels = (labelIds ?? []).map((lid)=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$labels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labels"].find((l)=>l.id === lid)).filter(Boolean);
            const newProject = {
                id,
                name,
                status: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$status$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["status"][1],
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$476$2e$0_react$40$19$2e$0$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
                percentComplete: 0,
                startDate: startDate ?? new Date().toISOString().slice(0, 10),
                targetDate,
                description,
                lead: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["users"].find((u)=>u.id === (leadId ?? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["users"][0].id)) ?? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["users"][0],
                priority: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$priorities$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["priorities"].find((p)=>p.id === (priorityId ?? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$priorities$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["priorities"][1].id)) ?? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$priorities$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["priorities"][1],
                health: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["health"][0],
                archived: false,
                workspaceId,
                members,
                labels,
                milestones: milestones ?? []
            };
            set((state)=>({
                    projects: [
                        newProject,
                        ...state.projects
                    ]
                }));
            return id;
        },
        renameProject: (id, name)=>{
            set((state)=>({
                    projects: state.projects.map((p)=>p.id === id ? {
                            ...p,
                            name
                        } : p)
                }));
        },
        updateProject: (id, updates)=>{
            set((state)=>({
                    projects: state.projects.map((p)=>p.id === id ? {
                            ...p,
                            ...updates
                        } : p)
                }));
        },
        archiveProject: (id)=>{
            set((state)=>({
                    projects: state.projects.map((p)=>p.id === id ? {
                            ...p,
                            archived: true
                        } : p)
                }));
        },
        unarchiveProject: (id)=>{
            set((state)=>({
                    projects: state.projects.map((p)=>p.id === id ? {
                            ...p,
                            archived: false
                        } : p)
                }));
        },
        deleteProject: (id)=>{
            set((state)=>({
                    projects: state.projects.filter((p)=>p.id !== id)
                }));
        },
        updateProjectField: (id, partial)=>{
            set((state)=>({
                    projects: state.projects.map((p)=>p.id === id ? {
                            ...p,
                            ...partial
                        } : p)
                }));
        },
        addProjectLabel: (id, label)=>{
            set((state)=>({
                    projects: state.projects.map((p)=>p.id === id ? {
                            ...p,
                            labels: [
                                ...p.labels ?? [],
                                label
                            ]
                        } : p)
                }));
        },
        removeProjectLabel: (id, labelId)=>{
            set((state)=>({
                    projects: state.projects.map((p)=>p.id === id ? {
                            ...p,
                            labels: (p.labels ?? []).filter((l)=>l.id !== labelId)
                        } : p)
                }));
        },
        createMilestone: (id, title, dueDate)=>{
            const milestoneId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$11$2e$1$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            set((state)=>({
                    projects: state.projects.map((p)=>p.id === id ? {
                            ...p,
                            milestones: [
                                ...p.milestones ?? [],
                                {
                                    id: milestoneId,
                                    title,
                                    dueDate
                                }
                            ]
                        } : p)
                }));
            return milestoneId;
        },
        updateMilestone: (id, milestoneId, partial)=>{
            set((state)=>({
                    projects: state.projects.map((p)=>p.id === id ? {
                            ...p,
                            milestones: (p.milestones ?? []).map((m)=>m.id === milestoneId ? {
                                    ...m,
                                    ...partial
                                } : m)
                        } : p)
                }));
        },
        deleteMilestone: (id, milestoneId)=>{
            set((state)=>({
                    projects: state.projects.map((p)=>p.id === id ? {
                            ...p,
                            milestones: (p.milestones ?? []).filter((m)=>m.id !== milestoneId)
                        } : p)
                }));
        }
    }));
}),
"[project]/store/preferences-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePreferencesStore",
    ()=>usePreferencesStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
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
const usePreferencesStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
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
}),
"[project]/store/view-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useViewStore",
    ()=>useViewStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useViewStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        viewType: 'list',
        setViewType: (viewType)=>set({
                viewType
            })
    }));
}),
"[project]/store/filter-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFilterStore",
    ()=>useFilterStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useFilterStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
}),
"[project]/store/current-user-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrentUserStore",
    ()=>useCurrentUserStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/users.ts [app-ssr] (ecmascript)");
;
;
;
const useCurrentUserStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        // Default to second user (ashdeep) to match screenshot
        currentUser: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["users"][1],
        setCurrentUser: (user)=>set({
                currentUser: user
            })
    }), {
    name: 'current-user-storage'
}));
}),
"[project]/store/search-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSearchStore",
    ()=>useSearchStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.3_@types+react@19.0.10_react@19.0.0/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const useSearchStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
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
}),
];

//# sourceMappingURL=_de492a21._.js.map