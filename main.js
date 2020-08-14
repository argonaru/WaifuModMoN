Game.onload = function(){
	// access globals with Game.global_vars
	let screen = new Screen('player_screen', "100%", "100%", true, false);
	Game.screen.add(screen);
	let style = new CssStyle("player", "class", [{"property" : "width", "value" : "5px"}]);
	let style_2 = new CssStyle("waifu_background", "id", [
		{"property" : "width", "value" : "calc(100% - 100px)"},
		{"property" : "height", "value" : "calc(100% - 100px)"},
		{"property" : "margin-left", "value" : "50px"},
		{"property" : "margin-top", "value" : "50px"}
	]);
	let style_3 = new CssStyle("waifu_image", "id", [
		{"property" : "position", "value" : "absolute"},
		{"property" : "height", "value" : "600px"},
		{"property" : "width", "value" : "350px"},
		{"property" : "margin-left", "value" : "40px"}
		//{"property" : "background", "value" : "green"}
	]);
	let style_4 = new CssStyle("waifu_dialogue", "id", [
		{"property" : "height", "value" : "120px"},
		{"property" : "width", "value" : "calc(100% - 100px)"},
		{"property" : "position", "value" : "absolute"},
		{"property" : "bottom", "value" : "50px"},
		{"property" : "background", "value" : "white"},
		{"property" : "border", "value" : "10px solid transparent"},
		{"property" : "pointer-events", "value" : "auto"},
		{"property" : "border-image", "value" : "url(../../../plugins/waifumod/assets/misc/dialogue_border.png) 30 round"},
		{"property" : "border-radius", "value" : "10px"}
	]);
	let style_5 = new CssStyle("waifu_menu_buttons", "class", [
		{"property" : "position", "value" : "absolute"},
		{"property" : "right", "value" : "45px"},
		{"property" : "display", "value" : "flex"}
	]);
	let style_6 = new CssStyle("waifu_menu_buttons div", "class", [
		{"property" : "width", "value" : "40px"},
		{"property" : "height", "value" : "40px"},
		{"property" : "background", "value" : "yellow"},
		{"property" : "margin-right", "value" : "5px"},
		{"property" : "pointer-events", "value" : "auto"}
	]);
	let style_7 = new CssStyle("waifu_dialogue div", "id", [
		{"property" : "font-family", "value" : "cursive"},
		{"property" : "word-break", "value" : "break-word"},
		{"property" : "overflow-y", "value" : "scroll"},
		{"property" : "width", "value" : "calc(100% - 40px)"},
		{"property" : "height", "value" : "calc(100% - 20px)"},
		{"property" : "margin-left", "value" : "20px"},
		{"property" : "margin-top", "value" : "10px"}
	]);
	let style_8 = new CssStyle("waifu_inventory .inventory_space", "id", [
		{"property" : "width", "value" : "300px"},
		{"property" : "height", "value" : "min-content"},
		{"property" : "position", "value" : "absolute"},
		{"property" : "max-height", "value" : "600px"},
		{"property" : "overflow-y", "value" : "scroll"},
		//{"property" : "right", "value" : "50px"},
		{"property" : "background", "value" : "#865e5e"},
		//{"property" : "top", "value" : "100px"}
		{"property" : "display", "value" : "flex"},
		{"property" : "flex-wrap", "value" : "wrap"},
		{"property" : "pointer-events", "value" : "auto"}
	]);
	let style_9 = new CssStyle("waifu_inventory .inventory_space .inventory_object", "id", [
		{"property" : "width", "value" : "50px"},
		{"property" : "height", "value" : "50px"},
		{"property" : "background", "value" : "yellow"},
		{"property" : "border", "value" : "1px black solid"},
		{"property" : "margin", "value" : "5px"}
	]);
	let style_10 = new CssStyle("waifu_inventory", "id", [
		{"property" : "width", "value" : "300px"},
		{"property" : "height", "value" : "400px"},
		{"property" : "position", "value" : "absolute"},
		{"property" : "right" , "value" : "50px"},
		{"property" : "top", "value" : "100px"}
	]);
	let style_12 = new CssStyle("waifu_image img", "id", [
		{"property" : "width", "value" : "100%"},
		{"property" : "height", "value" : "100%"},
		{"property" : "position", "value" : "absolute"}
	]);
	let style_13 = new CssStyle("waifu_inventory_item_description", "id", [
		{"property" : "width", "value" : "300px"},
		{"property" : "height", "value" : "300px"},
		{"property" : "position", "value" : "absolute"},
		{"property" : "right", "value" : "350px"},
		{"property" : "top", "value" : "100px"},
		{"property" : "background", "value" : "#ffffffbf"},
		{"property" : "pointer-events", "value" : "auto"}
	]);
	let style_14 = new CssStyle("waifu_inventory_item_description .outer_container", "id", [
		{"property" : "display", "value" : "flex"},
		{"property" : "margin", "value" : "20px"}
	]);
	let style_15 = new CssStyle("waifu_inventory_item_description .outer_container img", "id", [
		{"property" : "height", "value" : "100px"},
		{"property" : "width", "value" : "100px"},
		{"property" : "position", "value" : "relative"},
		{"property" : "top", "value" : "0"},
		{"property" : "left", "value" : "0"}
		//{"property" : "background", "value" : "#000000fa"}
	]);
	let style_16 = new CssStyle("waifu_inventory_item_description .outer_container div", "id", [
		{"property" : "height", "value" : "100px"},
		{"property" : "width", "value" : "calc(100% - 100px)"}
	]);
	let style_17 = new CssStyle("waifu_item_description_text", "id", [
		{"property" : "margin", "value" : "20px"},
		{"property" : "font-size", "value" : "14px"}
	]);
	let style_18 = new CssStyle("waifu_item_close_button", "id", [
		{"property" : "width", "value" : "70px"},
		{"property" : "height", "value" : "30px"},
		{"property" : "background", "value" : "red"},
		{"property" : "position", "value" : "absolute"},
		{"property" : "bottom", "value" : "0"},
		{"property" : "right", "value" : "0"},
		{"property" : "margin", "value" : "10px"}
	]);
	let style_19 = new CssStyle("waifu_open_tab", "id", [
		{"property" : "width", "value" : "20px"},
		{"property" : "height", "value" : "60px"},
		{"property" : "background", "value" : "red"},
		{"property" : "position", "value" : "absolute"},
		{"property" : "top", "value" : "80px"},
		{"property" : "pointer-events", "value" : "auto"},
	]);
	let style_20 = new CssStyle("waifu_menu_choices","id", [
		{"property" : "pointer-events", "value" : "auto"},
		{"property" : "position", "value" : "absolute"},
		{"property" : "top", "value" : "150px"},
		{"property" : "width", "value" : "300px"},
		{"property" : "height", "value" : "fit-content"},
		{"property" : "background", "value" : "#35313566"},
		{"property" : "left", "value" : "calc(50% - 150px)"}
	]);
	let style_21 = new CssStyle("waifu_menu_choice_option","class", [
		{"property" : "width", "value" : "auto"},
		{"property" : "height", "value" : "50px"},
		{"property" : "background", "value" : "#d6cece"},
		{"property" : "margin", "value" : "10px"},
		{"property" : "border-radius", "value" : "10px"}
	]);
	let style_22 = new CssStyle("waifu_menu_choice_option div","class", [
		{"property" : "text-align", "value" : "center"},
		{"property" : "padding-top", "value" : "10px"}
	]);
	let style_23 = new CssStyle("waifu_dialogue div::-webkit-scrollbar","id", [
		{"property" : "width", "value" : "10px"}
	]);
	let style_24 = new CssStyle("waifu_dialogue div::-webkit-scrollbar-thumb","id", [
		{"property" : "border-radius", "value" : "30px"},
		{"property" : "background", "value" : "-webkit-gradient(linear,left top,left bottom,from(#d61867),to(#b076b7));"},
		{"property" : "bax-shadow", "value" : "inset 2px 2px 2px rgba(255,255,255,.25), inset -2px -2px 2px rgba(0,0,0,.25);"}
	]);
	let style_25 = new CssStyle("waifu_dialogue div::-webkit-scrollbar-track","id", [
		{"property" : "background-color", "value" : "#fff"},
		{"property" : "background", "value" : "linear-gradient(to right,#b6b3bd,#a9a5b1 1px,#7d7b846b 1px,#100e17bf);"},
		{"property" : "border-radius", "value" : "30px"}
	]);
	Game.css.add(style);
	Game.css.add(style_2);
	Game.css.add(style_3);
	Game.css.add(style_4);
	Game.css.add(style_5);
	Game.css.add(style_6);
	Game.css.add(style_7);
	Game.css.add(style_8);
	Game.css.add(style_9);
	Game.css.add(style_10);
	Game.css.add(style_12);
	Game.css.add(style_13);
	Game.css.add(style_14);
	Game.css.add(style_15);
	Game.css.add(style_16);
	Game.css.add(style_17);
	Game.css.add(style_18);
	Game.css.add(style_19);
	Game.css.add(style_20);
	Game.css.add(style_21);
	Game.css.add(style_22);
	Game.css.add(style_23);
	Game.css.add(style_24);
	Game.css.add(style_25);
}

Game.afterdraw = function(){
	$("div#frame_player_screen").html(
		`<div id="waifu_open_tab"></div>` +
		`<div id="waifu_background">`+
			`<div id="waifu_image"></div>`+
			`<div id="waifu_dialogue"><div>text text</div></div>` +
			`<div class="waifu_menu_buttons">` +
				`<div id="waifu_poker_button"></div>`+
				`<div id="waifu_store_button"></div>`+
				`<div id="inventory_button"></div>` +
				`<div id="config_button"></div>` +
			`</div>` +
			`<div id="waifu_menu_choices">` +
			`</div>` +
			`<div id="waifu_inventory">` +
				`<div class="inventory_space">` +
					`<div class="inventory_object">` +
						`<img style="height: 100%; width:100%;">` +
						`<img style="height: 100%; width:100%;position:relative;top: -100%;">` +
					`</div>` +
				`</div>` +
				//`<div class="delete_inventory_button"></div>` +
			`</div>` +
			`<div id="waifu_inventory_item_description">`+
				`<div class="outer_container">`+
					`<img>` +
					`<div></div>` +
				`</div>` +
				`<div id="waifu_item_description_text"></div>` + 
				`<div id="waifu_item_close_button"></div>` + 
			`</div>` +
			`<div id="waifu_sound_file_container"></div>` +
		`</div>`
		);

	setInterval(function(){
		if(!Game.global_vars.prompt_is_drawing){
			
			if(!Game.global_vars.vertical_bar_state){
				$("div#waifu_dialogue div").text($("div#waifu_dialogue div").text() + " |");
			}else{
				let word_string = $("div#waifu_dialogue div").text();
				$("div#waifu_dialogue div").text(word_string.substring(0, word_string.length - 2));
			}
			Game.global_vars.vertical_bar_state = !Game.global_vars.vertical_bar_state;
		}
	}, 600);

	Game.functions.LoadSave(function(){
		Game.functions.UpdateScene("default");
		Game.functions.UpdateInventory();
		$("#waifu_background").hide();
		$("#waifu_inventory").hide();
		$("#waifu_menu_choices").hide();
		$("#waifu_inventory_item_description").hide();
		$("#waifu_sound_file_container").append(`<audio class="music_sfx" volume="${Game.global_vars.settings.music_volume / 100}" loop autoplay> <source src="../../../resources/app/music/uplifting.mp3" type="audio/mp3"></audio>`);
		$("#waifu_sound_file_container .music_sfx")[0].pause();
	});
}

Game.functions = {
	//load the file ( asynchronous )
	LoadSave : function(callback){
		const fs = require('fs');
		$.getJSON(modAPI.path+"/plugins/waifumod/data.json", function(result){
			if(Object.keys(result).length == 0){
				$.getJSON(modAPI.path+"/plugins/waifumod/default.json", function(result_0){
					let default_waifu = result_0.savedata_meta.waifu_data;
					let items_length = result_0.items.length;

					Game.global_vars.waifu_data = modAPI.other_nations.map(function(nation_dat){
						return {
							"name" : nation_dat.name,
							"stats" : {
								"friendliness" : Math.floor(Math.random() * 20),
								"anger_cap" : Math.floor(Math.random() * 20),
								"sadness_cap" : Math.floor(Math.random() * 20)
							},
							// create character codes using random values
							"character_code" : 	Math.round(Math.random() * 0)+"-"+
												Math.round(Math.random() * 0)+"-"+
												Math.round(Math.random() * 0)+"-"+
												Math.round(Math.random() * 0),
							"likes" : function(){
								let temp_array = [];
								let taken_indexes = [];
								let limit = Math.floor(items_length / 6);
								for(let i =0; i < limit; i++){
									let index = Math.floor(Math.random() * (items_length - 1));
									while(taken_indexes.includes(index)){
										index = Math.floor(Math.random() * (items_length - 1));
									}
									temp_array.push(result_0.items[index]);
									taken_indexes.push(index);
								}
								return temp_array;
							}(),
							"doki_power" : Math.floor(Math.random() * 10) * 2
						}
					});
					Game.global_vars.inventory = result_0.items.map(function(item, index){
						return {
							"name" : item.name,
							"identifier" : index,
							"description" : item.description ? item.description : "here is some "+item.name,
							"amount" : 0
						}
					});
					Game.global_vars.inventory[Math.floor(Math.random() * (Game.global_vars.inventory.length - 1))].amount = 1;
					Game.global_vars.inventory[Math.floor(Math.random() * (Game.global_vars.inventory.length - 1))].amount = 1;
					Game.global_vars.inventory[Math.floor(Math.random() * (Game.global_vars.inventory.length - 1))].amount = 1;
					Game.global_vars.inventory[Math.floor(Math.random() * (Game.global_vars.inventory.length - 1))].amount = 1;
					Game.global_vars.inventory[Math.floor(Math.random() * (Game.global_vars.inventory.length - 1))].amount = 1;
					Game.global_vars.inventory[Math.floor(Math.random() * (Game.global_vars.inventory.length - 1))].amount = 1;
					Game.global_vars.inventory[Math.floor(Math.random() * (Game.global_vars.inventory.length - 1))].amount = 1;
					Game.global_vars.inventory[Math.floor(Math.random() * (Game.global_vars.inventory.length - 1))].amount = 1;
					Game.global_vars.dialogue_registry = result_0.dialogues;
					Game.functions.LoadSceneRegistries(0, result_0);
					Game.functions.SwitchWaifu("random");
					callback();
				});

			}else if(result){
				Game.global_vars = result;
				console.log("data loaded from registry");
				callback();
			}
		});
	},

	DeleteData : function(){
		const fs = require('fs');
		fs.writeFile(modAPI.path+"/plugins/waifumod/data.json", "{}", (err) => {
			if(err){
				throw "could not delete the file due to :" + err;
			}else{
				console.log("data deleted successfully");
			}
		});
	},

	SaveData : function(){
		const fs = require('fs');
		fs.writeFile(modAPI.path+"/plugins/waifumod/data.json", JSON.stringify(Game.global_vars), (err) => {
			if(err){
				throw "could not save waifu data :(";
			}else{
				console.log("data saved");
			}
		});

	},

	DrawWaifu : function(expression, character_id){

		let identifier_array = character_id.split("-");
		if(identifier_array.length != 4) return;
		$("div#waifu_image").html(function(){
			return  `<img src="../../../plugins/waifumod/assets/waifu/waifu_clothes/`+ expression + "_" + identifier_array[0] +`.png">` +
					`<img src="../../../plugins/waifumod/assets/waifu/waifu_hair/`	 + expression + "_" + identifier_array[1] +`.png">` +
					`<img src="../../../plugins/waifumod/assets/waifu/waifu_face/`	 + expression + "_" + identifier_array[2] +`.png">`;
					//`<img src="../../../plugins/waifumod/assets/waifu/waifu_clothes/`+ expression + "_" + identifier_array[3] +`.png">`;
					//`<img src="../../../plugins/waifumod/assets/waifu/waifu_body/`+ expression + "_" + identifier_array[0] +`.png">`;
		}()).hide().fadeIn();
	},

	RemoveWaifu : function(){
		$("div#waifu_image").fadeOut().html("");
	},

	DrawPrompt : async function(text, speed){
		Game.functions.ClearPrompt();
		let string_stream = text.split("");
		if(string_stream[string_stream.length - 1] != ".") string_stream.push(".");
		let function_0 = function(stream, index){
			$("div#waifu_dialogue div").text($("div#waifu_dialogue div").text() + stream[index]);
			if(stream[index] == " " || !Game.global_vars.tab_is_open) return;
			$("#waifu_sound_file_container").append(`<audio class="text_sfx" volume="${Game.global_vars.settings.sfx_volume / 100}" autoplay> <source src="../../../plugins/waifumod/assets/misc/text.wav" type="audio/wav"></audio>`)
			
			//console.log(stream[index]);
		}

		let function_1 = function(stream, index){
			function_0(stream, index);
			if(!Game.global_vars.prompt_is_drawing){
				Game.global_vars.vertical_bar_state = false;
				$("div#waifu_dialogue div").text(stream.join(""));
				$("#waifu_menu_choices").show();

			}else if(stream.length > index + 1){
				setTimeout(function(){
					function_1(stream, index + 1);
				}, 60 * speed);
			}else{
				Game.global_vars.prompt_is_drawing = false;
				Game.global_vars.vertical_bar_state = false;
				$("#waifu_sound_file_container .text_sfx").remove();
				$("#waifu_menu_choices").show();
			}
		}

		Game.global_vars.prompt_is_drawing = true;
		function_1(string_stream, 0);
	},

	ClearPrompt : function(){
		$("div#waifu_dialogue div").text("")
	},

	ClickInsideWindow : function(window_identifier){
		try{
			let window_offset = $(window_identifier).offset();
			return ((modAPI.mouse_x >= window_offset.left) &&
			 (modAPI.mouse_x <= window_offset.left + $(window_identifier).width()) && 
			 (modAPI.mouse_y >= window_offset.top) && 
			 (modAPI.mouse_y <= window_offset.top + $(window_identifier).height()));
		}catch(e){
			return false;
		}
		
	},

	UpdateInventory : function(){
		$("#waifu_inventory .inventory_space").html(
			function(){
				let newHTML = "";
				for(let i = 0; i < Game.global_vars.inventory.length; i++){
					if(Game.global_vars.inventory[i].amount < 1 ) continue;
					newHTML += `<div class="inventory_object" item="`+ i +`">` +
									`<img src="../../../plugins/waifumod/assets/gifts/`+ Game.global_vars.inventory[i].name +`.png" style="height: 100%; width:100%;">` +
									`<img src="../../../plugins/waifumod/assets/gifts/0_`+ (Game.global_vars.inventory[i].amount % 10) +`.png" style="height: 100%; width:100%;position:relative;top: -100%;">` +
									((Math.floor(Game.global_vars.inventory[i].amount / 10) == 0 ) ? "" : (`<img src="../../../plugins/waifumod/assets/gifts/`+ Math.floor(Game.global_vars.inventory[i].amount / 10) +`_0.png" style="height: 100%; width:100%;position:relative;top: -200%;">`)) +
								`</div>`;
				}
				return newHTML;
			}());
	},

	AddToInventory : function(index, amount){
		if(Game.global_vars.inventory[index].amount > 98) return;
		if(amount){
			Game.global_vars.inventory[index].amount += amount;
			return
		}
		Game.global_vars.inventory[index].amount += 1;
	},

	LoadSceneRegistries : function(index, reg){
		if(reg){
			Game.global_vars.scene_registry = reg.data.all_scenes[index];
		}else{
			$.getJSON(modAPI.path+"/plugins/waifumod/default.json", function(result){
				//if(err) throw "could not load scene registry" + err;
				Game.global_vars.scene_registry = result.data.all_scenes[index];
				Game.functions.UpdateScene("default");
			});
		}
	},

	UpdateScene : function(choice_index){
		//if(jump_to_scene_index){
		//	Game.global_vars.current_scene = Game.global_vars.scene_registry[choice_index];
		//}else{
			if(choice_index == "default"){
				Game.global_vars.current_scene = Game.global_vars.scene_registry.default;
				Game.functions.DrawWaifu(Game.global_vars.current_scene.expression, Game.global_vars.current_waifu.character_code)
				Game.functions.DrawPrompt(Game.global_vars.dialogue_registry[Game.global_vars.current_scene.dialogue].text, 1);
				return;
			}else if(choice_index.toString().split("->").length == 2){
				let split_choice = choice_index.split("->");
				console.log("here");
				switch(split_choice[0]){
					case "exit":
						switch(split_choice[1]){
							case "main":
								Game.functions.LoadSceneRegistries(0);
							break;

							default:
								//
							break;
						}
					break;

					default:
						//
					break;
				}
				return;
			}
			Game.global_vars.current_scene = Game.global_vars.scene_registry.dialogues[choice_index];
			Game.functions.DrawWaifu(Game.global_vars.current_scene.expression, Game.global_vars.current_waifu.character_code)
			Game.functions.DrawChoices(Game.global_vars.current_scene.branch_options);
			Game.functions.DrawPrompt(Game.global_vars.dialogue_registry[Game.global_vars.current_scene.dialogue].text, 1);
			
		//}
	},

	ReloadScene : function(){
		Game.functions.DrawWaifu(Game.global_vars.current_scene.expression, Game.global_vars.current_waifu.character_code)
		Game.functions.DrawPrompt(Game.global_vars.dialogue_registry[Game.global_vars.current_scene.dialogue].text, 1);
	},

	DrawChoices : function(options){ //[{"title": "", "requirements" : "" }...{}]
		let choice_objects = [];
		let keys = Object.keys(options);
		if(keys.length == 0){
			$("#waifu_menu_choices").html("");
			return;
		}
		for(i in keys){
			if(keys[i] == "click") continue;
			if(!keys[i].requirements){
				choice_objects.push({
				"title" : keys[i],
				"requirements" : false
				});
				continue;
			}
			choice_objects.push({
				"title" : keys[i],
				"requirements" : keys[i].requirements
			});
		}
		$("#waifu_menu_choices").html(function(){
			let return_string = "";
			for(c in choice_objects){
				if(!function(){
					if(!choice_objects[c].requirements) return false;
					let requirements = Object.keys(choice_objects[c].requirements);
					for(i in requirements){
						if(choice_objects[c].requirements[requirements[i]] > Game.global_vars.player_stats[0][requirements[i]]) return true;
					}
					return false;
				}()){
					return_string+= `<div class="waifu_menu_choice_option" val="${choice_objects[c].title}"><div>${choice_objects[c].title}.</div></div>`;
				}
			}
			return return_string;
		});
		$("#waifu_menu_choices").hide();
	},

	NextScene : function(choice){
		if(choice){
			try{
				Game.functions.UpdateScene(Game.global_vars.current_scene.branch_options[choice].go_to -1);
			}catch(e){
				Game.functions.UpdateScene(Game.global_vars.current_scene.branch_options.click -1);
			}
		}else{
			Game.functions.UpdateScene(Game.global_vars.current_scene.branch_options.click -1 );
		}
	},

	SwitchWaifu : function(index){
		if(index == "random"){
			let new_index = Math.floor(Math.random() * (Game.global_vars.waifu_data.length - 1));
			while(Game.global_vars.waifu_data[new_index] == Game.global_vars.current_waifu){
				let new_index = Math.floor(Math.random() * (Game.global_vars.waifu_data.length - 1));
			}
			Game.global_vars.current_waifu = Game.global_vars.waifu_data[new_index]
			return;
		}
		Game.global_vars.current_waifu = Game.global_vars.waifu_data[index];
	},

	OpenItemDescription : function(index){
		$("#waifu_inventory_item_description").html(`<div class="outer_container">`+
					`<img src="../../../plugins/waifumod/assets/gifts/`+ 
					Game.global_vars.inventory[index].name+`.png">` +
					`<div></div>` +
				`</div>` +
				`<div id="waifu_item_description_text">` + 
				Game.global_vars.inventory[index].name + 
				" : " + 
				Game.global_vars.inventory[index].description + `</div>` + 
				`<div id="waifu_item_close_button"></div>`).show();
	},

	CloseItemDescription : function(){
		$("#waifu_inventory_item_description").hide();
	}
};

Game.global_vars = {
	"tab_is_open" : false,
	"inventory_displayed" : false,
	"vertical_bar_state" : false,
	"prompt_is_drawing" : false,
	"in_event" : false,
	"player_name" : "",
	"player_currency" : 0,
	"player_stats" : [{
		"luck" : 10,
		"attraction" : 0,
		"intelligence" : 0,
		"strength" : 0,
		"adaptability" : 0,
		"perception" : 0,
	}],
	"settings" : {
		"sfx_volume" : 100,
		"music_volume" : 100
	},
	"background" : "default_image_0",
	"waifu_data" : [{}],
	"current_waifu" : [{}],
	"time" : 0,
	"dialogue_registry" : [{}],
	"scene_registry" : [{}],
	"inventory" : [],
	"current_scene_dialogue" : 0,
	"current_scene" : [{}],
	"loaded_save" : {}
}

Game.mouseclick = function(){
	//console.log(Game.global_vars);
	if(Game.functions.ClickInsideWindow("div#waifu_dialogue")){
		if(Game.global_vars.prompt_is_drawing){
			Game.global_vars.prompt_is_drawing = false;
		}else{
			Game.functions.NextScene();
		}
		return;
	}

	if(Game.functions.ClickInsideWindow("div.waifu_menu_buttons #inventory_button")){
		if(Game.global_vars.inventory_displayed){
			$("#waifu_inventory").hide();
			Game.global_vars.inventory_displayed = false;
		}else{
			$("#waifu_inventory").show();
			Game.global_vars.inventory_displayed = true;
		}
		return;
	}
	if(Game.functions.ClickInsideWindow("#waifu_inventory .inventory_space")){
		for(let i=1; i <= $("#waifu_inventory .inventory_space div").length; i++){
			if(Game.functions.ClickInsideWindow("#waifu_inventory .inventory_space div:nth-child("+ i +")")){
				Game.functions.OpenItemDescription(parseInt($("#waifu_inventory .inventory_space div:nth-child("+ i +")").attr('item')));
				break;
			}
		}
		return;
	}
	if(Game.functions.ClickInsideWindow("#waifu_item_close_button")){
		Game.functions.CloseItemDescription();
		return;
	}

	if(Game.functions.ClickInsideWindow("#waifu_open_tab")){
		if(Game.global_vars.tab_is_open){
			$("#waifu_background").hide();
			Game.global_vars.tab_is_open = false;
			$("#waifu_sound_file_container .music_sfx")[0].pause();//.attr("muted", "");
		}else{
			$("#waifu_background").show();
			Game.global_vars.tab_is_open = true;
			$("#waifu_sound_file_container .music_sfx")[0].play();//removeAttr("muted");
		}
		return;
	}

	if(Game.functions.ClickInsideWindow("#waifu_menu_choices")){
		for(let i=1; i <= $("#waifu_menu_choices .waifu_menu_choice_option").length; i++){
			if(Game.functions.ClickInsideWindow("#waifu_menu_choices .waifu_menu_choice_option:nth-child("+ i +")")){
				console.log("here");
				Game.functions.NextScene($("#waifu_menu_choices .waifu_menu_choice_option:nth-child("+ i +")").attr("val"));
				break;
			}	
		}
		return;
	}
}

Game.name = "waifumod";