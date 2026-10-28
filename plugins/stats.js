function n({registry:s,store:i,log:l}){s.register({id:"plugin.stats",title:"Plugin: estad\xEDsticas del archivo",keys:[],run(){const{files:a,active:t}=i.get(),e=a[t]??"";l(`${t}: ${e.split(`
`).length} l\xEDneas, ${e.split(/\s+/).filter(Boolean).length} palabras`)}})}export{n as activate};
