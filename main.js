const url = "https://dog.ceo/api/breeds/image/random";

const contenedor = document.getElementById("contenedor");
const boton = document.getElementById("boton");
const loading = document.getElementById("loading");

const obtenerDatos = async () => {
    try {
        // Show loading indicator
        loading.classList.remove("hidden");
        boton.disabled = true;
        boton.classList.add("opacity-50", "cursor-not-allowed");
        
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        
        // Create image with animation
        contenedor.innerHTML = `
            <img 
                src="${datos.message}" 
                alt="Perrito tierno" 
                class="w-full h-full object-cover animate-fadeInScale rounded-3xl"
                onload="this.style.opacity='1'"
                style="opacity: 0; transition: opacity 0.3s ease-in-out;"
            >
        `;
        
        // Hide loading indicator
        loading.classList.add("hidden");
        boton.disabled = false;
        boton.classList.remove("opacity-50", "cursor-not-allowed");
        
    } catch (error) {
        console.log(error);
        contenedor.innerHTML = `
            <div class="text-center p-8">
                <div class="text-6xl mb-4">😢</div>
                <p class="text-white text-xl font-medium">
                    ¡Oops! No se pudo cargar el perrito. Intenta de nuevo.
                </p>
            </div>
        `;
        loading.classList.add("hidden");
        boton.disabled = false;
        boton.classList.remove("opacity-50", "cursor-not-allowed");
    }
}
boton.addEventListener("click", obtenerDatos);
obtenerDatos();
