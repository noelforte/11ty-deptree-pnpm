const DependencyTree = require("@11ty/dependency-tree");

const tree = DependencyTree("./dependencies.js", { nodeModuleNames: "only" });

console.log(tree);
