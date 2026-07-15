const $ = (id) => document.getElementById(id);

const STORE_KEY = "attentionSealTemplateProjects.v1";
const EXPORT_COUNT_KEY = "attentionSealExportCount.v1";
const EDITOR_CANVAS_PADDING = 90;
const EDITOR_STAGE_SIZE = 720;
const MEDAL_IMAGE = "./assets/medal-base.png";
const MEDAL2_IMAGE = "./assets/medal-2-base.png";
const FRAGRANCE_MATERIALS = {
  or: { label: "香り素材 OR", image: "./assets/or-fragrance-material.png", width: 218, height: 148 },
  qu: { label: "香り素材 Q+", image: "./assets/qu-fragrance-material.png", width: 218, height: 148 },
  mint: { label: "ミント素材", image: "./assets/mint-material.png", width: 218, height: 148 }
};
const THUMBNAIL_WIDTH = 1125;
const THUMBNAIL_HEIGHT = 1500;

const fonts = [
  { label: "游ゴシック", value: "'Yu Gothic', 'YuGothic', 'Hiragino Sans', sans-serif" },
  { label: "FOT-筑紫Aオールド明朝Pro6N D", value: "'FOT-筑紫Aオールド明朝 Pro D', 'FOT-TsukuAOldMin Pr6N D', 'Yu Mincho', serif" },
  { label: "游明朝", value: "'Yu Mincho', 'YuMincho', 'Hiragino Mincho ProN', serif" },
  { label: "ヒラギノ角ゴ", value: "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif" },
  { label: "Times New Roman", value: "'Times New Roman', Georgia, serif" }
];

const brandGroups = {
  ALLNA_ORGANIC: {
    label: "ALLNA ORGANIC",
    templates: {
      horizontal: {
        label: "横型",
        image: "./assets/allna-horizontal-base.png?v=11",
        width: 500,
        height: 400,
        canvasScale: 32,
        layers: [
          textLayer("main", "ダメージ補修 特化", 250, 185, 40, "#651b20", 700, "horizontal", { label: "訴求1", box: [20, 150, 460, 78], align: "center", vAlign: "middle" }),
          textLayer("rank", "シリーズ累計販売個数", 250, 118, 23, "#651b20", 700, "horizontal", { label: "訴求2", box: [75, 98, 350, 42], align: "center", vAlign: "middle" }),
          textLayer("band", "ラグジュアリー の香り", 250, 275, 27, "#ffffff", 700, "horizontal", { label: "訴求3", box: [40, 260, 420, 42], align: "center", vAlign: "middle" }),
          textLayer("note", "*1 2024/3/15付 自社調べ シャンプー・コンディショナーセット部門　*2 2018年1月〜2025年9月時点", 250, 318, 7, "#ffffff", 600, "horizontal", { label: "注釈", box: [36, 307, 425, 18], align: "center" })
        ]
      },
      vertical: {
        label: "縦型",
        image: "./assets/allna-vertical-base.png?v=15",
        width: 179,
        height: 530,
        canvasScale: 20,
        layers: [
          textLayer("main", "訴求1\n訴求1\n訴求1", 90, 145, 40, "#0f0a08", 700, "vertical", { label: "訴求1", box: [6, 120, 167, 370], align: "center", vAlign: "top", clip: false }),
          textLayer("rank", "訴求2\n訴求2\n訴求2", 133, 145, 17, "#0f0a08", 700, "vertical", { label: "訴求2", box: [100, 120, 72, 340], align: "center", vAlign: "top", clip: false }),
          textLayer("band", "ラグジュアリー\nの香り", 18, 430, 18, "#ffffff", 700, "horizontal", { label: "訴求3", box: [16, 414, 145, 54], align: "left", vAlign: "middle" }),
          textLayer("note", "注釈注釈注釈注釈注釈", 20, 492, 7, "#ffffff", 600, "horizontal", { label: "注釈", box: [18, 482, 145, 28], align: "left" })
        ]
      },
      round1: {
        label: "丸型1",
        image: "./assets/allna-round-1-base.png?v=11",
        width: 500,
        height: 400,
        canvasScale: 38,
        layers: [
          textLayer("rank", "シリーズ累計販売個数", 250, 86, 23, "#651b20", 700, "horizontal", { label: "訴求2", box: [150, 64, 200, 46], align: "center", vAlign: "middle" }),
          textLayer("main", "ダメージ\n補修", 250, 188, 52, "#651b20", 700, "horizontal", { label: "訴求1", box: [86, 140, 328, 115], align: "center", vAlign: "middle" }),
          textLayer("suffix", "特化", 356, 248, 24, "#651b20", 700, "horizontal", { label: "訴求1 補助", box: [315, 232, 78, 34], align: "center" }),
          textLayer("band", "ラグジュアリーな香り", 250, 329, 29, "#ffffff", 700, "horizontal", { label: "訴求3", box: [105, 309, 290, 45], align: "center", vAlign: "middle" }),
          textLayer("note", "*1 2024/3/15付 自社調べ シャンプー・コンディショナーセット部門\n*2：2018年1月〜2025年9月時点", 250, 365, 8, "#ffffff", 600, "horizontal", { label: "注釈", box: [106, 356, 288, 25], align: "center" })
        ]
      },
      round2: {
        label: "丸型2",
        image: "./assets/allna-round-2-base.png?v=11",
        width: 500,
        height: 400,
        canvasScale: 30,
        layers: [
          textLayer("scent", "ラベンダー ×\nオレンジの香り", 250, 91, 18, "#0f0a08", 500, "horizontal", { label: "訴求2", box: [160, 72, 180, 50], align: "center", vAlign: "middle" }),
          textLayer("sub", "ベタつかずに", 250, 157, 23, "#0f0a08", 600, "horizontal", { label: "訴求2", box: [145, 143, 210, 35], align: "center" }),
          textLayer("main", "ダメージ補修\n特化", 250, 220, 45, "#651b20", 700, "horizontal", { label: "訴求1", box: [112, 180, 276, 100], align: "center", vAlign: "middle" }),
          textLayer("band", "ラグジュアリー の香り", 250, 318, 22, "#ffffff", 700, "horizontal", { label: "訴求3", box: [100, 294, 300, 54], align: "center", vAlign: "middle" }),
          textLayer("note", "*2026/1/21〜2026/2/2 ヘアオイル部門", 250, 370, 8, "#ffffff", 600, "horizontal", { label: "注釈", box: [116, 359, 268, 18], align: "center" })
        ]
      }
    }
  },
  WHITH_WHITE: {
    label: "WHITH WHITE",
    templates: {
      horizontal1: {
        label: "横型1",
        image: "./assets/wh-horizontal-1-base.png?v=1",
        width: 747,
        height: 473,
        canvasScale: 26,
        layers: [
          textLayer("rank", "訴求2 訴求2 訴求2 訴求2", 374, 61, 34, "#ffffff", 700, "horizontal", { label: "訴求2", box: [110, 32, 527, 58], align: "center", vAlign: "middle" }),
          textLayer("main", "口臭ケア", 374, 160, 108, "#ffffff", 700, "horizontal", { label: "訴求1", box: [78, 84, 590, 142], align: "center", vAlign: "middle" }),
          textLayer("band", "サボンの香り", 374, 306, 60, "#285893", 700, "horizontal", { label: "訴求3", box: [118, 258, 510, 88], align: "center", vAlign: "middle" }),
          textLayer("note", "*1 古い角質や汚れによる *2マスキングによる", 374, 356, 13, "#231f20", 500, "horizontal", { label: "注釈", box: [235, 342, 277, 25], align: "center", vAlign: "middle" })
        ]
      },
      horizontal2: {
        label: "横型2",
        image: "./assets/wh-horizontal-2-base.png?v=1",
        width: 554,
        height: 298,
        canvasScale: 32,
        layers: [
          textLayer("main", "ダメージ補修 特化", 277, 139, 42, "#347fc6", 700, "horizontal", { label: "訴求1", box: [22, 104, 510, 72], align: "center", vAlign: "middle" }),
          textLayer("rank", "シリーズ累計販売個数", 277, 77, 23, "#231f20", 700, "horizontal", { label: "訴求2", box: [88, 58, 378, 42], align: "center", vAlign: "middle" }),
          textLayer("band", "サボンの香り", 277, 248, 28, "#ffffff", 700, "horizontal", { label: "訴求3", box: [44, 232, 466, 42], align: "center", vAlign: "middle" }),
          textLayer("note", "*1 古い角質や汚れによる　*2マスキングによる", 277, 280, 8, "#ffffff", 600, "horizontal", { label: "注釈", box: [48, 270, 458, 18], align: "center", vAlign: "middle" })
        ]
      },
      round1: {
        label: "丸型1",
        image: "./assets/wh-round-1-base.png?v=1",
        width: 300,
        height: 295,
        canvasScale: 46,
        layers: [
          textLayer("rank", "訴求2訴求2訴求2", 150, 51, 18, "#231f20", 700, "horizontal", { label: "訴求2", box: [54, 34, 192, 34], align: "center", vAlign: "middle" }),
          textLayer("main", "ダメージ\n補修特化", 150, 125, 39, "#347fc6", 700, "horizontal", { label: "訴求1", box: [44, 72, 212, 92], align: "center", vAlign: "middle" }),
          textLayer("band", "サボンの香り", 150, 219, 23, "#ffffff", 700, "horizontal", { label: "訴求3", box: [40, 198, 220, 42], align: "center", vAlign: "middle" }),
          textLayer("note", "*1 古い角質や汚れによる\n*2マスキングによる", 150, 257, 8, "#ffffff", 600, "horizontal", { label: "注釈", box: [75, 244, 150, 30], align: "center", vAlign: "middle" })
        ]
      },
      vertical: {
        label: "縦型",
        image: "./assets/wh-vertical-base.png?v=1",
        width: 179,
        height: 530,
        canvasScale: 20,
        layers: [
          textLayer("rank", "訴求2訴求\n2訴求2", 90, 38, 18, "#231f20", 700, "horizontal", { label: "訴求2", box: [20, 16, 139, 55], align: "center", vAlign: "middle" }),
          textLayer("main", "ダメージ\n補修特化", 88, 248, 42, "#347fc6", 700, "vertical", { label: "訴求1", box: [20, 100, 139, 290], align: "center", vAlign: "middle", clip: false }),
          textLayer("band", "サボンの香り", 90, 442, 24, "#ffffff", 700, "horizontal", { label: "訴求3", box: [15, 420, 149, 45], align: "center", vAlign: "middle" }),
          textLayer("note", "*1 古い角質や汚れによる\n*2マスキングによる", 90, 486, 7, "#ffffff", 600, "horizontal", { label: "注釈", box: [24, 468, 131, 32], align: "center", vAlign: "middle" })
        ]
      }
    }
  },
  QPLUS: {
    label: "Q+",
    templates: {
      horizontal1: {
        label: "横型1",
        image: "./assets/qplus-horizontal-1-base.png?v=1",
        width: 595,
        height: 238,
        canvasScale: 34,
        layers: [
          textLayer("benefit", "ドライヤー時間 30%短縮", 298, 48, 34, "#ffffff", 700, "horizontal", { label: "訴求2", box: [36, 18, 520, 58], align: "center", vAlign: "middle" }),
          textLayer("note", "*自社調べ", 298, 82, 7, "#ffffff", 600, "horizontal", { label: "注釈", box: [260, 72, 76, 12], align: "center" }),
          textLayer("sub", "芯からサラサラな髪", 298, 116, 26, "#231f20", 500, "horizontal", { label: "訴求3", box: [120, 88, 355, 38], align: "center", vAlign: "middle" }),
          textLayer("main", "速乾 × 補修", 298, 175, 58, "#1c4378", 700, "horizontal", { label: "訴求1", box: [70, 126, 455, 82], align: "center", vAlign: "middle" })
        ]
      },
      horizontal2: {
        label: "横型2",
        image: "./assets/qplus-horizontal-2-base.png?v=1",
        width: 595,
        height: 238,
        canvasScale: 34,
        layers: [
          textLayer("sub", "芯からサラサラな髪", 298, 33, 26, "#231f20", 500, "horizontal", { label: "訴求3", box: [120, 12, 355, 36], align: "center", vAlign: "middle" }),
          textLayer("main", "速乾 × 補修", 298, 103, 62, "#359db8", 700, "horizontal", { label: "訴求1", box: [70, 48, 455, 92], align: "center", vAlign: "middle" }),
          textLayer("benefit", "ドライヤー時間 30%短縮", 298, 195, 35, "#ffffff", 700, "horizontal", { label: "訴求2", box: [48, 162, 500, 55], align: "center", vAlign: "middle" }),
          textLayer("note", "*自社調べ", 298, 224, 7, "#ffffff", 600, "horizontal", { label: "注釈", box: [260, 214, 76, 12], align: "center" })
        ]
      },
      round1: {
        label: "丸型1",
        image: "./assets/qplus-round-1-base.png?v=1",
        width: 415,
        height: 415,
        canvasScale: 38,
        layers: [
          textLayer("benefit", "ドライヤー時間\n30%短縮", 208, 91, 43, "#ffffff", 700, "horizontal", { label: "訴求2", box: [58, 30, 300, 120], align: "center", vAlign: "middle" }),
          textLayer("note", "*自社調べ", 208, 158, 8, "#ffffff", 600, "horizontal", { label: "注釈", box: [170, 148, 76, 14], align: "center" }),
          textLayer("sub", "芯からサラサラな髪", 208, 203, 25, "#231f20", 500, "horizontal", { label: "訴求3", box: [72, 178, 270, 36], align: "center", vAlign: "middle" }),
          textLayer("main", "速乾\n×補修", 208, 292, 45, "#1c4378", 700, "horizontal", { label: "訴求1", box: [55, 222, 305, 118], align: "center", vAlign: "middle" })
        ]
      },
      round2: {
        label: "丸型2",
        image: "./assets/qplus-round-2-base.png?v=1",
        width: 406,
        height: 394,
        canvasScale: 38,
        layers: [
          textLayer("main", "速乾\n×補修", 203, 118, 48, "#359db8", 700, "horizontal", { label: "訴求1", box: [74, 28, 258, 142], align: "center", vAlign: "middle" }),
          textLayer("sub", "芯からサラサラな髪", 203, 219, 24, "#231f20", 500, "horizontal", { label: "訴求3", box: [45, 194, 316, 38], align: "center", vAlign: "middle" }),
          textLayer("benefit", "ドライヤー時間\n30%短縮", 203, 309, 31, "#ffffff", 700, "horizontal", { label: "訴求2", box: [80, 260, 246, 92], align: "center", vAlign: "middle" }),
          textLayer("note", "*社調べ", 203, 365, 7, "#ffffff", 600, "horizontal", { label: "注釈", box: [166, 354, 74, 14], align: "center" })
        ]
      },
      vertical1: {
        label: "縦型1",
        image: "./assets/qplus-vertical-1-base.png?v=1",
        width: 181,
        height: 530,
        canvasScale: 20,
        layers: [
          textLayer("benefit", "ドライヤー時間\n30%\n短縮", 91, 78, 25, "#ffffff", 700, "horizontal", { label: "訴求2", box: [23, 21, 136, 126], align: "center", vAlign: "middle" }),
          textLayer("note", "*自社調べ", 91, 145, 9, "#ffffff", 600, "horizontal", { label: "注釈", box: [57, 136, 68, 14], align: "center" }),
          textLayer("main", "速乾\n×\n補修", 58, 321, 33, "#1c4378", 700, "vertical", { label: "訴求1", box: [24, 158, 58, 340], align: "center", vAlign: "middle", clip: false }),
          textLayer("sub", "芯からサラサラな髪", 124, 318, 21, "#231f20", 700, "vertical", { label: "訴求3", box: [97, 166, 60, 321], align: "center", vAlign: "middle", clip: false })
        ]
      },
      vertical2: {
        label: "縦型2",
        image: "./assets/qplus-vertical-2-base.png?v=1",
        width: 153,
        height: 530,
        canvasScale: 22,
        layers: [
          textLayer("benefit", "ドライヤー時間\n30%\n短縮", 77, 67, 24, "#1c4378", 700, "horizontal", { label: "訴求2", box: [23, 18, 108, 96], align: "center", vAlign: "middle" }),
          textLayer("note", "※自社調べ", 77, 117, 6, "#0f0a08", 600, "horizontal", { label: "注釈", box: [54, 108, 44, 10], align: "center" }),
          textLayer("main", "速乾\n×\n補修", 47, 331, 36, "#ffffff", 700, "vertical", { label: "訴求1", box: [21, 134, 60, 363], align: "center", vAlign: "middle", clip: false, shadow: true }),
          textLayer("sub", "芯からサラサラな髪", 108, 315, 21, "#ffffff", 700, "vertical", { label: "訴求3", box: [88, 143, 40, 324], align: "center", vAlign: "middle", clip: false, shadow: true })
        ]
      }
    }
  }
};

let selectedBrand = "ALLNA_ORGANIC";
let selectedTemplate = "horizontal";
let selectedLayerId = "main";
let historyStack = [];
let redoStack = [];
let selectedProjectId = "";
let productDataUrl = "";
let productPosition = { x: 50, y: 50, scale: 100 };
let stickerPosition = { x: 54, y: 12 };
let dragState = null;
let productDragState = null;
let textDragState = null;
let activeTab = "editor";
let exportCount = Number(localStorage.getItem(EXPORT_COUNT_KEY) || 0);

let state = {
  name: "新規ATシール",
  brand: selectedBrand,
  template: selectedTemplate,
  layers: cloneLayers(currentTemplate().layers),
  elements: [],
  showNotes: true,
  layerVisibility: {},
  canvas: {
    scale: currentTemplate().canvasScale,
    shadowBlur: 22,
    shadowOpacity: 28
  }
};

function textLayer(id, text, x, y, fontSize, color, weight, direction, options = {}) {
  return {
    id,
    label: options.label || id,
    text,
    x,
    y,
    box: options.box ? { x: options.box[0], y: options.box[1], width: options.box[2], height: options.box[3] } : null,
    fontSize,
    color,
    fontWeight: String(weight),
    fontFamily: fonts[1].value,
    lineHeight: 1.08,
    letterSpacing: 0,
    direction,
    align: options.align || "center",
    vAlign: options.vAlign || "top",
    clip: options.clip !== false,
    charStyles: {},
    shadow: options.shadow || false,
    glow: options.glow || false
  };
}

function cloneLayers(layers) {
  return JSON.parse(JSON.stringify(layers));
}

function templateFor(brandKey, templateKey) {
  return brandGroups[brandKey]?.templates?.[templateKey] || null;
}

function findMatchingLayer(sourceLayers, targetLayer, usedIndexes = new Set()) {
  const exactIndex = sourceLayers.findIndex((layer, index) => !usedIndexes.has(index) && layer.id === targetLayer.id);
  if (exactIndex >= 0) {
    usedIndexes.add(exactIndex);
    return sourceLayers[exactIndex];
  }

  const labelIndex = sourceLayers.findIndex((layer, index) => !usedIndexes.has(index) && layer.label === targetLayer.label);
  if (labelIndex >= 0) {
    usedIndexes.add(labelIndex);
    return sourceLayers[labelIndex];
  }

  return null;
}

function carryLayerEdits(nextTemplate, previousTemplate, previousLayers, options = {}) {
  const nextLayers = cloneLayers(nextTemplate.layers);
  const usedLayerIndexes = new Set();
  const usedDefaultIndexes = new Set();
  const useTemplateColors = options.useTemplateColors || nextTemplate.image?.includes("qplus-") || nextTemplate.image?.includes("wh-");
  const carriedTemplateLayers = nextLayers.map((nextLayer) => {
    const previousLayer = findMatchingLayer(previousLayers || [], nextLayer, usedLayerIndexes);
    if (!previousLayer) return nextLayer;

    const previousDefault = findMatchingLayer(previousTemplate?.layers || [], nextLayer, usedDefaultIndexes);
    const sizeRatio = previousDefault?.fontSize ? previousLayer.fontSize / previousDefault.fontSize : 1;
    return {
      ...nextLayer,
      text: previousLayer.text,
      color: useTemplateColors ? nextLayer.color : previousLayer.color,
      fontWeight: previousLayer.fontWeight,
      fontFamily: previousLayer.fontFamily,
      lineHeight: previousLayer.lineHeight,
      letterSpacing: previousLayer.letterSpacing,
      shadow: previousLayer.shadow,
      glow: previousLayer.glow,
      charStyles: useTemplateColors ? {} : JSON.parse(JSON.stringify(previousLayer.charStyles || {})),
      fontSize: Math.max(6, nextLayer.fontSize * sizeRatio)
    };
  });
  const defaultIds = new Set((previousTemplate?.layers || []).map((layer) => layer.id));
  const customLayers = (previousLayers || []).filter((layer) => !defaultIds.has(layer.id));
  return [...carriedTemplateLayers, ...carryCustomTextLayers(customLayers, previousTemplate, nextTemplate)];
}

function carryElements(previousElements, previousTemplate, nextTemplate) {
  const scaleX = previousTemplate?.width ? nextTemplate.width / previousTemplate.width : 1;
  const scaleY = previousTemplate?.height ? nextTemplate.height / previousTemplate.height : 1;
  return JSON.parse(JSON.stringify(previousElements || [])).map((element) => {
    if (element.box) {
      element.box.x *= scaleX;
      element.box.y *= scaleY;
      element.box.x = Math.max(-EDITOR_CANVAS_PADDING, Math.min(nextTemplate.width + EDITOR_CANVAS_PADDING - element.box.width, element.box.x));
      element.box.y = Math.max(-EDITOR_CANVAS_PADDING, Math.min(nextTemplate.height + EDITOR_CANVAS_PADDING - element.box.height, element.box.y));
      element.x = element.box.x;
      element.y = element.box.y;
    }
    return element;
  });
}

function carryCustomTextLayers(previousLayers, previousTemplate, nextTemplate) {
  const scaleX = previousTemplate?.width ? nextTemplate.width / previousTemplate.width : 1;
  const scaleY = previousTemplate?.height ? nextTemplate.height / previousTemplate.height : 1;
  const scale = Math.min(scaleX, scaleY);
  return JSON.parse(JSON.stringify(previousLayers || [])).map((layer) => {
    if (layer.box) {
      layer.box.x *= scaleX;
      layer.box.y *= scaleY;
      layer.box.width *= scaleX;
      layer.box.height *= scaleY;
    }
    layer.x = (layer.x || 0) * scaleX;
    layer.y = (layer.y || 0) * scaleY;
    layer.fontSize = Math.max(6, (layer.fontSize || 20) * scale);
    return layer;
  });
}

function currentTemplate() {
  return brandGroups[selectedBrand].templates[selectedTemplate] || brandGroups.ALLNA_ORGANIC.templates.horizontal;
}

function canvasPadding(template = currentTemplate()) {
  const isTallTemplate = template.height > template.width * 1.5;
  if (template.image?.includes("qplus-vertical")) {
    return { x: 70, y: 108 };
  }
  if (isTallTemplate) {
    return { x: EDITOR_CANVAS_PADDING, y: 108 };
  }
  return { x: EDITOR_CANVAS_PADDING, y: EDITOR_CANVAS_PADDING };
}

function canvasDimensions(template = currentTemplate()) {
  const padding = canvasPadding(template);
  return {
    width: template.width + padding.x * 2,
    height: template.height + padding.y * 2
  };
}

function currentLayer() {
  return editableItems().find((layer) => layer.id === selectedLayerId) || editableItems()[0];
}

function editableItems() {
  return [...(state.layers || []), ...(state.elements || [])];
}

function visibleLayerIdsFor(layer) {
  if (layer.id?.startsWith("custom-text-")) return [layer.id];
  if (layer.id === "note") return ["note"];
  if (String(layer.label || "").startsWith("訴求1") || layer.id === "main") return ["main"];
  if (String(layer.label || "").startsWith("訴求2") || layer.id === "rank" || layer.id === "benefit") return ["rank"];
  if (String(layer.label || "").startsWith("訴求3") || layer.id === "band") return ["appeal3"];
  return [];
}

function isLayerVisible(layer) {
  const ids = visibleLayerIdsFor(layer);
  if (!ids.length) return true;
  return ids.every((id) => state.layerVisibility?.[id] !== false);
}

function visibleTextLayers() {
  return (state.layers || []).filter(isLayerVisible);
}

function isCustomTextLayer(layer) {
  return layer.id?.startsWith("custom-text-");
}

function visibleEditableItems() {
  return [...visibleTextLayers(), ...(state.elements || [])];
}

function pushHistory() {
  historyStack.push(JSON.stringify(state));
  if (historyStack.length > 80) historyStack.shift();
  redoStack = [];
}

function undo() {
  if (!historyStack.length) return;
  redoStack.push(JSON.stringify(state));
  state = JSON.parse(historyStack.pop());
  selectedBrand = state.brand;
  selectedTemplate = state.template;
  selectedLayerId = editableItems()[0]?.id || "";
  renderAll();
  commitStickerToCanvas();
}

function redo() {
  if (!redoStack.length) return;
  historyStack.push(JSON.stringify(state));
  state = JSON.parse(redoStack.pop());
  selectedBrand = state.brand;
  selectedTemplate = state.template;
  selectedLayerId = editableItems()[0]?.id || "";
  renderAll();
  commitStickerToCanvas();
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function estimateCharWidth(char) {
  return /[ -~]/.test(char) ? 0.56 : 1;
}

function estimateLineWidth(text, fontSize, letterSpacing) {
  const chars = Array.from(String(text));
  const base = chars.reduce((sum, char) => sum + estimateCharWidth(char) * fontSize, 0);
  return base + Math.max(0, chars.length - 1) * letterSpacing;
}

function styleAt(layer, index, fittedSize) {
  const override = layer.charStyles?.[index] || {};
  return {
    color: override.color || layer.color,
    fontSize: override.fontSize || fittedSize
  };
}

function fittedFontSize(layer, lines) {
  if (layer.fitText === false) return layer.fontSize;
  if (!layer.box) return layer.fontSize;
  const minSize = 6;
  const maxSize = layer.fontSize;
  const box = layer.box;
  const lineHeight = Number(layer.lineHeight) || 1.08;
  const spacing = Number(layer.letterSpacing) || 0;

  if (layer.direction === "vertical") {
    const maxChars = Math.max(...lines.map((line) => Array.from(line).length), 1);
    const totalWidthAtMax = lines.length * maxSize * lineHeight;
    const totalHeightAtMax = maxChars * maxSize + Math.max(0, maxChars - 1) * spacing;
    const widthRatio = box.width / Math.max(totalWidthAtMax, 1);
    const heightRatio = box.height / Math.max(totalHeightAtMax, 1);
    return Math.max(minSize, Math.min(maxSize, maxSize * Math.min(widthRatio, heightRatio, 1)));
  }

  const maxLineWidthAtMax = Math.max(...lines.map((line) => estimateLineWidth(line, maxSize, spacing)), 1);
  const totalHeightAtMax = lines.length * maxSize * lineHeight;
  const widthRatio = box.width / maxLineWidthAtMax;
  const heightRatio = box.height / Math.max(totalHeightAtMax, 1);
  return Math.max(minSize, Math.min(maxSize, maxSize * Math.min(widthRatio, heightRatio, 1)));
}

function layerClipId(layer) {
  return `clip-${layer.id.replace(/[^a-zA-Z0-9_-]/g, "")}`;
}

function clipPathMarkup(layer) {
  const padding = layer.direction === "vertical" ? 14 : 3;
  return `<clipPath id="${layerClipId(layer)}"><rect x="${layer.box.x - padding}" y="${layer.box.y - padding}" width="${layer.box.width + padding * 2}" height="${layer.box.height + padding * 2}"/></clipPath>`;
}

function defaultMedalSize(template = currentTemplate()) {
  const isTallTemplate = template.height > template.width * 1.5;
  return isTallTemplate ? 59 : 132;
}

function createMedal() {
  const template = currentTemplate();
  const size = defaultMedalSize(template);
  const isVertical = selectedTemplate === "vertical";
  const x = isVertical ? template.width - size - 10 : template.width - size * 0.9;
  const y = isVertical ? 10 : size * 0.2;
  const box = { x, y, width: size, height: size };
  const textBox = defaultMedalTextBox({ box });
  return {
    id: `medal-${crypto.randomUUID()}`,
    kind: "medal",
    label: "メダル内文言1",
    text: "メダル内文言1\nメダル内文言2\nメダル内文言3",
    x,
    y,
    box,
    textBox,
    fontSize: size * 0.16,
    color: "#0f0a08",
    fontWeight: "700",
    fontFamily: fonts[0].value,
    lineHeight: 1.15,
    letterSpacing: 0,
    direction: "horizontal",
    align: "center",
    vAlign: "middle",
    fitText: false,
    charStyles: {},
    shadow: false,
    glow: false
  };
}

function createMedal2() {
  const template = currentTemplate();
  const width = Math.min(Math.max(190, template.width * 0.58), 300);
  const height = width * 115 / 369;
  const x = Math.max(8, (template.width - width) / 2);
  const y = Math.max(8, template.height * 0.08);
  const box = { x, y, width, height };
  const textBox = defaultMedal2TextBox({ box });
  const headlineSize = Math.max(9, height * 0.13);
  const noteSize = Math.max(7, height * 0.09);
  return {
    id: `medal2-${crypto.randomUUID()}`,
    kind: "medal2",
    label: "メダル2",
    text: "シリーズ累計販売個数\n439万個突破\n*2017年7月〜2026年3月",
    x,
    y,
    box,
    textBox,
    fontSize: Math.max(12, height * 0.28),
    color: "#0f0a08",
    fontWeight: "700",
    fontFamily: fonts[1].value,
    lineHeight: 1.05,
    letterSpacing: 0,
    direction: "horizontal",
    align: "center",
    vAlign: "middle",
    fitText: false,
    charStyles: Object.fromEntries([
      ...Array.from({ length: 10 }, (_, index) => [index, { fontSize: headlineSize }]),
      ...Array.from({ length: 17 }, (_, index) => [19 + index, { fontSize: noteSize }])
    ]),
    shadow: false,
    glow: false
  };
}

function createBubble() {
  const template = currentTemplate();
  const width = Math.max(120, template.width * 0.34);
  const height = Math.max(54, template.height * 0.14);
  const x = Math.max(8, template.width * 0.12);
  const y = Math.max(8, template.height * 0.18);
  return {
    id: `bubble-${crypto.randomUUID()}`,
    kind: "bubble",
    label: "吹き出し",
    text: "吹き出し",
    x,
    y,
    box: { x, y, width, height },
    tailSide: "bottom-left",
    fillColor: "#f5f3de",
    fontSize: Math.max(14, Math.min(24, width * 0.13)),
    color: "#651b20",
    fontWeight: "700",
    fontFamily: fonts[0].value,
    lineHeight: 1.1,
    letterSpacing: 0,
    direction: "horizontal",
    align: "center",
    vAlign: "middle",
    charStyles: {},
    shadow: false,
    glow: false
  };
}

function createImageMaterial(type) {
  const material = FRAGRANCE_MATERIALS[type];
  const template = currentTemplate();
  const width = Math.min(template.width * 0.28, material.width);
  const height = width * material.height / material.width;
  const x = Math.max(8, template.width - width - 28);
  const y = Math.max(8, template.height - height - 26);
  return {
    id: `material-${type}-${crypto.randomUUID()}`,
    kind: "image",
    label: material.label,
    text: material.label,
    materialType: type,
    image: material.image,
    x,
    y,
    box: { x, y, width, height },
    fontSize: 12,
    color: "#0f0a08",
    fontWeight: "400",
    fontFamily: fonts[0].value,
    lineHeight: 1,
    letterSpacing: 0,
    direction: "horizontal",
    align: "center",
    vAlign: "middle",
    charStyles: {},
    shadow: false,
    glow: false
  };
}

function shiftLayerForCanvas(layer) {
  const padding = canvasPadding();
  const shifted = {
    ...layer,
    x: (layer.x || 0) + padding.x,
    y: (layer.y || 0) + padding.y
  };
  if (layer.box) {
    shifted.box = {
      x: layer.box.x + padding.x,
      y: layer.box.y + padding.y,
      width: layer.box.width,
      height: layer.box.height
    };
  }
  if (layer.textBox) {
    shifted.textBox = {
      x: layer.textBox.x + padding.x,
      y: layer.textBox.y + padding.y,
      width: layer.textBox.width,
      height: layer.textBox.height
    };
  }
  return shifted;
}

function defaultMedalTextBox(item) {
  const box = item.box;
  const r = Math.min(box.width, box.height) / 2;
  return {
    x: box.x + r * 0.28,
    y: box.y + r * 0.38,
    width: box.width - r * 0.56,
    height: box.height - r * 0.56
  };
}

function defaultMedal2TextBox(item) {
  const box = item.box;
  return {
    x: box.x + box.width * 0.14,
    y: box.y + box.height * 0.18,
    width: box.width * 0.72,
    height: box.height * 0.68
  };
}

function medalMarkup(item, medalImageHref = new URL(MEDAL_IMAGE, window.location.href).href) {
  const box = item.box;
  const textLayerForMedal = {
    ...item,
    box: item.textBox || defaultMedalTextBox(item)
  };
  return `<g style="cursor:move">
    <image data-layer-id="${item.id}" data-drag-part="image" href="${medalImageHref}" x="${box.x}" y="${box.y}" width="${box.width}" height="${box.height}" preserveAspectRatio="xMidYMid meet"/>
    ${textMarkup(textLayerForMedal, `data-drag-part="text"`)}
  </g>`;
}

function medal2Markup(item, medalImageHref = new URL(MEDAL2_IMAGE, window.location.href).href) {
  const box = item.box;
  const textLayerForMedal = {
    ...item,
    box: item.textBox || defaultMedal2TextBox(item)
  };
  return `<g style="cursor:move">
    <image data-layer-id="${item.id}" data-drag-part="image" href="${medalImageHref}" x="${box.x}" y="${box.y}" width="${box.width}" height="${box.height}" preserveAspectRatio="xMidYMid meet"/>
    ${textMarkup(textLayerForMedal, `data-drag-part="text"`)}
  </g>`;
}

function bubbleMarkup(item) {
  const box = item.box;
  const radius = Math.min(18, box.height * 0.28);
  const fill = item.fillColor || "#f5f3de";
  const tailWidth = Math.min(42, box.width * 0.28);
  const tailHeight = Math.min(24, box.height * 0.38);
  const tailBaseY = box.y + box.height - 3;
  const isRight = item.tailSide === "bottom-right";
  const tailBaseX = isRight ? box.x + box.width * 0.72 : box.x + box.width * 0.28;
  const tailTipX = isRight ? tailBaseX + tailWidth * 0.48 : tailBaseX - tailWidth * 0.48;
  const tailPath = `M ${tailBaseX - tailWidth / 2} ${tailBaseY}
    Q ${tailBaseX} ${tailBaseY + tailHeight * 0.18} ${tailTipX} ${tailBaseY + tailHeight}
    Q ${tailTipX + (isRight ? -6 : 6)} ${tailBaseY + tailHeight * 0.45} ${tailBaseX + tailWidth / 2} ${tailBaseY}
    Z`;
  const textLayerForBubble = {
    ...item,
    box: {
      x: box.x + radius * 0.75,
      y: box.y + radius * 0.5,
      width: box.width - radius * 1.5,
      height: box.height - radius
    }
  };
  return `<g data-layer-id="${item.id}" style="cursor:move">
    <path d="${tailPath}" fill="${fill}"/>
    <rect x="${box.x}" y="${box.y}" width="${box.width}" height="${box.height}" rx="${radius}" ry="${radius}" fill="${fill}"/>
    ${textMarkup(textLayerForBubble)}
  </g>`;
}

function imageMaterialMarkup(item) {
  const href = new URL(item.image, window.location.href).href;
  const box = item.box;
  return `<g data-layer-id="${item.id}" style="cursor:move">
    <image href="${href}" x="${box.x}" y="${box.y}" width="${box.width}" height="${box.height}" preserveAspectRatio="xMidYMid meet"/>
  </g>`;
}

function textLineMarkup(layer, line, lineIndex, x, y, fontSize, anchor, globalStartIndex) {
  if (!layer.charStyles || !Object.keys(layer.charStyles).length) {
    return `<tspan x="${x}" dy="${lineIndex === 0 ? 0 : fontSize * layer.lineHeight}">${escapeXml(line)}</tspan>`;
  }
  const chars = Array.from(line);
  return `<tspan x="${x}" dy="${lineIndex === 0 ? 0 : fontSize * layer.lineHeight}">
    ${chars.map((char, charIndex) => {
      const style = styleAt(layer, globalStartIndex + charIndex, fontSize);
      return `<tspan fill="${style.color}" font-size="${style.fontSize}">${escapeXml(char)}</tspan>`;
    }).join("")}
  </tspan>`;
}

function textMarkup(layer, extraAttributes = "") {
  const filter = layer.glow ? "url(#glow)" : layer.shadow ? "url(#textShadow)" : "";
  const lines = String(layer.text).split("\n");
  const fontSize = fittedFontSize(layer, lines);
  const lineHeight = Number(layer.lineHeight) || 1.08;
  const letterSpacing = Number(layer.letterSpacing) || 0;
  const box = layer.box || { x: layer.x, y: layer.y - fontSize, width: 1, height: fontSize };
  const clip = "";

  if (layer.direction === "vertical") {
    const columns = lines;
    const columnGap = fontSize * lineHeight;
    const maxChars = Math.max(...columns.map((line) => Array.from(line).length), 1);
    const maxColumnHeight = maxChars * fontSize + Math.max(0, maxChars - 1) * letterSpacing;
    const totalWidth = columns.length * columnGap;
    const startX = box.x + (box.width + totalWidth) / 2 - fontSize / 2;
    const startY = box.y + (layer.vAlign === "middle" ? Math.max(0, (box.height - maxColumnHeight) / 2) : 0);
    let globalIndex = 0;
    return `<g data-layer-id="${layer.id}" ${extraAttributes} filter="${filter}" ${clip} style="cursor:pointer">
      ${columns.map((line, columnIndex) => {
        const chars = Array.from(line);
        const markup = `
        <text x="${startX - columnIndex * columnGap}" y="${startY}" text-anchor="middle"
          writing-mode="vertical-rl" glyph-orientation-vertical="0"
          dominant-baseline="text-before-edge"
          font-family="${escapeXml(layer.fontFamily)}" font-size="${fontSize}"
          font-weight="${layer.fontWeight}" letter-spacing="${letterSpacing}"
          fill="${layer.color}">${chars.map((char, charIndex) => {
            const style = styleAt(layer, globalIndex + charIndex, fontSize);
            return `<tspan fill="${style.color}" font-size="${style.fontSize}">${escapeXml(char)}</tspan>`;
          }).join("")}</text>`;
        globalIndex += chars.length + 1;
        return markup;
      }).join("")}
    </g>`;
  }

  const dy = fontSize * lineHeight;
  const totalHeight = lines.length * dy;
  const textAnchor = layer.align === "left" ? "start" : layer.align === "right" ? "end" : "middle";
  const x = layer.align === "left" ? box.x : layer.align === "right" ? box.x + box.width : box.x + box.width / 2;
  const y = box.y + (layer.vAlign === "middle" ? Math.max(fontSize, (box.height - totalHeight) / 2 + fontSize) : fontSize);
  let globalStart = 0;
  return `<text data-layer-id="${layer.id}" ${extraAttributes} x="${x}" y="${y}" text-anchor="${textAnchor}"
    font-family="${escapeXml(layer.fontFamily)}" font-size="${fontSize}"
    font-weight="${layer.fontWeight}" letter-spacing="${letterSpacing}"
    fill="${layer.color}" filter="${filter}" ${clip} style="cursor:pointer">
    ${lines.map((line, index) => {
      const markup = textLineMarkup(layer, line, index, x, y, fontSize, textAnchor, globalStart);
      globalStart += Array.from(line).length + 1;
      return markup;
    }).join("")}
  </text>`;
}

function stickerSvg(options = {}) {
  const template = currentTemplate();
  const canvas = canvasDimensions(template);
  const imageHref = options.templateImageHref || new URL(template.image, window.location.href).href;
  const medalImageHref = options.medalImageHref || new URL(MEDAL_IMAGE, window.location.href).href;
  const medal2ImageHref = options.medal2ImageHref || new URL(MEDAL2_IMAGE, window.location.href).href;
  const shiftedTextLayers = visibleTextLayers().map(shiftLayerForCanvas);
  const shiftedBaseTextLayers = shiftedTextLayers.filter((layer) => !isCustomTextLayer(layer));
  const shiftedCustomTextLayers = shiftedTextLayers.filter(isCustomTextLayer);
  const shiftedItems = visibleEditableItems().map(shiftLayerForCanvas);
  const shiftedElements = (state.elements || []).map(shiftLayerForCanvas);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}">
    <defs>
      <filter id="textShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="2" dy="3" stdDeviation="2" flood-color="#000" flood-opacity=".26"/>
      </filter>
      <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="3.5" result="blur"/>
        <feFlood flood-color="#ffffff" flood-opacity=".9"/>
        <feComposite in2="blur" operator="in"/>
        <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      ${shiftedItems.filter((layer) => layer.box).map(clipPathMarkup).join("")}
    </defs>
    <image href="${imageHref}" x="${canvasPadding(template).x}" y="${canvasPadding(template).y}" width="${template.width}" height="${template.height}" preserveAspectRatio="xMidYMid meet"/>
    ${shiftedBaseTextLayers.map(textMarkup).join("")}
    ${shiftedElements.map((item) => item.kind === "medal" ? medalMarkup(item, medalImageHref) : item.kind === "medal2" ? medal2Markup(item, medal2ImageHref) : item.kind === "bubble" ? bubbleMarkup(item) : item.kind === "image" ? imageMaterialMarkup(item) : "").join("")}
    ${shiftedCustomTextLayers.map(textMarkup).join("")}
  </svg>`;
}

function stickerDataUrl() {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(stickerSvg())}`;
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function assetToDataUrl(path) {
  const cleanPath = String(path).split("?")[0];
  const fileName = cleanPath.split("/").pop();
  if (window.ATTENTION_SEAL_ASSETS?.[fileName]) {
    return window.ATTENTION_SEAL_ASSETS[fileName];
  }
  const href = new URL(path, window.location.href).href;
  try {
    const response = await fetch(href);
    if (response.ok) return blobToDataUrl(await response.blob());
  } catch {
    // file:// previews may block fetch.
  }
  throw new Error(`asset unavailable: ${fileName}`);
}

async function loadAssetImage(path) {
  return loadImage(await assetToDataUrl(path));
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function loadSvgAsImage(svg) {
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  try {
    return await loadImage(url);
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function stickerPngDataUrl() {
  const canvas = await renderStickerCanvas();
  return canvas.toDataURL("image/png");
}

function canvasFont(layer, fontSize) {
  return `${layer.fontWeight || 400} ${fontSize}px ${layer.fontFamily || fonts[0].value}`;
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawTextCanvas(ctx, layer) {
  const lines = String(layer.text).split("\n");
  const fontSize = fittedFontSize(layer, lines);
  const lineHeight = Number(layer.lineHeight) || 1.08;
  const letterSpacing = Number(layer.letterSpacing) || 0;
  const box = layer.box || { x: layer.x, y: layer.y - fontSize, width: 1, height: fontSize };

  ctx.save();
  if (layer.shadow) {
    ctx.shadowColor = "rgba(0,0,0,.26)";
    ctx.shadowBlur = 2;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 3;
  }
  if (layer.glow) {
    ctx.shadowColor = "rgba(255,255,255,.9)";
    ctx.shadowBlur = 7;
  }
  ctx.font = canvasFont(layer, fontSize);
  ctx.fillStyle = layer.color;
  ctx.textBaseline = "alphabetic";

  if (layer.direction === "vertical") {
    const columns = lines;
    const columnGap = fontSize * lineHeight;
    const maxChars = Math.max(...columns.map((line) => Array.from(line).length), 1);
    const maxColumnHeight = maxChars * fontSize + Math.max(0, maxChars - 1) * letterSpacing;
    const totalWidth = columns.length * columnGap;
    const startX = box.x + (box.width + totalWidth) / 2 - fontSize / 2;
    const startY = box.y + (layer.vAlign === "middle" ? Math.max(0, (box.height - maxColumnHeight) / 2) : 0);
    let globalIndex = 0;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    columns.forEach((line, columnIndex) => {
      let y = startY;
      Array.from(line).forEach((char) => {
        const style = styleAt(layer, globalIndex, fontSize);
        ctx.font = canvasFont(layer, style.fontSize);
        ctx.fillStyle = style.color;
        ctx.fillText(char, startX - columnIndex * columnGap, y);
        y += style.fontSize + letterSpacing;
        globalIndex += 1;
      });
      globalIndex += 1;
    });
    ctx.restore();
    return;
  }

  const dy = fontSize * lineHeight;
  const totalHeight = lines.length * dy;
  const yStart = box.y + (layer.vAlign === "middle" ? Math.max(fontSize, (box.height - totalHeight) / 2 + fontSize) : fontSize);
  let globalStart = 0;
  lines.forEach((line, lineIndex) => {
    const chars = Array.from(line);
    const y = yStart + lineIndex * dy;
    if (!layer.charStyles || !Object.keys(layer.charStyles).length) {
      ctx.font = canvasFont(layer, fontSize);
      ctx.fillStyle = layer.color;
      ctx.textAlign = layer.align || "center";
      const x = layer.align === "left" ? box.x : layer.align === "right" ? box.x + box.width : box.x + box.width / 2;
      ctx.fillText(line, x, y);
    } else {
      const widths = chars.map((char, index) => {
        const style = styleAt(layer, globalStart + index, fontSize);
        ctx.font = canvasFont(layer, style.fontSize);
        return ctx.measureText(char).width;
      });
      const totalWidth = widths.reduce((sum, width) => sum + width, 0) + Math.max(0, chars.length - 1) * letterSpacing;
      let x = layer.align === "left" ? box.x : layer.align === "right" ? box.x + box.width - totalWidth : box.x + (box.width - totalWidth) / 2;
      chars.forEach((char, index) => {
        const style = styleAt(layer, globalStart + index, fontSize);
        ctx.font = canvasFont(layer, style.fontSize);
        ctx.fillStyle = style.color;
        ctx.textAlign = "left";
        ctx.fillText(char, x, y);
        x += widths[index] + letterSpacing;
      });
    }
    globalStart += chars.length + 1;
  });
  ctx.restore();
}

function drawBubbleCanvas(ctx, item) {
  const box = item.box;
  const radius = Math.min(18, box.height * 0.28);
  const fill = item.fillColor || "#f5f3de";
  const tailWidth = Math.min(42, box.width * 0.28);
  const tailHeight = Math.min(24, box.height * 0.38);
  const tailBaseY = box.y + box.height - 3;
  const isRight = item.tailSide === "bottom-right";
  const tailBaseX = isRight ? box.x + box.width * 0.72 : box.x + box.width * 0.28;
  const tailTipX = isRight ? tailBaseX + tailWidth * 0.48 : tailBaseX - tailWidth * 0.48;
  ctx.save();
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.moveTo(tailBaseX - tailWidth / 2, tailBaseY);
  ctx.quadraticCurveTo(tailBaseX, tailBaseY + tailHeight * 0.18, tailTipX, tailBaseY + tailHeight);
  ctx.quadraticCurveTo(tailTipX + (isRight ? -6 : 6), tailBaseY + tailHeight * 0.45, tailBaseX + tailWidth / 2, tailBaseY);
  ctx.closePath();
  ctx.fill();
  drawRoundedRect(ctx, box.x, box.y, box.width, box.height, radius);
  ctx.fill();
  ctx.restore();
}

async function renderStickerCanvas() {
  const template = currentTemplate();
  const size = canvasDimensions(template);
  const [templateImage, medalImage, medal2Image] = await Promise.all([
    loadAssetImage(template.image),
    loadAssetImage(MEDAL_IMAGE),
    loadAssetImage(MEDAL2_IMAGE)
  ]);
  const canvas = document.createElement("canvas");
  canvas.width = size.width;
  canvas.height = size.height;
  const ctx = canvas.getContext("2d");
  const padding = canvasPadding(template);
  ctx.clearRect(0, 0, size.width, size.height);
  ctx.drawImage(templateImage, padding.x, padding.y, template.width, template.height);
  const shiftedTextLayers = visibleTextLayers().map(shiftLayerForCanvas);
  shiftedTextLayers.filter((layer) => !isCustomTextLayer(layer)).forEach((layer) => drawTextCanvas(ctx, layer));
  for (const item of (state.elements || []).map(shiftLayerForCanvas)) {
    if (item.kind === "medal") {
      const box = item.box;
      const r = Math.min(box.width, box.height) / 2;
      ctx.drawImage(medalImage, box.x, box.y, box.width, box.height);
      drawTextCanvas(ctx, {
        ...item,
        box: item.textBox || {
          x: box.x + r * 0.28,
          y: box.y + r * 0.38,
          width: box.width - r * 0.56,
          height: box.height - r * 0.56
        }
      });
    } else if (item.kind === "medal2") {
      const box = item.box;
      ctx.drawImage(medal2Image, box.x, box.y, box.width, box.height);
      drawTextCanvas(ctx, {
        ...item,
        box: item.textBox || {
          x: box.x + box.width * 0.14,
          y: box.y + box.height * 0.18,
          width: box.width * 0.72,
          height: box.height * 0.68
        }
      });
    } else if (item.kind === "bubble") {
      drawBubbleCanvas(ctx, item);
      const radius = Math.min(18, item.box.height * 0.28);
      drawTextCanvas(ctx, {
        ...item,
        box: {
          x: item.box.x + radius * 0.75,
          y: item.box.y + radius * 0.5,
          width: item.box.width - radius * 1.5,
          height: item.box.height - radius
        }
      });
    } else if (item.kind === "image") {
      const image = await loadAssetImage(item.image);
      ctx.drawImage(image, item.box.x, item.box.y, item.box.width, item.box.height);
    }
  }
  shiftedTextLayers.filter(isCustomTextLayer).forEach((layer) => drawTextCanvas(ctx, layer));
  return canvas;
}

function renderSticker() {
  $("stickerMount").innerHTML = stickerSvg();
  const svg = $("stickerMount").querySelector("svg");
  $("stickerMount").querySelectorAll("[data-layer-id]").forEach((node) => {
    node.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      selectedLayerId = event.currentTarget.dataset.layerId;
      pushHistory();
      const point = pointerBasePoint(event, svg);
      textDragState = {
        id: selectedLayerId,
        part: event.currentTarget.dataset.dragPart || "",
        lastX: point.x,
        lastY: point.y
      };
      renderLayers();
      syncControls();
    });
  });
}

function renderBrandOptions() {
  $("brandSelect").innerHTML = Object.entries(brandGroups)
    .map(([key, brand]) => `<option value="${key}">${brand.label}</option>`)
    .join("");
  $("brandSelect").value = selectedBrand;
}

function renderTemplateOptions() {
  const templates = brandGroups[selectedBrand].templates;
  $("templateButtons").innerHTML = "";
  if (!Object.keys(templates).length) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = "テンプレート未登録";
    $("templateButtons").appendChild(empty);
    return;
  }
  Object.entries(templates).forEach(([key, template]) => {
    const button = document.createElement("button");
    button.dataset.template = key;
    button.className = key === selectedTemplate ? "active" : "";
    button.textContent = template.label;
    button.addEventListener("click", () => applyTemplate(key));
    $("templateButtons").appendChild(button);
  });
}

function toggleVisibilityIdsForLayer(layer) {
  const ids = visibleLayerIdsFor(layer);
  return ids.length ? ids : null;
}

function layerIsChecked(layer) {
  const ids = toggleVisibilityIdsForLayer(layer);
  return !ids || ids.every((id) => state.layerVisibility?.[id] !== false);
}

function renderLayers() {
  $("layerList").innerHTML = "";
  editableItems().forEach((layer) => {
    const btn = document.createElement("div");
    const toggleIds = toggleVisibilityIdsForLayer(layer);
    const checked = layerIsChecked(layer);
    btn.className = `layer-item ${layer.id === selectedLayerId ? "active" : ""} ${checked ? "" : "is-hidden"}`;
    btn.setAttribute("role", "button");
    btn.tabIndex = 0;
    btn.innerHTML = `<span class="check-slot">${toggleIds ? `<input type="checkbox" ${checked ? "checked" : ""} aria-label="${escapeXml(layer.label || layer.id)} 表示">` : ""}</span>
      <span class="layer-copy"><strong>${escapeXml(layer.label || layer.id)}</strong><small>${escapeXml(String(layer.text || "").split("\n").join(" / ").slice(0, 36) || "空の文章")}</small></span>`;
    const checkbox = btn.querySelector("input");
    if (checkbox) {
      checkbox.addEventListener("click", (event) => event.stopPropagation());
      checkbox.addEventListener("change", (event) => {
        pushHistory();
        if (!state.layerVisibility) state.layerVisibility = {};
        toggleIds.forEach((id) => {
          state.layerVisibility[id] = event.target.checked;
        });
        if (toggleIds.includes("note")) {
          state.showNotes = event.target.checked;
        }
        renderAll();
        commitStickerToCanvas();
      });
    }
    btn.addEventListener("click", () => {
      selectedLayerId = layer.id;
      renderAll();
    });
    btn.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectedLayerId = layer.id;
      renderAll();
    });
    $("layerList").appendChild(btn);
  });
}

function syncControls() {
  $("projectName").value = state.name;
  $("brandSelect").value = selectedBrand;
  $("stickerScale").value = state.canvas.scale;
  $("shadowBlur").value = state.canvas.shadowBlur;
  $("shadowOpacity").value = state.canvas.shadowOpacity;

  const layer = currentLayer();
  if (!layer) return;
  ["main", "rank", "note"].forEach((id) => {
    const toggle = $(`${id}Toggle`);
    if (toggle) toggle.checked = state.layerVisibility?.[id] !== false;
  });
  $("textContent").value = layer.text;
  $("fontFamily").value = layer.fontFamily;
  $("textColor").value = layer.color;
  $("charColor").value = layer.color;
  $("fontSize").value = layer.fontSize;
  $("charFontSize").value = layer.fontSize;
  $("fontWeight").value = layer.fontWeight;
  $("lineHeight").value = layer.lineHeight;
  $("letterSpacing").value = layer.letterSpacing;
  const positionBox = (layer.kind === "medal" || layer.kind === "medal2") ? layer.textBox || layer.box : layer.box;
  $("textX").value = positionBox ? positionBox.x : layer.x;
  $("textY").value = positionBox ? positionBox.y : layer.y;
  $("textDirection").value = layer.direction;
  $("textShadow").checked = layer.shadow;
  $("textGlow").checked = layer.glow;
  $("elementSizeControl").style.display = layer.kind ? "grid" : "none";
  $("bubbleControls").style.display = layer.kind === "bubble" ? "grid" : "none";
  $("deleteSelectedBtn").style.display = (layer.kind || layer.id?.startsWith("custom-text-")) ? "inline-flex" : "none";
  if (layer.kind) {
    $("elementSize").max = Math.max(currentTemplate().width, currentTemplate().height) + EDITOR_CANVAS_PADDING;
    $("elementSize").value = Math.round(layer.box.width);
  }
  if (layer.kind === "bubble") {
    $("bubbleTailSide").value = layer.tailSide || "bottom-left";
    $("bubbleFillColor").value = layer.fillColor || "#f5f3de";
  }
  updateSelectionPreview();
}

function updateRangeLimits() {
  const template = currentTemplate();
  $("textX").min = -EDITOR_CANVAS_PADDING;
  $("textY").min = -EDITOR_CANVAS_PADDING;
  $("textX").max = template.width + EDITOR_CANVAS_PADDING;
  $("textY").max = template.height + EDITOR_CANVAS_PADDING;
}

function renderSavedList() {
  const projects = readProjects();
  $("savedList").innerHTML = "";
  if (!projects.length) {
    const empty = document.createElement("p");
    empty.className = "hint";
    empty.textContent = "保存データはまだありません";
    $("savedList").appendChild(empty);
    return;
  }
  projects.forEach((project) => {
    const btn = document.createElement("button");
    btn.className = `saved-item ${project.id === selectedProjectId ? "active" : ""}`;
    btn.textContent = project.name;
    btn.addEventListener("click", () => loadProject(project.id));
    $("savedList").appendChild(btn);
  });
}

function renderAll() {
  normalizeLoadedState();
  if (!visibleEditableItems().some((item) => item.id === selectedLayerId)) {
    selectedLayerId = visibleEditableItems()[0]?.id || "";
  }
  const template = currentTemplate();
  const isVertical = template.height > template.width * 1.5;
  const stageHeight = `${isVertical ? Math.round(EDITOR_STAGE_SIZE * 1.25) : EDITOR_STAGE_SIZE}px`;
  $("stickerMount").classList.toggle("vertical-stage", isVertical);
  document.querySelector(".sticker-stage").classList.toggle("vertical-stage", isVertical);
  $("stickerMount").style.width = `${EDITOR_STAGE_SIZE}px`;
  $("stickerMount").style.height = stageHeight;
  document.querySelector(".sticker-stage").style.width = `${EDITOR_STAGE_SIZE}px`;
  document.querySelector(".sticker-stage").style.height = stageHeight;
  updateRangeLimits();
  renderBrandOptions();
  renderTemplateOptions();
  renderLayers();
  syncControls();
  renderSticker();
  renderSavedList();
  updateProductPlacement();
  updatePlacedSticker();
}

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll(".mode-tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === activeTab);
  });
  $("editorTabPanel").classList.toggle("active", activeTab === "editor");
  $("placementTabPanel").classList.toggle("active", activeTab === "placement");
  if (activeTab === "placement") commitStickerToCanvas();
}

function applyTemplate(templateKey) {
  pushHistory();
  const nextTemplate = brandGroups[selectedBrand].templates[templateKey];
  if (!nextTemplate) return;
  const previousTemplate = templateFor(state.brand, state.template);
  const previousLayers = cloneLayers(state.layers || []);
  const previousElements = JSON.parse(JSON.stringify(state.elements || []));
  selectedTemplate = templateKey;
  state.template = templateKey;
  state.brand = selectedBrand;
  state.layers = carryLayerEdits(nextTemplate, previousTemplate, previousLayers);
  state.elements = carryElements(previousElements, previousTemplate, nextTemplate);
  state.canvas.scale = nextTemplate.canvasScale;
  selectedLayerId = state.layers.find((layer) => layer.id === selectedLayerId)?.id || state.elements.find((element) => element.id === selectedLayerId)?.id || state.layers[0].id;
  renderAll();
  commitStickerToCanvas();
}

function changeBrand(brandKey) {
  pushHistory();
  selectedBrand = brandKey;
  const templates = brandGroups[selectedBrand].templates;
  selectedTemplate = Object.keys(templates)[0] || "horizontal";
  if (templates[selectedTemplate]) {
    const previousTemplate = templateFor(state.brand, state.template);
    const previousLayers = cloneLayers(state.layers || []);
    const previousElements = JSON.parse(JSON.stringify(state.elements || []));
    state.brand = selectedBrand;
    state.template = selectedTemplate;
    state.layers = carryLayerEdits(templates[selectedTemplate], previousTemplate, previousLayers, { useTemplateColors: true });
    state.elements = carryElements(previousElements, previousTemplate, templates[selectedTemplate]);
    state.canvas.scale = templates[selectedTemplate].canvasScale;
    selectedLayerId = state.layers.find((layer) => layer.id === selectedLayerId)?.id || state.elements.find((element) => element.id === selectedLayerId)?.id || state.layers[0].id;
  }
  renderAll();
  commitStickerToCanvas();
}

function updateLayerField(key, value) {
  const layer = currentLayer();
  if (!layer) return;
  if ((layer.kind === "medal" || layer.kind === "medal2") && (key === "x" || key === "y")) {
    if (!layer.textBox) layer.textBox = layer.kind === "medal2" ? defaultMedal2TextBox(layer) : defaultMedalTextBox(layer);
    layer.textBox[key] = value;
    renderAll();
    return;
  }
  if ((key === "x" || key === "y") && layer.box) {
    const delta = value - layer.box[key];
    layer.box[key] = value;
    layer[key] = (layer[key] || 0) + delta;
    renderAll();
    return;
  }
  layer[key] = value;
  renderAll();
}

function centerSelectedLayer() {
  const layer = currentLayer();
  if (!layer?.box) return;
  pushHistory();
  const template = currentTemplate();
  const nextX = (template.width - layer.box.width) / 2;
  const delta = nextX - layer.box.x;
  layer.box.x = nextX;
  layer.x = (layer.x || 0) + delta;
  layer.align = "center";
  renderAll();
}

function updateElementSize(value) {
  const layer = currentLayer();
  if (!layer || !layer.box) return;
  const next = Number(value);
  const cx = layer.box.x + layer.box.width / 2;
  const cy = layer.box.y + layer.box.height / 2;
  const keepAspect = layer.kind === "bubble" || layer.kind === "image" || layer.kind === "medal2";
  const aspect = keepAspect ? layer.box.height / Math.max(layer.box.width, 1) : 1;
  layer.box.width = next;
  layer.box.height = keepAspect ? next * aspect : next;
  layer.box.x = cx - next / 2;
  layer.box.y = cy - layer.box.height / 2;
  layer.x = layer.box.x;
  layer.y = layer.box.y;
  layer.fontSize = Math.max(8, next * 0.16);
  renderAll();
}

function normalizeLoadedState() {
  if (!state.elements) state.elements = [];
  if (typeof state.showNotes !== "boolean") state.showNotes = true;
  if (!state.layerVisibility) state.layerVisibility = {};
  if (state.showNotes === false && state.layerVisibility.note === undefined) state.layerVisibility.note = false;
  state.showNotes = state.layerVisibility.note !== false;
  const qplusDefaults = state.brand === "QPLUS" ? new Map((currentTemplate().layers || []).map((layer) => [layer.id, layer])) : null;
  state.layers.forEach((layer) => {
    if (!layer.label) layer.label = layer.id;
    if (!layer.charStyles) layer.charStyles = {};
    if (qplusDefaults?.has(layer.id)) {
      const defaultLayer = qplusDefaults.get(layer.id);
      layer.color = defaultLayer.color;
    }
    if (state.template === "vertical" && (layer.id === "main" || layer.id === "rank")) {
      layer.clip = false;
      layer.vAlign = "top";
    }
    if (state.template === "vertical" && layer.id === "main" && (
      (layer.box?.x === 12 && layer.box?.y === 20 && layer.box?.width === 84) ||
      (layer.box?.x === 6 && layer.box?.y === 12 && layer.box?.width === 104) ||
      (layer.box?.x === 16 && layer.box?.y === 82 && layer.box?.width === 92) ||
      (layer.box?.x === 12 && layer.box?.y === 82 && layer.box?.width === 100) ||
      (layer.box?.x === 0 && layer.box?.y === 70 && layer.box?.width === 118) ||
      (layer.box?.x === 20 && layer.box?.y === 120 && layer.box?.width === 118)
    )) {
      layer.box = { x: 6, y: 120, width: 167, height: 370 };
      layer.x = 90;
      layer.fontSize = Math.max(layer.fontSize, 40);
      layer.vAlign = "top";
      layer.clip = false;
    }
    if (state.template === "vertical" && layer.id === "rank" && (
      (layer.box?.x === 124 && layer.box?.y === 20 && layer.box?.width === 38) ||
      (layer.box?.x === 110 && layer.box?.y === 12 && layer.box?.width === 58) ||
      (layer.box?.x === 108 && layer.box?.y === 82 && layer.box?.width === 50) ||
      (layer.box?.x === 108 && layer.box?.y === 82 && layer.box?.width === 54) ||
      (layer.box?.x === 100 && layer.box?.y === 70 && layer.box?.width === 72)
    )) {
      layer.box = { x: 100, y: 120, width: 72, height: 340 };
      layer.fontSize = layer.fontSize || 17;
      layer.vAlign = "top";
      layer.clip = false;
    }
    if (state.template === "vertical" && layer.id === "band" && layer.text === "ラグジュアリー\n香り") {
      layer.text = "ラグジュアリー\nの香り";
    }
    if (state.template === "round2" && layer.id === "main" && (layer.text === "サラサラな\n指通り" || layer.text === "ダメージ補修 特化")) {
      layer.text = "ダメージ補修\n特化";
    }
    if (state.template === "round2" && layer.id === "band" && layer.text === "ヒートプロテクト\n処方") {
      layer.text = "ラグジュアリー の香り";
      layer.fontSize = 22;
      if (layer.box && layer.box.y === 302) {
        layer.box.y = 294;
      }
      layer.y = 318;
    }
  });
  state.elements.forEach((layer) => {
    if (!layer.label) layer.label = "素材";
    if (!layer.charStyles) layer.charStyles = {};
    if (layer.kind === "medal" && !layer.textBox) {
      layer.textBox = defaultMedalTextBox(layer);
    }
    if (layer.kind === "medal2" && !layer.textBox) {
      layer.textBox = defaultMedal2TextBox(layer);
    }
    if (layer.kind === "medal" || layer.kind === "medal2") {
      layer.fitText = false;
    }
    if (layer.kind === "medal" && state.brand === "QPLUS") {
      const size = defaultMedalSize(currentTemplate());
      if (layer.box && layer.box.width < size * 0.9) {
        layer.box.width = size;
        layer.box.height = size;
        layer.fontSize = Math.max(layer.fontSize || 0, size * 0.16);
      }
    }
    if (layer.kind === "bubble") {
      if (!layer.tailSide || layer.tailSide === "left") layer.tailSide = "bottom-left";
      if (layer.tailSide === "right") layer.tailSide = "bottom-right";
      if (!layer.fillColor) layer.fillColor = "#f5f3de";
    }
    if (layer.kind === "image") {
      const material = FRAGRANCE_MATERIALS[layer.materialType];
      if (material) {
        layer.image = material.image;
        if (!layer.label) layer.label = material.label;
      }
    }
  });
}

function addMedal() {
  pushHistory();
  const medal = createMedal();
  state.elements.push(medal);
  selectedLayerId = medal.id;
  renderAll();
}

function addMedal2() {
  pushHistory();
  const medal = createMedal2();
  state.elements.push(medal);
  selectedLayerId = medal.id;
  renderAll();
}

function addBubble() {
  pushHistory();
  const bubble = createBubble();
  state.elements.push(bubble);
  selectedLayerId = bubble.id;
  renderAll();
}

function addImageMaterial(type) {
  pushHistory();
  const material = createImageMaterial(type);
  state.elements.push(material);
  selectedLayerId = material.id;
  renderAll();
}

function deleteSelectedItem() {
  const layer = currentLayer();
  if (!layer?.kind && !layer?.id?.startsWith("custom-text-")) return;
  pushHistory();
  if (layer.kind) {
    state.elements = (state.elements || []).filter((item) => item.id !== layer.id);
  } else {
    state.layers = (state.layers || []).filter((item) => item.id !== layer.id);
    if (state.layerVisibility) delete state.layerVisibility[layer.id];
  }
  selectedLayerId = visibleTextLayers()[0]?.id || state.layers[0]?.id || "";
  renderAll();
  commitStickerToCanvas();
}

function addTextLayer() {
  pushHistory();
  const template = currentTemplate();
  const existingCount = (state.layers || []).filter((layer) => layer.id.startsWith("custom-text-")).length;
  const width = Math.max(90, template.width * 0.46);
  const height = Math.max(34, template.height * 0.1);
  const x = (template.width - width) / 2;
  const y = (template.height - height) / 2;
  const layer = {
    id: `custom-text-${crypto.randomUUID()}`,
    label: `追加文字${existingCount + 1}`,
    text: "追加文字",
    x: x + width / 2,
    y: y + height / 2,
    box: { x, y, width, height },
    fontSize: Math.max(16, Math.min(30, template.width * 0.06)),
    color: "#651b20",
    fontWeight: "700",
    fontFamily: fonts[1].value,
    lineHeight: 1.08,
    letterSpacing: 0,
    direction: "horizontal",
    align: "center",
    vAlign: "middle",
    charStyles: {},
    shadow: false,
    glow: false
  };
  state.layers.push(layer);
  selectedLayerId = layer.id;
  renderAll();
}

function selectedTextRange() {
  const input = $("textContent");
  const start = input.selectionStart;
  const end = input.selectionEnd;
  if (start === end) return null;
  return { start, end };
}

function updateSelectionPreview() {
  const input = $("textContent");
  const preview = $("selectionPreview");
  if (!input || !preview) return;
  const selected = input.value.slice(input.selectionStart, input.selectionEnd);
  preview.textContent = selected || "選択文字なし";
  preview.classList.toggle("empty", !selected);
  const layer = currentLayer();
  const range = selectedTextRange();
  if (layer && range) {
    const firstStyle = layer.charStyles?.[range.start] || {};
    $("charFontSize").value = firstStyle.fontSize || layer.fontSize;
    $("charColor").value = firstStyle.color || layer.color;
  }
}

function applyCharacterStyle(options = {}) {
  const layer = currentLayer();
  const range = selectedTextRange();
  if (!layer || !range) {
    if (!options.silent) alert("文章欄で変更したい文字を選択してください。");
    return;
  }
  if (!options.skipHistory) pushHistory();
  if (!layer.charStyles) layer.charStyles = {};
  for (let i = range.start; i < range.end; i += 1) {
    layer.charStyles[i] = {
      color: $("charColor").value,
      fontSize: Number($("charFontSize").value) || layer.fontSize
    };
  }
  renderAll();
  if (!options.silent) $("textContent").focus();
  $("textContent").setSelectionRange(range.start, range.end);
  updateSelectionPreview();
}

function clearCharacterStyle() {
  const layer = currentLayer();
  const range = selectedTextRange();
  if (!layer || !range || !layer.charStyles) return;
  pushHistory();
  for (let i = range.start; i < range.end; i += 1) {
    delete layer.charStyles[i];
  }
  renderAll();
  $("textContent").focus();
  $("textContent").setSelectionRange(range.start, range.end);
}

function pointerBasePoint(event, svg) {
  const rect = svg.getBoundingClientRect();
  const canvas = canvasDimensions();
  const padding = canvasPadding();
  return {
    x: (event.clientX - rect.left) * canvas.width / rect.width - padding.x,
    y: (event.clientY - rect.top) * canvas.height / rect.height - padding.y
  };
}

function moveSelectedText(event) {
  if (!textDragState) return;
  const svg = $("stickerMount").querySelector("svg");
  if (!svg) return;
  const point = pointerBasePoint(event, svg);
  const nextX = point.x;
  const nextY = point.y;
  const dx = nextX - textDragState.lastX;
  const dy = nextY - textDragState.lastY;
  textDragState.lastX = nextX;
  textDragState.lastY = nextY;
  const layer = editableItems().find((item) => item.id === textDragState.id);
  if (!layer) return;
  if ((layer.kind === "medal" || layer.kind === "medal2") && textDragState.part === "text") {
    if (!layer.textBox) layer.textBox = layer.kind === "medal2" ? defaultMedal2TextBox(layer) : defaultMedalTextBox(layer);
    layer.textBox.x += dx;
    layer.textBox.y += dy;
    renderAll();
    return;
  }
  if (layer.box) {
    layer.box.x += dx;
    layer.box.y += dy;
  }
  layer.x = (layer.x || 0) + dx;
  layer.y = (layer.y || 0) + dy;
  renderAll();
}

function endTextDrag() {
  textDragState = null;
}

function commitStickerToCanvas() {
  const sticker = $("placedSticker");
  sticker.innerHTML = stickerSvg();
  sticker.style.display = "block";
  updatePlacedSticker();
}

function updatePlacedSticker() {
  const sticker = $("placedSticker");
  if (!sticker) return;
  sticker.style.left = `${stickerPosition.x}%`;
  sticker.style.top = `${stickerPosition.y}%`;
  sticker.style.width = `${state.canvas.scale}%`;
  sticker.style.filter = `drop-shadow(0 ${Math.round(state.canvas.shadowBlur * .9)}px ${state.canvas.shadowBlur}px rgba(0,0,0,${state.canvas.shadowOpacity / 100}))`;
}

function updateProductPlacement() {
  const product = $("productImage");
  if (!product) return;
  const canvasAspect = THUMBNAIL_WIDTH / THUMBNAIL_HEIGHT;
  const imageAspect = product.naturalWidth && product.naturalHeight ? product.naturalWidth / product.naturalHeight : canvasAspect;
  const baseWidthPercent = imageAspect >= canvasAspect ? 100 : imageAspect / canvasAspect * 100;
  product.style.left = `${productPosition.x}%`;
  product.style.top = `${productPosition.y}%`;
  product.style.width = `${baseWidthPercent * productPosition.scale / 100}%`;
  $("productScale").value = productPosition.scale;
}

function readProjects() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeProjects(projects) {
  localStorage.setItem(STORE_KEY, JSON.stringify(projects));
}

function updateExportCounter() {
  const counter = $("exportCount");
  if (counter) counter.textContent = String(exportCount);
}

function incrementExportCounter() {
  exportCount += 1;
  localStorage.setItem(EXPORT_COUNT_KEY, String(exportCount));
  updateExportCounter();
}

function saveProject(asNew) {
  state.name = $("projectName").value.trim() || "名称未設定";
  const projects = readProjects();
  const copy = JSON.parse(JSON.stringify(state));
  if (!asNew && selectedProjectId) {
    const index = projects.findIndex((item) => item.id === selectedProjectId);
    if (index >= 0) {
      projects[index] = { id: selectedProjectId, ...copy, updatedAt: new Date().toISOString() };
      writeProjects(projects);
      renderAll();
      return;
    }
  }
  selectedProjectId = crypto.randomUUID();
  projects.unshift({ id: selectedProjectId, ...copy, updatedAt: new Date().toISOString() });
  writeProjects(projects);
  renderAll();
}

function loadProject(id) {
  const project = readProjects().find((item) => item.id === id);
  if (!project) return;
  selectedProjectId = id;
  selectedBrand = project.brand;
  selectedTemplate = project.template;
  const { id: _id, updatedAt: _updatedAt, ...projectState } = project;
  state = projectState;
  normalizeLoadedState();
  selectedLayerId = state.layers[0]?.id || "";
  renderAll();
  commitStickerToCanvas();
}

function deleteProject() {
  if (!selectedProjectId) return;
  const project = readProjects().find((item) => item.id === selectedProjectId);
  if (!project) return;
  if (!confirm(`「${project.name}」を削除しますか？`)) return;
  writeProjects(readProjects().filter((item) => item.id !== selectedProjectId));
  selectedProjectId = "";
  renderAll();
}

async function exportData() {
  state.name = $("projectName").value.trim() || state.name;
  try {
    const link = document.createElement("a");
    link.href = await stickerPngDataUrl();
    link.download = `${state.name}.png`;
    link.click();
    incrementExportCounter();
  } catch {
    alert("PNGを書き出せませんでした。");
  }
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const nextState = JSON.parse(reader.result);
      if (!nextState.layers || !nextState.brand || !nextState.template) throw new Error("invalid");
      state = nextState;
      normalizeLoadedState();
      selectedBrand = state.brand;
      selectedTemplate = state.template;
      selectedProjectId = "";
      selectedLayerId = state.layers[0]?.id || "";
      renderAll();
      commitStickerToCanvas();
    } catch {
      alert("読み込めない編集データです。");
    }
  };
  reader.readAsText(file);
}

function loadProduct(file) {
  const reader = new FileReader();
  reader.onload = () => {
    productDataUrl = reader.result;
    $("productImage").src = productDataUrl;
    $("productImage").style.display = "block";
    document.querySelector(".empty-state").style.display = "none";
    updateProductPlacement();
  };
  reader.readAsDataURL(file);
}

async function downloadJpg() {
  const canvas = document.createElement("canvas");
  canvas.width = THUMBNAIL_WIDTH;
  canvas.height = THUMBNAIL_HEIGHT;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);

  const product = $("productImage");
  if (productDataUrl && product.complete) {
    const baseScale = Math.min(THUMBNAIL_WIDTH / product.naturalWidth, THUMBNAIL_HEIGHT / product.naturalHeight);
    const scale = baseScale * productPosition.scale / 100;
    const w = product.naturalWidth * scale;
    const h = product.naturalHeight * scale;
    const x = THUMBNAIL_WIDTH * productPosition.x / 100 - w / 2;
    const y = THUMBNAIL_HEIGHT * productPosition.y / 100 - h / 2;
    ctx.drawImage(product, x, y, w, h);
  }

  try {
    const sticker = await loadImage(await stickerPngDataUrl());
    const template = currentTemplate();
    const stickerCanvas = canvasDimensions(template);
    const w = THUMBNAIL_WIDTH * state.canvas.scale / 100;
    const h = w * stickerCanvas.height / stickerCanvas.width;
    const x = THUMBNAIL_WIDTH * stickerPosition.x / 100;
    const y = THUMBNAIL_HEIGHT * stickerPosition.y / 100;
    ctx.save();
    ctx.shadowColor = `rgba(0,0,0,${state.canvas.shadowOpacity / 100})`;
    ctx.shadowBlur = state.canvas.shadowBlur;
    ctx.shadowOffsetY = state.canvas.shadowBlur * .55;
    ctx.drawImage(sticker, x, y, w, h);
    ctx.restore();
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpeg", .92);
    link.download = `${($("projectName").value || "thumbnail").trim()}.jpg`;
    link.click();
    incrementExportCounter();
  } catch {
    alert("シールを反映したJPGを保存できませんでした。");
  }
}

function bindEvents() {
  $("brandSelect").addEventListener("change", (event) => changeBrand(event.target.value));
  $("projectName").addEventListener("input", (event) => state.name = event.target.value);
  $("undoBtn").addEventListener("click", undo);
  $("redoBtn").addEventListener("click", redo);
  $("addMedalBtn").addEventListener("click", addMedal);
  $("addMedal2Btn").addEventListener("click", addMedal2);
  $("addBubbleBtn").addEventListener("click", addBubble);
  $("addOrFragranceBtn").addEventListener("click", () => addImageMaterial("or"));
  $("addQuFragranceBtn").addEventListener("click", () => addImageMaterial("qu"));
  $("addMintMaterialBtn").addEventListener("click", () => addImageMaterial("mint"));
  $("addTextBtn").addEventListener("click", addTextLayer);
  $("deleteSelectedBtn").addEventListener("click", deleteSelectedItem);
  $("saveNewBtn").addEventListener("click", () => saveProject(true));
  $("overwriteBtn").addEventListener("click", () => saveProject(false));
  $("deleteProjectBtn").addEventListener("click", deleteProject);
  $("exportDataBtn").addEventListener("click", exportData);
  $("importDataInput").addEventListener("change", (event) => event.target.files[0] && importData(event.target.files[0]));
  $("commitStickerBtn").addEventListener("click", commitStickerToCanvas);
  $("applyStickerBtn").addEventListener("click", commitStickerToCanvas);
  $("productInput").addEventListener("change", (event) => event.target.files[0] && loadProduct(event.target.files[0]));
  $("downloadJpgBtn").addEventListener("click", downloadJpg);
  document.querySelectorAll(".mode-tabs button").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tab));
  });

  $("textContent").addEventListener("input", (event) => { pushHistory(); updateLayerField("text", event.target.value); updateSelectionPreview(); });
  $("textContent").addEventListener("select", updateSelectionPreview);
  $("textContent").addEventListener("keyup", updateSelectionPreview);
  $("textContent").addEventListener("mouseup", updateSelectionPreview);
  $("charFontSize").addEventListener("input", () => applyCharacterStyle({ silent: true }));
  $("charColor").addEventListener("input", () => applyCharacterStyle({ silent: true }));
  $("alignCenterBtn").addEventListener("click", centerSelectedLayer);
  $("fontFamily").addEventListener("change", (event) => { pushHistory(); updateLayerField("fontFamily", event.target.value); });
  $("textColor").addEventListener("input", (event) => { pushHistory(); updateLayerField("color", event.target.value); });
  $("fontSize").addEventListener("input", (event) => { pushHistory(); updateLayerField("fontSize", Number(event.target.value)); });
  $("fontWeight").addEventListener("change", (event) => { pushHistory(); updateLayerField("fontWeight", event.target.value); });
  $("lineHeight").addEventListener("input", (event) => { pushHistory(); updateLayerField("lineHeight", Number(event.target.value)); });
  $("letterSpacing").addEventListener("input", (event) => { pushHistory(); updateLayerField("letterSpacing", Number(event.target.value)); });
  $("textX").addEventListener("input", (event) => { pushHistory(); updateLayerField("x", Number(event.target.value)); });
  $("textY").addEventListener("input", (event) => { pushHistory(); updateLayerField("y", Number(event.target.value)); });
  $("textDirection").addEventListener("change", (event) => { pushHistory(); updateLayerField("direction", event.target.value); });
  $("textShadow").addEventListener("change", (event) => { pushHistory(); updateLayerField("shadow", event.target.checked); });
  $("textGlow").addEventListener("change", (event) => { pushHistory(); updateLayerField("glow", event.target.checked); });
  $("elementSize").addEventListener("input", (event) => { pushHistory(); updateElementSize(event.target.value); });
  $("bubbleTailSide").addEventListener("change", (event) => { pushHistory(); updateLayerField("tailSide", event.target.value); });
  $("bubbleFillColor").addEventListener("input", (event) => { pushHistory(); updateLayerField("fillColor", event.target.value); });
  window.addEventListener("pointermove", moveSelectedText);
  window.addEventListener("pointerup", endTextDrag);
  window.addEventListener("pointercancel", endTextDrag);

  ["stickerScale", "shadowBlur", "shadowOpacity"].forEach((id) => {
    $(id).addEventListener("input", (event) => {
      state.canvas[id === "stickerScale" ? "scale" : id] = Number(event.target.value);
      updatePlacedSticker();
    });
  });
  $("productScale").addEventListener("input", (event) => {
    productPosition.scale = Number(event.target.value);
    updateProductPlacement();
  });

  const canvas = $("productCanvas");
  const product = $("productImage");
  const placed = $("placedSticker");
  product.addEventListener("pointerdown", (event) => {
    if (!productDataUrl) return;
    event.preventDefault();
    product.setPointerCapture(event.pointerId);
    const rect = canvas.getBoundingClientRect();
    productDragState = {
      offsetX: event.clientX - rect.left - rect.width * productPosition.x / 100,
      offsetY: event.clientY - rect.top - rect.height * productPosition.y / 100
    };
  });
  product.addEventListener("pointermove", (event) => {
    if (!productDragState) return;
    const rect = canvas.getBoundingClientRect();
    productPosition.x = Math.max(-50, Math.min(150, (event.clientX - rect.left - productDragState.offsetX) / rect.width * 100));
    productPosition.y = Math.max(-50, Math.min(150, (event.clientY - rect.top - productDragState.offsetY) / rect.height * 100));
    updateProductPlacement();
  });
  product.addEventListener("pointerup", () => productDragState = null);
  product.addEventListener("pointercancel", () => productDragState = null);

  placed.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    placed.setPointerCapture(event.pointerId);
    const rect = canvas.getBoundingClientRect();
    dragState = {
      offsetX: event.clientX - rect.left - rect.width * stickerPosition.x / 100,
      offsetY: event.clientY - rect.top - rect.height * stickerPosition.y / 100
    };
  });
  placed.addEventListener("pointermove", (event) => {
    if (!dragState) return;
    const rect = canvas.getBoundingClientRect();
    stickerPosition.x = Math.max(-20, Math.min(100, (event.clientX - rect.left - dragState.offsetX) / rect.width * 100));
    stickerPosition.y = Math.max(-20, Math.min(100, (event.clientY - rect.top - dragState.offsetY) / rect.height * 100));
    updatePlacedSticker();
  });
  placed.addEventListener("pointerup", () => dragState = null);
  placed.addEventListener("pointercancel", () => dragState = null);
}

function init() {
  $("fontFamily").innerHTML = fonts.map((font) => `<option value="${font.value}">${font.label}</option>`).join("");
  bindEvents();
  renderAll();
  switchTab(activeTab);
  commitStickerToCanvas();
  updateExportCounter();
}

init();
