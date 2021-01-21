module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        "@vue/babel-plugin-jsx",
        [
            "import",
            {
                "libraryName": "ant-design-vue",
                "libraryDirectory": "es",
                "style": "css"
            },
            "ant-design-vue"
        ],
        [
            "import",
            {
                "libraryName": "vant",
                "libraryDirectory": "es",
                "style": true
            },
            "vant"
        ]
    ]
}
