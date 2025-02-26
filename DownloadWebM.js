const canvas = document.querySelector('canvas');
if (canvas) {
    const stream = canvas.captureStream(30);
    const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
    const chunks = [];

    recorder.ondataavailable = (event) => chunks.push(event.data);
    recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'canvas-animation.webm';
        link.click();
    };

    recorder.start();
    setTimeout(() => recorder.stop(), 5000);
} else {
    console.log('No canvas found.');
}
