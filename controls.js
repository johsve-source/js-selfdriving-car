class Controls {
    constructor() {
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            switch(event.key) {
                case "ArrowLeft":
                    this.left = true;

                case "ArrowRight":
                    this.right = true;

                case "ArrowForward":
                    this.forward = true;

                case "ArrowReverse":
                    this.reverse = true;
            }
        }
        document.onkeyup = (event) => {
            switch(event.key) {
                case "ArrowLeft":
                    this.left = false;

                case "ArrowRight":
                    this.right = false;

                case "ArrowForward":
                    this.forward = false;

                case "ArrowReverse":
                    this.reverse = false;
            }
        }
    }
}