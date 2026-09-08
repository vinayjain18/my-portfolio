/**
 * Runs before first paint. "system" is the absence of data-theme, so the
 * prefers-color-scheme query in globals.scss resolves it.
 */
export const THEME_STORAGE_KEY = "vj-theme";

export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`;
