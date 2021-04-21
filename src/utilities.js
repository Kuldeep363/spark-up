export const drawRect = (detection,ctx)=>{
    detection.forEach(prediction=>{
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        const color = 'red';
        ctx.strokeStyle = color;
        ctx.font = '24px Arial';
        ctx.fillStyle = color;


        ctx.beginPath();
        ctx.fillText(text,x,y);
        ctx.rect(x,y,width,height);
        ctx.stroke();
    })
}