class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");


    }
    init() {

        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0)
        };

        image.src = "Images/Pallet-Town.png";

        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(hero,
                0,//left cut 
                0,//top cut

            )
        }
        hero.src = "Images/Hero.png";
    }

} 