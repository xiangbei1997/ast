const parser = require("@babel/parser");
const template = require("@babel/template").default;
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;
const path = require('path');
const fs = require('fs');
const {sikuyi_b, sikuyi_c, sikuyi_a} = require('./sikuyi_test.js');


step1();

function step1() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, './watchman1.js'), {"encoding": 'utf-8'}, function (err, data) {
            //     fs.readFile(path.resolve(__dirname, './watchman_result1.js'), {"encoding": 'utf-8'}, function (err, data) {
            const ast = parser.parse(data);
            decrypt(ast);
            let {code} = generator(ast);
            // fs.writeFile(path.resolve(__dirname, './watchman_result2.js'), code, function (err) {
            fs.writeFile(path.resolve(__dirname, './watchman_result3.js'), code, function (err) {
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

//
function decrypt(ast) {
    traverse(ast, {
            MemberExpression: replay_node_string,
            // Identifier:systme_string

        }
    )

}

// var hh = {v:'window',w:"document",u:"navigator",Da:"screen",Bb:"location",cb:"XMLHttpRequest",kd:"sessionStorage",na:"localStorage",ld:"devicePixelRatio",md:"indexedDB",nd:"openDatabase",pc:"doNotTrack",ed:"ActiveXObject",od:"WebGLRenderingContext",aa:"encodeURIComponent",Yb:"decodeURIComponent",xa:"setTimeout",pd:"setInterval",ga:"clearTimeout",ma:"parseInt",Db:"RegExp",Ba:"Date",bc:"unescape",mc:"WM_CONFIG",Fa:"WM_TID",ra:"WM_DID",nc:"WM_DIV",nb:"WM_NI",oc:"WM_NIKE",y:"NUMBER",t:"STRING",Z:"HEX",z:"BOOLEAN",G:"ARRAY",Ib:"CAT_CANVAS",Za:"CAT_FONTS",Jb:"CAT_WEBGL"};
//
function replay_node_string(path) {
    // console.log(path.node.object.name);
    if (path.node.object.name == 'b' || path.node.object.name == 'c' || path.node.object.name == 'a') {
        // console.log(path.node.object.name);
        // console.log(path.node.property.value);
        if (path.node.property.value != undefined) {
            var jiedian_name = null;
            console.log(path.node);
            if (path.node.object.name == 'b') {
                jiedian_name = sikuyi_b[path.node.property.value];
                path.replaceWith(t.stringLiteral(jiedian_name));
                return
            }
            if (path.node.object.name == 'c') {
                jiedian_name = sikuyi_c[path.node.property.value];
                console.log(jiedian_name);
                try {
                    path.replaceWith(t.stringLiteral(jiedian_name));
                    return
                } catch (err) {
                }
                // path.replaceWith(t.stringLiteral(jiedian_name));
                return
            }
            if (path.node.object.name == 'a') {
                jiedian_name = sikuyi_a[path.node.property.value];
                path.replaceWith(t.numericLiteral(jiedian_name));
                return
            }

            // path.replaceWith(t.stringLiteral(jiedian_name));
            // return
        }

    }
//
//
//
//     // console.log(path.node.id.name);
//     // console.log(path.node.body.body[0].argument.value);
//     // var name = path.node.id.name.replace('_$','');
//     // var gg = 'var ' + name + ' = ' + path.node.body.body[0].argument.value;
//     // console.log(path.node);
//     // console.log(path.node.callee)
//     // if (path.node.name.substr(0,2) =='_$'){
//     //     var gg = path.node.name.replace('_$','hubei');
//     //     // console.log(gg);
//     //     // console.log(path.node);
//     //     // path.replaceWithSourceString(gg)
//     //     path.node.name = gg
//     // }
//     // var gg = path.node.name.replace('_$','');
//     // console.log(gg);
//     // // console.log(path.node);
//     // path.node.name(replaceWith(gg))
//     // var gg = 'var ' + path.node.id.name + ' = ' + path.node.body.body[0].argument.value;
//     // console.log(gg);
//     // let tp =  template(gg);
//     // console.log(tp())
//     // // console.log(tp());
//     // // path.node = tp();
//     // console.log(tp());
//     // path.replaceWith(tp());
//     // return
//     // path.replaceWith(t.stringLiteral('123'));
//     // console.log(path.node)
//     // console.log(path.node.id.name);
//     // console.log(path.node.body.body[0].argument.value);
//
}

function systme_string(path) {
    for (var i in hh) {
        if (path.node.name == i) {
            path.node.name = hh[path.node.name]
        }
    }
    // if (hh[path.node.name] !=undefined and path.node.name !=toString){
    //     console.log(path.node.name);
    //     console.log(hh[path.node.name]);
    //
    // }

}