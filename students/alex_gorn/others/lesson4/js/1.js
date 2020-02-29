class ReplacementText {
    constructor(container = '.text') {
        this.container = container;
        this.getText();
    }
    getText() {
        const data = document.querySelector(this.container);

        let rex = /'/g;
        let res = data.innerHTML.replace((rex), '"');

        rex = /\b"\b/g;
        res = res.replace((rex), '\'');
        data.innerHTML = res;
    }

}

const replacementText = new ReplacementText();