import './styles.css';
import React from 'react';
import { Textload, TextoFn } from './inicio_styles';
export var text0 = 'Const';
export var text = 'Function Stack {';
export var text1 = 'Aplicações Mobile;'
export var text2 = 'Sistemas Web;'
export var text3 = 'Websites;'
export var text4 = '}'

function TextJobs() {
    return (

        <TextoFn>
            {text}
              <Textload id="code" className="titulo-principal"></Textload>
            {text4}
        </TextoFn>

    );
};

export default TextJobs;

var texto =  ',' + " " + text0 + " " + text1 + ',' + " " + text0 + " " + text2 + ',' + " " + text0 + " " + text3;
var palavras = texto.split(",");

texto = palavras.join("\n");

if (window.location.pathname === '/') {
    window.onload = function run() {

        var Jobs = texto;
        var pre = document.getElementById("code");
        var text = Jobs;

        function* wait(t) {
            for (; t; t--) {
                yield t;
            }
        }

        var i = function* () {

            yield* wait(5);

            for (var j = 0; j < text.length; j++) {
                pre.textContent += text[j];
                yield* wait(1);
            }
        }();
        var timer = setInterval(function () {
            if (i.next().done) {
                clearInterval(timer);
            }
        }, 400 / 10);

    };


}else {
  
};
