let g_debug = true;

function error_message(p_action, p_error) {
  console.log("ERROR extension " + browser.i18n.getMessage("extension_name") +
    " : " + p_action + " : ", p_error);
}

function debug_message(p_action, p_message) {
  if(g_debug) {
    console.log("DEBUG extension " + browser.i18n.getMessage("extension_name") +
      " : " + p_action + " : ", p_message);
  }
}