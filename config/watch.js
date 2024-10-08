module.exports.watch = {
  active: true,
  usePolling: false,
  dirs: ["api/models", "api/controllers", "api/services", "config/locales"],
  ignored: [
    // Ignore all files with .ts extension
    "**.ts",
    "node_modules",
  ],
};
