export class Webcam {
    constructor(webcamElement, canvasElement) {
      this.webcamElement = webcamElement;
      this.canvasElement = canvasElement;
    }

    adjustVideoSize(width, height) {
      const aspectRatio = width / height;
      if (width >= height) {
          this.webcamElement.width = aspectRatio * this.webcamElement.height;
      } else  {
          this.webcamElement.height = this.webcamElement.width / aspectRatio;
      }
    }