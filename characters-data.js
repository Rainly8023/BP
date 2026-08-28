// ══════════════════════════════════════════════════════════════
//  鸣潮 · 旧雨杯赛事 全角色数据库 (Unified Characters Database)
// ══════════════════════════════════════════════════════════════

window.WUWA_ELEMENTS = {
  Fusion:  { name: '热熔', color: '#ff5722', glow: 'rgba(255,87,34,0.6)', gradient: 'linear-gradient(135deg, #ff5722, #ff9800)' },
  Glacio:  { name: '冷凝', color: '#00e5ff', glow: 'rgba(0,229,255,0.6)', gradient: 'linear-gradient(135deg, #00e5ff, #2979ff)' },
  Electro: { name: '导电', color: '#b388ff', glow: 'rgba(179,136,255,0.6)', gradient: 'linear-gradient(135deg, #b388ff, #7c4dff)' },
  Aero:    { name: '气动', color: '#69f0ae', glow: 'rgba(105,240,174,0.6)', gradient: 'linear-gradient(135deg, #69f0ae, #00bfa5)' },
  Spectro: { name: '衍射', color: '#ffd700', glow: 'rgba(255,215,0,0.6)', gradient: 'linear-gradient(135deg, #ffe082, #ffb300)' },
  Havoc:   { name: '湮灭', color: '#e040fb', glow: 'rgba(224,64,251,0.6)', gradient: 'linear-gradient(135deg, #ea80fc, #aa00ff)' }
};

window.ALL_CHARACTERS = [
  // ── 主 C (一代) ──
  { id: 'jy',      name: '忌炎',         en: 'Jiyan',         el: 'Aero',    role: 'mainDPS', gen: 1, star: 5, img: './images/jy.jpg',     facePos: 'center 20%' },
  { id: 'jx',      name: '今汐',         en: 'Jinhsi',        el: 'Spectro', role: 'mainDPS', gen: 1, star: 5, img: './images/jx.jpg',     facePos: 'center 22%' },
  { id: 'xly',     name: '相里要',       en: 'Xiangli Yao',   el: 'Electro', role: 'mainDPS', gen: 1, star: 5, img: './images/xly.jpg',    facePos: 'center 22%' },
  { id: 'klt',     name: '珂莱塔',       en: 'Carlotta',      el: 'Glacio',  role: 'mainDPS', gen: 1, star: 5, img: './images/klt.jpg',    facePos: 'center 22%' },
  { id: 'c',       name: '椿',           en: 'Camellya',      el: 'Havoc',   role: 'mainDPS', gen: 1, star: 5, img: './images/c.jpg',      facePos: 'center 22%' },
  { id: 'kkl',     name: '卡卡罗',       en: 'Calcharo',      el: 'Electro', role: 'mainDPS', gen: 1, star: 5, img: './images/kkl.jpg',    facePos: 'center 20%' },
  { id: 'ly',      name: '凌阳',         en: 'Lingyang',      el: 'Glacio',  role: 'mainDPS', gen: 1, star: 5, img: './images/ly.jpg',     facePos: 'center 22%' },
  { id: 'ak',      name: '安可',         en: 'Encore',        el: 'Fusion',  role: 'mainDPS', gen: 1, star: 5, img: './images/ak.jpg',     facePos: 'center 32%' },
  { id: 'manys',   name: '漂泊者·衍射',  en: 'Rover·Spectro', el: 'Spectro', role: 'mainDPS', gen: 1, star: 5, img: './images/manys.jpg',  facePos: 'center 22%' },
  { id: 'manym',   name: '漂泊者·湮灭',  en: 'Rover·Havoc',   el: 'Havoc',   role: 'mainDPS', gen: 1, star: 5, img: './images/manym.jpg',  facePos: 'center 22%' },
  { id: 'mandd',   name: '漂泊者·气动',  en: 'Rover·Aero',    el: 'Aero',    role: 'mainDPS', gen: 1, star: 5, img: './images/mandd.jpg',  facePos: 'center 22%' },

  // ── 主 C (二代) ──
  { id: 'jb',      name: '嘉贝莉娜',     en: 'Galbrena',      el: 'Fusion',  role: 'mainDPS', gen: 2, star: 5, img: './images/jb.jpg',     facePos: 'center 24%' },
  { id: 'ag',      name: '奥古斯塔',     en: 'Augusta',       el: 'Electro', role: 'mainDPS', gen: 2, star: 5, img: './images/ag.jpg',     facePos: 'center 24%' },
  { id: 'fll',     name: '弗洛洛',       en: 'Phrolova',      el: 'Havoc',   role: 'mainDPS', gen: 2, star: 5, img: './images/fll.jpg',    facePos: 'center 22%' },
  { id: 'kt',      name: '卡提希娅',     en: 'Cartethyia',    el: 'Aero',    role: 'mainDPS', gen: 2, star: 5, img: './images/kt.jpg',     facePos: 'center 24%' },
  { id: 'zn',      name: '赞妮',         en: 'Zani',          el: 'Spectro', role: 'mainDPS', gen: 2, star: 5, img: './images/zn.jpg',     facePos: 'center 22%' },
  { id: 'lucy',    name: '露西',         en: 'Lucy',          el: 'Fusion',  role: 'mainDPS', gen: 2, star: 5, img: './images/lucy.jpg',   facePos: 'center 18%' },
  { id: 'blt',     name: '布兰特',       en: 'Brant',         el: 'Fusion',  role: 'mainDPS', gen: 2, star: 5, img: './images/blt.jpg',    facePos: 'center 24%' },

  // ── 主 C (三代) ──
  { id: 'lh',      name: '陆·赫斯',      en: 'Luuk Herssen',  el: 'Spectro', role: 'mainDPS', gen: 3, star: 5, img: './images/lh.jpg',     facePos: 'center 22%' },
  { id: 'am',      name: '爱弥斯',       en: 'Aemeath',       el: 'Fusion',  role: 'mainDPS', gen: 3, star: 5, img: './images/am.jpg',     facePos: 'center 24%' },
  { id: 'SG',      name: '西格莉卡',     en: 'Sigrika',       el: 'Aero',    role: 'mainDPS', gen: 3, star: 5, img: './images/SG.jpg',     facePos: 'center 24%' },
  { id: 'fx',      name: '绯雪',         en: 'Hiyuki',        el: 'Glacio',  role: 'mainDPS', gen: 3, star: 5, img: './images/fx.jpg',     facePos: 'center 20%' },
  { id: 'xl',      name: '秧秧·玄翎',    en: 'Xuanling',      el: 'Aero',    role: 'mainDPS', gen: 3, star: 5, img: './images/xl.jpg',     facePos: 'center 18%' },
  { id: 'qingx',   name: '清宵',         en: 'Qingxiao',      el: 'Spectro', role: 'mainDPS', gen: 3, star: 5, img: './images/qingx.jpg',  facePos: 'center 20%' },
  { id: 'jingran', name: '景燃',         en: 'Jingran',       el: 'Fusion',  role: 'mainDPS', gen: 3, star: 5, img: './images/jingran.jpg',facePos: 'center 20%' },
  { id: 'xyh',     name: '心月狐',       en: 'Xinyuehu',      el: 'Havoc',   role: 'mainDPS', gen: 3, star: 5, img: './images/xyh.jpg',    facePos: 'center 20%' },

  // ── 副 C (5星 & 4星) ──
  { id: 'ys',      name: '吟霖',         en: 'Yinlin',        el: 'Electro', role: 'subDPS',  gen: 1, star: 5, img: './images/ys.jpg',     facePos: 'center 22%' },
  { id: 'cl',      name: '长离',         en: 'Changli',       el: 'Fusion',  role: 'subDPS',  gen: 1, star: 5, img: './images/cl.jpg',     facePos: 'center 22%' },
  { id: 'zz',      name: '折枝',         en: 'Zhezhi',        el: 'Glacio',  role: 'subDPS',  gen: 1, star: 5, img: './images/zz.jpg',     facePos: 'center 22%' },
  { id: 'lkk',     name: '洛可可',       en: 'Roccia',        el: 'Havoc',   role: 'subDPS',  gen: 2, star: 5, img: './images/lkk.jpg',    facePos: 'center 22%' },
  { id: 'jx1',     name: '鉴心',         en: 'Jianxin',       el: 'Aero',    role: 'subDPS',  gen: 1, star: 5, img: './images/jx1.jpg',    facePos: 'center 22%' },
  { id: 'll',      name: '坎特蕾拉',     en: 'Cantarella',    el: 'Havoc',   role: 'subDPS',  gen: 2, star: 5, img: './images/ll.jpg',     facePos: 'center 22%' },
  { id: 'yn',      name: '尤诺',         en: 'Iuno',          el: 'Glacio',  role: 'subDPS',  gen: 2, star: 5, img: './images/yn.jpg',     facePos: 'center 22%' },
  { id: 'ln',      name: '琳奈',         en: 'Lynae',         el: 'Spectro', role: 'subDPS',  gen: 2, star: 5, img: './images/ln.jpg',     facePos: 'center 22%' },
  { id: 'cy',      name: '仇远',         en: 'Qiuyuan',       el: 'Aero',    role: 'subDPS',  gen: 2, star: 5, img: './images/cy.jpg',     facePos: 'center 30%' },
  { id: 'lp',      name: '露帕',         en: 'Lupa',          el: 'Fusion',  role: 'subDPS',  gen: 2, star: 5, img: './images/lp.jpg',     facePos: 'center 34%' },
  { id: 'xk',      name: '夏空',         en: 'Ciaccona',      el: 'Aero',    role: 'subDPS',  gen: 2, star: 5, img: './images/xk.jpg',     facePos: 'center 22%' },
  { id: 'fb',      name: '菲比',         en: 'Phoebe',        el: 'Spectro', role: 'subDPS',  gen: 2, star: 5, img: './images/fb.jpg',     facePos: 'center 22%' },
  { id: 'lsl',     name: '洛瑟拉',       en: 'Lucilla',       el: 'Spectro', role: 'subDPS',  gen: 3, star: 5, img: './images/lsl.jpg',    facePos: 'center 22%' },
  { id: 'lbk',     name: '丽贝卡',       en: 'Rebecca',       el: 'Fusion',  role: 'subDPS',  gen: 3, star: 5, img: './images/lbk.jpg',    facePos: 'center 22%' },
  { id: 'dly',     name: '达妮娅',       en: 'Denia',         el: 'Glacio',  role: 'subDPS',  gen: 3, star: 5, img: './images/dly.jpg',    facePos: 'center 22%' },
  { id: 'qx',      name: '千咲',         en: 'Chisa',         el: 'Havoc',   role: 'subDPS',  gen: 2, star: 5, img: './images/qx.jpg',     facePos: 'center 30%' },
  { id: 'suoming', name: '锁暝',         en: 'Suoming',       el: 'Havoc',   role: 'subDPS',  gen: 3, star: 5, img: './images/suoming.jpg',facePos: 'center 22%' },
  { id: 'mtf',     name: '莫特斐',       en: 'Mortefi',       el: 'Fusion',  role: 'subDPS',  gen: 1, star: 4, img: './images/mtf.jpg',    facePos: 'center 22%' },
  { id: 'sh',      name: '散华',         en: 'Sanhua',        el: 'Glacio',  role: 'subDPS',  gen: 1, star: 4, img: './images/sh.jpg',     facePos: 'center 22%' },
  { id: 'yy',      name: '秧秧',         en: 'Yangyang',      el: 'Aero',    role: 'subDPS',  gen: 1, star: 4, img: './images/yy.jpg',     facePos: 'center 30%' },

  // ── 奶 妈 (5星 & 4星) ──
  { id: 'sar',     name: '守岸人',       en: 'Shorekeeper',   el: 'Spectro', role: 'healer',  gen: 1, star: 5, img: './images/sar.jpg',    facePos: 'center 22%' },
  { id: 'ss',      name: '穗穗',         en: 'Suisui',        el: 'Spectro', role: 'healer',  gen: 3, star: 5, img: './images/ss.jpg',     facePos: 'center 26%' },
  { id: 'wln',     name: '维里奈',       en: 'Verina',        el: 'Spectro', role: 'healer',  gen: 1, star: 5, img: './images/wln.jpg',    facePos: 'center 36%' },
  { id: 'mn',      name: '莫宁',         en: 'Mornye',        el: 'Fusion',  role: 'healer',  gen: 2, star: 5, img: './images/mn.jpg',     facePos: 'center 22%' },
  { id: 'bz',      name: '白芷',         en: 'Baizhi',        el: 'Glacio',  role: 'healer',  gen: 1, star: 4, img: './images/bz.jpg',     facePos: 'center 28%' },
  { id: 'bl',      name: '卜灵',         en: 'Buling',        el: 'Electro', role: 'healer',  gen: 2, star: 4, img: './images/bl.jpg',     facePos: 'center 30%' },

  // ── 四 星 专 属 ──
  { id: 'cx',      name: '炽霞',         en: 'Chixia',        el: 'Fusion',  role: 'fourStar',gen: 1, star: 4, img: './images/cx.jpg',     facePos: 'center 22%' },
  { id: 'dj',      name: '丹瑾',         en: 'Danjin',        el: 'Havoc',   role: 'fourStar',gen: 1, star: 4, img: './images/dj.jpg',     facePos: 'center 34%' },
  { id: 'qs',      name: '秋水',         en: 'Aalto',         el: 'Aero',    role: 'fourStar',gen: 1, star: 4, img: './images/qs.jpg',     facePos: 'center 22%' },
  { id: 'yw',      name: '渊武',         en: 'Yuanwu',        el: 'Electro', role: 'fourStar',gen: 1, star: 4, img: './images/yw.jpg',     facePos: 'center 22%' },
  { id: 'tq',      name: '桃祈',         en: 'Taoqi',         el: 'Havoc',   role: 'fourStar',gen: 1, star: 4, img: './images/tq.jpg',     facePos: 'center 28%' },
  { id: 'dd',      name: '灯灯',         en: 'Lumi',          el: 'Electro', role: 'fourStar',gen: 1, star: 4, img: './images/dd.jpg',     facePos: 'center 28%' },
  { id: 'yh',      name: '釉瑚',         en: 'Youhu',         el: 'Glacio',  role: 'fourStar',gen: 1, star: 4, img: './images/yh.jpg',     facePos: 'center 30%' }
];

window.CHAR_BY_NAME = {};
window.CHAR_BY_ID = {};
window.ALL_CHARACTERS.forEach(function(c) {
  window.CHAR_BY_NAME[c.name] = c;
  window.CHAR_BY_ID[c.id] = c;
});

window.getCharInfo = function(query) {
  if (!query) return null;
  if (typeof query === 'object') {
    if (query.name && window.CHAR_BY_NAME[query.name]) return window.CHAR_BY_NAME[query.name];
    if (query.id && window.CHAR_BY_ID[query.id]) return window.CHAR_BY_ID[query.id];
    return query;
  }
  return window.CHAR_BY_NAME[query] || window.CHAR_BY_ID[query] || null;
};
