export function fileUrlToRequestUrl(fileUrl: string) {
    // /docs/magic/1.md -> /problem/magic/1
    return fileUrl.replace("/docs", "/problem").replace(".md", "");
}

export function requestUrlToFileUrl(requestUrl: string) {
    // /problem/magic/1 -> /docs/magic/1.md
    return requestUrl.replace("/problem", "/docs") + ".md";
}