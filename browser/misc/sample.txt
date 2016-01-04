var score = require("./score.js");
var mat = require("./mat.js");
var pst = require("./pst.js");
var node = require("./_node");
var rotate = require("../helper/rotate.js");
var pretty = require("../helper/pretty.js");
var arrayEqual = require("../helper/arrayEqual.js").arrayEqual;
var gen = require("./gen.js");
var input = require("./input.js");
var convert = require("../helper/convert.js").convert;
var takeMove = require("../helper/takeMove.js").takeMove;
var fs = require("fs");
var chalk = require("chalk");
var ctx = new chalk.constructor({
  enabled: true
});

var ai = {};
visited = 0;

var order = function(c) {
  if (c[0].turn){
    c.forEach(function(y, x, arr) {
      arr[x].score = score.score(y);
    });
    c.sort(function(a, b) {
      if (a.score<b.score){
        return 1;
      }
      else if (a.score==b.score){
        return 0;
      }
      else {
        return -1;
      }
    });
    return c;
  }
  else{
    c.forEach(function(y, x, arr) {
      arr[x].score = -score.score(y);
    });
    c.sort(function(a, b) {
      if (a.score<b.score){
        return -1;
      }
      else if (a.score==b.score){
        return 0;
      }
      else {
        return 1;
      }
    });
    return c;
  }
}

ai.ab = function(n, depth, a, b, turn, branch) {
  if (turn) {
    if (depth > 0) {
      //console.time("gen");
      var g = gen.gen(n);
      //console.timeEnd("gen");
      if (n.root) {
        best_move = g[0];
      }
      var c = [];
      g.forEach(function(y, x, arr) {
        //console.time("child");
        c.push(takeMove(node.Node(!turn, n.board, y), y));
        //console.timeEnd("child");
        //console.time("rotate");
        c[c.length-1].board = rotate.rotate(c[c.length-1]);
        //console.timeEnd("rotate");
      });
      //console.time("order");
      c = order(c);
      //console.timeEnd("order");
      c.forEach(function(y, x, arr) {
        ret = ai.ab(y, depth - 1, a, b, !turn, y.move);
        if (ret > a) {
          if (ret >= b) {
            return b;
          }
          else{
            a = ret;
            if (n.root) {
              best_move = y.move;
            }
          }
        }
      });
      if (n.root) {
        console.log(a);
        return {
          value: a,
          move: best_move
        };
      } else {
        return a;
      }
    } else {
      //console.time("score");
      s = score.score(n);
      //console.timeEnd("score");
      return s;
    }
  } else {
    if (depth > 0) {
      var g = gen.gen(n);
      if (n.root) {
        best_move = g[0];
      }
      var c = [];
      g.forEach(function(y, x, arr) {
        c.push(takeMove(node.Node(!turn, n.board, y), y));
        c[c.length-1].board = rotate.rotate(c[c.length-1]);
      });
      c = order(c);
      c.forEach(function(y, x, arr) {
        ret = ai.ab(y, depth - 1, a, b, !turn, y.move);
        if (ret < b) {
          if (a >= ret) {
            return a;
          }
          else{
            b = ret;
            if (n.root) {
              best_move = y.move;
            }
          }
        }
      });
      if (n.root) {
        return {
          value: b,
          move: best_move
        };
      } else {
        return b;
      }
    } else {
      s = -1 * score.score(n);
      return s;
    }
  }
};


ai.search = function(n,f,d,turn){
  var g = f;
  var upper = 100000;
  var lower = -100000;
  var b;
  var ret;
  var move;
  while (lower<upper){
    console.log(lower,upper);
    if (g == lower){
      b = g+1;
    }
    else{
      b = g;
    }
    ret = ai.ab(n,d,b-1,b,turn);
    console.log(ret);
    g = ret.value;
    move = ret.move;
    if (g<b){
      upper = g;
    }
    else {
      lower = g;
    }
  }
  return move;
}


module.exports = ai;
