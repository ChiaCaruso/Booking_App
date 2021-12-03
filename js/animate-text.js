const textDisplay = document.querySelector("#text");
const addText = ['Cooding Bootcamp - Edgemony', 'Code Week'];
let contText = []
let i = 0;
let j = 0;
let isDeleting = false;

function loop() {
    textDisplay.innerHTML = contText.join('');
    if (i < addText.length) {

        if (!isDeleting && j < addText[i].length) {
            contText.push(addText[i][j])
            j++
        }

        if (isDeleting && j <= addText[i].length) {
            contText.pop(addText[i][j])
            j--
        }

        if (j == addText[i].length) {
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            contText = [];
            isDeleting = false;
            i++

            if (i == addText.length) {
                i = 0;
            }
        }
    }

    setTimeout(loop, 200)
}
loop();