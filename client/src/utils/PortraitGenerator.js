
export default class PortraitGenerator {
    static shuffle(array) {
        let i = array.length;
        while (i--) {
          const ri = Math.floor(Math.random() * (i + 1));
          [array[i], array[ri]] = [array[ri], array[i]];
        }
        return array;
    }

    static generatePortrait = (colors, portraits, currentPortrait) => {
        var portrait = portraits[Math.floor(Math.random() * portraits.length)]
        //console.log(portrait.name + "<--")
        if (portraits.length > 1)
          while (currentPortrait && currentPortrait.name === portrait.name)
            portrait = portraits[Math.floor(Math.random() * portraits.length)]

        var colorsMap = {}
        var shuffledColors = PortraitGenerator.shuffle(portrait.colors)
        for (var i = 0; i < shuffledColors.length; i++)
          colorsMap[shuffledColors[i]] = (i+1)
    
        // //console.log(portrait.colors)
    
        // and black and white, which are very important for shading and mixing colors
        if (!portrait.colors.includes('black'))
          portrait.colors.push('black')
        if (!portrait.colors.includes('white'))
          portrait.colors.push('white')
    
        // 20% chance of breaking down a color to is components for a challenge :)
        var newColors = []
        for (var i = 0; i < portrait.colors.length; i++) {
          const currentColor = portrait.colors[i]
          const itsComponentColors = colors[currentColor].mixOf
          if (itsComponentColors && Math.floor(Math.random() * 5 + 1) === 5) {
            for (var j = 0; j < itsComponentColors.length; j++) {
              if (!portrait.colors.includes(itsComponentColors[j]))
                newColors.push(itsComponentColors[j])
            }
            //console.log(currentColor + " HAS BEEN BROKEN DOWN TO " + colors[currentColor].mixOf )
          } else
            newColors.push(currentColor)
        }
        newColors = PortraitGenerator.shuffle(newColors)
        portrait.palette = newColors
    
        //console.log(colorsMap)
        //console.log(portrait.colors)
    
        portrait.key = colorsMap
        // portrait.palette = portrait.colors
        // already done

        return portrait;
    }
}
