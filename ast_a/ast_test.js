const parser = require("@babel/parser")
const template = require("@babel/template").default;
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const generator = require("@babel/generator").default

// const parser = require("@babel/parser")
let =
let visitor = {
    ArrowFunctionExpression(path) {//定义需要转换的节点,这里拦截箭头函数
        let params = path.node.params;
        let blockStatement = path.node.body;
        //使用babel-types的functionExpression方法生成新节点
        let func = types.functionExpression(null, params, blockStatement, false, false);
        //替换节点
        path.replaceWith(func) //
    }
};
//将code转成ast
function test(path){
    console.log(path)
}
const ast = parser.parse(data);
decrypt(ast);
function decrypt(ast) {
    traverse(ast, {
        FunctionDeclaration:{
            exit:[test]
        }
    })

}
console.log(ast);
