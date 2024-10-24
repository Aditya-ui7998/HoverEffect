const images = [
    'https://plus.unsplash.com/premium_photo-1719600809421-5de54fc229bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1701690775407-b3649ce6cfb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1720659713262-207859840854?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1728741344683-44a8014e3e91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1729271387795-835e9089e332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D'
]
let lastX = 0;
let lastY = 0;
const distanceThreshold = 75;

document.addEventListener('mousemove',(event)=>{
    const dx = event.pageX - lastX;
    const dy = event.pageY - lastY;
const distance = Math.sqrt(dx * dx + dy * dy);

if(distance>distanceThreshold){
    const img = document.createElement('img');
    img.src= images[Math.floor(Math.random() * images.length)];
    img.style.position = 'absolute';
    img.style.left = `${event.pageX}px`;
    img.style.top = `${event.pageY}px`;
    document.body.appendChild(img);

    gsap.fromTo(img,{
        scale:0.5
    },{
        scale:1,
        duration:0.5,
    }
);
setTimeout(()=>{
   gsap.to(img,{
y:1000,
duration:0.5,
ease:'expo.inOut',
        duration:0.5,
        onCompleter: ()=>{
            img.remove()
        }

   })
},'1500')
lastX = event.pageX;
lastY = event.pageY;
}
});
