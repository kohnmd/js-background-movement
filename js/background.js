(function() {

    // --------------------------------------------------------
    // Private variables & functions.
    // --------------------------------------------------------
    var game_field;
    var bg_picker;
    var bg_image;
    var bg_image_container;
    
    function pickBackground() {
        var bg_images = getBackgroundImages();
        bg_picker = document.createElement('div');
        bg_picker.id = 'background_picker';
        
        var picker_title = document.createElement('strong');
        var title_content = document.createTextNode('Where are you running today?');
        picker_title.appendChild(title_content);
        bg_picker.appendChild(picker_title);
        
        var bg_list = document.createElement('ul');
        for(var bg_type in bg_images) {
            // Create <li> of all image options.
            var bg_list_item = document.createElement('li');
            var list_item_text = document.createElement('span');
            var list_item_content = document.createTextNode(bg_type);
            list_item_text.appendChild(list_item_content);
            list_item_text.dataset.bgImageFile = bg_images[bg_type];
            
            // Watch for a click on each <span>.
            list_item_text.onclick = function() {
                var bg_image_url = getBackgroundImageUrl(this.dataset.bgImageFile);
                
                setBackgroundImage(bg_image_url);
                removeBgPicker();
                animationInit();
            };
            
            bg_list_item.appendChild(list_item_text);
            bg_list.appendChild(bg_list_item);
        }
        bg_picker.appendChild(bg_list);
        
        document.body.appendChild(bg_picker);
    }
    
    function getBackgroundImages() {
        return {
            'City': 'skyline.jpg',
            'Forest': 'forest.jpg',
            'Mountains': 'mountains.jpg',
            'Train': 'train.jpg',
            'Beach': 'beach.jpg',
            'Football Field': 'football-field.jpg',
            'With a Bunch o\' People Watching': 'people.jpg'
        };
    }
    
    function setBackgroundImage(bg_image_url) {
        createBgImageContainer();
        
        bg_image = new Image();
        bg_image.onload = function() {
            bg_image.style.opacity = '1';
            bg_image_container.style.backgroundImage = "none";
        }
        bg_image.id = 'bg_image';
        bg_image.src = bg_image_url;
        bg_image.style.height = bg_image_container.clientHeight+'px';
        bg_image_container.appendChild(bg_image);
    }
    
    function getBackgroundImageUrl(bg_image_file) {
        return 'img/'+bg_image_file;
    }
    
    function removeBgPicker() {
        if(bg_picker) {
            bg_picker.remove();
            delete bg_picker;
        }
    }
    
    function createBgImageContainer() {
        if(!bg_image_container) {
            bg_image_container = document.createElement('div');
            bg_image_container.id = 'bg_image_container';
            bg_image_container.style.width = game_field.clientWidth+'px';
            bg_image_container.style.height = game_field.clientHeight+'px';
            game_field.parentNode.insertBefore(bg_image_container, game_field);
        } else if(bg_image) {
            bg_image.remove();
            bg_image = null;
        }
    }
    
    function getBgImage() {
        return bg_image;
    }
    
    // --------------------------------------------------------
    // Initialize Background (public)
    // --------------------------------------------------------
    var backgroundInit = function() {
        game_field = window.game || document.getElementById('game');
        
        pickBackground();
    };
    window.backgroundInit = backgroundInit;
    window.getBgImage = getBgImage;
    

})();

backgroundInit();
