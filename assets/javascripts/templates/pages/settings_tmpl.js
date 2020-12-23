const themeOption = ({ label, value }, settings) => `\
<label class="_settings-label _theme-label">
  <input type="radio" name="theme" value="${value}"${
  settings.theme === value ? " checked" : ""
}>
  ${label}
</label>\
`;

app.templates.settingsPage = (settings) => `\
<h1 class="_lined-heading">Preferences</h1>

<div class="_settings-fieldset">
  <h2 class="_settings-legend">Theme:</h2>
  <div class="_settings-inputs">
    ${
      settings.autoSupported
        ? themeOption(
            {
              label: "Automatic <small>Matches system setting</small>",
              value: "auto",
            },
            settings
          )
        : ""
    }
    ${themeOption({ label: "Light", value: "default" }, settings)}
    ${themeOption({ label: "Dark", value: "dark" }, settings)}
  </div>
</div>

<div class="_settings-fieldset">
  <h2 class="_settings-legend">General:</h2>

  <div class="_settings-inputs">
    <label class="_settings-label _setting-max-width">
      <input type="checkbox" form="settings" name="layout" value="_max-width"${
        settings["_max-width"] ? " checked" : ""
      }>Enable fixed-width layout
    </label>
    <label class="_settings-label _hide-on-mobile">
      <input type="checkbox" form="settings" name="layout" value="_sidebar-hidden"${
        settings["_sidebar-hidden"] ? " checked" : ""
      }>Automatically hide and show the sidebar
      <small>Tip: drag the edge of the sidebar to resize it.</small>
    </label>
    <label class="_settings-label">
      <input type="checkbox" form="settings" name="autoInstall" value="_auto-install"${
        settings.autoInstall ? " checked" : ""
      }>Automatically download documentation for offline use
      <small>Only enable this when bandwidth isn't a concern to you.</small>
    </label>
    <label class="_settings-label _hide-in-development">
      <input type="checkbox" form="settings" name="analyticsConsent"${
        settings.analyticsConsent ? " checked" : ""
      }>Enable tracking cookies
      <small>With this checked, we enable Google Analytics and Gauges to collect anonymous traffic information.</small>
    </label>
  </div>
</div>

<div class="_settings-fieldset _hide-on-mobile">
  <h2 class="_settings-legend">Scrolling:</h2>

  <div class="_settings-inputs">
    <label class="_settings-label">
      <input type="checkbox" form="settings" name="smoothScroll" value="1"${
        settings.smoothScroll ? " checked" : ""
      }>Use smooth scrolling
    </label>
    <label class="_settings-label _setting-native-scrollbar">
      <input type="checkbox" form="settings" name="layout" value="_native-scrollbars"${
        settings["_native-scrollbars"] ? " checked" : ""
      }>Use native scrollbars
    </label>
    <label class="_settings-label">
      <input type="checkbox" form="settings" name="arrowScroll" value="1"${
        settings.arrowScroll ? " checked" : ""
      }>Use arrow keys to scroll the main content area
      <small>With this checked, use <code class="_label">shift</code> + <code class="_label">&uarr;</code><code class="_label">&darr;</code><code class="_label">&larr;</code><code class="_label">&rarr;</code> to navigate the sidebar.</small>
    </label>
  </div>
</div>

<p class="_hide-on-mobile">
  <button type="button" class="_btn" data-action="export">Export</button>
  <label class="_btn _file-btn"><input type="file" form="settings" name="import" accept=".json">Import</label>

<p>
  <button type="button" class="_btn-link _reset-btn" data-behavior="reset">Reset all preferences and data</button>\
`;