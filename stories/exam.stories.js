import { storiesOf } from "@storybook/vue"
import footer from "../components/common/footer.vue"
import headerComponent from "../components/common/header/index.vue"
import {
  withKnobs,
  number,
  optionsKnob as options,
  color
} from "@storybook/addon-knobs"
import { SearchIcon } from "vue-feather-icons"

storiesOf("Common", module)
  .addDecorator(withKnobs)
  .add("푸터", () => ({
    components: { footer },
    template: '  <v-footer color="purple lighten-3" height="80">푸터</v-footer>'
  }))
  .add("헤더", () => ({
    components: { headerComponent },
    template: "<header-component />"
  }))
  .add("Icons", () => ({
    components: { SearchIcon },
    props: {
      color: {
        default: color("color", "#000")
      },
      iconSize: {
        default: options(
          "size",
          {
            "10px": "10",
            "20px": "20",
            "30px": "30",
            "40px": "40"
          },
          "20",
          { display: "inline-radio" }
        )
      },
      stroke: {
        default: number("stroke", 2)
      }
    },
    template:
      "<search-icon v-bind:stroke-width='stroke' v-bind:size='iconSize' v-bind:style='{color:color}'/>"
  }))
