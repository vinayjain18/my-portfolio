/**
 * Runs before first paint, inlined in <head>.
 *
 * "system" is represented by the *absence* of the data-theme attribute, so the
 * prefers-color-scheme media query in globals.scss is what resolves it. That
 * keeps a single source of truth and means the system case costs no JS at all
 * beyond this read.
 */
export const THEME_STORAGE_KEY = "vj-theme";

export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`;
