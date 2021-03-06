import ArrayShuffler from "../utils/ArrayShuffler";

export default class PortraitGenerator {
  static generatePortrait = (colors, portraits, currentPortrait) => {
    var portrait = portraits[Math.floor(Math.random() * portraits.length)];

    if (portraits.length > 1)
      while (currentPortrait && currentPortrait.name === portrait.name)
        portrait = portraits[Math.floor(Math.random() * portraits.length)];

    portrait = JSON.parse(JSON.stringify(portrait));

    var colorsMap = {};
    var shuffledColors = ArrayShuffler.shuffle(portrait.colors);
    for (var i = 0; i < shuffledColors.length; i++)
      colorsMap[shuffledColors[i]] = i + 1;

    // and black and white, which are very important for shading and mixing colors
    if (!portrait.colors.includes("black")) portrait.colors.push("black");
    if (!portrait.colors.includes("white")) portrait.colors.push("white");

    // 20% chance of breaking down a color to is components for a challenge :)
    var newColors = [];
    for (var i = 0; i < portrait.colors.length; i++) {
      const currentColor = portrait.colors[i];
      const itsComponentColors = colors[currentColor].mixOf;
      if (itsComponentColors && Math.floor(Math.random() * 5 + 1) === 5) {
        for (var j = 0; j < itsComponentColors.length; j++) {
          if (
            !portrait.colors.includes(itsComponentColors[j]) &&
            !newColors.includes(itsComponentColors[j])
          )
            newColors.push(itsComponentColors[j]);
        }
      } else if (!newColors.includes(currentColor))
        newColors.push(currentColor);
    }
    newColors = ArrayShuffler.shuffle(newColors);
    portrait.palette = newColors;

    portrait.key = colorsMap;

    return portrait;
  };
}
