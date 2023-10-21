AFRAME.registerComponent("treasure",{
    init:function (){
        for ( var i =1;i <= 20; i ++){
            var id = `treasure${i}`

            var posX = (Math.random () * 3000 + (-1000))
            var posY = (Math.random() * 2000 + (-1000))
            var posZ = (Math.random()* 2 + -1)
            var position = {x : posX, y : posY, z : posZ}

            this.createTreasure (id, position)
        }
    },

    createRings : function(id, position){
        var terrain = document.querySelector('#plain')
        var treasureEl = document.createElement("a-entity")

        treasureEl.setAttribute("id", id)
        treasureEl.setAttribute("position", position)
        treasureEl.setAttribute("gltf-model", "assets/treasure_chest/scene.gltf");
        treasureEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
        treasureEl.setAttribute ("animation-mixer", {})

        terrain.appendChild(treasureEl)
    }
})