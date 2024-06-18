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
    }
}

export default config;
