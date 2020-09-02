import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ZodiacVirgoIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-zodiac-virgo"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 4a2 2 0 0 1 2 2v9"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 6a2 2 0 0 1 4 0v9"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0"
      }
    }), " "]);
  }
};