var servants = {}
servants["sieg"] = {attack: 8394,class:"caster",tier:4,q:1,a:2,b:2,qh:3,ah:2,np_perhit:.78,np_type:"arts",np_hits:3,np_dmg:[450,600,675,712.5,750],np_effects:[["def_down",3,20]],
                    skills: [["arts",6.5]],
                    skill1: {name:"Artificial Hero (Fake) B+",  icon:"np_gen",  target:["self"],        effect:["np_gen"],                turns:[3],   values:[[20],[21],[22],[23],[24],[25],[26],[27],[28],[30]]},
                    skill2: {name:"Magecraft C",                icon:"arts",    target:["self"],        effect:["arts"],                  turns:[1],   values:[[22],[23.4],[24.8],[26.2],[27.6],[29],[30.4],[31.8],[33.2],[36]]},
                    skill3: {name:"Dead-Count Shapeshifter EX", icon:"divinity",target:["self","self"], effect:["np_gauge","dragon_dmg"], turns:[0,1], values:[[20,50],[21,55],[22,60],[23,65],[24,70],[25,75],[26,80],[27,85],[28,90],[30,100]]}
};
servants["paracelsus"] = {attack: 6711,class:"caster",tier:3,q:1,a:3,b:1,qh:2,ah:2,np_perhit:.55,np_type:"arts",np_hits:3,np_dmg:[400,500,550,575,600],np_effects:[],
                    skills: [["arts":10]],
                    skill1: {name:"Rapid Casting A",        icon:"np",   target:["self"],  effect:["np_gauge"], turns: [0], values:[[55],[57.5],[60],[62.5],[65],[67.5],[70],[72.5],[75],[80]]},
                    skill2: {name:"Elemental A+",           icon:"arts", target:["all"],   effect:["arts"], turns:[3],values:[[10],[11],[12],[13],[14],[15],[16],[17],[18],[20]]},
                    skill3: {name:"Philosopher's Stone A+", icon:"guts", target:["taget"], effect:["np_gain"],turns:[3],values:[[30],[32],[34],[36],[38],[40],[42],[44],[46],[50]]}
};
servants["waver"] = {attack: 10598,class:"caster",tier:5,q:1,a:3,b:1,qh:2,ah:1,np_perhit:1.64,np_type:"arts",np_hits:0,np_dmg:[0,0,0,0,0],np_effects:["def_down",3,30],
                    skills: [["arts":10]],
                    skill1: {name:"Discerning Eye A",        icon:"crit",   target:["target"],  effect:["np_gauge"], turns: [0], values:[[30],[30],[30],[30],[30],[30],[30],[30],[30],[30]]},
                    skill2: {name:"Tactician's Advice A+",   icon:"def",    target:["all"],     effect:["np_gauge"], turns: [0], values:[[10],[10],[10],[10],[10],[10],[10],[10],[10],[10]]},
                    skill3: {name:"Tactician's Command A+",  icon:"atk",    target:["all"],     effect:["np_gain","atk","dmg"],turns:[0,3,3],values:[[10,20,200],[10,21,230],[10,22,260],[10,23,290],[10,24,320],[10,25,350],[10,26,380],[10,27,410],[10,28,440],[10,30,500]]}
};
