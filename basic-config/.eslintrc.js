module.exports =  {
    extends : ["eslint:recommended"],
    env: {
        node:true,
        browser: true,
    },
    parserOptions : {
        ecmaVersion : 6,
        sourceType: "module"
    },
    rules:{
        "no-var":1,
        "no-self-assign":1
    }
}