function i(e){var f,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(f=0;f<o;f++)e[f]&&(t=i(e[f]))&&(n&&(n+=" "),n+=t)}else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function r(){for(var e,f,t=0,n="",o=arguments.length;t<o;t++)(e=arguments[t])&&(f=i(e))&&(n&&(n+=" "),n+=f);return n}export{r as i};
