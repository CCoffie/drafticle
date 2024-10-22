class BaseHandler {
  constructor({ canvas, handlers, context, config, canvasManager }) {
      this.canvas = canvas;
      this.handlers = handlers;
      this.context = context;
      this.config = config;
      this.canvasManager = canvasManager;
  }
}
export default BaseHandler;