import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname replacement for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.resolve(__dirname, "../icons");
const outputFile = path.resolve(__dirname, "../components/Svg.tsx");

function toPascalCase(str) {
  return str
    .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (_, c) => c.toUpperCase());
}

function walkDir(dir, filelist = []) {
  for (const file of fs.readdirSync(dir)) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walkDir(filepath, filelist);
    } else if (file.endsWith(".svg")) {
      filelist.push(filepath);
    }
  }
  return filelist;
}

const files = walkDir(iconsDir);

let imports = "";
let exports = "export const Svg = {\n";

for (const file of files) {
  const name = toPascalCase(path.basename(file, ".svg"));
  const importPath = path.relative(path.dirname(outputFile), file).replace(/\\/g, "/");
  imports += `import ${name} from "${importPath}";\n`;
  exports += `  ${name},\n`;
}

exports += "};\n";

const typeDef = `
export type SvgKeys = keyof typeof Svg;
`;

const reactPropsFix = `
declare module "react" {
  interface SVGProps<T> extends React.SVGProps<SVGSVGElement> {
    className?: string;
  }
}
`;

const finalContent = `/* AUTO-GENERATED FILE. DO NOT EDIT. */
import React from "react";
${imports}
${exports}
${typeDef}
${reactPropsFix}
`;

fs.writeFileSync(outputFile, finalContent, "utf8");

console.log("✅ Svg.tsx generated with", files.length, "icons.");
