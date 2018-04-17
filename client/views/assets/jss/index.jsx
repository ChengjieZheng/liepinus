// ##############################
// // // Variables - Styles that are used on more than one component
// #############################
/* =========================================================
*
* Copyright 2018 Guangyu(David) Xu
 *
 *                       _oo0oo_
 *                      o8888888o
 *                      88" . "88
 *                      (| -_- |)
 *                      0\  =  /0
 *                    ___/`---'\___
 *                  .' \|     |// '.
 *                 / \|||  :  |||// \
 *                / _||||| -:- |||||- \
 *               |   | \\  -  /// |   |
 *               | \_|  ''\---/''  |_/ |
 *               \  .-\__  '-'  ___/-. /
 *             ___'. .'  /--.--\  `. .'___
 *          ."" '<  `.___\_<|>_/___.' >' "".
 *         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *         \  \ `_.   \_ __\ /__ _/   .-` /  /
 *     =====`-.____`.___ \_____/___.-`___.-'=====
 *                       `=---='
 *
 *     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *               Buddha Bless:  "No Bugs"
 *
 * ========================================================= */
const drawerWidth = 260;

const drawerMiniWidth = 80;

const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

const container = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media (min-width: 768px)': {
    width: '750px',
  },
  '@media (min-width: 992px)': {
    width: '970px',
  },
  '@media (min-width: 1200px)': {
    width: '1170px',
  },
  '&:before,&:after': {
    display: 'table',
    content: '" "',
  },
  '&:after': {
    clear: 'both',
  },
};

const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
  fontWeight: '300',
  lineHeight: '1.5em',
};

export {
  drawerWidth,
  drawerMiniWidth,
  transition,
  container,
  boxShadow,
  defaultFont,
};
