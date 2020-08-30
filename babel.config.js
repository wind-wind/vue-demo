module.exports = {
  presets: [
    // '@vue/cli-plugin-babel/preset'
    "@vue/app"
  ],
  plugins:[
    // [
    //   "component",
    //   {
    //     "libraryName": "muse-ui",
    //     "style": true
    //   }
    // ],
    ["import", {
      "libraryName": "muse-ui",
      "libraryDirectory": "lib",
      "camel2DashComponentName": false
    }],
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      },
      "element-ui"
    ]
  ]
}
