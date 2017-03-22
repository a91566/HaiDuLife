/**
 * Created by a91566 on 2015-11-06.
 */


document.write("<script language='javascript' src='one.js'></script>");
function fnTwo(){
    document.writeln("in two");
    fnOne();
}