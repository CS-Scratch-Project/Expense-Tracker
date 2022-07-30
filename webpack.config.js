Econst path = require("path"); // this runs in the node environment, so we can bring in the path library
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js", // this is where we are going to bundle our frontend code from
  output: {
    // this is going to be the bundle.js, but it doesn't get created until npm run build
    path: path.join(__dirname, "/dist"), // this will either build where you tell it to, or it will already be there.  Our output folder will be build
    filename: "index.bundle.js", // this is what we send to deploy.  This is where all of our overall react code will be.
  },
  mode: "development", // we can say the string it will or what it will be in the package.json script that we will run.  Lookup process.env.NODE_ENV
  plugins: [new HtmlWebpackPlugin({ template: path.join(__dirname, "client", "index.html" })], // first argument is an object- first property is going to be template.  It will have a string index.html as a string as a value
  // we are saying that index.html is where we are going to build from ***look-up
  module: {
    // how webpack takes our files and puts it in a browser ready bundle
    rules: [
      // these are rules for how to handle different kinds of files.  How to identify files and what to do with them
      {
        test: /\.jsx?/, // the ?- can leave or take the x.  This wll take care of all the JSX files.  We need it for CSS and JPEG as well
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // dependency.  This is how we load into webpack
          options: { // The options may be optional
            presets: ["@babel/preset-env", "@babel/preset-react"], // these are dependencies that we have to install.  p
          },
        },
      },
      {
        test: /\.(jpg|png|svg)$/, // for our images.  We need to be able to read our file types.
        loader: "url-loader", // dependency
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.s?css/, // /\.s?css/  - these are for our style loaders
        /* /\.s[ac]ss$/i */
        exclude: /(node_modules)/,
        use: [
          // Creates `style` nodes from JS strings.  Creates
          "style-loader", // create a style tag in our index page
          // Translates CSS into CommonJS
          "css-loader", // makes sure we can load css files
          // Compiles Sass to CSS- makes it useful by the browser
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    /** "extensions"
     * If multiple files share the same name but have different extensions, webpack will
     * resolve the one with the extension listed first in the array and skip the rest.
     * This is what enables users to leave off the extension when importing
     */
    extensions: [".js", ".jsx", ".json"],
  },
  devServer: {
    // this will allow for live updating of react application
    port: "8080", //this is where we put our port.  Put in lower case (? will it get coerced- might be because URL is a string.  Look up)
    open: true, // ?
    /** "hot"
     * enabling and disabling HMR. takes "true", "false" and "only".
     * "only" is used if enable Hot Module Replacement without page
     * refresh as a fallback in case of build failures
     */
    hot: true, // ? related to liveReload- will quickly reload your page
    /** "liveReload"
     * disable live reload on the browser. "hot" must be set to false for this to work
     */
    liveReload: true, // ? related to hot
    historyApiFallback: true, // fall back to entry path every time it loads for react router- let's you go backwards in your browser history.  Thank Max every time you use it.
    static: {
      directory: path.join(__dirname, "/dist"), // this is like a pseudo-bundlememory vs disk storage.  From build up top, with npm run build, we are saving build.  What if we are doing npm run dev and not build- create a temporarily version of the build.  We are storing build temporarily in the RAM/memory- this is hot storage.  The difference between saving and not saving file.  Will go away when you turn the server down.  Pretend to build it.
      publicPath: "/build",
    },
    proxy: {
      "/**": "http://localhost:3000", // ** is the same as *.  Make sure it's very vanilla.  Can have multiple proxy's. // this is where http requests come in
      // you see your html page on port 8080.  We have 1-64,000 ports.
      //express and node are written under the hood in c++.  JS can't interface hardware in your computer- that's why we use node.  Node converts JS into c++.
    },
  },
};