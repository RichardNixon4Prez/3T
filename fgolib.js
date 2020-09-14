var Servants = {}
Servants["sieg"] = {attack: 8394,class:"caster",tier:4,q:1,a:2,b:2,qh:3,ah:2,np_perhit:.78,np_type:"arts",np_hits:3,np_damage:[450,600,675,712.5,750],np_effects:[["def_down",3,20]],
                    skills: [["arts",6.5]]
                    skill1: {name:"Artificial Hero (Fake) B+",  icon:"np_gen",  target:"self", effect:[[["np_gen",3,20]],[["np_gen",3,21]],[["np_gen",3,22]],[["np_gen",3,20]],[["np_gen",3,20]],[["np_gen",3,20]],[["np_gen",3,20]],[["np_gen",3,20]],[["np_gen",3,20]],[["np_gen",3,20]]]},
                    skill2: {name:"Magecraft C",                icon:"arts",    target:"self", effect:[["arts",1,22]],[["arts",1,23.4]],[["arts",1,24.8]],[["arts",1,26.2]],[["arts",1,27.6]],[["arts",1,29]],[["arts",1,30.4]],[["arts",1,31.8]],[["arts",1,33.2]],[["arts",1,36]]]},
                    skill3: {name:"Dead-Count Shapeshifter EX", icon:"divinity",target:"self", effect:[[["np_gauge",0,20],["dragon_dam",1,50]],[["np_gauge",0,21],["dragon_dam",1,55]],[["np_gauge",0,22],["dragon_dam",1,60]],[["np_gauge",0,23],["dragon_dam",1,65]],[["np_gauge",0,24],["dragon_dam",1,70]],
                            [["np_gauge",0,25],["dragon_dam",1,75]],[["np_gauge",0,26],["dragon_dam",1,80]],[["np_gauge",0,27],["dragon_dam",1,85]],[["np_gauge",0,28],["dragon_dam",1,90]],[["np_gauge",0,30],["dragon_dam",1,100]]]}
};
Servants["paracelsus"] = {attack: 6711,class:"caster",tier:3,q:1,a:3,b:1,qh:2,ah:2,np_perhit:.55,np_type:"arts",np_hits:3,np_damage:[400,500,550,575,600],np_effects:[],
                    skills: [["arts":10]]
                    skill1: {name:"Rapid Casting A",        icon:"np",   target:"self",  effect:[[["np_gauge",0,55]],[["np_gauge",0,57.5]],[["np_gauge",0,60]],[["np_gauge",0,62.5]],[["np_gauge",0,65]],[["np_gauge",0,67.5]],[["np_gauge",0,70]],[["np_gauge",0,72.5]],[["np_gauge",0,75]],[["np_gauge",0,80]]]},
                    skill2: [name:"Elemental A+",           icon:"arts", target:"all",   effect:[["arts",3,10]],[["arts",3,11]],[["arts",3,12]],[["arts",3,13]],[["arts",3,14]],[["arts",3,15]],[["arts",3,16]],[["arts",3,17]],[["arts",3,18]],[["arts",3,20]]],
                    skill3: {name:"Philosopher's Stone A+", icon:"guts", target:"taget", effect:[[["np_gain",3,30]],[["np_gain",3,32]],[["np_gain",3,34]],[["np_gain",3,36]],[["np_gain",3,38]],[["np_gain",3,40]],[["np_gain",3,42]],[["np_gain",3,44]],[["np_gain",3,46]],[["np_gain",3,50]]]}
};
