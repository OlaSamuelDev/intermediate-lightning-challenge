import { Button as LngButton, withStyles } from "@lightningjs/ui-components";
import { hexColors } from "../lib/colors";

class Button extends LngButton {
  // Button sends a `buttonPressed` signal when it is pressed.
  onEnter() {
    if (this.clearScore) {
      this.signal("_clearScore");
      return;
    }
    this.signal("_buttonPressed", this.path);
  }
}

export default withStyles(Button, {
  focused: {
    background: {
      color: hexColors.olive,
    },
    text: {
      color: hexColors.lime,
    },
  },

  background: {
    color: hexColors.silver,
  },
  text: {
    color: hexColors.black,
  },
  radius: 4,
});
