import { TreeMode } from "../types";
import { getChildrenFunction } from "./getChildrenFunction";
import { Node, SourceFile, CompilerApi } from "./CompilerApi";

export function getDescendantAtRange(mode: TreeMode, sourceFile: SourceFile, range: [number, number], compilerApi: CompilerApi) {
    const getChildren = getChildrenFunction(mode, sourceFile);
    const syntaxKinds = compilerApi.SyntaxKind;

    let bestMatch: { node: Node; start: number; } = { node: sourceFile, start: sourceFile.getStart(sourceFile) };
    searchDescendants(sourceFile);
    return bestMatch.node;

    function searchDescendants(node: Node) {
        const children = getChildren(node);
        for (const child of children) {
            const isSyntaxList = child.kind === syntaxKinds.SyntaxList;
            if (!isSyntaxList && isBeforeRange(child.end))
                continue;

            const childStart = child.getStart(sourceFile);

            if (!isSyntaxList && isAfterRange(childStart))
                return;

            const isEndOfFileToken = child.kind === syntaxKinds.EndOfFileToken;
            const hasSameStart = bestMatch.start === childStart && range[0] === childStart;
            if (!isSyntaxList && !isEndOfFileToken && !hasSameStart)
                bestMatch = { node: child, start: childStart };

            searchDescendants(child);
        }
    }

    function isBeforeRange(pos: number) {
        return pos < range[0];
    }

    function isAfterRange(nodeEnd: number) {
        return nodeEnd >= range[0] && nodeEnd > range[1];
    }
}
