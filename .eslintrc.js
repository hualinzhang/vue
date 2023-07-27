module.exports = {
  root: true,
  plugins: [
    "vue"
  ],
  // env: {
  //   node: true,
  // },
  extends: ["plugin:vue/recommended", "@vue/standard"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true,
      },
    }
  ],
  rules: {
    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
    // 禁用alert/confirm、prompt、console、debugger
    // 'no-alert': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'eqeqeq': 'warn', // 要求使用 === 和 ！==
    "no-dupe-args": "error", // 禁止function定义中出现重名参数
    "no-dupe-keys": "error", // 禁止对象字面量中出现重复的key
    "no-eval": "error", // 禁用 eval()
    "no-self-compare": "error", // 禁止自身比较
    "no-self-assign": "error", // 禁止自我赋值
    "no-unused-vars": "warn", // 禁止出现未使用过的变量
    "no-const-assign": "error", // 禁止修改const声明的变量
    "no-func-assign": "error", // 禁止对function声明重新赋值
    // 'camlcase': 'error',
    "no-mixed-spaces-and-tabs": "error", // 禁止混用tab和空格键
    indent: ["error", 2], // 缩进风格
    // 'quotes': ['warn', 'single'], // 要求引号类型 ''
    quotes: ["error", "double"], // [2, 'single'], //引号类型为单引号， 这里的数字：0表示不不处理，1表示警告，2表示错误并退出
    semi: ["error", "always"], // 语句强制分号结尾
    eqeqeq: ["warn", "allow-null"], // 要求使用 === 和 ！==
    "space-before-function-paren": [0, { anonymous: "always", named: "never" }], // 函数定义时括号前的空格
    "vue/attribute-hyphenation": "off", // 是否用连字符命名自定义组件属性
    "vue/prop-name-casing": "warn", // prop名称要求使用驼峰形式
    "vue/require-prop-types": "error", // prop需要写上type类型
    "vue/no-unused-components": "warn", // 未使用组件
    // "vue/no-template-shadow": "error", // 嵌套的变量重复声明
    // "vue/html-self-closing": "error", // 标签自闭合
    "vue/singleline-html-element-content-newline": "off", // 单行html元素内容新建一行，禁用单行标签内容需换行的校验
    "vue/multiline-html-element-content-newline": "off", // 禁用多行标签内容需换行的校验
    "comma-dangle": [
      "error",
      {
        objects: "always-multiline",
      }
    ], // 声明对象时要求带上拖尾逗号
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 3,
        },
      }
    ],
    "vue/no-async-in-computed-properties": 2,
    // 禁止使用重复的属性名称
    "vue/no-dupe-keys": 2,
    // 除了class style外禁止重复属性
    "vue/no-duplicate-attributes": 2,
    // 不容许覆盖保留键
    "vue/no-reserved-keys": 2,
    // 将组件的数据属性强制为函数
    "vue/no-shared-component-data": 2,
    // 防止代码在计算属性和函数中产生副作用
    "vue/no-side-effects-in-computed-properties": 2,
    // 禁止在textarea中使用插值
    "vue/no-textarea-mustache": 2,
    // 不容许在模板中使用未注册的组件
    // "vue/no-unused-components": 2,
    // 禁止使用v-for的未使用变量定义
    "vue/no-unused-vars": 2,
    // 防止在同一元素上同时使用 v-for 指令和 v-if 指令
    "vue/no-use-v-if-with-v-for": 2,
    // 动态组件必须有动态的is属性
    "vue/require-component-is": 2,
    // prop类型必须是构造函数myProp: Number
    "vue/require-prop-type-constructor": 2,
    // render函数必须有返回值
    "vue/require-render-return": 2,
    // v-for中必须有key且最好不要用index
    "vue/require-v-for-key": 1,
    // props默认值必须为有效值
    "vue/require-valid-default-prop": 2,
    // computed必须有返回值
    "vue/return-in-computed-property": 2,
    // v-if必须有效
    "vue/valid-v-if": 2,
    // v-else-if必须有效
    "vue/valid-v-else-if": 2,
    // v-else必须有效
    "vue/valid-v-else": 2,
    // v-for必须有效
    "vue/valid-v-for": 2,
    // v-model必须有效
    "vue/valid-v-model": 2,
    // v-slot必须有效
    "vue/valid-v-slot": 2,
    // 自定义组件上使用带连字符的属性名<MyComponent my-prop="prop" />
    // "vue/attribute-hyphenation": 1,
    // 自定义组件使用驼峰命名
    "vue/component-definition-name-casing": 1,
    // html中>换行，属性换行>换行，属性不换行>不换行，
    "vue/html-closing-bracket-newline": [
      2,
      {
        singleline: "never",
        multiline: "always",
      }
    ],
    // .vue中html缩进
    // "vue/html-indent": [
    //   2,
    //   2,
    //   {
    //     attribute: 1,
    //     baseIndent: 1,
    //     closeBracket: 0,
    //     alignAttributesVertically: false,
    //     ignores: ["VAttribute"],
    //   }
    // ],
    // .vue中html使用双引号
    // "vue/html-quotes": [2, "double"],
    // html标签要求闭合，组件标签没有插槽同html单标签，有插槽同html双标签
    "vue/html-self-closing": [
      0,
      {
        html: {
          normal: "never",
          void: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      }
    ],
    // 达式和大括号之间需要一个空格
    "vue/mustache-interpolation-spacing": 2,
    // 禁止属性间多个空格
    "vue/no-multi-spaces": 2,
    // 禁止属性间多个空格
    "vue/no-spaces-around-equal-signs-in-attribute": 2,
    // 不能有v-for的隐藏变量声明
    "vue/no-template-shadow": 2,
    // 组件的props中属性强制驼峰命名
    // "vue/prop-name-casing": 2,
    // .vue中script缩进
    // "vue/script-indent": [
    //   2,
    //   2,
    //   {
    //     baseIndent: 1,
    //     switchCase: 1,
    //     ignores: [],
    //   }
    // ],

    // Variables
    "init-declarations": [2, "always"], // 声明时必须赋初值
    "no-shadow": 2, // 禁止变量声明与外层作用域的变量同名
    "no-undef-init": 2, // 禁止将变量初始化为 undefined
    "no-undefined": 2, // 禁止将 undefined 作为标识符
    "no-use-before-define": 2, // 禁止在变量定义之前使用它们
    // "no-unused-vars": 1, // 禁止使用未使用变量定义
  },
};
