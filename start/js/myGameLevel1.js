var MyGame = Framework.Class(Framework.Level , {
    load: function ()
    {

        this.isStop = false;
        this.isPlayed = false;
        this.nullSprite = new Framework.Sprite(define.imagePath + 'tanko.png');//去除draw bug用的
        this.nullSprite.position = { x: 0, y: 0 };
        this.rootScene.attach(this.nullSprite);
        this.map =new Map.Map(
            [
                [Map.enum.Start, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road],
                [Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Road],
                [Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road],
                [Map.enum.Road, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall, Map.enum.Wall],
                [Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.Road, Map.enum.End]
            ]);
        this.monster = new Monster.Base(define.imagePath + 'tanko.png');
        this.monster.picture.position = this.map.start.center;
        this.rootScene.attach(this.monster.picture);
        this.information = new Information();
        this.information.prependTo(Framework.Game._canvasContainer);
        this.information.timer.start();
	},

    initialize: function () {
        //this.timer.initialize();
       
       
    },

    update: function() {
        var game = this;
        this.nullSprite.position.x++;
        if (this.nullSprite.position.x > 1)
            this.nullSprite.position.x = 0;
        this.monster.walk(this.map.route);
        this.rootScene.update();
      
    },

    draw: function (parentCtx) {
        this.rootScene.draw(parentCtx);
        this.map.draw(parentCtx);
        this.monster.picture.draw();

    },

    keydown:function(e, list){
        Framework.DebugInfo.Log.warning(e.key);
        
    },

    touchstart: function (e) {
        //為了要讓Mouse和Touch都有一樣的事件
        //又要減少Duplicated code, 故在Touch事件被觸發時, 去Trigger Mouse事件
        this.click({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    },
    
    click: function (e) {  

        console.log(e.x, e.y);
        if (!this.rectPosition) {
            return;
        }  
        
    },
});