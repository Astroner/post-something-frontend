const path = require("path");

module.exports = (config) => {

    config.resolve.alias = {
        "@": path.resolve(__dirname, "src"),
        "@polette": path.resolve(__dirname, "src/polette.module.scss")
    }

    return config
}