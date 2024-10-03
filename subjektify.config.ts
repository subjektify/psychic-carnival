import { SubjektifyConfig } from "subjektify";
import "@subjektifylabs/subjektify-toolbox";

const config: SubjektifyConfig = {
    namespace: "psychic-carnival",
    version: "0.0.1",
    license: "MIT",
    build: {
        sources: [
            "subjects",
        ],
        outputDirectory: "generated"
    },
    codegen: [
        {
            target: "client",
            language: "typescript",
        },
        {
            target: "contract",
            language: "solidity",
        }
    ]
}

export default config;
