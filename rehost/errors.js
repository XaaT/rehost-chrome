// errors.js

const g_debug = false; // TODO

function error_message(p_file, p_action, p_error) {
  console.error(`ERROR extension ${chrome.i18n.getMessage("extension_name")} : ${p_file} : ${p_action} :`, p_error);
}

function debug_message(p_file, p_action, p_message) {
  if (g_debug) {
    console.debug(`DEBUG extension ${chrome.i18n.getMessage("extension_name")} : ${p_file} : ${p_action} :`, p_message);
  }
}
