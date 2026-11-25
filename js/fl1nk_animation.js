"use strict";

const fl1nkAnimationData = {
  fl1nk_frames: []
};

const frameWidth = 362;
const frameHeight = 724;
const frameCount = 6;

for (let column = 0; column < frameCount; column++) {
  fl1nkAnimationData.fl1nk_frames.push({
    position: {
      x: column * frameWidth,
      y: 0,
      width: frameWidth,
      height: frameHeight
    }
  });
}

const canvases = document.querySelectorAll("#fl1nk-mascot, #profile-mascot");
const spriteSheet = new Image();

let currentFrame = 0;
let lastFrameTime = 0;
const frameDelay = 120;

function animate(timestamp) {
  if (timestamp - lastFrameTime >= frameDelay) {
    const frame = fl1nkAnimationData.fl1nk_frames[currentFrame].position;

    for (const canvas of canvases) {
      const context = canvas.getContext("2d");

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        spriteSheet,
        frame.x, frame.y, frame.width, frame.height,
        0, 0, canvas.width, canvas.height
      );
    }

    currentFrame = (currentFrame + 1) % frameCount;
    lastFrameTime = timestamp;
  }

  requestAnimationFrame(animate);
}

spriteSheet.onload = () => requestAnimationFrame(animate);
spriteSheet.src = "assets/images/fl1nk_sprite_sheet.png";