AFRAME.registerComponent("plane-rotation-reader", {
    schema : {
        speedOfRotation : { type : "number", default : 0}
    },
    init : function(){
        window.addEventListener("keyDown", (e) =>{
            if(e.key === "ArrowRight"){
                if (this.data.speedOfRotation < 0.1){
                    this.data.speedOfRotation += 0.1
                }
            }
            if(e.key === "ArrowLeft"){
                if (this.data.speedOfRotation > -0.1){
                    this.data.speedOfRotation -= 0.1
                }
            }            
        })
    },
    tick : function(){
        var mapRotation = this.el.getAttribute("rotation")
        mapRotation.y += this.data.speedOfRotation

        this.el.setAttribute("rotation", {
            x : mapRotation.x,
            y : mapRotation.y,
            z : mapRotation.z
        })
    }
})

AFRAME.registerComponent("diver-rotation-reader",{
    schema : {
        speedOfRotation : {type:"number", default : 0},
        speedOfAscent : {type:"number", default : 0}
    },
    init : function(){
        window.addEventListener("keydown", (e) =>{
            this.data.speedOfRotation = this.el.getAttribute("rotation")
            this.data.speedOfAscent = this.el.getAttribute("position")

            var diverRotation = this.data.speedOfRotation
            var diverPosition = this.data.speedOfAscent

            if (e.key === "ArrowRight"){
                if (diverRotation.x < 10){
                    diverRotation.x += 0.5
                    this.el.setAttribute("rotation", diverRotation)
                }
            }
            if (e.key === "ArrowLeft"){
                if (diverRotation.x > -10){
                    diverRotation.x -= 0.5
                    this.el.setAttribute("rotation", diverRotation)
                }
            }
            if (e.key === "ArrowUp"){
                if (diverRotation.z < 20){
                    diverRotation.z += 0.5
                    this.el.setAttribute("rotation", diverRotation)
                }
                if (diverRotation.z < 2){
                    diverRotation.z += 0.01
                    this.el.setAttribute("position", diverPosition)
                }
            }
            if (e.key === "ArrowDown"){
                if (diverRotation.z > -10){
                    diverRotation.z -= 0.5
                    this.el.setAttribute("rotation", diverRotation)
                }
                if (diverRotation.z > -2){
                    diverRotation.z -= 0.01
                    this.el.setAttribute("position", diverPosition)
                }
            }            
        })
    }
})