import { SubjektifyConfig, task } from "subjektify";
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

task("build", async (_, sre) => {
    console.log(JSON.stringify(sre.model))
});

export default config;
