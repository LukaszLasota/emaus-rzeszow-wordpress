import defaultConfig from "@wordpress/scripts/config/webpack.config";
import path from "path";


export default {
    ...defaultConfig,
    entry: {
        ...defaultConfig.entry(),
        "react-app/index": path.resolve(process.cwd(), "src/react-app/app.js"),
    },
    output: {
        path: path.resolve(process.cwd(), "build"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
};


