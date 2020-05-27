const parser = require("@babel/parser");
const template = require("@babel/template").default;
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;
const path = require('path');
const fs = require('fs');

step1();
function step1() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, './hubei_zz.js'), {"encoding": 'utf-8'}, function (err, data) {
            const ast = parser.parse(data);
            decrypt(ast);
            let {code} = generator(ast);
            fs.writeFile(path.resolve(__dirname, './hubei_result1.js'), code, function (err) {
                if (!err) {
                    console.log('result1 generated');
                    resolve()
                } else {
                    console.log(err);
                    reject()
                }
            })
        })
    })
}

function decrypt(ast) {
    traverse(ast, {
        CallExpression:replay_node_string
        }
    )

}

function replay_node_string(path) {
    // console.log(path.node.id.name);
    // console.log(path.node.body.body[0].argument.value);
    // var name = path.node.id.name.replace('_$','');
    // var gg = 'var ' + name + ' = ' + path.node.body.body[0].argument.value;
    // console.log(path.node);
    console.log(path.node.callee)
    // if (path.node.name.substr(0,2) =='_$'){
    //     var gg = path.node.name.replace('_$','hubei');
    //     // console.log(gg);
    //     // console.log(path.node);
    //     // path.replaceWithSourceString(gg)
    //     path.node.name = gg
    // }
    // var gg = path.node.name.replace('_$','');
    // console.log(gg);
    // // console.log(path.node);
    // path.node.name(replaceWith(gg))
    // var gg = 'var ' + path.node.id.name + ' = ' + path.node.body.body[0].argument.value;
    // console.log(gg);
    // let tp =  template(gg);
    // console.log(tp())
    // // console.log(tp());
    // // path.node = tp();
    // console.log(tp());
    // path.replaceWith(tp());
    // return
    // path.replaceWith(t.stringLiteral('123'));
    // console.log(path.node)
    // console.log(path.node.id.name);
    // console.log(path.node.body.body[0].argument.value);

}