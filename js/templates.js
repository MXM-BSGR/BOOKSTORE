// ==============================================================
// TEMPLATE FUNCTIONS
// ==============================================================
//#region  DESCRIPTIONS
let imageDetailedDescription = [
    // 1. Archon of Ash
    "A dark, post-apocalyptic biomechanical illustration in the distinctive splashcore style: Centered is a human skull draped beneath a crumpled, deep blue monastic hood. Emerging from its jaw is a heavy respirator mask equipped with corrugated conduits and metallic valves that merge directly into exposed, tendon-laced mechanical neck and chest anatomy. The backdrop consists of mottled beige parchment energized with aggressive black ink splatters and faint geometric markings. The piece evokes the portrait of a post-apocalyptic high priest—a chilling synthesis of mortal decay and industrial life support.",

    // 2. Bastet
    "A futuristic, sacred reimagining of the Egyptian cat goddess Bastet shown in profile. Her head is that of a hairless Sphynx cat with pointed ears and an intense gaze, flowing seamlessly into an intricate cybernetic physique: An exposed hydraulic arm of pistons, cabling, and gearwork meets traditional blue-and-gold striped pharaonic vestments. Dynamic ink splatters and expressive brushstrokes burst across a sandy textured background alongside the Eye of Horus symbol. The artwork radiates ancient royal authority intertwined with cold technological might.",

    // 3. Creepy Sugar
    "A haunting, surreal three-quarter portrait of an innocent, doll-like child's head set against a warm, splattered parchment background. The face resembles brittle, weathered porcelain fractured by fissures, craters, and structural erosion. While the neck deteriorates into exposed skeletal bone fragments, two oversized glass-like amber eyes fixate on the viewer with lifelike melancholy. An unsettling clash between youthful innocence and morbid fragility, accented with subtle streaks of gold linework.",

    // 4. Cypork
    "A provocative vision examining intensive farming and transhumanism: The left side of the composition features a lifelike domestic pig with coarse skin and a soft pink snout, while the right half is mechanically dissected to reveal a massive, glowing red camera lens surrounded by heavy cabling, metal plating, and turbine components. In the upper background, the spire of a gothic stone church ascends into a sky fragmented by electric blue watercolor splashes. The painting speaks to industrial exploitation, mechanization, and the loss of creaturely life.",

    // 5. Eve, Lilith, it doesn´t matter
    "A dramatic portrait of a young girl with long blonde hair, gazing downward with a piercing, cold blue expression. Cupped between both hands in the foreground is an apple transformed into a realistically shaded human skull, coated in dripping, viscous caramel glaze. Dynamic splatters and sharp black-and-red streaks frame the figures on a distressed tea-stained backdrop. The piece reinterprets the biblical motif of forbidden fruit and temptation as an inescapable pact with mortality.",

    // 6. Horus
    "A towering biomechanical deity depicted in semi-profile, inspired by the ancient Egyptian sky god Horus. The head belongs to a peregrine falcon with an acute hooked beak, seamlessly transitioning into an exoskeleton of bone plating, blue hydraulic lines, and mechanical wing plumage. Long, threatening metallic talons extend from the hands. The composition combines warm papyrus hues with deep royal blues and dark splatter accents, creating a fusion of antique mythology and hard-edged cybernetics.",

    // 7. Inheritance of Ash
    "A poignant anti-war montage: The left side is dominated by the oversized, tear-glistened eyes of a pale child whose face appears etched like cracked glass. To the right, modern soldiers in desert camouflage and tactical gear advance, spearheaded by a figure in a grinning skull mask wielding an assault rifle. Along the lower edge, a demolished city skyline burns beneath plumes of smoke. The artwork visualizes the trauma and emotional ash passed down to the next generation amidst armed conflict.",

    // 8. Life-Death-Decay
    "A layered allegory of organic renewal: Sprouting from the weathered contours of a human face are fungi, caps, and creeping mycelium tendrils that simultaneously decompose and sustain the skull. Miniature human skulls grow like organic fruit from its temples, while clear blue eyes look outward in tranquil calm. In the background, a faint green universal recycling loop frames the decay. The piece strips death of horror, presenting decomposition as fertile soil for ongoing life.",

    // 9. Love
    "Two human skulls resting atop exposed cervical vertebrae, leaning tenderly against one another in an intimate embrace. Both cranial forms gleam with antique gold leaf and warm ivory bone tones, while black ink drips down their spinal columns like pitch. Behind the lovers, an ochre halo circle emits radial splashes and fine linework across a distressed ground. A timeless, darkly romantic tribute to a bond that endures beyond physical existence.",

    // 10. Quaint_Oddity
    "An energetic, surreal composition alive with lime green, amber, and vibrant orange hues: A fantastic creature with the head of a dormouse, glossy dark eyes, and bristling blue fur glides forward. Its body stretches outward into a permeable, coral-colored mesh resembling organic lattice. It sails past stylized poppy pods amidst radiating light beams and ornamental flourishes. The mood is lively, otherworldly, and buoyant with kinetic momentum.",

    // 11. Silicon Trap  ctrl plus trapped
    "A technocratic nightmare: Positioned over a computer motherboard socket amid detailed circuit pathways and solder joints sits a garden spider. Rather than an ordinary abdomen, it carries an exposed, convoluted human brain suspended inside its woven web. The title puns on keyboard shortcode control. The work serves as a sharp metaphor for algorithmic entrapment, information overload, and the captivity of the human psyche within modern digital systems.",

    // 12. The Noise within
    "A visceral expression of sensory overload and mental agony: A woman with closed eyes throws her head back in a desperate scream while clamping both hands over her ears. Encircling her skull is a violent vortex of snarling faces and wailing spectral skulls rendered in cold indigo and pitch black. Circular ink surges and splatter textures visually replicate the deafening, cyclical anguish of anxiety, tinnitus, and unquiet thought."
];



// #endregion
// -------------------------------------------------------------


/* #region   TEMPLATE FUNCTIONS  */

function getModalTemplate(title, altText, position, word, index) {
    return `<div id="idLightBox${word}Content" class="LightBoxContent" data-index="${index} aria-labelledby="idDialogTitle" onclick="event.stopPropagation()">
                <header class="DialogHeader">
                    <h2 id="idDialogTitle" class="TitleOfImage">${title}</h2>
                    <button role="close_dialog" id="idCloseButton" class="CloseButton" type="button" onclick="closeDialog()" aria-label="close dialog">
                        <img id="idDisplayCloseButtonIcon" class="CloseButtonIcon" src="./assets/icons/close-symbol-plain.svg">
                    </button>
                </header>

                <figure id="idFullSizeImageArea" class="FullSizeImageArea">
                    <img id="idFullsizeImage" class="ImageFullSize" src="./assets/img/${title}.jpg" alt="${imageDetailedDescription[index]}" tabindex="0">
                </figure>


                <footer id="idDisplayNavigationWrapper" class="DisplayNavigationWrapper">
                    <button id="idButtonToPreviousImage" class="NavigationButton" onclick="showNextModal(${index - 1})">
                        <img id="idArrowPointingLeft" class="arrow left" src="./assets/icons/arrow-pointing-left-plain.svg" alt="arrow-pointing-left" aria-label="show preview Painting in Fullsize">
                    </button>
                    <p id="idIndexOfDisplayedImage" class="NavigationDisplay">${position}</p> 
                    <button id="idButtonToNextImage" class="NavigationButton" onclick="showNextModal(${index + 1})">
                        <img id="idArrowPointingRight" class="arrow right" src="./assets/icons/arrow-pointing-right-plain.svg" alt="arrow-pointing-right" aria-label="show next Painting in Fullsize">

                    </button>
                </footer>
                </div>`
}

function getThumbnailTemplate(index, word) {
    return `<button aria-haspopup="dialog" aria-controls="idLightBox" aria-labelledby= "open Painting ${currentImageTitle} in fullsize" id="idThumbnail${word}" type="button" class="ThumbnailButton" data-index="${index}" onclick="openDialog(${index})"><img id="idImage${word}" class="Image${word} Thumbnail" src="./assets/img/${currentImageTitle}.jpg" alt="${currentImageAltText}" data-index="${index}">
    </button>`;
}

/* #endregion */
/* ------------------------------------------------------------- */


//#region  DESCRIPTIONS




// ==============================================================
//   ENDE


//#region BLANCO



// #endregion
// -------------------------------------------------------------

